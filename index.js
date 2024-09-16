// Accordion

const accordionItems = document.querySelectorAll('.button-dropdown');
accordionItems.forEach((item) =>
  item.addEventListener('click', () => {
    const isItemOpen = item.classList.contains('button-dropdown_active');
    accordionItems.forEach((item) =>
      item.classList.remove('button-dropdown_active')
    );
    if (!isItemOpen) {
      item.classList.toggle('button-dropdown_active');
    }
  })
);

// Fixed header
const headerContainer = document.querySelector('.header__container');

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 117) {
    headerContainer.classList.add('sticky');
  } else {
    headerContainer.classList.remove('sticky');
  }
});

// Chode language

const langBtn = document.querySelector('.header__lang');
const langs = document.querySelector('header .header__langs');

langBtn.addEventListener('click', () => {
  langs.classList.toggle('header__langs_hidden');
});
