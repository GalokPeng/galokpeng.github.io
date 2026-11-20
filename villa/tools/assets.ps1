# Download licensed CC0 assets from the Poly Haven catalogue and verify the supplied digests.
$ErrorActionPreference = 'Stop'
$base = Join-Path $PSScriptRoot '../.qa/source-assets'
$agent = 'Galok local island villa (local development)'
function AssetFiles($id) {
    $json = curl.exe -fsSL --retry 2 --max-time 30 -A $agent "https://api.polyhaven.com/files/$id" | Out-String
    if ($LASTEXITCODE) { throw "Asset catalogue unavailable: $id" }
    return $json | ConvertFrom-Json -AsHashtable
}
function Download($entry, $file) {
    if (!$entry.url) { throw "No asset URL for $file" }
    [void](New-Item -ItemType Directory -Force -Path (Split-Path $file))
    if ((Test-Path -LiteralPath $file) -and (Get-FileHash $file -Algorithm MD5).Hash -eq $entry.md5) { return }
    curl.exe -fsSL --retry 2 --max-time 90 --output $file $entry.url
    if ($LASTEXITCODE -or (Get-FileHash $file -Algorithm MD5).Hash -ne $entry.md5) { throw "Download failed: $file" }
}
foreach ($id in @('sofa_03','mid_century_lounge_chair','modern_coffee_table_01','potted_plant_02','dining_chair_02','ceramic_vase_01','rock_09')) {
    $asset = (AssetFiles $id).gltf.'1k'.gltf
    $folder = Join-Path $base $id
    Download $asset (Join-Path $folder 'model.gltf')
    foreach ($dep in $asset.include.GetEnumerator()) { Download $dep.Value (Join-Path $folder $dep.Key) }
}
foreach ($id in @('herringbone_parquet','rough_linen','marble_01','wood_floor_deck','plastered_wall_02','rock_face_03','aerial_sand','wood_table_001','quatrefoil_jacquard_fabric','clay_roof_tiles_03')) {
    $a = AssetFiles $id
    $diff = $a.Keys | Where-Object { $_ -match '^(diffuse|diff|color|albedo)$' } | Select-Object -First 1
    Download $a[$diff].'1k'.jpg (Join-Path $base "$id/color.jpg")
    Download $a.nor_gl.'1k'.jpg (Join-Path $base "$id/normal.jpg")
}
$sky = (AssetFiles 'kloofendal_48d_partly_cloudy_puresky').hdri.'1k'.hdr
Download $sky (Join-Path $base 'coastal-sky.hdr')
foreach ($id in @(436535,437039)) {
    $dest = Join-Path $base "art-$id.jpg"
    if (Test-Path -LiteralPath $dest) { continue }
    $work = curl.exe -fsSL --retry 2 "https://collectionapi.metmuseum.org/public/collection/v1/objects/$id" | Out-String | ConvertFrom-Json
    if (!$work.isPublicDomain -or !$work.primaryImageSmall) { throw "Open-access artwork unavailable: $id" }
    curl.exe -fsSL --retry 2 --max-time 60 --output $dest $work.primaryImageSmall
    if ($LASTEXITCODE) { throw "Artwork download failed: $id" }
}
python (Join-Path $PSScriptRoot 'prepare-assets.py')
if ($LASTEXITCODE) { throw 'Could not prepare the browser assets.' }
