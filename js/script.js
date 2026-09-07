// 1A. Data Proyek Teknis (Real Coding)
const projectsData = [
    {
        title: "E-Commerce System (Backend API)",
        description: "Merancang sistem backend e-commerce yang skalabel. Fitur mencakup manajemen role (Admin/User), operasi CRUD dinamis, serta logika pemotongan stok inventaris otomatis saat transaksi.",
        tags: ["REST API", "MySQL", "Database Architecture", "JavaScript", "HTML5/CSS3"],
        image: "css/image/ecommerce-backend.png",
        link: "",
        github: "https://github.com/billyanz/ecommerce-backend-engine"
    },
];

// 1B. Data Sertifikasi & Pengalaman (Kredensial)
const certsData = [
    {
        title: "pemrograman SOLID",
        description: "",
        tags: ["SOLID", "OOP"],
        image: "css/image/dicoding-solid.png",
        link: "https://www.dicoding.com/certificates/81P2KQO0OXOY",
        github: "" 
    },
    {
        title: "Dasar Pemrograman Web",
        description: "Penyelesaian kelas fundamental dari Dicoding. Fokus pada struktur pengembangan web modern menggunakan HTML, CSS, dan logika dasar.",
        tags: ["HTML", "CSS", "Dicoding"],
        image: "css/image/web-programmer-basic.png",
        link: "https://www.dicoding.com/certificates/MEPJME10JP3V",
        github: "" 
    }
];

// 2. Fungsi Render Dinamis
function renderCards(dataArray, containerId) {
    const container = document.getElementById(containerId);
    
    dataArray.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card', 'fade-up'); 
        card.style.transitionDelay = `${index * 0.15}s`;
        
        const tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        // Logika Tombol 1: Detail / Demo Link
        const detailLink = (item.link && item.link !== "#") 
            ? `<a href="${item.link}" target="_blank" class="link-btn">Lihat Detail</a>` 
            : '';
        
        // Logika Tombol 2: GitHub Link
        const githubLink = item.github 
            ? `<a href="${item.github}" target="_blank" class="link-btn"><i class="devicon-github-original"></i> GitHub</a>` 
            : '';

        card.innerHTML = `
            <div class="project-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="project-content">
                <h3>${item.title}</h3>
                <div class="project-tags">${tagsHTML}</div>
                <p>${item.description}</p>
                <div class="project-links">
                    <a href="${item.link}" target="_blank" class="link-btn">Lihat Detail</a>
                    ${githubLink}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 3. Scroll Animation (Intersection Observer)
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    fadeElements.forEach(el => observer.observe(el));
}

// Inisialisasi saat web diload
document.addEventListener('DOMContentLoaded', () => {
    // Render dua seksi berbeda
    renderCards(projectsData, 'project-container');
    renderCards(certsData, 'cert-container');
    
    setTimeout(() => { initScrollAnimations(); }, 100);
});