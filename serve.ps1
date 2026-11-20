$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:5050/")
$listener.Start()
Write-Host "Server started at http://localhost:5050/"
$dir = "c:\Users\DELL\Documents\Dự án vela"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response
    
    $localPath = $req.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($localPath)) { $localPath = "index.html" }
    $localPath = [System.Uri]::UnescapeDataString($localPath)
    $fullPath = Join-Path $dir $localPath
    
    if (Test-Path $fullPath) {
        $bytes = [System.IO.File]::ReadAllBytes($fullPath)
        $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
        $res.ContentType = switch ($ext) {
            ".html" { "text/html; charset=utf-8" }
            ".js"   { "application/javascript" }
            ".css"  { "text/css" }
            ".png"  { "image/png" }
            ".jpg"  { "image/jpeg" }
            default { "application/octet-stream" }
        }
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $res.StatusCode = 404
    }
    $res.Close()
}
