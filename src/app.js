/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = [" ate ", " peed on ", " crushed ", " broke "];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    let rdmWho = Math.floor(Math.random() * who.length);
    let rdmAction = Math.floor(Math.random() * action.length);
    let rdmWhat = Math.floor(Math.random() * what.length);
    let rdmWhen = Math.floor(Math.random() * when.length);

    return (
      who[rdmWho] + action[rdmAction] + what[rdmWhat] + " " + when[rdmWhen]
    );
  }

  let button = document.createElement("button");
  button.innerHTML = "Generate Excuse";
  button.className = "excuse-button";
  button.addEventListener("click", function() {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  let buttonContainer = document.getElementById("button-container");
  buttonContainer.appendChild(button);
};
