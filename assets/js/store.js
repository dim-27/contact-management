


const fetchData = (callback) => {
  let getInitialContacts = localStorage.getItem('contacts')

  if(!getInitialContacts) {
    // fetch data from json and save data if local storage is empty
    fetch('../data/data.json')
      .then(response => response.json())
      .then(data => {      
        getInitialContacts = data;
        saveContacts(getInitialContacts);
        callback(getInitialContacts);
      })
      .catch((error) => {
        console.log("fail to fetch data", error);
        callback(error);
      })
  } else {
    //  if not empty then get it from local storage
    getInitialContacts = JSON.parse(getInitialContacts);
    callback(getInitialContacts);
  }
}

// set data to local storage
const saveContacts = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// get data from local storae
const getContacts = () => {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : []; 
}

