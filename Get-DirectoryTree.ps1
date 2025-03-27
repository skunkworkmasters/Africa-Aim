function Get-DirectoryTree {
    param (
        [string]$Path,
        [int]$Indent = 0
    )

    $items = Get-ChildItem -Path $Path -Force
    foreach ($item in $items) {
        $indentation = ' ' * $Indent
        if ($item.PSIsContainer) {
            Write-Output "$indentation+--- $($item.Name)"
            Get-DirectoryTree -Path $item.FullName -Indent ($Indent + 4)
        } else {
            Write-Output "$indentation|--- $($item.Name)"
        }
    }
}

Get-DirectoryTree -Path "C:\Users\musta\Desktop\brand_new_project\Africa_project\Africa-Aim"
