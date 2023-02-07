let btn = document.querySelector(".get-button");
let input = document.querySelector(".header input[type=text]");
let data = document.querySelector(".data");
//////////////////main function
let getDate = function () {
  if (!input.value == "") {
    document.querySelector(".data ").innerHTML = "";
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((res) => {
        return res.json();
      })
      .then((repos) => {
        repos.forEach((repo) => {
          let main = document.createElement("div");
          main.classList.add("repo");
          let repoName = document.createTextNode(repo.name);

          let info = document.createElement("div");
          info.classList.add("info");

          let link = document.createElement("a");
          let visit = document.createTextNode("visit");
          link.appendChild(visit);
          link.href = repo.html_url;
          link.target = "_blanck";

          let starCount = document.createElement("span");
          let starCountNum = document.createTextNode(
            `stars ${repo.stargazers_count}`
          );
          starCount.appendChild(starCountNum);

          info.appendChild(link);
          info.appendChild(starCount);

          main.appendChild(repoName);
          main.appendChild(info);
          data.appendChild(main);
        });
      });
  } else window.alert("enter user name");
};
///////////////////
btn.onclick = () => {
  getDate();
};
// window.addEventListener("keypress", () => {
//   getDate();
// });
document.onkeyup = function (e) {
  // console.log(e);
  if (e.key == " " || e.key == "Enter") {
    getDate();
  }
};
