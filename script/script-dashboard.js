// Modal

function getId(clicked) {
    const trigger = document.getElementById(clicked.id);
    trigger.addEventListener('click', toggleModal);
}

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

// Navbar

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});