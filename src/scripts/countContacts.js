import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  const allData = await readContacts();
  let i = 0;
  for (const item of allData) {
    i++;
  }
  return `Items in database is ${i}`;
};
console.log(await countContacts());
