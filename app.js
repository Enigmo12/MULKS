const images = [];
for (let i = 1; i <= 20; i++) {
    images.push(`img${i}.jpg`);
}

const imagesPerPage = 8;
let currentPage = 1;

const gallery = document.getElementById('gallery');
const pagination = document.getElementById('pagination');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

function renderGallery() {
    gallery.innerHTML = '';

    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    images.slice(start, end).forEach(src => {
        const img = document.createElement('img');
        img.src = src;

        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = src;
        });

        gallery.appendChild(img);
    });
}

function renderPagination() {
    pagination.innerHTML = '';
    const pages = Math.ceil(images.length / imagesPerPage);

    for (let i = 1; i <= pages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;

        if (i === currentPage) btn.classList.add('active');

        btn.addEventListener('click', () => {
            currentPage = i;
            renderGallery();
            renderPagination();
        });

        pagination.appendChild(btn);
    }
}

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

renderGallery();
renderPagination();

