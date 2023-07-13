import { PhoneBookApp } from "./phonebookAPP/x-phonebookApp.js";
import { StateApplicationHandler } from "./phonebookAPP/controller/controllerApp.js";

function main() {
  let app = new PhoneBookApp();
  document.body.appendChild(app);
}

window.addEventListener("load", main);
