//Datos de los módulos
const MODULES = {
  "01": { title: "Clasificar Imagen", src: "detectar-imagen.html" },
  "02": { title: "Trazado de Línea", src: "trazado-linea.html" },
  "03": { title: "Detección Rostro", src: "deteccion-rostro.html" },
  "04": { title: "Teachable Machine", src: "teachable-objetos.html" },
  "05": { title: "Detección Personas", src: "deteccion-personas.html" },
};

const inicio = document.getElementById("inicio");
const iframeWrapper = document.getElementById("iframeWrapper");
const moduleFrame = document.getElementById("moduleFrame");
const topbarNum = document.getElementById("topbarNum");
const topbarTitle = document.getElementById("topbarTitle");
const btnClose = document.getElementById("btnClose");
const navItems = document.querySelectorAll(".nav-item");
const wCards = document.querySelectorAll(".wcard");

let activeId = null;

//Abrir módulo
function openModule(id) {
  const mod = MODULES[id];
  if (!mod) return;

  activeId = id;

  //Actualizar topbar
  topbarNum.textContent = id;
  topbarTitle.textContent = mod.title;

  //Cargar iframe
  moduleFrame.src = mod.src;

  // mostrar iframe... ocultar inicio
  inicio.classList.add("hidden");
  iframeWrapper.classList.add("visible");

  //Marcar nav activo
  navItems.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });
}

//Cerrar módulo
function closeModule() {
  activeId = null;
  moduleFrame.src = "";

  iframeWrapper.classList.remove("visible");
  inicio.classList.remove("hidden");

  navItems.forEach((btn) => btn.classList.remove("active"));
}

navItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    // Si ya está activo, cierra
    if (activeId === id) {
      closeModule();
    } else {
      openModule(id);
    }
  });
});

wCards.forEach((card) => {
  card.addEventListener("click", () => {
    openModule(card.dataset.target);
  });
});

btnClose.addEventListener("click", closeModule);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activeId) closeModule();
});
