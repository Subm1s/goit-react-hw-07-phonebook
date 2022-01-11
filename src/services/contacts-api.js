import axios from 'axios';

axios.defaults.baseURL =
  'https://61dd87e4f60e8f00176688d6.mockapi.io/contacts/';

const getContacts = async () => {
  return await axios({
    method: 'get',
  });
};

const addContact = async contact => {
  return await axios({
    method: 'post',
    data: contact,
  });
};

const delContact = async id => {
  return await axios({
    method: 'delete',
    url: id,
  });
};

export { getContacts, addContact, delContact };
