import Mortgage from "./mortage.js";

function run() {
  var mortgage = new Mortgage("Joan Templeton");
  var result = mortgage.applyFor("$100,000");

  console.log(result);
}

run();
