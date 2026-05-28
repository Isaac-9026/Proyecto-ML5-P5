let classifier;//modelo
let img;
//Ruta de la imagen inicial que se mostrará al iniciar
let currentImagePath = "assets/images/apple.jpg";

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage(currentImagePath);
}

function setup() {

  //obtener el contenedor donde se insertara el canvas
  let container = document.getElementById("canvas-container");

  createCanvas(400, 400);

  //Insertar el canvas dentro del div del html
  container.appendChild(document.querySelector("canvas"));

  //analizar
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
      "Confianza: " + percentage + "%";

  } else {
    document.getElementById("category").textContent =
      "Categoría: " + result[0].label;

    document.getElementById("percentage").textContent =
      "Confianza: " + percentage + "%";
  }
}

document.addEventListener("DOMContentLoaded", () => {

  // Obtener el selector de imágenes
  const selector = document.getElementById("image-selector");

  selector.addEventListener("change", (e) => {

    // Guardar la nueva ruta seleccionada
    currentImagePath = e.target.value;

    img = loadImage(currentImagePath, () => {
      background(255);
      displayImage();

      //volver a clasificar la nueva imagen
      classifier.classify(img, goResult);
    });
  });
});