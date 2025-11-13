document.addEventListener("DOMContentLoaded", () => {
  // ===== MENU TOGGLE =====
  function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    if (nav) nav.classList.toggle("show");
  }
  window.toggleMenu = toggleMenu;

  // ===== MODAL / FILTER ELEMENTS =====
  const abrirModal = document.getElementById("abrirModalFiltros");
  const cerrarModal = document.getElementById("cerrarModalFiltros");
  const modalFiltros = document.getElementById("modalFiltros");
  const aplicarFiltros = document.getElementById("aplicarFiltrosModal");

  if (abrirModal && cerrarModal && modalFiltros && aplicarFiltros) {
    // Open modal
    abrirModal.addEventListener("click", () => {
      modalFiltros.classList.remove("oculto");
      document.body.classList.add("modal-open");
    });

    // Close modal button
    cerrarModal.addEventListener("click", () => {
      modalFiltros.classList.add("oculto");
      document.body.classList.remove("modal-open");
    });

    // Close modal by clicking outside content
    modalFiltros.addEventListener("click", (e) => {
      if (e.target.id === "modalFiltros") {
        modalFiltros.classList.add("oculto");
        document.body.classList.remove("modal-open");
      }
    });

    // ===== APPLY FILTERS =====
    aplicarFiltros.addEventListener("click", () => {
      if (typeof properties === "undefined") return;

      const filtros = {
        ciudad: document.getElementById("ciudadModal").value.trim(),
        habitaciones:
          parseInt(document.getElementById("habitacionesModal").value) || 0,
        banos: parseInt(document.getElementById("banosModal").value) || 0,
        parqueos: parseInt(document.getElementById("parqueosModal").value) || 0,
        precioMin:
          parseInt(document.getElementById("precioMinModal").value) || 0,
        precioMax:
          parseInt(document.getElementById("precioMaxModal").value) || Infinity,
        tipoTransaccion: document.getElementById("tipoTransaccionModal").value, // Nuevo filtro
      };

      const filtered = properties.filter((prop) => {
        const propPrice = parseInt(prop.price.replace(/[^0-9]/g, ""));
        const propBanos = parseFloat(prop.baths);

        // Filtro por tipo de transacción
        let transaccionMatch = true;
        if (filtros.tipoTransaccion === "venta") {
          transaccionMatch = prop.status.includes("venta");
        } else if (filtros.tipoTransaccion === "alquiler") {
          transaccionMatch = prop.status.includes("alquiler");
        } else if (filtros.tipoTransaccion === "ambos") {
          transaccionMatch =
            prop.status.includes("venta") && prop.status.includes("alquiler");
        } // para "all" no se aplica filtro

        return (
          transaccionMatch &&
          (filtros.ciudad === "" ||
            prop.location
              .toLowerCase()
              .includes(filtros.ciudad.toLowerCase())) &&
          (filtros.habitaciones === 0 || prop.beds >= filtros.habitaciones) &&
          (filtros.banos === 0 || propBanos >= filtros.banos) &&
          (filtros.parqueos === 0 || prop.parking >= filtros.parqueos) &&
          propPrice >= filtros.precioMin &&
          propPrice <= filtros.precioMax
        );
      });

      renderProperties(filtered);

      // Close modal after applying filters
      modalFiltros.classList.add("oculto");
      document.body.classList.remove("modal-open");
    });
  }

  // ===== NUMERIC INPUTS FIX FOR MOBILE & DESKTOP =====
  const numericInputs = document.querySelectorAll(
    "#precioMinModal, #precioMaxModal"
  );

  numericInputs.forEach((input) => {
    // Ensure mobile shows numeric keyboard
    input.setAttribute("inputmode", "numeric");
    input.setAttribute("pattern", "[0-9]*");

    // Prevent non-numeric typing
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9]/g, "");
    });

    // Prevent pasting non-numeric content
    input.addEventListener("paste", (e) => {
      const pasted = (e.clipboardData || window.clipboardData).getData("text");
      if (/[^0-9]/.test(pasted)) {
        e.preventDefault();
      }
    });
  });

  // ===== FOUND PROPERTIES COUNTER =====
  function updateFoundPropertiesText(count) {
    const foundPropsEl = document.querySelector(".found-props");
    if (!foundPropsEl) return;

    if (count === 0) {
      foundPropsEl.textContent = "No se encontraron propiedades.";
    } else if (count === 1) {
      foundPropsEl.textContent = "1 propiedad encontrada.";
    } else {
      foundPropsEl.textContent = `${count} propiedades encontradas.`;
    }
  }

  // ===== CREATE PROPERTY CARD =====
  function createPropertyCard(property) {
    const card = document.createElement("div");
    card.className = "property-card";
    card.innerHTML = `
    <a href="property.html?prop=${property.id}" class="property-link">
      <img src="${property.mainImage}" alt="${
      property.title
    }" class="property-image">
      <div class="property-content">
        <span class="property-location">${property.location}</span>
        <h3 class="property-title">${property.title}</h3>
        <span class="property-price">${property.price}</span>
        <div class="property-details">
          <span><i data-lucide="bed"></i> ${property.beds}</span>
          <span><i data-lucide="bath"></i> ${property.baths}</span>
          ${
            property.parking
              ? `<span><i data-lucide="car"></i> ${property.parking}</span>`
              : ""
          }
          ${
            property.size && property.size !== "-" && property.size !== ""
              ? `<span><i data-lucide="ruler"></i> ${property.size}</span>`
              : ""
          }
        </div>
      </div>
    </a>
  `;
    return card;
  }
  // ===== RENDER PROPERTIES =====
  function renderProperties(properties) {
    const loader = document.getElementById("loader");
    const container = document.getElementById("properties-container");

    if (!container) return;

    // Show loader
    loader?.classList.remove("oculto");

    // Simulate loading delay (optional)
    setTimeout(() => {
      container.innerHTML = "";

      if (properties.length === 0) {
        container.innerHTML = `
        <div class="no-properties-message">
          <img src="../assets/img/no-propiedades.png" alt="No properties found" class="no-properties-illustration">
          <p>🏡 ¡Ups! Por el momento no hay propiedades disponibles con estos filtros.</p>
          <p>Te invitamos a explorar otras opciones o contactarnos para ayudarte a encontrar la propiedad ideal para ti.</p>
          <button class="filter-btn" onclick="window.location.href='../propiedades/index.html'">Ver todas las propiedades</button>
        </div>
      `;
      } else {
        properties.forEach((property) => {
          const card = createPropertyCard(property);

          // Add click handler to show loader on property card click
          const link = card.querySelector("a.property-link");
          if (link) {
            link.addEventListener("click", (e) => {
              e.preventDefault(); // prevent immediate navigation
              loader?.classList.remove("oculto"); // show loader

              setTimeout(() => {
                window.location.href = link.href; // navigate after delay
              }, 400); // optional delay for smoother transition
            });
          }

          container.appendChild(card);
        });
      }

      lucide.createIcons();
      updateFoundPropertiesText(properties.length);

      // Hide loader
      loader?.classList.add("oculto");
    }, 600); // simulated delay for effect
  }

  if (typeof properties !== "undefined") {
    renderProperties(properties);
  }

  // ===== CONTACT FORM WITH GREEN SUCCESS =====
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");

  if (contactForm && submitButton) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const originalText = submitButton.textContent;
      const originalBackground = submitButton.style.backgroundColor;

      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";

      const formData = new FormData(contactForm);
      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          submitButton.textContent = "¡Mensaje enviado!";
          submitButton.style.backgroundColor = "#28a745"; // Verde éxito
          contactForm.reset();
        } else {
          submitButton.textContent = "Error, intente de nuevo";
          submitButton.style.backgroundColor = "#dc3545"; // Rojo error
          setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.backgroundColor = originalBackground;
            submitButton.disabled = false;
          }, 3000);
        }
      } catch (error) {
        submitButton.textContent = "Error, intente de nuevo";
        submitButton.style.backgroundColor = "#dc3545";
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.style.backgroundColor = originalBackground;
          submitButton.disabled = false;
        }, 3000);
      }
    });
  }

  // ===== SCROLL ANIMATIONS =====
  const fadeSections = document.querySelectorAll(".fade-in-section");

  // Function to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  };

  // Function to handle scroll animations
  const handleScrollAnimations = () => {
    fadeSections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("is-visible");
      }
    });
  };

  // Initial check on page load
  handleScrollAnimations();

  // Check on scroll
  window.addEventListener("scroll", handleScrollAnimations);
});
