const saveContact = document.getElementById('saveContact');
const buttonSave = document.getElementById('buttonSave');
const getFirstName = document.getElementById('contactFirstName');
const getLastName = document.getElementById('contactLastName');
const getPhoneNumber = document.getElementById('contactPhone');
const getEmail = document.getElementById('contactEmail');
const getLabel = document.getElementById('contactLabel');

const getContactById = () => {
  const contacts = getContacts();
  
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const contactId = params.get('id');  

  if (contactId) {
    const contact = contacts.find((contact) => contact.id == contactId);
    if (contact) {
      getFirstName.value = contact.first_name;
      getLastName.value = contact.last_name;
      getPhoneNumber.value = contact.phone;
      getEmail.value = contact.email;
      getLabel.value  = contact.label;
    }
  }
}

const editContact = (event) => {
  event.preventDefault();
  const contacts = getContacts();
  
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const contactId = Number(params.get('id'));    

  const indexContact = contacts.findIndex((contact) => contact.id === contactId);  
  
  if (indexContact !== -1) {
    contacts[indexContact].first_name = getFirstName.value;
    contacts[indexContact].last_name = getLastName.value;
    contacts[indexContact].phone = getPhoneNumber.value;
    contacts[indexContact].email = getEmail.value;
    contacts[indexContact].label = getLabel.value;
    
    saveContacts(contacts);
  }

  window.location.href = "/index.html"
}

getContactById();
buttonSave.addEventListener('click', () => {
  saveContact.addEventListener('submit', editContact)
});