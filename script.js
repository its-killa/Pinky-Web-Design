const slides = [
    {
        title: "Design for Developer",
        desc: "Learn how to enhance your website like a pro.",
        image: "kuro.jpg"  // Ganti dengan nama file gambarmu
    },
    {
        title: "UI/UX Magic",
        desc: "Create aesthetic interfaces with simple code.",
        image: "melody.jpg" // Ganti dengan nama file gambarmu
    },
    {
        title: "Code & Chill",
        desc: "Programming is fun when you have good music.",
        image: "namo.jpg" // Ganti dengan nama file gambarmu
    }
];

let currentIndex = 0; // Posisi slide saat ini (mulai dari 0)

const titleEl = document.getElementById('hero-title');
const descEl = document.getElementById('hero-desc');
const imgEl = document.getElementById('hero-img');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function updateSlide() {
    // 1. Ambil data sesuai urutan (currentIndex)
    const data = slides[currentIndex];

    // 2. Ubah isi HTML
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    imgEl.src = data.image;

    // 3. Reset Animasi (Supaya efek muncul ulang)
    imgEl.classList.remove('floating-img');
    void imgEl.offsetWidth; 
    imgEl.classList.add('floating-img'); 

    // 4. Update Titik (Dots)
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// --- TOMBOL NEXT (KANAN) ---
nextBtn.addEventListener('click', () => {
    currentIndex++;
    // Kalau sudah di akhir, balik ke awal
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlide();
});

// --- TOMBOL PREV (KIRI) ---
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlide();
});

// --- KLIK TITIK (DOTS) ---
function pilihSlide(index) {
    currentIndex = index;
    updateSlide();
}
