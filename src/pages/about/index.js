import "./index.css";

export default function about() {
    let container = document.querySelector("#content");
    container.textContent = "";
    
    const title = document.createElement("h1");
    title.textContent = "About";
    container.append(title);

}
