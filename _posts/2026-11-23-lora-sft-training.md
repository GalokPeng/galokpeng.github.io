---
cover: /articles/low-rank-matrices.webp
title: "LoRA / SFT 训练实战：从数据均衡到可信评测"
title_en: "LoRA / SFT in practice: From balanced data to reliable evaluation"
description: "从数据切分、样本均衡到可信评测，用一个可运行的 LoRA Demo 串起完整的训练流程。"
description_en: "A Chinese-language guide to data splits, sample balance and evaluation, with a runnable LoRA training demo."
---

> 适用场景：用人工或大模型标注作为监督信号，对基座模型做 LoRA 微调，训练结构化打标模型。

快速阅读：第 1–10 节讲训练流程；第 11–13 节讲数据切分、补样与参数；第 14–16 节讲指标、排查和实验设计；第 17 节提供从切分到训练再到测试的可运行 LoRA Demo。

最重要的一条：**先证明输入、监督和评测可信，再用对照实验区分数据问题、优化问题和模型容量问题。** 分数相同不代表模型行为相同；样本数量变多也不代表模型见到了更多关键判断证据。

## 1. 任务与训练契约

一条样本由「输入正文」和「目标标签」组成。老师负责生成标签，学生通过监督微调学习从正文直接输出结构化结果。若线上只处理单条文本，训练目标也应是单个 JSON 对象，而不是老师批量打标时使用的数组、ID 回显和内部审查过程。

典型目标可以包含一级类别、领域、细分体裁、有序质量档位、多选风险标签、多选价值标签及简短依据。每个字段都要定义：类型、合法值、是否允许空值、优先级，以及互斥或共现规则。训练和推理应对齐学生 SYSTEM、正文处理、聊天模板与目标 schema；生成式验证、最终测试和部署还需对齐解码口径（例如输出预算、停止条件）。计算 SFT loss 本身不需要生成式解码。

老师提示词可以很长，用于稳定地产生标签；学生 SYSTEM 应更短，但必须覆盖输出格式、全部合法枚举和关键决策边界。不要把老师的批处理协议直接复制到学生输入，也不要在训练后只修改推理提示词却沿用旧评测口径。

## 2. 为什么选 LoRA

标准 LoRA 冻结基座权重，训练插入所选目标层的低秩矩阵。对某个目标层，有效权重可写成：

```text
W' = W + (alpha / rank) × B × A
```

`rank` 控制适配容量，`alpha` 控制更新尺度，`dropout` 对 LoRA 分支施加正则化。适配器通常比完整基座小，便于独立保存、对照多个实验和迁移部署。代价是：推理必须同时加载**正确基座**与**对应适配器**，仅指定适配器目录并不能证明它已经生效。

先用中等容量跑可靠基线，再在同一数据切分上单独测试更大的 rank。训练结果不佳时，优先核实标签质量、训练契约和适配器加载状态；不要仅凭 loss 或一次外部评测就提高 rank。

## 3. 数据准备：从原始记录到可训练样本

### 3.1 保留原文，明确有效输入

原始记录保留完整正文与稳定 ID。长度限制应在构造模型输入时施加，例如 `effective_text = text[:MAX_CHARS]`；不要把截断后的正文覆盖原文。记录原文长度、实际送模长度和是否截断。老师打标与学生训练若分别看到不同范围的正文，后续“预测与老师不一致”就可能是输入口径差异，而非模型能力问题。

字符数与 token 数不是一回事。需要用实际 tokenizer、实际 chat template，统计 `SYSTEM + 正文 + 目标输出` 的 P50、P90、P95、P99、最大 token 数和超过各候选 `cutoff_len` 的条数。特别检查输出 JSON 的尾部是否会被截掉。

### 3.2 标签校验

在切分前逐条检查：

- 外层 JSON 可解析，目标标签 JSON 再次解析成功，字段齐全且类型正确；
- 分类值属于固定枚举；多选标签是数组，名称及括号形式统一；
- 解释文字与标签数组、最终质量档位不矛盾；
- ID 唯一，来源与老师标签版本可追溯；
- 同一**有效输入**只对应一个目标标签。

最后一条尤其重要：两段原文可能不同，但截到输入上限后完全相同。如果它们的老师标签不同，学生实际看到的是同一个输入却被要求输出两个答案。这类冲突要在入训前按有效输入去重或排除，并留下处理清单。

### 3.3 去重与隔离评测数据

先按 ID、规范化全文及有效输入检查重复；再检查近重复和同源模板。外部人工评测集必须在抽样、增补、切分之前隔离。不要只检查 ID：不同 ID 的同文、轻微改写和共享开头的长文，也可能造成评测泄漏。

训练集负责学习，验证集负责选择 checkpoint 和调参，测试集用于在方案固定后做最终评估，可按预先定义的同分布或跨分布目标构造。「外部集」描述来源，「人工真集」描述参考标签的来源与质控，都不自动决定集合的用途；见第 11 节。验证不参与梯度更新，但你按验证结果选模型，它就已经参与了模型选择。

分层切分可以结合主领域与质量档位；同时核对稀有标签、来源、长度段在各 split 的数量。若同一事件、系列或模板有多条近重复文本，应按组切分，避免一组样本跨 train/val/test。

## 4. 样本增补：先定义问题，再选数据

新增标签不应直接整批入训。先把已有模型的错误拆成可定位的类型，再按有效输入与现有训练集、验证集、测试集及外部集去重。对于候选样本，保留其老师标签，并统计以下分布：

| 维度 | 需要看什么 | 常见决策 |
|---|---|---|
| 一级类、领域、体裁 | 每类及易混淆叶子的数量 | 补目标边界两侧，而非只补大类 |
| 有序质量档位 | 各档总量及相邻档混淆 | 补边界正反例，保持整体比例可控 |
| 稀有价值标签 | 每标签正例数、共现、长度 | 补正例，并配相似的非命中难例 |
| 风险标签 | 触发原因及叠加风险 | 区分“标签命中”和“质量档位为何下降” |
| 文本形态 | 长度、语言、来源、截断率 | 防止模型把长度或来源当捷径 |

对稀有多选标签，先拆 precision 与 recall。召回低而精确率尚可，表示漏检多，可先查正例覆盖、证据截断、老师漏标与阈值；精确率低则先抽查误报，确认是不是缺相似负例或规则不清。指标是排查线索，不是原因证明。增补不能保证提升，必须在冻结的验证集上看收益，最后用未参与决策的测试集确认。

判断一次增补是否有效时，固定基座、prompt、schema、切分和训练超参，只改变训练样本；否则无法归因。若与旧实验使用不同测试集，应同时让新旧模型跑**同一测试集**。如果老师标签换版，应分别按各模型对应老师算蒸馏保真度，并另用同一人工真值比较真实质量；不能混成一张“准确率提升”表。

## 5. SFT 构造与提示词一致性

可将每条样本构造成四个字段：

```json
{
  "system": "学生SYSTEM文本",
  "instruction": "有效输入正文",
  "input": "",
  "output": "单个结构化JSON对象的字符串"
}
```

训练框架的数据集映射须明确把 `system`、`instruction`、`input`、`output` 分别对应到正确列。不要仅修改构造脚本的 SYSTEM 后继续使用已生成的旧 SFT 文件：已有 JSON 内的 SYSTEM 不会自动更新。

一次实验应冻结以下内容并记录摘要：老师标签版本、学生 SYSTEM、目标 schema、正文截断规则、切分 ID、构造脚本版本、训练配置、基座与 tokenizer 版本。对 SYSTEM 记录字符数和摘要值，可在评测前确认是否传入了预期提示词。

解释字段的长短会改变目标 token 数与训练损失的构成。长解释可能让更多监督落在表达格式上；短解释可能去掉有用的推理示范。如果能用同一个学生 SYSTEM 同时支持两种输出，先固定 SYSTEM、正文、结构化标签、切分和训练配置，只改解释长度；若必须连 SYSTEM 一起改，结论就是两项组合的效果，不能宣称仅由解释长度导致。实际监督 token 数和优化步也要记录。

## 6. 训练配置与资源预算

下面是结构化打标 SFT 的一套**示例起点**，具体值要以目标长度统计和显存测试决定：

| 配置 | 示例或原则 |
|---|---|
| 方式 | SFT + LoRA，基座权重冻结 |
| LoRA | `rank=16`、`alpha=32`、`dropout=0.05` 起步 |
| 覆盖层 | 先确认目标模块名称与实际架构匹配，再设置 `target_modules` |
| 学习率与轮数 | 例如 `1e-4`、2–3 epoch；用验证集选择，避免只看末轮 |
| 有效 batch | `每卡 batch × 梯度累积 × 数据并行卡数`；示例 `2 × 8 × 1 = 16` |
| 精度 | 硬件支持时可用 bf16 |
| 序列上限 | 覆盖目标 token 分布，并留输出空间；不要照搬别版数值 |
| 内存 | 长序列优先开启梯度检查点；attention 实现先选环境中已验证的路径 |
| Packing | 长短样本差异大时可试；核实样本间 attention 与 label mask 不串扰 |
| 保存与验证 | 按固定 step 保存 checkpoint、运行验证，并保留训练日志 |
| 随机性 | 固定种子，记录框架及依赖版本 |

Packing 减少 padding，但会改变每个优化步包含的有效 token 和总优化步数。比较 packing 与非 packing，或短目标与长目标时，除 epoch 外还应报告训练样本数、有效 token 数、优化步数、吞吐与峰值显存。

开训前做一次小规模预检：构造若干真实样本、检查 chat template、核算 token 数、完成一个前向及反向步骤、确认 checkpoint 能写入。训练开始后查看首个优化步是否正常，再将任务转入后台并持续记录日志。已有输出目录不应默默复用或覆盖。

## 7. GPU 保活与一条龙任务

若平台需要 GPU 保活进程，任务顺序为：

```text
校验输入及输出路径
→ 停止保活并确认显存释放
→ 训练
→ 确认训练成功、检查目标 checkpoint
→ 生成式评测／外部打标
→ 汇总指标与产物
→ 恢复保活
```

单卡训练与生成式评测一般按顺序运行；多份独立评测可在训练结束后并发，但并发数应通过显存和吞吐实测确定。后台链路要记录每阶段退出码，任何阶段失败都保留日志并恢复保活。Shell 的 `EXIT` trap 应放在**实际运行链路的子 shell 或脚本**中；若只在交互式会话设置，可能直到退出登录才触发。

不要靠进程名模糊匹配来结束所有 Python 进程。优先保存 PID，核对命令行和目标 GPU；停保活后再次检查 GPU 占用，避免训练与占位进程抢显存。

## 8. 评测口径：四层证据

1. **运行正确性**：JSON 解析率、字段缺失率、非法枚举、生成截断、LoRA 实际加载。
2. **蒸馏保真度**：在同版老师标签上看一级类、领域、体裁严格命中率；有序档位看严格与事先固定的相邻容忍口径；多选标签看 precision、recall、F1。
3. **泛化与人工质量**：用未参与训练的跨来源／长短文外部集和人工真值检验；老师标签不是人工真值。
4. **分组表现与稳定性**：按语言、来源、长度、稀有标签、边界样本和错误方向看表现；另外用同样本重复推理或不同训练种子测波动。这两个问题要分开：跨组表现均不均衡，不等于同样本复跑会不会变。

各模型在各自验证集上的结果可用于了解训练过程，但不同验证集的分数不构成严格 A/B。比较两版模型的净收益，应让二者对**同一输入、同一参考标签、同一解码设置**推理，并同时报告修复条数、退化条数及净变化。

`eval_loss` 衡量模型拟合目标输出 token 的程度，不等同于领域、体裁或质量档位准确率。尤其目标含长解释文本时，loss 下降而结构化标签不升是可能的。checkpoint 应根据预先选定的验证指标选择；选定后才评测试集，不能反复用测试集挑 checkpoint。

## 9. 最容易误判的故障

| 现象 | 优先检查 | 处理原则 |
|---|---|---|
| 多个 LoRA 的预测几乎逐字相同 | 适配器是否真正注入、权重键是否命中 | 对比裸基座，检查非零 LoRA 权重及加载报告；失败即停止评测 |
| 某个体裁字段接近失效 | 枚举、输出解析器、老师标签版本、真实 LoRA 加载 | 先做字段级样本审计，不凭单项指标断言训练失败 |
| 长文表现差 | 老师与学生看到的正文范围、token 截断位置 | 保证输入口径一致；全文实验需全文参考标签 |
| JSON 解析失败 | 说明字段中的换行、反斜杠、引号及生成上限 | 训练目标和预测都严格解析，查看原始输出 |
| 多选标签 F1 低 | precision、recall、正例数量及共现 | 依误报或漏报分别补负例或正例 |
| 增补后总体下降 | 新增数据分布、标签版本、边界冲突、旧集回退 | 同集逐条做修复／退化分析，再决定补样或调参 |
| 训练直接 OOM | 保活进程、序列上限、batch、packing | 先释放占位，再逐项调低资源开销 |
| 模型架构不被识别 | 实际框架对 `model_type` 的注册与加载映射 | 验证配置类和模型类；配置文件里的版本字符串不是兼容性证明 |

某些多模态基座的训练路径与纯文本推理路径会产生不同的权重键前缀，导致适配器“显示已激活”但所有训练增量实际上没有加载。核验应比较权重键命中和非零增量，并在固定样本上比较裸基座与适配器预测；仅看 `active_adapters` 不够。

## 10. 最小可复现交付

一次实验至少保留：

- 数据说明：数据来源类别、样本数、去重与截断规则、标签版本、split 的 ID 清单或摘要；
- 学生 SYSTEM、schema 与构造脚本的版本标识；
- 训练配置、依赖锁定、基座版本、随机种子、日志与 checkpoint；
- 验证集选 checkpoint 的记录，最终测试集及外部集预测文件；
- 评测代码、指标定义、分母、老师标签版本和人工真值版本；
- 适配器加载校验记录，以及失败样本和数据修复清单。

实际模型或数据若需对外共享，还应分别做内容、路径和权限审查。

## 11. 真集、验证集、测试集：先说清标注来源，再说清用途

用一个通用任务贯穿：输入客服工单，输出 `{"route":"普通处理"}` 或 `{"route":"立即升级"}`。假设规则规定“有账户失控或持续损失的明确证据”才立即升级。语气激烈、出现「紧急」「异常」等词，不等于命中规则。模型要学的是证据，不是情绪强度。

| 概念 | 它回答什么 | 正确用法 | 容易做错的事 |
|---|---|---|---|
| 训练集 Train | 模型从哪些答案学？ | 用来计算梯度；可用人工标签、老师标签或经过筛选的混合标签 | 闭环补样时把验证、测试的原文或同源改写混回训练 |
| 验证集 Val / Dev | 哪个 checkpoint、配比、学习率或阈值更适合？ | 冻结集合，允许比较与选型；老师标注的 Val 测拟合，人工 Val 测实际目标，两个可以并行 | 每次实验重切 Val；看到某个版本差就改评分口径 |
| 测试集 Test / Holdout | 方案锁定后，对未参与决策的数据表现怎样？ | 事先决定评估范围、指标和门槛；锁定模型、推理及评分规则后再验收 | 用测试结果反复改样本、选参数，然后继续声称它是独立测试 |
| 人工真集 Gold | 谁给参考答案、答案有多可信？ | 按统一规则独立判、复核、记录版本；可分别划出 Gold-dev、Gold-test | 把「人工打过」当成绝对正确；看过模型答案后改标签，再只重评新模型 |
| 外部集 / 难例集 | 对新来源或特定难点能否泛化？ | 按线上目标决定新时期、新渠道、长文本或关键边界，分别报告 | 把人为富集的难例比例当成线上真实流量；看了多个外部集后只汇报表现最好的一份 |

**怎么拆。** 假设有 1,000 条人工复核样本，示例可以把 300 条作为人工 Dev，700 条作为冻结的人工 Test；数量可按正类支持数与资源调整，不要按固定比例硬切。预计某类发生率只有 1% 时，700 条自然抽样也只期望约 7 条该类，适合揭示覆盖不足，不适合发布几个百分点级别的提升结论。需要更精确，就增加自然随机样本，或额外做稀有类富集集并单独报告，不能把富集集上的总体准确率、精确率直接当线上指标。

**先分组再切分。** 同一工单的多轮消息、同一事件的转载、同一模板改写，以及按模型输入处理后几乎相同的样本，尽量归入同一组。可以先隔离时间外推测试，再在其余组里分 Train/Val；只有分层和分组能够同时满足时才强求比例一致。检查 ID、组 ID、规范化全文和有效输入交集；标准化、采样权重或阈值若要从数据估计，只用允许的训练或验证部分，不从封存 Test 学。参见 [scikit-learn 的数据泄漏指南](https://scikit-learn.org/stable/common_pitfalls.html)和[分组交叉验证说明](https://scikit-learn.org/stable/modules/cross_validation.html)。

**怎么把人工真集做可信。** 先用小批样本校准规则；正式标注时让两人按同一版本独立判断，避免先看彼此或老师答案。保留标注理由、原文证据位置、分歧与仲裁结果。规则明确的样本给单一标签；有真实合理分歧的，可以预先约定可接受答案集合，或单列为边界集，同时公布覆盖和分母。证据缺失、规范冲突、误标、确实多解都分开记录。怀疑某个真集偏向某模型时，盲抽「新错旧对」「新对旧错」「两者都错」，并加入部分两者都对的对照；仅复核新模型的错误会产生定向偏差，不能外推整个真集的错误比例。发布新 Gold 版本时给出改动表，让新旧模型都在同一版重算；已被逐条用来改方案的样本转为 Dev，再留一批真正未见的 Test。

## 12. 样本均衡：不是把每类条数凑成一样

先区分三种分布：**线上输入分布**决定收益和风险在哪；**训练采样分布**决定模型经常练什么；**测试分布**决定指标代表什么。三者不必相同。比如线上升级工单只占 5%，训练可以提高其曝光率帮助学边界，但上线精确率与工作量必须回到自然分布验证。样本比例也不等于被采样次数，更不等于实际参与损失的目标 token 比例。

| 样本盘点维度 | 应该统计什么 | 暴露什么问题 |
|---|---|---|
| 标签与关键切片 | 类别、语言、来源、长度段、子类型的交叉计数；同时给原始条数和去重后独立组数 | 类别总体平衡，某渠道的正例仍可能没见过 |
| 临界正反对 | 相似文本里，哪些事实一变就应该翻标签；统计易混淆的方向各有多少 | 只有教科书式正例，模型容易抓关键词做捷径 |
| 标签可信度 | 人工/老师来源、规则版本、冲突率、人工抽检结果；单列证据缺失和主观边界 | 多复制同一种错标签会放大噪声 |
| 有效训练曝光 | 实际采样次数、证据保留率、目标截断率、参与 loss 的 token 按类别/字段统计 | 台账里有某类，格式化后却没有关键证据或标签监督 |

**Demo 1：两个训练集都是 100 条，都是 80 普通 / 20 升级。** 训练集 A 的 20 个升级样本里，16 条来自同一套“账号被盗”模板，且普通工单里几乎没有“异常登录”字样。训练集 B 有重复指令、待核实登录、实际扣费、账户失控等不同情形，普遍保留判定证据，同样有 20 个升级样本。A 图表看起来平衡，但学生可能只学会看到「异常登录」就升级。最便宜的诊断是三类近邻：

| 工单输入（虚构） | 应判 | 用来验证什么 |
|---|---|---|
| 收到异常登录提醒，确认是我自己在新设备登录，账单无变化。 | 普通处理 | 有关键词、无实质风险的难负例 |
| 收到异常登录提醒，不是我本人，随后两笔扣费仍在发生。 | 立即升级 | 关键词相同，决定性证据变化应翻标签 |
| 没收到任何提醒，但最近一分钟连续出现本人未授权的扣费。 | 立即升级 | 同一风险出现在没有熟悉关键词的新表述中 |

**补样顺序：查证据 → 改标签 → 补边界 → 再调比重。** 从冻结 Dev 的失败样本归纳“账户失控证据常在末尾”“新设备登录易误报”等能力缺口，然后去**训练侧或独立候选池**找新组，不直接搬评测原文或近似改写。优先补真实、来源多样的难正例和难负例；稀缺时才尝试少量重采样，每轮记录倍率与独立组数。验证目标类 recall、误报精确率、旧类回退以及自然流量上的影响；只有补样收益一致，才考虑扩大。对于生成式 SFT，若要加权多字段损失，应先确认实现是否支持、权重怎样归一，别把“设了采样权重”误当成“某字段 loss 自动加权”。

补数据后成绩不升，不代表数据无用。它可能修复了某类边界，同时把相近的负例误报变多；也可能训练量增了、有效优化步增了，或者新增样本的语言和上线流量不同。依次核对新增/存量比例、独立组数量、标签一致性、有效曝光和配对修复/退化，不根据全量准确率单点判断。

## 13. 参数怎么影响模型：先看故障信号，再决定调哪一个

**SFT 是目标，LoRA 是更新权重的方式。** SFT 用示范答案训练模型预测后续 token；训练时模型看到正确的前文 token，推理时则接着自己生成的 token 往下写。因此 teacher-forcing loss 和完整生成正确率可能背离。LoRA 不改任务定义，只给部分层加可训练的低秩更新。一个从 4,096 到 4,096 的线性层用 rank 16，不计 bias 等额外参数，适配器参数是 `16 × (4096 + 4096) = 131,072`，比原矩阵的 `16,777,216` 少；这不意味着训练显存也按同一个比例下降，因为基座权重和激活仍要占资源。QLoRA 则对冻结基座使用低比特量化来降内存，不应把量化与 rank 的影响混在一次对比中。见 [LoRA 原论文](https://arxiv.org/abs/2106.09685)和 [QLoRA 原论文](https://arxiv.org/abs/2305.14314)。

| 旋钮 | 改了什么 | 什么证据支持动它 | 验证时固定或记录什么 |
|---|---|---|---|
| 学习率 LR / warmup / scheduler | LR 控制每步更新尺度；warmup 使前几步逐渐进入目标学习率；scheduler 控制后续学习率轨迹 | 干净小集拟合慢，或梯度、loss 明显不稳且已排除批次/数值异常 | 先固定优化器、总步数及调度形状，在同一基线上试如 `0.5× / 1× / 2×`；记录实际 LR 轨迹和峰值梯度 |
| 优化步 / epoch | 步数决定参数更新次数；epoch 决定大致经过数据几遍，两者不等价 | 训练与 Dev 指标仍同步改善可试多走几步；训练继续变好而 Dev 变差，先看早期 checkpoint 和过拟合证据 | 按 optimizer step 对齐曲线，标出训练样本次数和有效目标 token；别默认最后一轮最好 |
| 每卡 batch / 累积 / 数据并行 | 决定一轮更新看多少样本，改变梯度波动及单位 epoch 的更新数；只加累积不是增加单步显存的同一操作 | GPU OOM、梯度波动，或每步有效长度差异极大 | 常规非 packing 量级为 `每卡 microbatch × 累积 × 数据并行副本`；还要记录不满批、token 归一与优化步 |
| rank / alpha | rank 限制可表达的更新秩；标准 LoRA 的缩放是 `alpha/r`，rsLoRA 用 `alpha/√r` | 输入、标签、评测确认无误，常规优化较充分，训练子集和目标切片仍有可重复的欠拟合迹象 | 例如标准 LoRA 比 `r16/alpha32` 与 `r32/alpha64` 保持缩放 2；固定模块范围。这样不保证实际更新幅度相同，还要看梯度与多种子 |
| target_modules / dropout / 权重衰减 | 改变适配位置、LoRA 分支正则与训练参数约束；多插模块和提高 rank 不是同一实验 | 扩展模块适用于容量/位置假设；训练好而 Dev 开始退化才考虑正则、早停或清理重复 | 打印实际命中的权重名、可训练参数量；分别改模块与正则，别一起提高 |
| 最大长度 / packing / loss mask | 直接决定模型能看到什么、哪些 token 被监督、样本如何拼批 | 长样本失败集中、标签尾被截、loss 很低但答案不对，或某片段完全没梯度 | 检查格式化后的真实训练批次、跨样本隔离及 loss mask。不能只看配置名或文本字符长度 |
| 精度 / 量化 / 解码 | 前两者改变训练资源和数值路径；输出预算、停止条件和采样改变生成结果 | 非有限 loss、OOM，或同权重离线/在线表现不同，输出不完整 | 固定基座版本、量化后端、聊天模板、解码、解析器；对比同一批输入。若想看原始语义能力，仍保留无约束输出的解析率独立指标 |

参数定义见 [Hugging Face PEFT LoRA 配置](https://huggingface.co/docs/peft/en/package_reference/lora)；completion-only、assistant-only loss 与 packing 的具体约束见 [TRL SFTTrainer 文档](https://huggingface.co/docs/trl/en/sft_trainer)。框架默认值随版本与数据格式而不同，**以本次运行的 resolved config 和实际 batch 为准**。

**Demo 2：截断不是“再调大学习率”能治的。** 例如聊天模板及指令占 200 token、正文占 850、助手答案占 100、其余结束标记占 20，总长 1,170。若 1,024 上限按完整序列从尾部截，末尾 146 token 不保留：答案可能全部丢失，正文末尾也可能丢掉。若框架先给答案留预算，标签可保住，但仍要检查决定性证据是否留在正文。推理侧还需单独留出生成预算，检查停止序列和输出收尾。验证时抽查实际格式化后最后一段、保留的监督 token、完整 JSON 字段、跨长度段表现，并对比相同模型在短输入、保留关键证据的长输入和截断版本的表现。仅去掉解释后涨分，可能只是输出截断减少；优先对比原始解析率和有效行的语义准确率，再谈模型是否更懂任务。

**Demo 3：只翻倍 batch 也会变实验。** 忽略尾批，4,096 条训练数据，有效 batch 16 时每轮 256 步，改成 32 就只剩 128 步。固定 2 epoch 会保持样本级曝光但更新步数减半；固定 512 优化步则后一组见到两倍样本次数。比较时先选预算口径：同优化步看固定更新预算，同训练曝光看固定数据预算；必要时两组都跑，并标明未匹配的预算。这也是为什么“只多补 1,000 条、epoch 没改”不能自动解释为纯数据收益。

## 14. 评测怎么计算：模型改善了吗，还是只是把错换了地方？

先固定主指标和守门指标。例如主看“立即升级”的召回率；同时要求精确率不过度下降、输出合法率达标、关键来源不退化。若输出是固定 JSON，建议主表把无法解析、漏字段、非法枚举视为失败，端到端指标以应评总数为分母；另给“仅合法输出的语义指标”便于排查，不能用它取代主表。多类任务给整体 exact 和逐类指标；多标签任务先说明是按样本集合完全匹配，还是按每个标签的命中分别算 micro/macro F1。micro 汇总计数后计算，容易由大类主导；macro 各类等权，但空类和小类需要报告支持数与约定。人工允许多答案时，按“预测是否落在预先定义的允许集合”统计业务命中率；若还要算逐类 precision/recall/F1，另定单一参考或明确多标签协议，不能把“多答案都可接受”当作“所有标签必须同时命中”。公式见 [scikit-learn 指标文档](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.precision_recall_fscore_support.html)。

### 14.1 Demo 4：相同准确率与不同漏检（纯 Python，可直接运行）

1000 条自然样本中有 100 条应该升级。如果全判普通，准确率已有 90%，但召回率是 0。有两个模型：

| 模型 | TP 真升级判升级 | FP 普通误升级 | FN 升级漏判 | TN 普通判普通 | 准确率 | 精确率 | 召回率 | 漏检率 | 升级 F1 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| A | 40 | 30 | 60 | 870 | 91.00% | 57.14% | 40.00% | 60.00% | 47.06% |
| B | 65 | 55 | 35 | 845 | 91.00% | 54.17% | 65.00% | 35.00% | 59.09% |

```python
def metrics(tp, fp, fn, tn):
    def ratio(numerator, denominator):
        return None if denominator == 0 else numerator / denominator

    return {
        "accuracy": ratio(tp + tn, tp + fp + fn + tn),
        "precision": ratio(tp, tp + fp),
        "recall": ratio(tp, tp + fn),
        "miss_rate": ratio(fn, tp + fn),
        "f1": ratio(2 * tp, 2 * tp + fp + fn),
    }

for name, counts in {"A": (40, 30, 60, 870), "B": (65, 55, 35, 845)}.items():
    result = metrics(*counts)
    display = {k: "N/A" if v is None else f"{v:.2%}" for k, v in result.items()}
    print(name, display)

assert metrics(40, 30, 60, 870)["accuracy"] == metrics(65, 55, 35, 845)["accuracy"]
assert metrics(65, 55, 35, 845)["miss_rate"] == 0.35
```

**漏检率的分母是所有真正该升级的样本**，即 `FN / (TP + FN) = 1 − Recall`，不是漏了 35 条就除以 1,000，也不是 `1 − Precision`。B 净少漏 25 条、净多误报 25 条；至于具体有没有新增漏检，必须看逐条配对。如果业务认定漏掉一次成本为 5、误报一次成本为 1，示例成本 A 为 `60×5+30=330`，B 为 `35×5+55=230`，B 更好；这是**假设的**代价，实际上线还要看误报带来的人工负荷。若系统给出可用分数，可用 Dev 的 precision/recall 曲线选择阈值，再在 Test 测一次；如果只输出离散标签，不要把生成概率随意当成校准好的业务概率。

### 14.2 修复、退化、仍错：必须做同样本配对

仅凭上面两行混淆汇总，看不出哪些工单变好了。例如一份与上表兼容的配对结果可以是：两者都对 860、A 错 B 对 50、A 对 B 错 50、两者都错 40。归因需要记录每条对应的输入、参考标签、原始输出、解析结果与预测变化方向。

- 修复占全量：`50/1000=5.00%`；也可报「旧错中被修好」`50/90=55.56%`。
- 退化占全量：`50/1000=5.00%`；也可报「旧对中变错」`50/910=5.49%`。
- 严格准确率净变化：`(修复−退化)/同集应评数=0` 个百分点。**净变化为零不表示无业务收益**：漏检代价与误报代价可能不同。阈值、容忍范围、代价系数均需提前定。
- 两版准确率差用**配对**方法估计不确定性：对同一个样本 ID（有相关记录则按工单组）一起重采样，计算差值区间。分开给正例数、共同覆盖数、百分点差和区间；稀有类不要只看百分比。每个训练种子的随机波动与这个抽样不确定性不是一回事，分开报告。

### 14.3 老师、学生和人工：同一张表回答三个问题

“学生能否模仿老师”看**学生与老师的标签一致率**；“老师和学生谁更合任务规范”分别对同一版 Gold；“老师新规则学到了没”先用 Gold 定义老师旧错新对，然后进入这个集合，单独算新学生跟上的条数和漏掉的条数，并看旧学生是否本来就正确。边界上应分清四种情况：都对、老师对学生错、老师错学生对、都错；都错也不等于两者输出相同。老师复现自己的参考标签可以按定义得到 100%，不代表对人工真集的召回率是 100%。

若两版学生分别使用不同老师：**共同人工真集**用于公平比较两者的任务质量；**共同新版老师**用于回答谁更贴近新规则（对旧模型是跨规则迁移，不是其本职能力的唯一评价）；**各自老师**的一致率只用来诊断各自蒸馏情况，不能把两个成绩直接比较为模型水平。若只有某些样本有老师输出，报共同可比数及缺失数，不能直接拿两份不同分母的比例做差。

### 14.4 “稳定”要说明是哪一种

- **推理复跑稳定性**：固定 checkpoint、输入、模板、推理后端与解码，用同 ID 两次或多次推理，报总体归类/字段一致率、无效输出数和关键类变化方向。温度为零也要实测部署路径；锁种子使复现实验更明确，不代替验证。
- **训练重跑稳定性**：固定数据、超参和环境，用不同训练种子重复；候选与基线用同一组种子，分别报告均值、范围和逐样本退化是否一致。若提升小于种子波动，不给确定性结论。
- **分布变化下的稳健性**：按来源、时间、语言、长度、难度报告。自然集看上线整体，富集难例集看固定难点；可以都做，不能把两个分母混在一起。

## 15. 遇到问题怎么定位：先排链路，再判断要补样还是调参

| 现象 | 最先做的低成本检查 | 证据出现后怎么做 |
|---|---|---|
| 改了适配器，预测几乎一样；或突然 JSON 全错 | 固定同一小批输入；对比裸基座与 adapter，查权重键、非零更新、原始输出、终止条件及解析日志 | 链路有误先修；若加载、解析均正常而差异小，才讨论学习不足 |
| 短样本正常，证据在末尾的长样本普遍错 | 同一条用完整预算、原截断、保留关键证据三种视图；直接检查训练样本的 loss mask 和推理的结束原因 | 能看到证据就恢复，优先修输入预算和截断，别先提高 rank 或复制长文 |
| 老师对 Gold 就有系统性偏差 | 先盲审老师错的分层样本，并抽老师判对的对照；看规则歧义、证据范围和标签版本 | 清洗或重标训练侧数据，必要时保留人判；提高老师一致率本身可能让学生更贴近错误 |
| 老师对、学生错，训练里找不到同类边界 | 查独立组和有效输入里是否有同一判断依据，不只按标签计数；排除证据被截掉 | 定向补少量代表性正反例；固定参数验证该切片变化，再扩大 |
| 老师对、学生错，训练侧既有足量例子，干净训练子集也拟合困难 | 查 trainable 参数、梯度、mask；在小集上做 LR 诊断和更长训练，确认能否学进去 | 若常规优化后仍可重复欠拟合，才测试 rank/模块或更强基座；一个结果不能证明容量上限 |
| 训练表现越来越好，Dev 先升后降 | 同步对比 train 与 Dev 生成指标、loss 与重复组。检查最优早期 checkpoint | 尝试早停、清理重复、调整正则；多训练或扩大容量可能更糟 |
| 训练、Dev 和 Test 都好，实际流量不好 | 对照推理模板、长度、量化、解码和解析；再看时间、来源、人群或业务规范变化 | 先修离线/在线契约；若是分布迁移，采新时期的独立数据，重定义验证切片 |

**五步排查顺序：**

1. **评测审计**：核对 ID 对齐、样本覆盖、真集版号、无效行和指标代码；任何一项不一致就先重算。
2. **训练批次体检**：抽短、中、长、稀有类及多轮，查看实际格式化样本和有监督的 token；确认助手答案与关键证据存在，目标模块有梯度，且 loss、梯度为有限值。
3. **小样本过拟合自检**：用例如 16–32 条高可信、非冲突、可完整输入的训练侧样本做短跑；看这些样本的 loss、合法率和标签命中能否明显上升。若不行，先查映射、mask、加载和优化配置；若能拟合，只证明链路大致能学，不证明泛化。
4. **错例归因**：按「输入证据缺失 / 标签冲突 / 样本覆盖缺口 / 训练或推理链路 / 模型判断 / 真集不确定」记主因与证据；难以区分的保留多假设和下一验证项，不让统计把猜测当事实。电子表至少记录匿名 ID、分组、各版本预测、模型可见证据、人工判断和下一步。
5. **最小变更**：选一个能解释最多高成本错误的假设。变更前写明预期：哪个切片改善、哪些守门指标不能掉、哪种结果会否定假设。

## 16. 从一次排查到可复现结论：实验怎么设计

假设 Dev 显示模型对“持续扣费”有漏检，且训练侧没覆盖多少不同来源，同时你也怀疑学习率不合适。先跑如下实验，数据侧只从独立训练候选池取样；如果想隔离样本结构，先用等量替换或等预算对照，不把简单扩大数据和改善结构混为一谈：

| 组别 | 训练数据 | 训练设置 | 可回答的问题 |
|---|---|---|---|
| A 基线 | 原样本 | 原 LR | 当前基线及自然波动 |
| B 只改样本 | 换入等量的边界正反例 | 原 LR | 目标切片是否对样本覆盖敏感 |
| C 只改优化 | 原样本 | 新 LR | 在原数据下，优化是否是瓶颈 |
| D 两者都改 | 与 B 同一数据 | 与 C 同一新 LR | 两项是否叠加，还是只在一起有效 |

`B−A` 与 `D−C` 看数据效果，`C−A` 与 `D−B` 看 LR 效果；若两组差值方向不同，说明这套数据与参数可能有交互，不宜只报“最好的单组”。如果真正的问题是**增加多少数据**，可再做“增加同量随机样本 vs 增加同量定向样本”，同时明确是固定优化步还是固定数据曝光。长度变化明显时还需报告实际有效 token，不能用等条数代替等计算预算。对比 rank、长短答案、输入模板也遵循同样原则：能只改一项就只改一项；没法拆开就如实汇报组合效果。

**建议的最小执行单：**

1. **开跑前**：写清假设、主指标、守门指标和目标切片；冻结数据版本、划分、基座和评测代码，保留原模型和裸基座的参考预测。
2. **短跑选型**：在 Dev 做链路预检和低成本对照。比较曲线时标注 optimizer step、训练曝光、有效目标 token、耗时与显存；候选至少确认不是一次短跑的偶然表现。若没有足够算力多种子，看法保留为初步。
3. **锁版验收**：定好 checkpoint、prompt、解析器与解码；自然分布 Gold-test 评整体，预先定义的难例集评边界，输出每类混淆、稳定性和修复/退化。若测试后又改方案，原测试成绩可作为历史参考，正式确认应补一份未参与决策的新 holdout。
4. **上线判断**：例如先由业务设定“升级召回至少提高 5 个百分点，精确率最多掉 3 个百分点，非法输出和关键来源退化不超过约定值”。这些只是演示门槛。若区间太宽、关键切片样本太少或收益来自单个来源，应扩大盲测或先影子运行；把来源、语种和漏检的回滚阈值写清。

复盘可用一句话模板：**在同版人工参考、同一批可比样本、同一评测口径下，改动 X 后，目标切片修复 Y、退化 Z，整体与业务风险变化为 W；目前证据支持 A，无法区分 B，下一步用实验 C 验证。** 最终要能回答“为什么认为有效、在哪些条件下会失效、怎么再证一次”，而不仅是展示最好的分数。

## 17. 动手跑：客服工单 LoRA，从切分到测试

这个 Demo 只需要 **Python 3.10+**，不用安装依赖或下载模型。先用一份独立的虚构历史工单训练一个小型两层基座，再冻结它，在隐藏层加上 `W = W0 + (alpha/r) × B × A`，通过反向传播实际更新 `A`、`B`。目标简化成生成一个答案 token：普通处理或立即升级。**这是实际训练低秩适配器，不是模拟分数；基座是教学用的小网络，不是 Transformer，成绩也不能外推到正式 LLM。**

### 17.1 先定切分和对照，再跑

每个模拟工单事件有两条表述，用同一个 `group` 标识。同一事件整组放进一个集合；在「普通场景／边界场景 × 两个标签」内打散分配。脚本会校验各集合无重复事件、ID 或完全相同的正文。不同事件会刻意复用判定词，这是教学用的同规则泛化；真项目还应把近重复模板或新渠道留到独立测试切片。

| 集合 | 条数 | 用法 |
|---|---:|---|
| 历史训练 | 96 | 只用于训练共同基座，不进入 LoRA 或评测 |
| A/C 的 LoRA 训练集 | 48 | 基础工单，24 个事件 |
| B 的新增训练候选 | 48 中取 24 | 从独立训练侧候选中按标签各取 6 个事件，补入近似正反例；B 共 72 条 |
| Dev | 32 | 一半普通、一半边界；看训练和选方案 |
| Test | 32 | 同样分层，独立事件；训练命令不读这个文件，锁定候选后再验收 |

| 组别 | LoRA 见到的数据 | 学习率 | 要回答的问题 |
|---|---|---:|---|
| A：基线 | 48 条 | 0.12 | 基线在哪些工单上漏检或误报？ |
| B：只补样 | 同样的 48 条 + 24 条边界样本 | 0.12 | 边界数据的曝光增加后，错例有没有被修复？ |
| C：只调参 | 和 A 完全相同 | 0.36 | 只提高学习率，能否在原样本上改善同一批错例？ |

三组共用基座权重、词表、适配器初始化、rank、批大小 8、160 次优化更新，按组内样本有放回抽样。A/C 的抽样序列完全相同；B 用相同的总步骤和曝光次数，让边界样本占用一部分原有样本预算。因此 `B−A` 回答的是「**同样训练预算下，改变数据组合有没有收益**」，不等于「多训练若干步是否有益」。如果想专门比较定向补样与随机补样，再加一组「同样 +24 条普通样本」。

### 17.2 运行命令与每一步看什么

在文档所在目录执行。命令从下方代码块取出完整脚本，产物写入新的临时目录；也可以手工把代码块另存为 `demo.py`，用 `python3 demo.py` 替代 `run_demo`。

```bash
guide=./lora_sft_training_core_knowledge_desensitized.md
demo_dir=$(mktemp -d)
run_demo() {
  awk '/^<!-- lora-demo:begin -->$/{p=1;next}
       /^<!-- lora-demo:end -->$/{p=0}
       p && !/^```/' "$guide" | python3 - "$@"
}

run_demo prepare "$demo_dir"
run_demo train "$demo_dir"

# 看完 Dev 后，锁定 A、B 或 C，再运行下一行；此处以 B 为例。
run_demo test "$demo_dir" --candidate B
printf '%s\n' "$demo_dir"
```

1. **`prepare`：先看能不能信这个划分。** 输出每个集合的行数、事件数、正例数和边界数。应看到 Dev、Test 各 16 个事件、32 条，且测试样本单独写入 `test.json`；真实任务还要核查来源、时间、模板族和近重复。
2. **`train`：先看有没有真在训练，再看学了什么。** Step 0 的三组 Dev 应相同，因为初始适配器的乘积为零；训练后脚本检查基座权重逐值没变、两块适配器矩阵都已更新。每组输出 step 0/40/80/160 的训练损失、累计边界样本曝光、Dev 准确率、精确率、召回及边界 F1。A/C 的训练行和抽样相同；用 `B−A` 看补样、`C−A` 看 LR，不能用 `B−C` 直接归因。`fit.json` 记录配置、学习曲线和逐条 Dev 预测。
3. **看 Dev，决定要不要进入 Test。** 先看边界召回/F1，守住普通场景准确率和误报；总分不升时，检查 `fit.json` 里的 `dev_pairs`：修好的是哪批、退化的是哪批。教学示例每组只跑一个种子且样本很少；正式实验需要更多独立组和种子。若 Dev 没显示可信收益，保留 A。
4. **`test`：只验收事先选定的候选。** 脚本将 A 和选定候选对同一批 Test 预测，写入 `test_result.json`，包含逐条结果、普通/边界切片和配对修复/退化。不要在看到结果后轮流换候选找最高分。要做新一轮调参，回 Dev；要再发布独立结论，另留新 Test。

### 17.3 一次实跑结果怎么读

下面是默认种子 `23`、固定第 160 步、32 条 Dev 的实际输出摘要：

| 组别 | Dev 准确率 | Dev 边界 F1 | 对比 A：修复 / 退化 | 最后一段训练 loss |
|---|---:|---:|---:|---:|
| A 基线 | 22/32 | 50.00% | — | 0.0321 |
| B 只补样 | 30/32 | 88.89% | 8 / 0 | 0.0171 |
| C 只提高 LR | 24/32 | 66.67% | 2 / 0 | 0.0061 |

**先看 Dev 选 B。** C 把 A 的训练样本拟合得更好，也修了 2 条；B 修了 8 条，普通工单从 A 的 14/16 到 16/16。三组都见了 1,280 次样本，其中 B 有 416 次边界曝光，A/C 都是零。B 和 C 的训练 loss 不是在同一个分布上算的；不能因为 C 的 loss 最低就选它。

**锁定 B 后再开 Test。** A 对了 21/32，B 对了 30/32：修复 9 条、退化 0 条。普通工单两组都是 16/16；16 条边界工单上，漏检从 3 条降到 0 条，误报从 8 条降到 2 条。这个结果支持「在该合成任务和固定预算下，补入缺失的边界样本有收益」，不等于提高 LR 无用，也不等于真实工单能提升同样幅度。

### 17.4 完整代码

<!-- lora-demo:begin -->
```python
import argparse
import hashlib
import json
import math
import random
from itertools import combinations, product
from pathlib import Path


RULES = {
    "routine": {
        0: ("订单 咨询", "地址 修改", "账单 查询", "密码 重置"),
        1: ("账户 被盗", "账单 盗刷", "密码 失控", "登录 未授权"),
    },
    "boundary": {
        0: ("异常 登录 本人 确认", "扣费 本人 授权", "提醒 已恢复 无损失", "扣费 重复 显示 已撤销"),
        1: ("异常 登录 非本人 持续", "扣费 非本人 持续", "提醒 账户 失控 仍在", "扣费 重复 未撤销 持续"),
    },
}
HIDDEN, RANK, ALPHA = 8, 2, 4
STEPS, BATCH = 160, 8


def save(path, data):
    with path.open("x", encoding="utf-8") as fp:
        json.dump(data, fp, ensure_ascii=False, indent=2)


def load(path):
    return json.loads(path.read_text(encoding="utf-8"))


def fingerprint(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def summary(rows):
    return dict(rows=len(rows), groups=len({r["group"] for r in rows}),
                positives=sum(r["y"] for r in rows),
                boundary=sum(r["kind"] == "boundary" for r in rows))


def prepare(out):
    groups = {k: [] for k in ("archive", "train", "pool", "val", "test")}
    rng = random.Random(13)
    contexts = list(product(("网页", "电话", "邮件", "应用"), ("早班", "晚班", "夜班", "周末"), range(6)))
    rng.shuffle(contexts)
    for kind, per_label in RULES.items():
        for y, phrases in per_label.items():
            events = []
            for i in range(20):
                group = f"{kind}-{y}-{i:02}"
                channel, shift, area = contexts.pop()
                context = f"{channel} {shift} 区域{area}"
                evidence = phrases[i % len(phrases)]
                events.append([
                    dict(id=f"{group}-a", group=group, kind=kind, y=y,
                         text=f"{context} 客户描述 {evidence}"),
                    dict(id=f"{group}-b", group=group, kind=kind, y=y,
                         text=f"{evidence} 工单摘要 {context}"),
                ])
            rng.shuffle(events)
            first = "train" if kind == "routine" else "pool"
            for split, source in ((first, events[:12]), ("val", events[12:16]), ("test", events[16:])):
                groups[split].extend(row for event in source for row in event)
    for i in range(96):
        y = i % 2
        phrase = RULES["routine"][y][(i // 2) % 4]
        groups["archive"].append(dict(id=f"history-{i}", group=f"history-{i}",
                                      kind="routine", y=y, text=f"历史记录 渠道{i % 4} {phrase} 编号{i}"))
    for left, right in combinations(groups.values(), 2):
        for field in ("id", "group", "text"):
            assert {r[field] for r in left}.isdisjoint(r[field] for r in right)
    for rows in groups.values():
        assert len({r["id"] for r in rows}) == len(rows)
    pool = groups.pop("pool")
    selected_groups = set()
    for y in (0, 1):
        candidates = list(dict.fromkeys(r["group"] for r in pool if r["y"] == y))
        selected_groups.update(candidates[:6])
    extra = [r for r in pool if r["group"] in selected_groups]
    assert summary(extra) == dict(rows=24, groups=12, positives=12, boundary=24)
    test = groups.pop("test")
    for name, rows in {**groups, "pool": pool, "extra": extra, "test": test}.items():
        print(name, summary(rows))
    save(out / "test.json", test)
    save(out / "split.json", {**groups, "extra": extra, "test_sha256": fingerprint(out / "test.json")})


def features(row, vocab):
    return [0, *sorted({vocab[w] for w in row["text"].split() if w in vocab})]


def forward(base, xs, adapter=None):
    w, readout = base
    a, b = adapter if adapter is not None else ([], [[] for _ in w])
    scale = ALPHA / RANK
    ax = [sum(vector[i] for i in xs) for vector in a]
    hidden = [math.tanh(sum(vector[i] for i in xs) + scale * sum(b[j][k] * x for k, x in enumerate(ax)))
              for j, vector in enumerate(w)]
    logit = sum(v * h for v, h in zip(readout, hidden))
    p = 1 / (1 + math.exp(-max(-40.0, min(40.0, logit))))
    return hidden, ax, p


def build_base(archive, vocab):
    rng = random.Random(7)
    width = len(vocab) + 1
    w = [[rng.uniform(-0.12, 0.12) for _ in range(width)] for _ in range(HIDDEN)]
    readout = [rng.uniform(-0.3, 0.3) for _ in range(HIDDEN)]
    for _ in range(600):
        row = rng.choice(archive)
        xs = features(row, vocab)
        hidden, _, p = forward((w, readout), xs)
        e = p - row["y"]
        for j, h in enumerate(hidden):
            d = e * readout[j] * (1 - h * h)
            for i in xs:
                w[j][i] -= 0.06 * d
            readout[j] -= 0.06 * e * h
    return w, readout


def score(rows):
    tp = sum(r["y"] == 1 and r["pred"] == 1 for r in rows)
    fp = sum(r["y"] == 0 and r["pred"] == 1 for r in rows)
    fn = sum(r["y"] == 1 and r["pred"] == 0 for r in rows)
    tn = len(rows) - tp - fp - fn
    def ratio(x, n):
        return round(x / n, 4) if n else None
    return dict(n=len(rows), tp=tp, fp=fp, fn=fn, tn=tn, accuracy=ratio(tp + tn, len(rows)),
                precision=ratio(tp, tp + fp), recall=ratio(tp, tp + fn), f1=ratio(2 * tp, 2 * tp + fp + fn))


def evaluate(base, adapter, rows, vocab):
    preds = []
    for row in rows:
        p = forward(base, features(row, vocab), adapter)[2]
        preds.append({**row, "p_upgrade": round(p, 6), "pred": int(p >= 0.5)})
    stats = {"all": score(preds)}
    for kind in RULES:
        stats[kind] = score([r for r in preds if r["kind"] == kind])
    return {"metrics": stats, "predictions": preds}


def paired(baseline, candidate):
    left = {r["id"]: r for r in baseline["predictions"]}
    right = {r["id"]: r for r in candidate["predictions"]}
    assert left.keys() == right.keys()
    states = {"both_right": [], "fixed": [], "regressed": [], "both_wrong": []}
    for key, old in left.items():
        new = right[key]
        assert old["y"] == new["y"]
        ix = (old["pred"] == old["y"], new["pred"] == new["y"])
        state = {(True, True): "both_right", (False, True): "fixed",
                 (True, False): "regressed", (False, False): "both_wrong"}[ix]
        states[state].append(key)
    return states


def fit(base, rows, val, vocab, lr, seed, name):
    init = random.Random(seed)
    sampler = random.Random(seed + 1000)
    width = len(vocab) + 1
    a = [[init.uniform(-0.1, 0.1) for _ in range(width)] for _ in range(RANK)]
    b = [[0.0] * RANK for _ in range(HIDDEN)]
    a_before = [row[:] for row in a]
    frozen = json.dumps(base)
    assert all(forward(base, features(r, vocab), (a, b))[2]
               == forward(base, features(r, vocab))[2] for r in val)
    data = [(features(r, vocab), r["y"], r["kind"] == "boundary") for r in rows]
    trace = []
    losses = []
    boundary_seen = 0
    for step in range(STEPS + 1):
        if step in (0, 40, 80, STEPS):
            val_now = evaluate(base, (a, b), val, vocab)
            m = val_now["metrics"]
            point = dict(step=step, train_exposures=step * BATCH, boundary_exposures=boundary_seen,
                         recent_train_loss=round(sum(losses) / len(losses), 4) if losses else None,
                         dev_accuracy=m["all"]["accuracy"], dev_precision=m["all"]["precision"],
                         dev_recall=m["all"]["recall"], dev_boundary_f1=m["boundary"]["f1"],
                         dev_routine_accuracy=m["routine"]["accuracy"])
            print(name, point)
            trace.append(point)
            losses = []
        if step == STEPS:
            break
        ga = [[0.0] * width for _ in range(RANK)]
        gb = [[0.0] * RANK for _ in range(HIDDEN)]
        scale = ALPHA / RANK
        for _ in range(BATCH):
            xs, y, is_boundary = sampler.choice(data)
            boundary_seen += is_boundary
            hidden, ax, p = forward(base, xs, (a, b))
            losses.append(-math.log(max(1e-12, p if y else 1 - p)))
            d = [(p - y) * v * (1 - h * h) for v, h in zip(base[1], hidden)]
            for k in range(RANK):
                for j in range(HIDDEN):
                    gb[j][k] += scale * d[j] * ax[k]
                da = scale * sum(d[j] * b[j][k] for j in range(HIDDEN))
                for i in xs:
                    ga[k][i] += da
        for k in range(RANK):
            for i in range(width):
                a[k][i] -= lr / BATCH * ga[k][i]
        for j in range(HIDDEN):
            for k in range(RANK):
                b[j][k] -= lr / BATCH * gb[j][k]
    assert frozen == json.dumps(base)
    assert a != a_before and any(x != 0 for row in b for x in row)
    return {"adapter": (a, b), "lr": lr, "train_rows": len(rows), "trace": trace, "dev": val_now}


def train(out, seed):
    data = load(out / "split.json")
    train_rows = data["train"]
    words = sorted({word for row in data["archive"] + train_rows + data["extra"]
                    for word in row["text"].split()})
    vocab = {word: i for i, word in enumerate(words, 1)}
    base = build_base(data["archive"], vocab)
    variants = {name: fit(base, rows, data["val"], vocab, lr, seed, name)
                for name, rows, lr in (("A", train_rows, 0.12),
                                       ("B", train_rows + data["extra"], 0.12),
                                       ("C", train_rows, 0.36))}
    pairs = {name: paired(variants["A"]["dev"], variants[name]["dev"]) for name in ("B", "C")}
    for name, result in pairs.items():
        print(f"Dev {name} vs A", {k: len(v) for k, v in result.items()})
    save(out / "fit.json", dict(seed=seed, steps=STEPS, batch=BATCH, rank=RANK, alpha=ALPHA,
                               test_sha256=data["test_sha256"], base=base, vocab=vocab,
                               variants=variants, dev_pairs=pairs))


def test(out, candidate):
    fit_result = load(out / "fit.json")
    test_path = out / "test.json"
    assert fit_result["test_sha256"] == fingerprint(test_path)
    rows = load(test_path)
    result = {}
    for name in dict.fromkeys(("A", candidate)):
        result[name] = evaluate(fit_result["base"], fit_result["variants"][name]["adapter"],
                                rows, fit_result["vocab"])
        print(f"Test {name}", result[name]["metrics"])
    pairs = paired(result["A"], result[candidate])
    print(f"Test {candidate} vs A", {k: len(v) for k, v in pairs.items()})
    save(out / "test_result.json", dict(candidate=candidate, models=result, pairs=pairs))


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("stage", choices=("prepare", "train", "test"))
    parser.add_argument("out", type=Path)
    parser.add_argument("--seed", type=int, default=23)
    parser.add_argument("--candidate", choices=("A", "B", "C"))
    args = parser.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)
    if args.stage == "prepare":
        prepare(args.out)
    elif args.stage == "train":
        train(args.out, args.seed)
    else:
        if args.candidate is None:
            parser.error("test 前先根据 Dev 锁定 --candidate A、B 或 C")
        if (args.out / "test_result.json").exists():
            parser.error("该目录已经做过 Test；请查看现有结果")
        test(args.out, args.candidate)
```
<!-- lora-demo:end -->

迁移到实际 LLM 时，保留切分、对照和验收逻辑；把这个小基座和手写反向传播换为真实预训练模型与 LoRA 训练框架，把二元答案换成线上所需的输出 schema，并增加对真实聊天模板、助手监督掩码、答案截断和生成解析率的检查。
