const toggleSidebar = document.getElementById('toggle-sidebar')
const getSidebar = document.getElementById('sidebar')
const getNavbar = document.getElementById('navbar')
const filterFavourites = document.getElementById('filterFavourites');
const filterFriends = document.getElementById('filterFriends');
const filterColleagues = document.getElementById('filterColleagues');
const filterFamilies = document.getElementById('filterFamilies');
const filterButton = document.getElementById('filterBtn');
const searchBar = document.getElementById('search-form');


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

const findFavourites = (event) => {
  event.preventDefault();

  const contacts = getContacts();
  const selectFavourites = filterFavourites.getAttribute('data-name');

  const filterData = contacts.filter((contact) => contact.label.toLowerCase() ===  selectFavourites);
  
  if (selectFavourites) {
    renderContacts(filterData);
  } else {
    renderContacts(contacts);
  }
}

const findFamilies = (event) => {
  event.preventDefault();
  
  const contacts = getContacts();
  const selectFamilies = filterFamilies.getAttribute('data-name');

  const filterData = contacts.filter((contact) => contact.label.toLowerCase() === selectFamilies);

  if (selectFamilies) {
    renderContacts(filterData);
  } else {
    renderContacts(contacts);
  }
}

const findColleagues = (event) => {
  event.preventDefault();

  const contacts = getContacts();
  const selectColleagues = filterColleagues.getAttribute("data-name");

  const findData = contacts.filter((contact) => contact.label.toLowerCase() === selectColleagues);

  if (selectColleagues) {
    renderContacts(findData);
  } else {
    renderContacts(contacts)
  }
}

const findFriends = (event) => {
  event.preventDefault();

  const contacts = getContacts();
  const selectFriends = filterFriends.getAttribute("data-name");

  const findData = contacts.filter((contact) => contact.label.toLowerCase() === selectFriends);

  if (selectFriends) {
    renderContacts(findData);
  } else {
    renderContacts(contacts);
  }
}

filterFavourites.addEventListener("click", findFavourites);
filterFamilies.addEventListener("click", findFamilies);
filterColleagues.addEventListener("click", findColleagues);
filterFriends.addEventListener("click", findFriends);
searchBar.addEventListener("input", () => {
  const contacts = getContacts();
    
})