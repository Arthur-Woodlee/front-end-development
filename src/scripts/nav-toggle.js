// navToggle.js
export function initNavToggle() {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const navItems = document.querySelector('.header__nav-items');

  menuToggle.addEventListener('click', () => {
    if (navItems.classList.contains('header__nav-items--open')) {
      navItems.classList.remove('header__nav-items--open');
      navItems.classList.add('header__nav-items--closed');
    } else {
      navItems.classList.remove('header__nav-items--closed');
      navItems.classList.add('header__nav-items--open');
    }
  });
}