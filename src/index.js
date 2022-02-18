import React from "react";
import ReactDOM from "react-dom";

const fName = "Danny";
const lName = "Franco";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      {fName} {lName}
    </h1>
    <h1>{fName + " " + lName}</h1>
    <h1>{`${fName} ${lName}`}</h1>
    <p>Your lucky number is {num}</p>
    <p>Your lucky number is {3 + 4}</p>
    <p>Your lucky number is {Math.random()}</p>
  </div>,
  document.getElementById("root")
);
