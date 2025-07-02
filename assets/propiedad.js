document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const propId = Number(urlParams.get("prop"));

  // You need to have `properties` available here, e.g., via import or global definition
  const property = properties.find(prop => prop.id === propId);

  if (!property) {
    document.body.innerHTML = "<h1>Propiedad no encontrada</h1>";
    return;
  }

  // Populate basic property information
  document.getElementById("prop-title").textContent = property.title;
  document.getElementById("prop-location").textContent = `Ubicación: ${property.location}`;
  document.getElementById("prop-price").textContent = `Precio: ${property.price}`;
  document.getElementById("prop-description").textContent = `Tamaño: ${property.size} | ${property.beds} habitaciones | ${property.baths} baños | ${property.parking} parqueos`;

  // Populate carousel
  const carouselContainer = document.getElementById("carousel-container");

  // If using multiple images:
  if (property.images && property.images.length > 0) {
    property.images.forEach(imgUrl => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      slide.innerHTML = `<img src="${imgUrl}" alt="Imagen de ${property.title}">`;
      carouselContainer.appendChild(slide);
    });
  } else {
    // Fallback to single image if `images` array not present
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.innerHTML = `<img src="${property.image}" alt="Imagen de ${property.title}">`;
    carouselContainer.appendChild(slide);
  }
});

function handleCarouselMove(next = true) {
  const carousel = document.getElementById("carousel-container");
  const slide = document.querySelector(".carousel-slide");
  if (!slide) return;
  const slideWidth = slide.clientWidth + 8; // 8 = gap
  carousel.scrollLeft += next ? slideWidth : -slideWidth;
}
