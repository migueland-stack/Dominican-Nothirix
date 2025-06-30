//-----------Menu Toggle
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}

//------------Modal/Filter functions
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

      // Aquí puedes llamar tu función filtrarPropiedades(filtros);
      document.getElementById("modalFiltros").classList.add("oculto");
    });
});

// Data de ejemplo, reemplaza con tus datos de backend o JSON
const properties = [
  {
    location: "La Esmeralda",
    title: "Apartamento de 1 Habitación con Impresionantes Vistas a la Montaña",
    price: "US$252,000",
    beds: 1,
    baths: 1.5,
    parking: 1,
    size: "105 M²",
    image:
      "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_auto,f_auto/4295-228/lyle-apartments-exterior",
  },
  {
    location: "Piantini",
    title: "Local en Venta en Plaza de Piantini - 127 mts2",
    price: "US$275,000",
    beds: 1,
    baths: 1,
    parking: 200,
    size: "127 M²",
    image:
      "https://galmangroup.com/wp-content/uploads/2021/12/whitney-apartments-featured-image.jpg",
  },
  {
    location: "Naco",
    title: "Apartamento Moderno con Piscina y Gimnasio",
    price: "US$310,000",
    beds: 3,
    baths: 2,
    parking: 2,
    size: "150 M²",
    image:
      "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_2048,h_1152/c_fill,w_2048,h_1152/q_auto,f_auto/4304-23/the-encore-apartments-pool",
  },
  {
    location: "Bella Vista",
    title: "Penthouse de Lujo con Terraza Privada",
    price: "US$450,000",
    beds: 4,
    baths: 3.5,
    parking: 3,
    size: "220 M²",
    image:
      "https://jscoabode.com/wp-content/uploads/2021/02/NE-Street-View-2048x1344.jpg",
  },
  {
    location: "Gazcue",
    title: "Condominio Moderno con Vista al Mar",
    price: "US$320,000",
    beds: 2,
    baths: 2,
    parking: 2,
    size: "140 M²",
    image:
      "https://www.sgl.do/upload/olimare/properties/35464c848f410e55a13bb9d78e7fddd0/apartment-cibao-santiago-gurabo-19894_full.jpg",
  },
  {
    location: "Santo Domingo Este",
    title: "Casa Familiar con Jardín Amplio",
    price: "US$285,000",
    beds: 3,
    baths: 2,
    parking: 3,
    size: "180 M²",
    image:
      "https://assets.easybroker.com/property_images/4414362/74860048/EB-PY4362.jpg?height=300&version=1715219660&width=450",
  },
  {
    location: "Mirador Sur",
    title: "Apartamento de Lujo con Amenidades Exclusivas",
    price: "US$400,000",
    beds: 3,
    baths: 3,
    parking: 2,
    size: "160 M²",
    image:
      "https://www.sgl.do/upload/olimare/properties/e6e713296627dff6475085cc6a224464/properties-3565-58940.jpeg",
  },
  {
    location: "Los Prados",
    title: "Penthouse Espacioso con Terraza y Vista Panorámica",
    price: "US$480,000",
    beds: 4,
    baths: 4,
    parking: 4,
    size: "250 M²",
    image:
      "https://www.bienesonline.com/republica-dominicana/photos/vendo-apartamento-en-valle-verde-APV174241639433259-150.jpg",
  },
];

function updateFoundPropertiesText(count) {
  const foundPropsEl = document.querySelector(".found-props");
  if (!foundPropsEl) return;
  if (count === 1) {
    foundPropsEl.textContent = "1 propiedad encontrada.";
  } else {
    foundPropsEl.textContent = `${count} propiedades encontradas.`;
  }
}

function createPropertyCard(property) {
  const card = document.createElement("div");
  card.className = "property-card";

  card.innerHTML = `
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
  `;

  return card;
}

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
