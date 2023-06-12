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

let link = document.querySelectorAll("li a");
let hardskills = document.getElementsByClassName("hardskills");
let imgHabilidade = document.getElementsByClassName("imgHabilidade");
let h1Habilidades = document.getElementById("h1Habilidades");
function changeDay() {
  container.style.background = ` linear-gradient(27deg, #fff5d0 50%, #243947 50%)`;
  container.style.color = "black";
  sobreTexto.style.backgroundColor = "#243947";
  habilidades.style.backgroundColor = "#243947";
  sobreTexto.style.color = "#fff5d0";
  habilidades.style.color = "#000";

  contato.style.color = "#243947";
  projetos.style.color = "#243947";
  projetos.style.backgroundColor = "#fff5d0";
  contato.style.backgroundColor = "#fff5d0";
  for (var i = 0; i < hardskills.length; i++) {
    hardskills[i].classList.remove("bgNight");
    hardskills[i].classList.add("bgDay");
  }
  imgHabilidade[0].classList.remove("bgNight");
  imgHabilidade[0].classList.add("bgDay");
}

function changeNight() {
  container.style.background = `  linear-gradient(27deg,  rgba(0, 0, 0, 0.767) 50%, rgba(0, 0, 0, 0.867)50%)`;
  container.style.color = "white";

  sobreTexto.style.backgroundColor = "rgba(0, 0, 0, 0.867)";
  habilidades.style.backgroundColor = "rgba(0, 0, 0, 0.867)";

  sobreTexto.style.color = "rgba(255, 255, 255, 1)";
  habilidades.style.color = "rgba(255, 255, 255, 1)";

  projetos.style.backgroundColor = "rgba(0, 0, 0, 0.767)";
  contato.style.backgroundColor = "rgba(0, 0, 0, 0.767)";

  projetos.style.color = "rgba(255, 255, 255, 0.867)";
  contato.style.color = "rgba(255, 255, 255, 0.867)";
  for (var i = 0; i < hardskills.length; i++) {
    hardskills[i].classList.remove("bgDay");
    hardskills[i].classList.add("bgNight");
  }
  imgHabilidade[0].classList.remove("bgDay");
  imgHabilidade[0].classList.add("bgNight");
}

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
let sass = document.querySelector(".sass");
let react = document.querySelector(".react");
let html = document.querySelector(".html");
let mysql = document.querySelector(".mysql");
let styled = document.querySelector(".styled");
let imagensTecnologias = document.querySelector(".imagensTecnologias");

css.addEventListener("click", () => {
  textoSkills.innerHTML = "CSS significa cascata estilosa";
  imagensTecnologias.src = "./assets/images/css.png";
});
js.addEventListener("click", () => {
  textoSkills.innerHTML = "Javascript é uma linguagem de programação";
  imagensTecnologias.src = "./assets/images/js.png";
});
react.addEventListener("click", () => {
  textoSkills.innerHTML =
    "O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.";
  imagensTecnologias.src = "./assets/images/react.png";
});
html.addEventListener("click", () => {
  textoSkills.innerHTML =
    "HTML significa Hyper Text Markup Language, que traduzido seria linguagem de marcação de texto";
  imagensTecnologias.src = "./assets/images/html.png";
});
sass.addEventListener("click", () => {
  textoSkills.innerHTML = "sass é um estilo";
  imagensTecnologias.src = "./assets/images/sass.png";
});
git.addEventListener("click", () => {
  textoSkills.innerHTML = "git é git";
  imagensTecnologias.src = "./assets/images/git.png";
});
mysql.addEventListener("click", () => {
  textoSkills.innerHTML = "git é git";
  imagensTecnologias.src = "./assets/images/mysql.png";
});
styled.addEventListener("click", () => {
  textoSkills.innerHTML = "git é git";
  imagensTecnologias.src = "./assets/images/styled.svg";
});

/*************************BONECO************************ */

let itensContatos = document.querySelectorAll(".itensContatos");

let boneco = document.getElementById("boneco");
boneco.src = "./assets/images/sad.png";

for (var i = 0; i < itensContatos.length; i++) {
  itensContatos[i].addEventListener("mouseover", () => {
    boneco.src = "./assets/images/happy.png";
  });
  itensContatos[i].addEventListener("mouseout", () => {
    boneco.src = "./assets/images/sad.png";
  });
}
