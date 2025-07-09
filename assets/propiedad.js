//Menu Toggle
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}

window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const propId = Number(urlParams.get("prop"));
  const property = properties.find((prop) => prop.id === propId);

  if (!property) {
    document.body.innerHTML = `
      <h1>Propiedad no encontrada</h1>
      <div class="back-link">
        <a href="../propiedades/index.html">Volver a propiedades</a>
      </div>`;
    return;
  }

  document.title = `${property.title} | Dominican Nothirix`;

  const propInfo = document.getElementById("prop-info");
  propInfo.innerHTML = `
<div class="whats-float">
    <a href="https://wa.me/18094907813"
       target="_blank">
        <i class="fa fa-whatsapp"></i><span>WhatsApp<br><small>+1 809-490-7813</small></span>
    </a>
</div>
    <section class="property-container">
          <div class="back-link">
        <a href="../propiedades/index.html">Volver a propiedades</a>
      </div>
      <div class="image-layout">
        <div class="main-image">
          <img src="${property.mainImage}" alt="${
    property.title
  }" class="main-prop-img" />
        </div>
        <div class="side-images">
          ${property.gallery
            .map(
              (img, i) => `
            <img src="${img}" alt="${property.title} - Imagen ${
                i + 1
              }" class="prop-gallery-img" />
          `
            )
            .join("")}
        </div>
      </div>

      <section class="property-info">
        <div class="price-text">
          <p class="price-tag">${property.price}</p>
          <h1 class="property-title">${property.title}</h1>
        </div>
        <div class="features">
          <div class="property-el">
            <img src="../assets/img/bed-double.svg" alt="Habitaciones" />
            <span>${property.beds} Habs.</span>
          </div>
          <div class="property-el">
            <img src="../assets/img/bath.svg" alt="Baño" />
            <span>${property.baths} Baño${property.baths > 1 ? "s" : ""}</span>
          </div>
          <div class="property-el">
            <img src="../assets/img/car.svg" alt="Parqueo" />
            <span>${property.parking} Parq.</span>
          </div>
          <div class="property-el">
            <img src="../assets/img/ruler-dimension-line.svg" alt="Metros" />
            <span>${property.size}</span>
          </div>
        </div>
      </section>

      <section class="map-section">
        <div class="map-title">
          <img src="../assets/img/map-pin-house.svg" alt="Map Pin" />
          <h2>Información de Ubicación</h2>
        </div>
        <p class="city-name">${property.location}, República Dominicana</p>
        <div id="map" style="height: 300px; border-radius: 1rem; overflow: hidden; margin: 1rem 0;"></div>
      </section>

      <section class="description-section">
        <h3>Descripción</h3>
        <p class="desc">${property.description}</p>
      </section>
      </section>
  `;

  // Convertir coords lat/lng a EPSG:3857
  const coords = ol.proj.fromLonLat([property.lng, property.lat]);

  const map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: coords,
      zoom: 15,
    }),
  });

  const marker = new ol.Feature({
    geometry: new ol.geom.Point(coords),
  });

  marker.setStyle(
    new ol.style.Style({
      image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({ color: "red" }),
        stroke: new ol.style.Stroke({ color: "white", width: 2 }),
      }),
    })
  );

  const vectorSource = new ol.source.Vector({
    features: [marker],
  });

  const markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });

  map.addLayer(markerVectorLayer);

  if (document.getElementById("image-modal")) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const modalClose = document.getElementById("modal-close");

    modalClose.onclick = () => modal.classList.add("hidden");
    modal.onclick = (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    };

    document
      .querySelectorAll(".main-prop-img, .prop-gallery-img")
      .forEach((img) => {
        img.addEventListener("click", () => {
          modalImg.src = img.src;
          modal.classList.remove("hidden");
        });
      });
  }
});
