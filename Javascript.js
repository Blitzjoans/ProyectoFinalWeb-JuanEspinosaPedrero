
let nav= document.getElementById("nav");
let menu = document.getElementById("enlaces");

function menus(){
    let Desplazamiento_actual = window.pageYOffset;

    if(Desplazamiento_actual <=300){
        nav.classList.remove("nav2");
        nav.className = ("nav1");
        nav.style.transition="1s";

    }else{

        nav.classList.remove("nav1");
        nav.className = ("nav2");

    }
}

window.addEventListener("scroll", function(){
    console.log(this.window.pageYOffset);
    menus();
});

 window.addEventListener("load", function(){
     $("#onload").fadeOut();
     $("body").removeClass("hideden");
 menus();
 });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var checkClass = function() {
  
    if ( $('.cont-work').hasClass('hide') ) {
      $('.cont-work').removeClass('hide'); 
    }
    
  };
  
  $('#design').click( function() {
    
    checkClass();
    
    $('.cont-work:not(.design)').toggleClass('hide');
  
  });


$('#prototipes').click( function() {
    

    checkClass();
    

    $('.cont-work:not(.prototipes)').toggleClass('hide');
  
  });



  $('#art').click( function() {
    

    checkClass();
    

    $('.cont-work:not(.art)').toggleClass('hide');
  
  });
  
  

  $('#illus').click( function() {
    
      checkClass();
      $('.cont-work img:not(.illus)').toggleClass('hide');
    
  });
  

  $('#logo').click( function() {
   
      checkClass();
      $('.cont-work img:not(.logo)').toggleClass('hide');
    
  });
  

  $('#galeria-work').click( function() {
    
    checkClass();
    
  });
  
  