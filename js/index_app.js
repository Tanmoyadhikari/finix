$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 50){
     $(".main_header").attr("id","header");
     $("nav.navbar.navbar-expand-lg.pt-3.navbar-light").attr("style","background:#fff");
    } else{
      $(".main_header").removeAttr("id");
      $("nav.navbar.navbar-expand-lg.pt-3.navbar-light").removeAttr("style");
    }
  })

$(".searc_btn.dropdown-menu").click(function(){
$(".searc_btn.dropdown-menu").addClass("show");
}); 

$(".searc_btn.dropdown-menu.show").click(function(){
  $(".searc_btn.dropdown-menu.show").removeClass("show");
});
});
function kmn_re(){
  document.getElementById("me").removeAttribute("class");
  document.getElementById("me").setAttribute("class","fa-solid fa-xmark");
  document.getElementById("me").removeAttribute("onclick");
  document.getElementById("me").setAttribute("onclick","how_is()");
}
function how_is(){
  document.getElementById("me").removeAttribute("class");
  document.getElementById("me").setAttribute("class","fa-solid fa-magnifying-glass");
  document.getElementById("me").removeAttribute("onclick");
  document.getElementById("me").setAttribute("onclick","kmn_re()");
}


