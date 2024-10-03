


// set data to local storage
const saveContacts = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// get data from local storae
const getContacts = () => {
  const contacts = localStorage.getItem("contacts");

  if(!contacts) {
    saveContacts([]);
  }

  try {
    return JSON.parse(contacts);
  } catch(error) {
    console.log("fail to get contacts",error);
  }
}

export {saveContacts, getContacts};