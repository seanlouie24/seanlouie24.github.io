const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("header.header nav");

menuBtn.addEventListener("click", function(){
    if(nav.style.display == "none"){
        nav.style.display = "block";
    }
    else{
        nav.style.display = "none";
    }
})