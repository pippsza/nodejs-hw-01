import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  let allData = await readContacts();
  allData.pop();
  writeContacts(allData);
};
removeLastContact();
