import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  let contactsSafe = [];
  const allData = await readContacts();

  for (let i = 1; i <= number; i++) {
    contactsSafe.push(createFakeContact());
  }
  for (let item of contactsSafe) {
    allData.push(item);
  }
  writeContacts(allData);
};

generateContacts(2);
