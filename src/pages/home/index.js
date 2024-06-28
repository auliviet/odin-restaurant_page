import logoSrc from "./logo.png";
import "./index.css";

export default function home() {
    let container = document.querySelector("#content");
    
    const logo = document.createElement("img");
    logo.src = logoSrc;
    container.append(logo);

    const title = document.createElement("h1");
    title.textContent = "Home";
    container.append(title);

}
