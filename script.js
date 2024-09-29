const toggleSidebar = document.getElementById('toggle-sidebar')
const getSidebar = document.getElementById('sidebar')

toggleSidebar.addEventListener('click', () => {
  getSidebar.classList.toggle('hidden')
})
