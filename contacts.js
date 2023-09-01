const { writeFile } = require("fs");
const fs = require("fs/promises");
const path = require("path");
const { json } = require("stream/consumers");
const myPath = path.join("/db", "/contacts");
const contacts = require("." + myPath);
// contacts.js

// const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код. Повертає масив контактів.

  const result = await fs
    .readFile("./db/contacts.json", "utf8")
    .then((data) => data)
    .catch((err) => err);
  console.table(JSON.parse(result));
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const result = await fs
    .readFile("./db/contacts.json", "utf8")
    .then((data) => data)
    .catch((err) => err);
  console.log(
    `Get contact by ID ${contactId}:`,
    JSON.parse(result).filter((item) => item.id === contactId)
  );
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const result = await fs
    .readFile("./db/contacts.json", "utf8")
    .then((data) => data)
    .catch((err) => err);
  console.log(`Delete contact by ID ${contactId}:`);
  const newContact = JSON.parse(result).filter((item) => item.id !== contactId);
  fs.writeFile("./db/contacts.json", JSON.stringify(newContact));
}

async function addContact(name, email, phone) {
  const result = await fs
    .readFile("./db/contacts.json", "utf8")
    .then((data) => data)
    .catch((err) => err);
  const newContact = {
    id: Math.random().toString(),
    name,
    email,
    phone,
  };
  const arr = JSON.parse(result);
  arr.push(newContact);
  console.log(`Added newContact`);
  fs.writeFile("./db/contacts.json", JSON.stringify(arr));
}
// listContacts()
// getContactById("qdggE76Jtbfd9eWJHrssH")
// removeContact("qdggE76Jtbfd9eWJHrssH");
addContact("Viktor", "3err3", "r4r4rr4");

// const rd = fs
//   .readFile("./db/contacts.json")
//   .then((data) => console.log("data", JSON.parse(data.toString())));
