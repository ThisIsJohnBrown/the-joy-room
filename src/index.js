import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
fetch("https://flash-inexpensive-rover.glitch.me/thejoyroom.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
