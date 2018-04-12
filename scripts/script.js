function navBar() {
    var menu = document.getElementById("myTopNav");
    
    if (menu.className === "navigation") {
        menu.className += " responsive";
    
    } else {
        menu.className = "navigation";
    
    }

};