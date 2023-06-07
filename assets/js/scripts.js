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
console.log(link);
function changeDay() {
  for (var i = 0; i < link.length; i++) {
    link[i].style.color = "black";
  }
  container.style.background = ` linear-gradient(27deg, #73abe2e0 51.04%, #fff 51.05%)`;
  container.style.color = "black";
  sobreTexto.style.backgroundColor = "#fff";
  habilidades.style.backgroundColor = "#fff";
  sobreTexto.style.color = "rgba(0, 0, 0, 0.867)";
  habilidades.style.color = "rgba(0, 0, 0, 0.867)";

  contato.style.color = "rgba(0, 0, 0, 0.867)";
  projetos.style.color = "rgba(0, 0, 0, 0.867)";
  projetos.style.backgroundColor = "#73abe2e0";
  contato.style.backgroundColor = "#73abe2e0";
  footer.style.backgroundColor = "rgba(19, 82, 124, 0.947)";
}

function changeNight() {
  container.style.background = `  linear-gradient(27deg,  rgba(0, 0, 0, 0.555) 51.04%, rgba(0, 0, 0, 0.867)51.05%)`;
  container.style.color = "white";

  for (var i = 0; i < link.length; i++) {
    link[i].style.color = "white";
  }

  sobreTexto.style.backgroundColor = "rgba(0, 0, 0, 0.867)";
  habilidades.style.backgroundColor = "rgba(0, 0, 0, 0.867)";

  sobreTexto.style.color = "rgba(255, 255, 255, 1)";
  habilidades.style.color = "rgba(255, 255, 255, 1)";

  projetos.style.backgroundColor = "rgba(0, 0, 0, 0.555)";
  contato.style.backgroundColor = "rgba(0, 0, 0, 0.555)";

  projetos.style.color = "rgba(255, 255, 255, 0.867)";
  contato.style.color = "rgba(255, 255, 255, 0.867)";

  footer.style.backgroundColor = "rgba(115, 0, 255, 1)";
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
let react = document.querySelector(".react");
let html = document.querySelector(".html");
let imagensTecnologias = document.querySelector(".imagensTecnologias");

css.addEventListener("click", () => {
  textoSkills.innerHTML = "CSS significa cascata estilosa";
  imagensTecnologias.src = "./assets/images/css3d.png";
});
js.addEventListener("click", () => {
  textoSkills.innerHTML = "Javascript é uma linguagem de programação";
  imagensTecnologias.src = "./assets/images/js3d.png";
});
react.addEventListener("click", () => {
  textoSkills.innerHTML = "React é uma biblioteca";
  imagensTecnologias.src = "./assets/images/react3d.png";
});
html.addEventListener("click", () => {
  textoSkills.innerHTML =
    "HTML significa Hyper Text Markup Language, que traduzido seria linguagem de marcação de texto";
  imagensTecnologias.src = "./assets/images/html3d.png";
});
github.addEventListener("click", () => {
  textoSkills.innerHTML = "Github é um sistema de versionamento de texto";
  imagensTecnologias.src = "./assets/images/github3d.png";
});
git.addEventListener("click", () => {
  textoSkills.innerHTML = "git é git";
  imagensTecnologias.src = "./assets/images/git.png";
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
