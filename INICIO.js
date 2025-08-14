document.addEventListener("DOMContentLoaded", function () {
  var image = document.getElementById("olla-img");
  var textBox = document.getElementById("text-box");
  var mapFrame = document.getElementById("map-frame");

  // Si la sección OLLA no existe (comentada), salir sin errores
  if (!image || !textBox || !mapFrame) {
    return;
  }

  var texts = [
    "",
    "Brindamos desayunos y almuerzos tradicionales de excelente calidad, preparados con ingredientes frescos y sabores caseros, en un ambiente cálido y accesible para todos. Nuestro objetivo es ofrecer bienestar, buena nutrición y una atención amable a trabajadores, pacientes, visitantes del hospital, familias y a la comunidad en general.",
    "Ser el restaurante tradicional preferido por la comunidad, reconocido por su comida casera, su atención cálida y su compromiso con la salud y el bienestar de nuestros clientes. Aspiramos a convertirnos en un punto de encuentro diario para quienes buscan una alimentación saludable, cercana y reconfortante.",
    ""
  ];

  var images = [
    "IMG/UBICACION.png",
    "IMG/MISION.png",
    "IMG/VISION.png",
    "IMG/NOSOTRAS.jpg"
  ];

  var index = 0;

  function show(el, displayStyle) {
    if (!el) return;
    el.style.display = displayStyle || "block";
  }

  function hide(el) {
    if (!el) return;
    el.style.display = "none";
  }

  function fadeTo(el, value) {
    if (!el) return;
    el.style.opacity = value;
  }

  function updateContent() {
    fadeTo(image, 0);
    fadeTo(textBox, 0);
    fadeTo(mapFrame, 0);

    setTimeout(function () {
      image.src = images[index];
      show(image);

      if (index === 0) {
        show(mapFrame);
        hide(textBox);
      } else if (index === 3) {
        hide(mapFrame);
        hide(textBox);
      } else {
        textBox.textContent = texts[index];
        show(textBox);
        hide(mapFrame);
      }

      fadeTo(image, 1);
      fadeTo(textBox, 1);
      mapFrame.style.opacity = index === 0 ? 1 : 0;
    }, 300);
  }

  window.changeText = function (direction) {
    index += direction;
    if (index > 3) index = 0;
    if (index < 0) index = 3;
    updateContent();
  };

  updateContent();
});