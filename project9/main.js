let progress =document.querySelectorAll(".skills .progress span");
let section =document.querySelector(".three");
let started =false ;


window.onscroll=function(){
  if(scrollY >= section.offsetTop-300){ 

    if(!started)   {
      progress.forEach(progres => {
        progres.style.width = `${progres.dataset.width}% `;  
        
      });
      
    }
    started=true;
  }
}


// function startCount(el){
//   let goal =el.dataset.goal ;
//   let count = setInterval(() => {
//     el.textContent++ ;
//     if(el.textContent == goal){
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// } 