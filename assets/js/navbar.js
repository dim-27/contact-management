const toggleSidebar = document.getElementById('toggle-sidebar')
const getSidebar = document.getElementById('sidebar')
const getNavbar = document.getElementById('navbar')

// const closeButton = document.getElementById('closeButton');

const openSidebar = () => {
  getNavbar.classList.toggle('-translate-x-full');
  localStorage.setItem('openSidebar', getNavbar.classList.contains('translate-x-0'));
}

const closeSidebar = () => {
  getNavbar.classList.toggle("-translate-x-full");
}

toggleSidebar.addEventListener('click', openSidebar);
getSidebar.addEventListener('click', closeSidebar);

if (localStorage.getItem('openSidebar') === 'false') {
  getNavbar.classList.add('-translate-x-full');
  getNavbar.classList.remove('translate-x-0');
} 