const contactsFile = require("./contacts");

const { Command } = require("commander");
const readline = require("readline");
const program = new Command();
const options = program.opts();
program
  .command("list")
  .description("Returns list")
  .option("-n, --name <type>", "user name")
  //   .argument("<string>")
  .action((str, options) => {
    invokeAction({
      action: "list",
    });
  });

//   node index list

//getById
program
  .command("get")
  .description("Returns byId")
  .option("-i, --id <type>", "user id")
  .argument("<string>")
  .action((str, options) => {
    console.log("str12312321");
    invokeAction({
      action: "get",
      id: str,
    });
  });
//   node index get -i --id "1DEXoP8AuCGYc1YgoQ6hw"

program
  .command("add")
  .description("Add new contact")
  .argument("<json>")
  .action((str, options) => {
    console.log("options: ", options);
    const input = JSON.parse(str);
    invokeAction({
      action: "add",
      id: input.id,
      name: input.name,
      email: input.email,
      phone: input.phone,
    });
  });

// node index add '{
//   "id": "Cfrfrf9sjBfCo4UJCWjzBnOtxl",
//   "name": "Simofrfrfn Morton",
//   "email": "dui.Fuscfre.diam@Donec.com",
//   "phone": "(233) 738-frfr2360"
// }'

program
  .command("remove")
  .description("Remove user byId")
  .option("-i, --id <type>", "user id")
  .argument("<string>")
  .action((str, options) => {
    console.log("str12312321");
    invokeAction({
      action: "remove",
      id: str,
    });
  });

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await contactsFile.modules.listContacts());
      break;

    case "get":
      // ... id
      console.log(await contactsFile.modules.getContactById(id));

      break;

    case "add":
      // ... name email phone
      console.log(`Added newContact`);
      console.log(await contactsFile.modules.addContact(name, email, phone));
      break;

    case "remove":
      // ... id
      console.log(`Delete contact by ID ${id}:`);
      console.log(await contactsFile.modules.removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
program.parse(process.argv);
