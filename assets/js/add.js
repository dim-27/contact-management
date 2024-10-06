const getFirstName = document.getElementById('contactFirstName');
const getLastName = document.getElementById('contactLastName');
const getPhoneNumber = document.getElementById('contactPhone');
const getEmail = document.getElementById('contactEmail');
const getLabel = document.getElementById('contactLabel');
const cancelButton = document.getElementById('buttonCancel');
const submitButton = document.getElementById('buttonSubmit');
const submitNewForm = document.getElementById('submitNewContact');

const submitContacts = (event) => {
  //prevents submit default value; use this when submitting new form
  event.preventDefault();
   // Steps to add new contacts to data
  // 1. get contacts from local storage
  // 2. create new object 
  // 3. add object to the data -> do not modify the original array
  const contacts = getContacts();
  
  const newContact = {
    id: contacts.length ? contacts[contacts.length-1].id + 1 : 1,
    label: getLabel.value,
    first_name: getFirstName.value,
    last_name: getLastName.value,
    email: getEmail.value,
    phone: getPhoneNumber.value
  }

  const updateContact = [...contacts, newContact];
  
  saveContacts(updateContact);    
  window.location.href = "../pages/index.html";
};


submitButton.addEventListener("click", () => {
  submitNewForm.addEventListener("submit", submitContacts)
})






