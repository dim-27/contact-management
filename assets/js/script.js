const fetchData = (callback) => {
  let getInitialContacts = localStorage.getItem('contacts')

  if(!getInitialContacts) {
    fetch('../data/data.json')
      .then(response => response.json())
      .then(data => {      
        getInitialContacts = data
        saveContacts(getInitialContacts);
        callback(getInitialContacts);
      })
      .catch((error) => {
        console.log("fail to fetch data", error);
      })
  } else {
    getInitialContacts = JSON.parse(getInitialContacts);
    callback(getInitialContacts);
  }
}

const renderContacts = (contacts) => {
  //  fetch data to table container
  // let savedData = getContacts();
  
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
    <td class="px-6 py-4" >
      <span>
        <i class="fa-regular fa-pen-to-square fa-xl active:scale-90 cursor-pointer"></i>
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
      <p><strong></strong>
        <span> 
          <i class="fa-regular fa-pen-to-square fa-xl active:scale-90 cursor-pointer"></i>
        </span>
      </p>
    `
    getContactCard.appendChild(div);
  })
} 

document.addEventListener('DOMContentLoaded', () => {
  fetchData((contacts) => {
    renderContacts(contacts)
  })
});

