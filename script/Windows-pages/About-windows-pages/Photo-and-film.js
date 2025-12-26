// photo and film editing page js

let Edit_photos_btn = document.getElementById("Edit-photos-btn")
let OneDrive_backup_btn = document.getElementById("OneDrive-backup-btn")
let iCloud_integration_btn = document.getElementById("iCloud-integration-btn")

Edit_photos_btn.addEventListener("click",()=>{
    Edit_photos_btn.style.borderBottom = "3px solid #0067b8"
    OneDrive_backup_btn.style.borderBottom = "none"
    iCloud_integration_btn.style.borderBottom= "none"
})

OneDrive_backup_btn.addEventListener("click",()=>{
    OneDrive_backup_btn.style.borderBottom = "3px solid #0067b8"
    Edit_photos_btn.style.borderBottom = "none"
    iCloud_integration_btn.style.borderBottom= "none"
})

iCloud_integration_btn.addEventListener("click",()=>{
    OneDrive_backup_btn.style.borderBottom = "none"
    Edit_photos_btn.style.borderBottom = "none"
    iCloud_integration_btn.style.borderBottom= "3px solid #0067b8"  
})