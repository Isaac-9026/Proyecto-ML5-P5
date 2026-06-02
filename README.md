#  ML5.js + P5.js · Aplicaciones Prácticas de Machine Learning

Entragable desarrollado utilizando **ML5.js**, **P5.js** y **TensorFlow.js**, que reúne cinco aplicaciones prácticas de Inteligencia Artificial ejecutadas directamente desde el navegador web.

El objetivo principal es demostrar el uso de modelos preentrenados y modelos personalizados para tareas de visión computacional, reconocimiento de objetos y detección en tiempo real utilizando cámara web.

---

##  Descripción General

La aplicación integra cinco módulos independientes dentro de una interfaz única con navegación lateral, permitiendo acceder fácilmente a cada ejercicio desarrollado durante el curso.

Los ejemplos implementados utilizan modelos de Machine Learning proporcionados por ML5.js y un modelo personalizado entrenado mediante Teachable Machine.

---


##  Aplicaciones Implementadas

### 01 Clasificación de Imágenes
Clasificación de imágenes almacenadas localmente utilizando el modelo MobileNet.

### 02 Trazado de Línea entre Dedos Índices
Detección de manos mediante cámara web utilizando HandPose para dibujar una línea entre ambos dedos índices.

### 03 Detección de Partes del Rostro
Visualización de diferentes regiones faciales utilizando FaceMesh con selección dinámica de color y parte del rostro.

### 04 Clasificación Personalizada con Teachable Machine
Reconocimiento en tiempo real de:

- Botella
- Billetera
- Control remoto
- Plumón

Incluye porcentaje de confianza y síntesis de voz.

### 05 Detección de Personas con Alarma
Detección de personas mediante el modelo COCO SSD con contador de permanencia, barra de progreso y alarma sonora.

---

## 📂 Estructura del Proyecto

```text
Proyecto-ML5-P5/
│
├── index.html
├── detectar-imagen.html
├── trazado-linea.html
├── deteccion-rostro.html
├── teachable-machine.html
├── deteccion-personas.html
│
├── assets/
│   └── images/
│
├── css/
│   ├── style.css
│   └── modules.css
│
├── js/
│   ├── app.js
│   ├── detectar-imagen.js
│   ├── trazado-linea.js
│   ├── deteccion-rostro.js
│   ├── teachable-machine.js
│   └── deteccion-personas.js
│
└── models/
    └── teachable/
```

---


## 📄 Documentación Completa

Toda la explicación del proyecto, análisis, desarrollo, evidencias y conclusiones se encuentra en el documento PDF adjunto.

👉 **[Ver documentación completa del proyecto](https://github.com/Isaac-9026/Proyecto-ML5-P5/blob/main/PIAD-528_FORMATOALUMNOTRABAJOFINAL.pdf)**

---
