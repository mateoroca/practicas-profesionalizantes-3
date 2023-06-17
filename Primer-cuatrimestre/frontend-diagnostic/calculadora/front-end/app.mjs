import { Model } from "./src/model/model.js";
import { CalculatorComponent } from "./src/Calculator.js";

function main() {
  let calculator = new CalculatorComponent(Model);

  document.body.appendChild(calculator);
}

window.addEventListener("load", main);
