window.addEventListener('load', () => {
    const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
    const navMenu = document.querySelector('#nav_menu');
    const memberCount = document.querySelector('.member_count');
    const memberCountOptions = document.querySelector('.member_count_options');
    const minusBtn = document.querySelectorAll('[data-minus]');
    const plusBtn = document.querySelectorAll('[data-plus]');
    const counterResault = document.querySelectorAll('[data-resault]');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('menu_active');
    });

    memberCount.addEventListener('click', () => {
        memberCountOptions.classList.toggle('member_count_active');
    });

    const counterFilter = (minus, plus, resault) => {
        let i = 0;

        minus.addEventListener('click', () => {
            if (resault.innerHTML >= 1) {
                resault.innerHTML = --i;
            }
        });

        plus.addEventListener('click', () => {
            if (resault.innerHTML <= 8) {
                resault.innerHTML = ++i;
            }
        });
    };

    counterFilter(minusBtn[0], plusBtn[0], counterResault[0]);
    counterFilter(minusBtn[1], plusBtn[1], counterResault[1]);
    counterFilter(minusBtn[2], plusBtn[2], counterResault[2]);

});
// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);


// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close for Outside click
function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}