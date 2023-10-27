
let bar = document.getElementById("fixed");

window.onscroll = function(){
 if(window.scrollY >= 100){
   bar.style.display= "block";
 }
 else{
   bar.style.display= "none";
 }
};


// ___________________________________

//  // Get the button
//  let mybutton = document.getElementById("myBtn");
        
//  // When the user scrolls down 20px from the top of the document, show the button
//  window.onscroll = function() {scrollFunction()};
 
//  function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//      mybutton.style.display = "block";
//    } else {
//      mybutton.style.display = "none";
//    }
//  }
 
//  // When the user clicks on the button, scroll to the top of the document
//  window.onscroll = function topFunction(){
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//  };





