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
