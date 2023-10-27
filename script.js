


 const menu = document.getElementById("menu");
 const action = document.getElementById("action");

 menu.addEventListener("click", () =>{
  handle();
    });
 function handle(){
  menu.classList.toggle("is-active");
  action.classList.toggle("is-active");
 };





let nums = document.querySelectorAll(".boxes")
let section = document.querySelector('.statistics');

if (window.scrollY >= section.offsetTop - 100 ){

  nums.forEach((boxes) => startCount(boxes));

}


function startCount(f){
    let goal = f.dataset.goal;
    let count = setInterval(() => {
        f.textContent++;
        if(f.textContent == goal){
            clearInterval(count);
        }
    }, 800/goal)};

    // ______________________________________



// __________________________________

let sections = document.querySelector('.skills');
let progSpan = document.querySelectorAll('.progress span');

window.onscroll = function(){
  if(window.scrollY >= sections.offsetTop  ){
    progSpan.forEach((span)=> {
      span.style.width = span.dataset.width;
    })
  }
};




   






