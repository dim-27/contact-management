const renderContacts = (contacts) => {
  //  fetch data to table container
  const getContactBody = document.getElementById('contactBody')
  const getContactCard = document.getElementById('contactCard')

  getContactBody.innerHTML = '';
  getContactCard.innerHTML = '';

  contacts.forEach((contact) => {
    const tr = document.createElement('tr');
    // <td class="" >${contact.firstname +contact.lastname}</td>
    tr.classList.add('p-6');

    tr.innerHTML = `
    <td class="px-6 py-4" >${contact.first_name}</td>
    <td class="px-6 py-4" >${contact.last_name}</td>
    <td class="px-6 py-4" >${contact.phone}</td>
    <td class="px-6 py-4" >${contact.email}</td>
    <td class="px-6 py-4" >${contact.label}</td>
    <td class="px-6 py-4 flex flex-row gap-4" >
      <a href="../pages/edit-contact.html?id=${contact.id}"><strong></strong>
        <span> 
          <i class="fa-regular fa-pen-to-square fa-xl active:scale-90 cursor-pointer"></i>
        </span>
      </a>
      <span class="removeContact" onclick=deleteContact(${contact.id})> 
        <i class="fa-solid fa-xmark fa-2xl active:scale-90 cursor-pointer"></i>
      </span>
    </td>
    `;
    getContactBody.appendChild(tr);
  })

  contacts.forEach((contact) => {
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
      <p><strong>First Name: </strong></p><p>${contact.first_name}</p>
      <p><strong>Last Name: </strong></p><p>${contact.last_name}</p>
      <p><strong>Phone: </strong></p><p>${contact.phone}</p>
      <p><strong>Email: </strong></p><p>${contact.email}</p>
      <p><strong>Labels: </strong></p><p>${contact.label}</p>
      <p>
        <a href="../pages/edit-contact.html?id=${contact.id}"><strong></strong>
        <span> 
          <i class="fa-regular fa-pen-to-square fa-xl active:scale-90 cursor-pointer"></i>
        </span>
        </a>
        <span class="removeContact" onclick=deleteContact(${contact.id})> 
          <i class="fa-solid fa-xmark fa-2xl active:scale-90 cursor-pointer"></i>
        </span>
      </p>
      
    `
    getContactCard.appendChild(div);
  })
} 

const deleteContact = (id) => {
  const contacts = getContacts();
  
  const filterContacts = contacts.filter((contact) => contact.id !== id);
  
  saveContacts(filterContacts);

  window.location.href = "/pages/index.html"
}

document.addEventListener('DOMContentLoaded', () => {
  fetchData((contacts) => {
    renderContacts(contacts)
  });
});

