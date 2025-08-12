function generateGallery(propertyFolder, count, extension = 'webp') {
  const basePath = "../assets/properties/" + propertyFolder;
  return Array.from({ length: count }, (_, i) => `${basePath}/${i + 1}.${extension}`);
}

const properties = [
  {
    id: 1,
    title: "Residencial Quinta Vista",
    location: "Santiago",
    price: "US$115,000.00",
    description: `Apartamento de 85 m² en moderno proyecto ecoamigable con certificado EDGE. Vive con comodidad y estilo en este hermoso apartamento de 3 habitaciones (principal con baño privado y walk-in closet), 2 baños completos, amplia sala-comedor con excelente iluminación, cocina con desayunador, área de lavado, balcón privado y 1 parqueo asignado. Ubicado en un proyecto cerrado y familiar, pensado para el bienestar y la recreación: 
    <ul>
      <li>🏊 Piscina para adultos y niños</li>
      <li>🏀 Cancha deportiva</li>
      <li>🎠 Área de juegos infantiles</li>
      <li>🚲 Ciclovía y sendero ecológico</li>
      <li>🎉 Gazebo y zona BBQ</li>
      <li>🛗 Escaleras y pre-instalación para inversores/aires</li>
      <li>🛡️ Seguridad 24/7 con cámaras y control de acceso</li>
    </ul>
    Un ambiente moderno, seguro y sostenible, ideal para vivir o invertir, con financiamiento disponible.`,
    size: "85 m²",
    beds: 3,
    baths: 2,
    parking: 1,
    lat: 19.422730783878343,
    lng: -70.66437937595296,
    mainImage: "../assets/properties/residencial-quinta-vista/main-image.webp",
    gallery: generateGallery("residencial-quinta-vista", 32)
  },
  {
    id: 2,
    title: "Residencial Rosmary V (Penhouse)",
    location: "Santiago",
    price: "US$430,500.00",
    description: `
    <p>Este proyecto cuenta con 65 apartamentos los cuales 13 son "Penthouse".</p>
    <ul>
      <li>🛝 Amplia y confortable área social (ROOFTOP).</li>
      <li>🛋️ Lobby amueblado con acceso controlado.</li>
      <li>🏊‍♂️ Piscina con terraza abierta y techada.</li>
      <li>🏋️ Gimnasio equipado.</li>
      <li>🏎️ Amplios parqueos.</li>
      <li>🤌🏽 Terminación en primera.</li>
      <li>🔐 Seguridad 24 horas.</li>
      <li>🛗 Ascensor.</li>
      <li>🎠 Área de juegos para niños.</li>
      <li>📅 Salón de reuniones y conferencias.</li>
      <li>🔋 Planta eléctrica full.</li>
      <li>⚡️ Cerco Eléctrico.</li>
    </ul>
    <p><strong>Apartamentos:</strong></p>
    <p>A, B, C, E, F, H, I, L, M</p>
    <ul>
      <li>Sala</li>
      <li>Comedor/estar</li>
      <li>Balcón</li>
      <li>Baño de visita</li>
      <li>Cocina</li>
      <li>2 dormitorios + 1 baño en común</li>
      <li>1 dormitorio + su baño + walking closet</li>
      <li>1 dormitorio de servicio con su baño</li>
      <li>Área de lavado</li>
    </ul>
    <p>D, G, J, K (No tienen habitación de servicio)</p>
    <ul>
      <li>Sala</li>
      <li>Comedor/estar</li>
      <li>Balcón</li>
      <li>Baño de visita</li>
      <li>Cocina</li>
      <li>2 dormitorios + 1 baño en común</li>
      <li>1 dormitorio + su baño + walking closet</li>
      <li>Área de lavado</li>
    </ul>
  `,
    size: "243 m²",
    beds: 3,
    baths: 3,
    parking: 1,
    lat: 19.429701933540063,
    lng: -70.66327397116464,
    mainImage: "../assets/properties/residencial-rosmary-v-penhouse/main-image.webp",
    gallery: generateGallery("residencial-rosmary-v-penhouse", 14)
  },
  {
    id: 3,
    title: "Residencial Rosmary V (Apartamento)",
    location: "Santiago",
    price: "US$273,000.00",
    description: `
    <p>Este proyecto cuenta con 65 apartamentos los cuales 13 son "Penthouse".</p>
    <ul>
      <li>🛝 Amplia y confortable área social (ROOFTOP).</li>
      <li>🛋️ Lobby amueblado con acceso controlado.</li>
      <li>🏊‍♂️ Piscina con terraza abierta y techada.</li>
      <li>🏋️ Gimnasio equipado.</li>
      <li>🏎️ Amplios parqueos.</li>
      <li>🤌🏽 Terminación en primera.</li>
      <li>🔐 Seguridad 24 horas.</li>
      <li>🛗 Ascensor.</li>
      <li>🎠 Área de juegos para niños.</li>
      <li>📅 Salón de reuniones y conferencias.</li>
      <li>🔋 Planta eléctrica full.</li>
      <li>⚡️ Cerco Eléctrico.</li>
    </ul>
    <p><strong>Apartamentos:</strong></p>
    <p>A, B, C, E, F, H, I, L, M</p>
    <ul>
      <li>Sala</li>
      <li>Comedor/estar</li>
      <li>Balcón</li>
      <li>Baño de visita</li>
      <li>Cocina</li>
      <li>2 dormitorios + 1 baño en común</li>
      <li>1 dormitorio + su baño + walking closet</li>
      <li>1 dormitorio de servicio con su baño</li>
      <li>Área de lavado</li>
    </ul>
    <p>D, G, J, K (No tienen habitación de servicio)</p>
    <ul>
      <li>Sala</li>
      <li>Comedor/estar</li>
      <li>Balcón</li>
      <li>Baño de visita</li>
      <li>Cocina</li>
      <li>2 dormitorios + 1 baño en común</li>
      <li>1 dormitorio + su baño + walking closet</li>
      <li>Área de lavado</li>
    </ul>
  `,
    size: "130 m²",
    beds: 2,
    baths: 2,
    parking: 1,
    lat: 19.429701933540063,
    lng: -70.66327397116464,
    mainImage: "../assets/properties/residencial-rosmary-v-apartamento/main-image.webp",
    gallery: generateGallery("residencial-rosmary-v-apartamento", 10)
  },
  {
    id: 4,
    title: "Villa Moderna en Montañas",
    location: "Santiago",
    price: "US$570,000.00",
    description: `
      <p>¡VIVE EL LUJO ENTRE MONTAÑAS! Villa moderna en fase final de construcción - 372.6 m²</p>
      <p>Descubre esta impresionante villa de 2 niveles diseñada para ofrecerte comodidad, elegancia y conexión con la naturaleza. Ideal para vivir o invertir.</p>
      <strong>Primer Nivel:</strong>
      <ul>
        <li>🛋️ Sala y comedor con diseño abierto</li>
        <li>🍽️ Cocina fría con tope en cuarzo negro</li>
        <li>🛏️ Dormitorio con baño privado</li>
        <li>🚻 Medio baño para visitas</li>
        <li>🌿 Amplia terraza exterior</li>
        <li>🧺 Área de lavado</li>
        <li>🌳 Patio trasero</li>
      </ul>
      <strong>Segundo Nivel:</strong>
      <ul>
        <li>🛌 Dormitorio principal con baño y balcón</li>
        <li>🛏️ 2 dormitorios secundarios</li>
        <li>🚿 Baño común</li>
        <li>👕 Closet de ropa blanca</li>
        <li>🌄 Balcón común con vista panorámica</li>
      </ul>
      <strong>Área de Piscina:</strong>
      <ul>
        <li>♨️ Piscina infinita climatizada con burbujas</li>
        <li>👶 Piscina para niños</li>
        <li>🍗 Gazebo con cocina caliente en granito</li>
        <li>🚿 Ducha exterior</li>
        <li>🛠️ Cuarto de máquinas</li>
      </ul>
      <strong>Detalles Premium:</strong>
      <ul>
        <li>✅ Pisos y baños en porcelanato</li>
        <li>✅ Cocina en madera de roble</li>
        <li>✅ Puerta principal de 3m en roble</li>
        <li>✅ Ventanas en aluminio C70 con vidrio reflectivo</li>
        <li>✅ Triple altura con techo de vidrio laminado</li>
        <li>✅ Verja perimetral en hierro y madera</li>
        <li>✅ Cisterna de 7,500 galones</li>
        <li>✅ 716 m² de solar</li>
        <li>✅ 121 m² de área de piscina</li>
      </ul>
      <p>¡Haz de esta villa tu hogar o tu próxima inversión! Contáctame para más info y agenda tu visita hoy mismo.</p>
    `,
    size: "372.6 m²",
    beds: 4,
    baths: 3.5,
    parking: 2,
    lat: 19.20671788531784,
    lng: -70.58647335875989,
    mainImage: "../assets/properties/villa-en-jarabacoa/main-image.webp",
    gallery: generateGallery("villa-en-jarabacoa", 11)
  }
];
