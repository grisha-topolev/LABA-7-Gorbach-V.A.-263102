var flags = [false, false, false] 
 
function expandText(index) { 
    let texts = document.getElementsByClassName("text") 
 
    if (flags[index]) { 
        texts[index].style.height = 312 + "px" 
    } else { 
        texts[index].style.height = "auto" 
    } 
    flags[index] = !flags[index] 
}

burger.onclick = function(){
  menu.classList.toggle("burger_menu_active");
  burger_nav.classList.toggle("burger_nav_active");
  document.body.classList.toggle("noscroll");
  el1.classList.toggle("elem-burger1_active");
  el2.classList.toggle("elem-burger2_active");
}
