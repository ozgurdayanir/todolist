function newElement() {
    const taskInput = document.getElementById("task").value;

    if (taskInput === "") {
        // Boş görev girildiğinde hata toast'ı göster
        const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
        errorToast.show();
        return;
    }

    // Görev eklendiğinde başarı toast'ı göster
    const successToast = new bootstrap.Toast(document.getElementById('successToast'));
    successToast.show();

    // Yeni görev oluştur
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.className = "d-flex justify-content-between";
    li.textContent = taskInput;
    li.addEventListener ("click", function(){
        if (document.getElementsByTagName('li'))
            this.classList.toggle('checked')
    }); 

     // Silme butonu oluştur
    const removeBtn = document.createElement("button");
    const icon = document.createElement("span");
    icon.className = "material-symbols-outlined";
    icon.textContent = "close"; // Çarpı işareti
    removeBtn.appendChild(icon);
    removeBtn.onclick = function () {
        removeElement(this);
    };

    
    li.appendChild(removeBtn);
    list.appendChild(li);

    document.getElementById("task").value = ""; // Input alanını temizle
}

// Görevi tamamlandı olarak işaretleme ve geri alma
function toggleComplete(item) {
    item.classList.toggle("checked");
    
    // Eğer tamamlanma ikonu yoksa ekle, varsa kaldır
    // if (!item.querySelector(".completed-icon")) {
    //     const completedIcon = document.createElement("span");
    //     completedIcon.className = "material-symbols-outlined completed-icon";
    //     completedIcon.textContent = "check"; // Onay işareti
    //     item.prepend(completedIcon);
    // } else {
    //     item.querySelector(".completed-icon").remove(); // İkonu geri al
    // }
}

function removeElement(element) {
    element.parentElement.remove(); // Sil butonuna basıldığında görevi listeden kaldır
}