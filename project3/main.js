//////main variable
let inputUserName = document.querySelector(".repo-container .header input") ;
let getButton =document.querySelector(".repo-container .header  .get-button") ;
let data =document.querySelector(".repo-container .data") ;
///////
getButton.onclick = function(){
  getRepos();

}
window.addEventListener("keypress",()=>{
  getRepos();
})
////make a function to get repos  
function getRepos(){
  if(inputUserName.value == ""){
    data.innerHTML =`${ "<span> Please enter username </span> "}` ;
  }else{    
    data.innerHTML="";
    fetch(`https://api.github.com/users/${inputUserName.value}/repos`).then((repos)=>{
      return repos.json();
    }).then((dataOfrepos)=>{
      dataOfrepos.forEach((repo) => {
        //create the repo div and put name 
        let repoDiv =document.createElement("div");
        repoDiv.classList.add("repo");
        ///// put name 
        let repoNameDiv =document.createElement("span");
        let nameRepo = document.createTextNode(repo.name);
        repoNameDiv.appendChild(nameRepo);
        repoDiv.appendChild(repoNameDiv);
        ///////////////////////////
        let infoDiv = document.createElement("div") ;
        infoDiv.classList.add("info");
        ////////////////// link of repo
        let aToRepo =document.createElement("a");
        let linkOfRepo =document.createTextNode("visit");
        aToRepo.appendChild(linkOfRepo);
        aToRepo.href =repo.html_url ;
        aToRepo.target="_blank" ;
        infoDiv.appendChild(aToRepo);  
        //////////////////// number of stars
        let starsSpan = document.createElement("span");
        let starsCount = document.createTextNode(`starts ${repo.stargazers_count}`) ;  
        starsSpan.appendChild(starsCount);        
        infoDiv.appendChild(starsSpan); 
        
        //////////////////////////  
        repoDiv.appendChild(infoDiv ); 
        data.appendChild(repoDiv);
      });
    })
  }

}
////////////
