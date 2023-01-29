let el = document.querySelector(".scroller") ;
let h =document.documentElement.scrollHeight - document.documentElement.clientHeight ;
window.addEventListener("scroll",()=>{
  let scrollTop =document.documentElement.scrollTop ;  
  el.style.width = `${(scrollTop / h ) * 100}%` ;

})
