window.addEventListener('scroll', function () {
  const header = document.querySelector('sticky-header');
  const headerWrapper = document.querySelector('.header-wrapper');
  const defaultLogo = document.querySelector('.header__logo--black');
  const whiteLogo = document.querySelector('.header__logo--white');
  const iconMenu = document.querySelector('.icon.icon-hamburger');

  if (window.scrollY > 0) {
    header.classList.add('scrolled-header');
    headerWrapper.classList.add('header-wrapper-scrolled');
    whiteLogo.style.display = 'none';
    defaultLogo.style.display = 'block';
    iconMenu.style.display = 'block';
  } else {
    header.classList.remove('scrolled-header');
    headerWrapper.classList.remove('header-wrapper-scrolled');
    whiteLogo.style.display = 'block';
    defaultLogo.style.display = 'none';
    iconMenu.style.display = 'none';
  }
});

window.addEventListener('load', () => {
  const header = document.querySelector('sticky-header');
  const headerWrapper = document.querySelector('.header-wrapper');
  const defaultLogo = document.querySelector('.header__logo--black');
  const whiteLogo = document.querySelector('.header__logo--white');
  const iconMenu = document.querySelector('.icon.icon-hamburger');

  if (window.scrollY !== 0) {
    header.classList.add('scrolled-header');
    headerWrapper.classList.add('header-wrapper-scrolled');
    whiteLogo.style.display = 'none';
    defaultLogo.style.display = 'block';
    iconMenu.style.display = 'block';
  } else {
    header.classList.remove('scrolled-header');
    headerWrapper.classList.remove('header-wrapper-scrolled');
    whiteLogo.style.display = 'block';
    defaultLogo.style.display = 'none';
    iconMenu.style.display = 'none';
  }
});
