const menuBtn = document.getElementById('menuBtn');
const sideBar = document.getElementById('sideBar');

let isOpen = false;

const toggleBtn = () => {
  if (isOpen) {
    sideBar.classList.add('hidden');
    isOpen = false;
  } else {
    sideBar.classList.remove('hidden');
    isOpen = true;
  }
};

menuBtn.addEventListener('click', toggleBtn);
