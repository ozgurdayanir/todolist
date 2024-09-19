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

    // Silme butonu oluştur
    const removeBtn = document.createElement("button");
    removeBtn.className = "close";
    removeBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';

    // Silme butonuna tıklayınca görevi kaldır
    removeBtn.onclick = function () {
        removeElement(this);
    };
    li.appendChild(removeBtn);

    // Görev öğesine tıklayınca tamamlandı olarak işaretleme
    li.addEventListener("click", function (event) {
        if (event.target !== removeBtn) { // Silme butonuna tıklanmadığında çalışsın
            li.classList.toggle("checked");
        }
    });

    // Listeye yeni öğeyi ekle
    list.appendChild(li);

    // Input alanını temizle
    document.getElementById("task").value = "";
}

// Görevi listeden kaldırma fonksiyonu
function removeElement(element) {
    element.parentElement.remove();
}

// Görevleri tamamlandı olarak işaretleme (mevcut liste elemanları için de çalışır)
function toggleComplete(item) {
    item.classList.toggle("checked");
}