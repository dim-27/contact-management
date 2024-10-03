import { getContacts, saveContacts } from "./store.js";

const getContactsBody = document.getElementById('contactsBody')
const getContactCard = document.getElementById('contactCard')

let getInitialContacs = []

/* fetch data to body */
const fetchData = () => {
  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      getInitialContacs = data
      saveContacts(getInitialContacs);
      renderContacts();
    })
    .catch((error) => {
      console.log("fail to fetch data", error);
    })
}

const renderContacts = () => {
  //  fetch data to table container

  getContactsBody.innerHTML = '';
  getContactCard.innerHTML = '';
  
  let savedData = getContacts();

  savedData.forEach((contact) => {
    const tr = document.createElement('tr');
    // <td class="" >${contact.firstname +contact.lastname}</td>
    tr.classList.add('p-6');

    tr.innerHTML = `
    <td class="px-6 py-4" >${contact.firstname}</td>
    <td class="px-6 py-4" >${contact.lastname}</td>
    <td class="px-6 py-4" >${contact.phone}</td>
    <td class="px-6 py-4" >${contact.email}</td>
    <td class="px-6 py-4" >${contact.label}</td>
    <td class="px-6 py-4" >
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
    div.classList.add('border-2');
    div.classList.add('border-black');
    div.classList.add('border-2');
    div.classList.add('rounded-2xl');
    div.classList.add('break-words');
    div.classList.add('grid');
    div.classList.add('grid-cols-2');
    div.classList.add('gap-4');

    div.innerHTML = `
      <p><strong>First Name: </strong></p><p>${contact.firstname}</p>
      <p><strong>Last Name: </strong></p><p>${contact.lastname}</p>
      <p><strong>Phone: </strong></p><p>${contact.phone}</p>
      <p><strong>Email: </strong></p><p>${contact.email}</p>
      <p><strong>Labels: </strong></p><p>${contact.label}</p>
      <p><strong></strong>
        <span> 
          <i class="fa-regular fa-pen-to-square fa-xl active:scale-90 cursor-pointer"></i>
        </span>
      </p>
    `
    getContactCard.appendChild(div);
  })
} 


window.addEventListener('DOMContentLoaded', (event) => {
  fetchData();
});
