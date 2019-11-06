var slidetop = document.querySelector(".section_img");
var count = 0;
var click_btn = document.querySelectorAll(".btn");
var change_tab = document.querySelectorAll(".tab_content");
var popup = document.querySelector(".popup");
var popup_close = document.querySelector(".popup_close");
var popup_open  = document.querySelector("tbody > tr");

function slide_top(){
    if(count==2){
        count=0;
    }
    else{
        count++;
    }
    slidetop.style.top = 300*(-count)+"px";
}

window.setInterval("slide_top()",2000);

function click_tab(n){
    var currnetbtn = document.querySelector(".btns");
    var currnettab = document.querySelector(".tabs");
    
    if(currnetbtn){
        currnetbtn.classList.remove("btns");
        currnettab.classList.remove("tabs");
    }
    
    click_btn[n].classList.add("btns");
    change_tab[n].classList.add("tabs");
}

function popupopen(){
    popup.style.display="block";
}
function popupclose(){
    popup.style.display="none";
}

popup_open.addEventListener("click", popupopen);
popup_close.addEventListener("click", popupclose);