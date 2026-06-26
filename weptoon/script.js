// 📌 จุดจัดการข้อมูลจุดเดียว (อยู่ในไฟล์ script.js)
const myWebtoons = [
    { id: 1, title: "เรื่องสั้นไร้สติ", genre: "คอมเมดี้", img: "images/1.jpg", isNew: true },
    { id: 2, title: "ศึกจอมเวททลายสวรรค์", genre: "แอคชั่น แฟนตาซี", img: "images/2.jpg", isNew: false },
    { id: 3, title: "แค้นนี้ต้องชำระ", genre: "ดราม่า", img: "images/3.jpg", isNew: true },
    { id: 4, title: "ชีวิตประจำวันของฉัน", genre: "ตลกคอมเมดี้", img: "images/1.jpg", isNew: false },
    { id: 5, title: "รักใสๆ หัวใจสี่ดวง", genre: "โรแมนติก", img: "images/2.jpg", isNew: false }
];

// ⚙️ ระบบอัตโนมัติ: อ่านข้อมูลด้านบนแล้วสร้างเป็นการ์ดโชว์บนหน้าเว็บ
function renderWebtoons() {
    const grid = document.getElementById('webtoon-grid');
    if (!grid) return; // ป้องกันข้อผิดพลาดหากหาไอดีไม่เจอ
    
    let html = '';

    myWebtoons.forEach((item) => {
        const badge = item.isNew ? `<span class="position-absolute top-0 start-0 bg-danger text-white px-2 py-0-5 m-2 rounded small" style="z-index: 1; font-size: 0.75rem;">ใหม่</span>` : '';

        html += `
            <div class="col">
                <a href="#" class="text-decoration-none text-dark">
                    <div class="card h-100 border-0 shadow-sm position-relative" style="border-radius: 10px; overflow: hidden;">
                        ${badge}
                        <img src="${item.img}" class="card-img-top object-fit-cover" alt="${item.title}" style="height: 200px;">
                        <div class="card-body p-2">
                            <div class="d-flex align-items-center mb-1">
                                <h3 class="text-secondary fw-bold me-2 m-0">${item.id}</h3>
                                <h6 class="card-title fw-bold m-0 text-truncate">${item.title}</h6>
                            </div>
                            <p class="card-text text-muted small mb-0 text-truncate">${item.genre}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
    });

    grid.innerHTML = html;
}

// สั่งให้ระบบเริ่มทำงาน
renderWebtoons();
