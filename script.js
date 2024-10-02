import { getContacts, saveContacts } from "./store.js";

const toggleSidebar = document.getElementById('toggle-sidebar')
const getSidebar = document.getElementById('sidebar')
const getNavbar = document.getElementById('navbar')
const getContactsBody = document.getElementById('contactsBody')
const getContactCard = document.getElementById('contactCard')
// const closeButton = document.getElementById('closeButton');
let getInitialContacs = []

const openSidebar = () => {
  getNavbar.classList.toggle('-translate-x-full');
}

const closeSidebar = () => {
  getNavbar.classList.toggle("-translate-x-full");
}

toggleSidebar.addEventListener('click', openSidebar);
getSidebar.addEventListener('click', closeSidebar);


/* fetch data to body */
const fetchData = () => {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      getInitialContacs = data
      saveContacts(getInitialContacs);
    })
    .catch((error) => {
      console.log("fail to fetch data", error);
    })
}

const renderContacts = () => {
  //  fetch data to table container
  fetchData()

  getContactsBody.innerHTML = '';
  getContactCard.innerHTML = '';
  
  let savedData = getContacts();

  savedData.forEach((contact) => {
    const tr = document.createElement('tr');
    // <td class="" >${contact.firstname +contact.lastname}</td>
    tr.classList.add('p-6');

    tr.innerHTML = `
    <td class="px-6 py-4 lg:px-2 lg-py-2" >${contact.firstname}</td>
    <td class="px-6 py-4 lg:px-2 lg-py-2" >${contact.lastname}</td>
    <td class="px-6 py-4 lg:px-2 lg-py-2" >${contact.phone}</td>
    <td class="px-6 py-4 lg:px-2 lg-py-2" >${contact.email}</td>
    <td class="px-6 py-4 lg:px-2 lg-py-2"  >${contact.label}</td>
    <td class="px-6 py-4 lg:px-2 lg-py-2" >
      <span>
        <i class="fa-regular fa-pen-to-square fa-xl active:scale-90 cursor-pointer"></i>
      </span>
    </td>
    `;

    getContactsBody.appendChild(tr);
  })

  savedData.forEach((contact) => {
    const div = document.createElement('div');

    div.classList.add('p-4');
    div.classList.add('mb-6');
    div.classList.add('border-4');
    div.classList.add('border-indigo-900');
    div.classList.add('rounded-lg');
    div.classList.add('grid');
    div.classList.add('grid-col-1');
    div.classList.add('gap-2')

    div.innerHTML = `
      <p><strong>First Name: </strong>${contact.firstname}</p>
      <p><strong>Last Name: </strong>${contact.lastname}</p>
      <p><strong>Phone: </strong>${contact.phone}</p>
      <p><strong>Email: </strong>${contact.email}</p>
      <p><strong>Labels: </strong>${contact.label}</p>
      <p><strong>Labels: </strong>
        <span> 
          <i class="fa-regular fa-pen-to-square fa-xl active:scale-90 cursor-pointer"></i>
        </span>
      </p>
    `

    getContactCard.appendChild(div);
  })
} 


renderContacts()
