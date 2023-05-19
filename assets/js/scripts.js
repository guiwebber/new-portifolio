let iconOpen = document.getElementById("iconOpen");
let iconClose = document.getElementById("iconClose");
let navMobile = document.getElementById("navMobile");
let container = document.getElementById("container");
let h1Flecha = document.querySelector(".h1Flecha");
iconOpen.addEventListener("click", () => {
  navMobile.style.display = "flex";
  iconClose.style.display = "flex";
  iconOpen.style.display = "none";
  h1Flecha.style.display = "none";
});

iconClose.addEventListener("click", () => {
  navMobile.style.display = "none";
  iconOpen.style.display = "flex";
  iconClose.style.display = "none";
  h1Flecha.style.display = "block";
});

//night and day
let sobreTexto = document.getElementById("sobreTexto");
let projetos = document.getElementById("projetos");
let habilidades = document.getElementById("habilidades");
let contato = document.getElementById("contato");
let footer = document.getElementById("footer");

let check = document.getElementById("check");

let urlNight = "../assets/images/ceu-estrelado.jpg";
let urlDay = "../assets/images/nuvem.jpg";
function changeDay() {
  container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${urlDay})`;
  container.style.color = "black";
  for (var i = 0; i < link.length; i++) {
    link[i].style.color = "black";
  }
  sobreTexto.style.backgroundColor = "rgb(146, 191, 238)";
  habilidades.style.backgroundColor = "rgb(146, 191, 238)";
  sobreTexto.style.color = "rgba(0, 0, 0, 0.867)";
  habilidades.style.color = "rgba(0, 0, 0, 0.867)";

  contato.style.color = "rgba(0, 0, 0, 0.867)";
  projetos.style.color = "rgba(0, 0, 0, 0.867)";
  projetos.style.backgroundColor = "rgba(255, 255, 255, 0.555)";
  contato.style.backgroundColor = "rgba(255, 255, 255, 0.555)";
  footer.style.backgroundColor = "rgba(19, 82, 124, 0.947)";
}

function changeNight() {
  container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${urlNight})`;
  container.style.color = "white";
  for (var i = 0; i < link.length; i++) {
    link[i].style.color = "white";
  }
  sobreTexto.style.backgroundColor = "rgba(0, 0, 0, 0.867)";
  habilidades.style.backgroundColor = "rgba(0, 0, 0, 0.867)";

  sobreTexto.style.color = "rgba(255, 255, 255, 0.867)";
  habilidades.style.color = "rgba(255, 255, 255, 0.867)";

  projetos.style.backgroundColor = "rgba(0, 0, 0, 0.555)";
  contato.style.backgroundColor = "rgba(0, 0, 0, 0.555)";

  projetos.style.color = "rgba(255, 255, 255, 0.867)";
  contato.style.color = "rgba(255, 255, 255, 0.867)";

  footer.style.backgroundColor = "rgba(115, 0, 255, 1)";
}
let link = document.querySelectorAll("li a");
let checkD = document.getElementById("checkD");
checkD.addEventListener("change", () => {
  if (checkD.checked) {
    changeNight();
  } else {
    changeDay();
  }
});
check.addEventListener("change", () => {
  if (check.checked) {
    changeNight();
  } else {
    changeDay();
  }
});

//*******************SKILLS*****************

let textoSkills = document.getElementById("textoSkills");
let css = document.querySelector(".css");
let js = document.querySelector(".js");
let git = document.querySelector(".git");
let github = document.querySelector(".github");
let react = document.querySelector(".react");
let html = document.querySelector(".html");

css.addEventListener("click", () => {
  textoSkills.innerHTML = "CSS significa cascata estilosa";
});
js.addEventListener("click", () => {
  textoSkills.innerHTML = "Javascript é uma linguagem de programação";
});
react.addEventListener("click", () => {
  textoSkills.innerHTML = "React é uma biblioteca";
});
html.addEventListener("click", () => {
  textoSkills.innerHTML =
    "HTML significa Hyper Text Markup Language, que traduzido seria linguagem de marcação de texto";
});
github.addEventListener("click", () => {
  textoSkills.innerHTML = "Github é um sistema de versionamento de texto";
});
git.addEventListener("click", () => {
  textoSkills.innerHTML = "git é git";
});
