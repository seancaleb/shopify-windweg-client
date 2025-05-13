function setDynamicHeaderHeight() {
  const header = document.querySelector('sticky-header');
  const announcementBar = document.querySelector('.announcement-bar');

  header.style.paddingTop = `${announcementBar.offsetHeight}px`;
}

window.addEventListener('load', setDynamicHeaderHeight);
