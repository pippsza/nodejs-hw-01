import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const allData = await readContacts();
  const newContact = createFakeContact();
  allData.push(newContact);
  writeContacts(allData);
};

addOneContact();
