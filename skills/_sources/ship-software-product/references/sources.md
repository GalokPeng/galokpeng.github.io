# 权威来源与时效

以下为工作流依据和执行时应优先核对的官方入口，不是平台配置的永久副本。平台规则、计费、SDK、签名、公证、商店和 CI 语法会变化；实施具体集成时按当时的官方文档与真实账号权限核对，不能照抄过期命令。

- [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)：公开接口、数字比较、预发布及 build metadata 的语义；项目采用其他版本政策时不强套。
- [GitHub Actions secure use](https://docs.github.com/en/enterprise-cloud%40latest/actions/reference/security/secure-use)：不受信任输入、凭据隔离与不可变依赖引用。其他 CI 使用相应平台官方机制。
- [Vercel deployment promotion](https://vercel.com/docs/deployments/promoting-a-deployment) 与 [Instant Rollback](https://vercel.com/docs/instant-rollback)：生产提升/流量别名与回退；其他云平台分别核对。
- [The Update Framework specification](https://theupdateframework.github.io/specification/latest/)：更新元数据、目标与信任链、时效和回滚攻击模型。不是要求所有小项目自己实现一套 TUF。
- [SLSA specification](https://slsa.dev/spec/v1.2/)：来源与构建 provenance 的概念及逐步加强路径。未按规范验证，不能声称达到某个等级。
- [SPDX license information](https://spdx.dev/learn/handling-license-info/)：许可证标识和实际分发物许可记录。
- [Open Source Definition](https://opensource.org/osd)：源码公开不自动构成正式开源；限制商业领域的许可与 OSI 开源定义不同。不要擅自选许可证、移除声明或声称依赖兼容，按真实条款核对，复杂分发寻求合适的专业审查。

上述通用入口于 2026-11-12 核对。Windows 包、签名、受限能力、送审、认证和 GitHub 附件的官方文档于 2026-11-23 核对，链接列在相应操作旁。[Windows 商店流程](10-windows-store.md) · [构建与发布流水线](05-build-release.md)
