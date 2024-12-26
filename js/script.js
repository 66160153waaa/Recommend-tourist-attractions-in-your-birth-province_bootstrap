// ฟังก์ชันในการเปิด/ปิดเมนู
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('nav-open');
}

// ฟังก์ชันในการค้นหา
function searchFunction() {
    const searchQuery = document.getElementById("search").value;
    alert("คุณกำลังค้นหาคำว่า: " + searchQuery);
}

function loadBootstrap(callback) {
    const script = document.createElement("script");
    script.src = "https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.min.js";
    script.onload = callback; // เรียก callback หลังโหลดเสร็จ
    script.onerror = function () {
        console.error("Failed to load Bootstrap.");
    };
    document.head.appendChild(script);
}

// Get modal and buttons
var modal = document.getElementById("contactModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if clicked outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

