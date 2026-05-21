// Lightweight interaction script: menu toggle and contact modal.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const contactModal = document.getElementById('contactModal');
const contactButtons = document.querySelectorAll('.open-contact');
const modalClose = document.querySelector('.modal-close');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
    });
}

contactButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (contactModal) contactModal.classList.add('open');
    });
});

if (modalClose) {
    modalClose.addEventListener('click', () => {
        if (contactModal) contactModal.classList.remove('open');
    });
}

if (contactModal) {
    contactModal.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.classList.remove('open');
        }
    });
}

const imagePreviewModal = document.getElementById('imagePreviewModal');
const imagePreviewImg = imagePreviewModal ? imagePreviewModal.querySelector('img') : null;
const imageClose = imagePreviewModal ? imagePreviewModal.querySelector('.image-preview-close') : null;
const projectImageLinks = document.querySelectorAll('.project-image-link');

projectImageLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const imageSource = link.dataset.image;
        if (imagePreviewModal && imagePreviewImg && imageSource) {
            imagePreviewImg.src = imageSource;
            imagePreviewModal.classList.add('open');
        }
    });
});

if (imageClose) {
    imageClose.addEventListener('click', () => {
        if (imagePreviewModal) imagePreviewModal.classList.remove('open');
    });
}

if (imagePreviewModal) {
    imagePreviewModal.addEventListener('click', (event) => {
        if (event.target === imagePreviewModal) {
            imagePreviewModal.classList.remove('open');
        }
    });
}

// All entrance animations and particle background removed as requested.
