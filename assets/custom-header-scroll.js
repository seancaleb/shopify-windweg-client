window.addEventListener('scroll', function () {
  const header = document.querySelector('sticky-header');
  const headerWrapper = document.querySelector('.header-wrapper');
  const defaultLogo = document.querySelector('.header__logo--black');
  const whiteLogo = document.querySelector('.header__logo--white');

  if (window.scrollY > 0) {
    header.classList.add('scrolled-header');
    headerWrapper.classList.add('header-wrapper-scrolled');
    whiteLogo.style.display = 'none';
    defaultLogo.style.display = 'block';
  } else {
    header.classList.remove('scrolled-header');
    headerWrapper.classList.remove('header-wrapper-scrolled');
    whiteLogo.style.display = 'block';
    defaultLogo.style.display = 'none';
  }
});
