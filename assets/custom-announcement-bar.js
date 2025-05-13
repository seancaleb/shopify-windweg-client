const announcementMessages = document.querySelectorAll('.announcement-bar__message');
let index = 0;

setInterval(() => {
  announcementMessages[index].classList.remove('active');
  index = (index + 1) % announcementMessages.length;
  announcementMessages[index].classList.add('active');
}, 3000); // 3 seconds per message
