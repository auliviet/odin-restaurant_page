// Stylesheets
import "./style.css"

// Pages
import home from "./pages/home/";
import about from "./pages/about/";

// Event listeners
let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    let id = button.id;

    switch (id) {
        case "home":
            button.addEventListener("click", home);
            break;
        
        case "menu":
            button.addEventListener("click", menu);
            break;
        
        case "about":
            button.addEventListener("click", about);
            break;
    
        default:
            break;
    }
}


home();