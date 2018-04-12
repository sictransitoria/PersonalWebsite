function navBar() {
    var menu = document.getElementById("myTopNav");
    
    if (menu.className === "navigation") {
        menu.className += " responsive";
    
    } else {
        menu.className = "navigation";
    
    }

};

if($(window).width() <= 860) {
  $('ul').hide();
}