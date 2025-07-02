//Menu Toggle
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}

//Modal/Filter functions
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("abrirModalFiltros").addEventListener("click", () => {
    document.getElementById("modalFiltros").classList.remove("oculto");
  });

  document
    .getElementById("cerrarModalFiltros")
    .addEventListener("click", () => {
      document.getElementById("modalFiltros").classList.add("oculto");
    });

  document.getElementById("modalFiltros").addEventListener("click", (e) => {
    if (e.target.id === "modalFiltros") {
      document.getElementById("modalFiltros").classList.add("oculto");
    }
  });

  document
    .getElementById("aplicarFiltrosModal")
    .addEventListener("click", () => {
      const filtros = {
        ciudad: document.getElementById("ciudadModal").value,
        habitaciones: document.getElementById("habitacionesModal").value,
        banos: document.getElementById("banosModal").value,
        parqueos: document.getElementById("parqueosModal").value,
        precioMin: document.getElementById("precioMinModal").value,
        precioMax: document.getElementById("precioMaxModal").value,
      };

      console.log("Filtros aplicados desde modal:", filtros);

      document.getElementById("modalFiltros").classList.add("oculto");
    });
});

//Update properties count
function updateFoundPropertiesText(count) {
  const foundPropsEl = document.querySelector(".found-props");
  if (!foundPropsEl) return;
  if (count === 1) {
    foundPropsEl.textContent = "1 propiedad encontrada.";
  } else {
    foundPropsEl.textContent = `${count} propiedades encontradas.`;
  }
}

//Create properties (cards)
function createPropertyCard(property) {
  const card = document.createElement("div");
  card.className = "property-card";
  card.innerHTML = `
    <a href="property.html?prop=${property.id}" class="property-link">
      <img src="${property.image}" alt="${property.title}" class="property-image">
      <div class="property-content">
        <span class="property-location">${property.location}</span>
        <h3 class="property-title">${property.title}</h3>
        <span class="property-price">${property.price}</span>
        <div class="property-details">
          <span><i data-lucide="bed"></i> ${property.beds}</span>
          <span><i data-lucide="bath"></i> ${property.baths}</span>
          <span><i data-lucide="car"></i> ${property.parking}</span>
          <span><i data-lucide="ruler"></i> ${property.size}</span>
        </div>
      </div>
    </a>
  `;

  return card;
}

//Render properties
function renderProperties(properties) {
  const container = document.getElementById("properties-container");
  container.innerHTML = "";
  properties.forEach((property) => {
    const card = createPropertyCard(property);
    container.appendChild(card);
  });
  lucide.createIcons();

  updateFoundPropertiesText(properties.length);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProperties(properties);
  lucide.createIcons();
});

//Modal Filters
document.getElementById("aplicarFiltrosModal").addEventListener("click", () => {
  const filtros = {
    ciudad: document.getElementById("ciudadModal").value.trim(),
    habitaciones:
      parseInt(document.getElementById("habitacionesModal").value) || 0,
    banos: parseInt(document.getElementById("banosModal").value) || 0,
    parqueos: parseInt(document.getElementById("parqueosModal").value) || 0,
    precioMin: parseInt(document.getElementById("precioMinModal").value) || 0,
    precioMax:
      parseInt(document.getElementById("precioMaxModal").value) || Infinity,
  };

  const filtered = properties.filter((prop) => {
    const propPrice = parseInt(prop.price.replace(/[^0-9]/g, ""));
    const propBanos = parseFloat(prop.baths);

    return (
      (filtros.ciudad === "" ||
        prop.location.toLowerCase().includes(filtros.ciudad.toLowerCase())) &&
      (filtros.habitaciones === 0 || prop.beds >= filtros.habitaciones) &&
      (filtros.banos === 0 || propBanos >= filtros.banos) &&
      (filtros.parqueos === 0 || prop.parking >= filtros.parqueos) &&
      propPrice >= filtros.precioMin &&
      propPrice <= filtros.precioMax
    );
  });

  document.querySelector(
    ".found-props"
  ).textContent = `${filtered.length} Propiedades encontradas.`;

  renderProperties(filtered);

  document.getElementById("modalFiltros").classList.add("oculto");
});
