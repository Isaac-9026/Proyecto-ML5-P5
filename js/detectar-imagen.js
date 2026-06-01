let classifier; //modelo
let img;
//Ruta de la imagen inicial que se mostrará al iniciar
let imagenInicial = "assets/images/apple.jpg";

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage(imagenInicial);
}

function setup() {
  //obtener el contenedor donde se insertara el canvas
  let container = document.getElementById("canvas-container");

  createCanvas(400, 400);

  //Insertar el canvas dentro del div del html
  container.appendChild(document.querySelector("canvas"));

  classifier.classify(img, goResult);

  displayImage();
}

function displayImage() {
  image(img, 0, 0, width, height);
}

function goResult(result) {
  console.log(result);

  // Obtener el porcentaje de confianza que devuelve un valor entre 0 y 1
  const percentage = Math.round(result[0].confidence * 100);

  if (percentage < 50) {
    displayImage();

    // Guardar configuración actual de estilos
    push();

    //para signo de interrogacion
    fill(255, 0, 0);

    stroke(0);
    strokeWeight(4);
    textAlign(CENTER, CENTER);
    textSize(96);

    //Dibujar ?
    text("?", width / 2, height / 2);

    //Restaurar estilos anteriores
    pop();

    document.getElementById("category").textContent =
      "No puede precisar qué es";

    document.getElementById("percentage").textContent =
      `Confianza insuficiente (${percentage}%)`;
  } else {
    document.getElementById("category").textContent =
      "Categoría: " + result[0].label;

    document.getElementById("percentage").textContent =
      "Confianza: " + percentage + "%";
  }
}

document.querySelectorAll(".miniatura").forEach((miniatura) => {
  miniatura.addEventListener("click", () => {
    document
      .querySelectorAll(".miniatura")
      .forEach((t) => t.classList.remove("active"));

    miniatura.classList.add("active");

    imagenInicial = miniatura.dataset.image;

    img = loadImage(imagenInicial, () => {
      background(255);

      displayImage();

      classifier.classify(img, goResult);
    });
  });
});
