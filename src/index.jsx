import * as React from "react";
import * as ReactDOM from "react-dom";
import { header } from "./header";


window.addEventListener("load", () => {
    ReactDOM.render(<header/>, document.getElementById("react_root"));
});