


// set data to local storage
const saveContacts = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// get data from local storae
const getContacts = () => {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : [];
}
