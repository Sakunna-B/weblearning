document.addEventListener('DOMContentLoaded', function () { // ตรวจสอบว่า DOM ถูกโหลดแล้ว
    const filterButtons = document.querySelectorAll('.filter-btn');
    const toonItems = document.querySelectorAll('.toon-item');
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    filterButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedFilter = this.getAttribute('data-filter');

            toonItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (selectedFilter === 'all' || itemCategory.includes(selectedFilter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    //ค้นหาตามชื่อ
   function filterToonsByName() {
        // ดึงคำที่ผู้ใช้พิมพ์ และแปลงเป็นตัวพิมพ์เล็ก (LowerCase) เพื่อให้พิมพ์พิมพ์เล็กหรือใหญ่ก็เจอเหมือนกัน
        const searchText = searchInput.value.toLowerCase().trim();
        // วนลูปตรวจเช็คการ์ตูนทุกเรื่องทีละกล่อง
        toonItems.forEach(item => {
            // ไปดึงข้อความที่เป็นชื่อเรื่องการ์ตูน (ดึงจากคลาส .card-title ด้านในการ์ด)
            const titleElement = item.querySelector('.card-title');
            const toonTitle = titleElement ? titleElement.textContent.toLowerCase() : '';

            // ตรวจสอบว่าชื่อการ์ตูนมีคำที่เราพิมพ์ค้นหาอยู่หรือไม่
            if (toonTitle.includes(searchText)) {
                item.style.display = 'block'; // ถ้าเจอคำนั้น ให้แสดงการ์ด
            } else {
                item.style.display = 'none';  // ถ้าไม่เจอคำนั้น ให้ซ่อนการ์ดไว้
            }
        });
    }
    // ดักจับเหตุการณ์แบบ Real-time:ค้นหาทันทีไม่ต้องกดปุ่ม Search
    searchInput.addEventListener('input', filterToonsByName);
    // ดักจับเหตุการณ์ตอนกดปุ่ม Search หรือกด Enter ในช่องค้นหา
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรชตัวเอง
        filterToonsByName();
    });
});
