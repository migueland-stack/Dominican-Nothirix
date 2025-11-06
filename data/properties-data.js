function generateGallery(propertyFolder, count, extension = "webp") {
  const basePath = "../assets/properties/" + propertyFolder;
  return Array.from(
    { length: count },
    (_, i) => `${basePath}/${i + 1}.${extension}`
  );
}

const properties = [
  {
    id: 1,
    title: "Residencial Quinta Vista",
    location: "Santiago",
    status: ["venta"],
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
    gallery: generateGallery("residencial-quinta-vista", 32),
  },
  {
    id: 2,
    title: "Residencial Rosmary V (Penthouse)",
    location: "Santiago",
    status: ["venta"],
    price: "Desde US$430,500.00",
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
    mainImage:
      "../assets/properties/residencial-rosmary-v-penhouse/main-image.webp",
    gallery: generateGallery("residencial-rosmary-v-penhouse", 13),
  },
  {
    id: 3,
    title: "Residencial Rosmary V (Apartamento)",
    location: "Santiago",
    status: ["venta"],
    price: "Desde US$261,500.00",
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
    mainImage:
      "../assets/properties/residencial-rosmary-v-apartamento/main-image.webp",
    gallery: generateGallery("residencial-rosmary-v-apartamento", 10),
  },
  {
    id: 4,
    title: "Villa Moderna en Montañas",
    location: "Santiago",
    status: ["venta"],
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
    gallery: generateGallery("villa-en-jarabacoa", 11),
  },
  {
    id: 5,
    title: "Residencial Residenza",
    location: "Santiago",
    status: ["venta"],
    price: "Desde US$95,000.00",
    description: `
  <p>Descubre <strong>Residenza</strong>, un residencial de diseño minimalista en una zona estratégica de Santiago, donde el confort, la elegancia y la calidez se unen para crear un espacio único para vivir 🏡.</p>
  <p>📐 Apartamentos desde 95 m² hasta 165 m²</p>

  <strong>Terminaciones de Primera:</strong>
  <ul>
    <li>✅ Pisos en porcelanato</li>
    <li>✅ Cocinas modulares con tope en granito</li>
    <li>✅ Baños modernos totalmente revestidos</li>
    <li>✅ Barandas en cristal y acero inoxidable</li>
    <li>✅ Ventanas de alta calidad</li>
    <li>✅ Preinstalación de alarma y domótica incluida 🔥</li>
  </ul>

  <p>Ubicado cerca de todo lo que necesitas: Circunvalación Norte, Supermercados Bravo y Don Lindo, Plaza Amira, Los Laureles y más 🛒🏙️.</p>
  <p>Vive la experiencia de un espacio moderno, elegante y funcional, ideal para quienes buscan invertir o disfrutar de un estilo de vida único.</p>
  <p>Proyecto pensado para quienes buscan más que un hogar 🏠. Separa tu apartamento con US$4,000.</p>
  <p>📲 Contáctanos hoy y asegura tu lugar en este exclusivo proyecto.</p>
`,
    size: "Desde 95m²",
    beds: 3,
    baths: 2,
    parking: 1,
    lat: 19.4461575003788,
    lng: -70.64743819238782,
    mainImage: "../assets/properties/residencial-residenza/main-image.webp",
    gallery: generateGallery("residencial-residenza", 8),
  },
  {
    id: 6,
    title: "Vera Condos - Residencial Exclusivo",
    location: "Santiago",
    status: ["venta"],
    price: "Desde US$112,500",
    description: `
  <p>Descubre <strong>Vera Condos</strong>, un espacio diseñado para quienes buscan exclusividad, elegancia y confort en una zona de gran desarrollo de Santiago de los Caballeros 🏙️. Con líneas modernas y espacios integrados, este proyecto redefine el concepto de hogar.</p>
  
  <strong>Amenidades del Proyecto:</strong>
  <ul>
    <li>Oficina administrativa</li>
    <li>Lobby amueblado y climatizado ✨</li>
    <li>Terrazas techadas y al aire libre 🌿</li>
    <li> Área de BBQ 🍖</li>
    <li>Gimnasio equipado 🏋️‍♂️</li>
    <li>Ascensor 🚀</li>
    <li>Planta eléctrica en áreas comunes ⚡</li>
    <li>Sistema de gas centralizado 🔥</li>
    <li>Circuito cerrado de vigilancia 24/7 🎥</li>
    <li>Intercom HD 📞</li>
  </ul>

  <strong>Distribución del Apartamento:</strong>
  <ul>
    <li>🏡 Balcón con vista</li>
    <li>🛋️ Sala & Comedor integrados</li>
    <li>🍳 Cocina moderna</li>
    <li>🧺 Área de lavado</li>
    <li>🚿 Baño de servicio</li>
    <li>👑 Habitación principal con baño y vestidor</li>
    <li>🛏️ 2 habitaciones secundarias con clóset</li>
    <li>🛁 Baño común</li>
    <li>👕 Cuarto de ropa blanca</li>
    <li>☀️ Área de tendedero en techo</li>
    <li>🚗 1 parqueo privado</li>
  </ul>

  <strong>Terminaciones de Primera:</strong>
  <ul>
    <li>Piso en porcelanato</li>
    <li>Cocinas modulares con tope en granito</li>
    <li>Baños revestidos en cerámica moderna</li>
    <li>Aire acondicionado en todas las habitaciones</li>
    <li> Preinstalación de alarma</li>
  </ul>
<!--
  <strong>Facilidades de Pago:</strong>
  <ul>
    <li>Separación: USD 4,000</li>
    <li>Inicial: 30% durante construcción</li>
    <li>Contra entrega: 70% restante</li>
  </ul>

  <p>📅 Inicio de obra: Septiembre 2022</p>
  <p>📅 Entrega: Abril 2024</p>
  -->
  <p>👉 Vive en un proyecto único, exclusivo y familiar en el corazón de Santiago. ¡Tu nuevo hogar te espera! 🏡✨</p>
`,
    size: "80m²", // ajustar si hay información específica de tamaño
    beds: 3,
    baths: 2,
    parking: 1,
    lat: 19.484612346439288,
    lng: -70.6529101981554,
    mainImage: "../assets/properties/residencial-vera-condos/main-image.webp",
    gallery: generateGallery("residencial-vera-condos", 6),
  },
  {
    id: 7,
    title: "Residencial Olaya 2.0",
    location: "Santiago",
    status: ["venta"],
    price: "Desde US$216,000",
    description: `
  <p><strong>Residencial Olaya 2.0</strong> es un proyecto exclusivo y familiar que se desarrolla en un solar de <strong>351.41 m²</strong>, con tan solo <strong>4 unidades</strong>, distribuidas en un apartamento por nivel 🏡. Diseñado para ofrecer privacidad, amplitud y confort en una zona de alta valorización de <strong>Santiago de los Caballeros</strong>.</p>

  <p>Las unidades cuentan con áreas de construcción desde <strong>122 m² hasta 177 m²</strong>.</p>
  <p>📅 <strong>Fecha estimada de entrega:</strong> Enero 2026</p>

  <strong>Características Generales:</strong>
  <ul>
    <li>Gas centralizado 🔥</li>
    <li>Inversor en áreas comunes ⚡</li>
    <li>Dos (2) parqueos por apartamento (descubiertos) 🚗</li>
    <li>Control de acceso 🔐</li>
    <li>Intercom 📞</li>
    <li>Cámaras de seguridad en áreas comunes 🎥</li>
    <li>Cisterna 💧</li>
  </ul>

  <strong>Características de Terminación:</strong>
  <ul>
    <li>Pisos y revestimientos en porcelanato importado 🏠</li>
    <li>Cocina modular en MDF hidrófugo 🍳</li>
    <li>Encimeras de cocina en granito natural ✨</li>
    <li>Puertas en madera preciosa 🚪</li>
  </ul>

  <p>👉 Disfruta la tranquilidad y elegancia de vivir en un proyecto exclusivo con solo 4 unidades. ¡Ideal para quienes buscan privacidad, calidad y ubicación privilegiada! 🌿</p>
  `,
    size: "Desde 122m²",
    beds: 3,
    baths: 2.5,
    parking: 2,
    lat: 19.4548,
    lng: -70.6972,
    mainImage: "../assets/properties/residencial-olaya/main-image.webp",
    gallery: generateGallery("residencial-olaya", 9),
  },
  {
    id: 8,
    title: "Residencial Hispanoamericana - Proyecto Moderno",
    location: "Santiago",
    status: ["venta"],
    price: "Desde US$133,000",
    description: `
  <p>Te presento una propuesta única que <strong>redefine el estilo de vida contemporáneo</strong>, ideal para vivir con comodidad o invertir con visión en una zona estratégica de <strong>Santiago de los Caballeros</strong>. 🌆</p>

  <p>📍 <strong>Ubicación:</strong> Próximo a la <strong>UAPA</strong> y a la <strong>Av. Hispanoamericana</strong>, a solo <strong>15 minutos del Aeropuerto Internacional del Cibao</strong> ✈️.</p>

  <p>🏢 <strong>Edificios de 4 niveles</strong> | 🏡 <strong>Apartamentos de 105 m²</strong></p>

  <strong>Distribución del Apartamento:</strong>
  <ul>
    <li>🛏️ 3 habitaciones</li>
    <li>🛁 2 baños</li>
    <li>🛋️ Sala</li>
    <li>🍽️ Comedor</li>
    <li>🍳 Cocina</li>
    <li>🧺 Área de lavado</li>
    <li>🌅 Balcón</li>
    <li>🚗 1 parqueo</li>
    <li>🏖️ 4to nivel con derecho a azotea</li>
  </ul>

  <strong>Amenidades Premium:</strong>
  <ul>
    <li>🏋️ Gimnasio equipado</li>
    <li>🧖 Sauna</li>
    <li>💦 Jacuzzi</li>
    <li>🏊 Piscina</li>
    <li>💼 Salón de conferencias</li>
    <li>⚡ Inversor en áreas comunes</li>
    <li>🚘 Parqueos para visitas</li>
  </ul>

  <strong>Facilidades de Pago:</strong>
  <ul>
    <li>💵 Reserva: US$1,000</li>
    <li>✍️ Firma de contrato: US$4,000</li>
    <li>🏗️ Entrega estimada: Finales 2028</li>
    <li>💰 Cuotas aproximadas: US$700/mes</li>
  </ul>

  <p>👉 <strong>Invierte o vive en un espacio moderno, cómodo y con excelentes amenidades</strong>. ¡Agenda tu cita hoy mismo y asegura tu nueva propiedad! 📲✨</p>
  `,
    size: "105m²",
    beds: 3,
    baths: 2,
    parking: 1,
    lat: 19.42614266519048,
    lng: -70.67175801777955,
    mainImage:
      "../assets/properties/residencial-hispanoamericana/main-image.webp",
    gallery: generateGallery("residencial-hispanoamericana", 20),
  },
  {
    id: 9,
    title: "Casa Familiar en Los Prados - Con Penthouse",
    location: "Santiago",
    status: ["venta"],
    price: "RD$20,000,000",
    description: `
  <p>Descubre esta <strong>amplia y elegante casa en Los Prados</strong>, con una distribución funcional, excelentes terminaciones y un <strong>penthouse con jacuzzi y área de BBQ</strong> para disfrutar momentos únicos en familia o con amigos 🏡🔥.</p>

  <p><strong>Superficie total:</strong> 264 m²</p>
  <p><strong>Solar adicional:</strong> 132.41 m²</p>
  <p><strong>Construcción principal:</strong> 132.55 m²</p>

  <strong>Distribución de la Propiedad:</strong>
  <ul>
    <li>🍳 Cocina</li>
    <li>🛋️ Sala</li>
    <li>🍽️ Comedor</li>
    <li>🪑 Antesala</li>
    <li>🌅 Balcón</li>
    <li>🏖️ Penthouse con jacuzzi y área de BBQ</li>
    <li>🧹 Habitación de servicio</li>
    <li>🛏️ 5 habitaciones</li>
    <li>🛁 4 baños</li>
    <li>🚻 Baño de visitas</li>
    <li>🚪 Walk-in clóset en la habitación principal</li>
    <li>🌳 Patio anexo tipo terreno</li>
  </ul>

  <strong>Características Adicionales:</strong>
  <ul>
    <li>💧 Cisterna</li>
    <li>🔔 Sistema de alarma e intercom</li>
    <li>🪟 Hierros de seguridad</li>
  </ul>

  <p>👉 Ideal para familias que buscan <strong>espacio, privacidad y comodidad</strong> en una de las zonas más tranquilas y céntricas de Santiago. ¡Tu nuevo hogar te espera! ✨</p>
  `,
    size: "264.96m²",
    beds: 5,
    baths: 4.5,
    parking: 2,
    lat: 19.499368763846686,
    lng: -70.71135127103888,
    mainImage: "../assets/properties/casa-los-prados/main-image.webp",
    gallery: generateGallery("casa-los-prados", 12),
  },
  /* {
    id: 10,
    title: "Apartamento en Barrio Obrero - Segundo Nivel",
    location: "Santiago",
    status: ["alquiler"],
    price: "RD$13,000 Mensual",
    description: `
  <p>Descubre este <strong>acogedor apartamento</strong> ubicado en la <strong>Calle Prosperidad, Casa 3, Sector Barrio Obrero</strong>, justo detrás de la Villa Olímpica. Una zona tranquila, céntrica y con fácil acceso a universidades, comercios y transporte público 🏡✨.</p>

  <p><strong>Ubicación:</strong> Segundo nivel</p>

  <strong>Distribución del Inmueble:</strong>
  <ul>
    <li>🌅 Galería amplia</li>
    <li>🛋️ Sala–comedor con diseño abierto</li>
    <li>🍳 Cocina funcional</li>
    <li>🛏️ 2 habitaciones cómodas</li>
    <li>🛁 1 baño común</li>
    <li>🧺 Área de lavado compartida</li>
  </ul>

  <strong>Ventajas:</strong>
  <ul>
    <li>📍 Excelente ubicación</li>
    <li>🔒 Zona segura y accesible</li>
    <li>🏃 Cercanía a la Villa Olímpica y puntos de interés</li>
  </ul>

  <p>Ideal para <strong>estudiantes, jóvenes profesionales o parejas</strong> que buscan una vivienda práctica y bien ubicada en Santiago.</p>

  <p>📞 Contáctanos hoy mismo para más información o agendar una visita:<br>
  📲 809-490-7813<br>
  <strong>Nothirix Agencia Inmobiliaria</strong> — Tu espacio ideal te espera. 🏠</p>
  `,
    size: "",
    beds: 2,
    baths: 1,
    parking: 0,
    lat: 19.43155051858726,
    lng: -70.67885133310419,
    mainImage: "../assets/properties/barrio-obrero/main-image.webp",
    gallery: generateGallery("barrio-obrero", 6),
  },*/
  {
    id: 11,
    title: "Apartamento en Breeze By Tecasa - Segundo Nivel",
    location: "Santiago",
    status: ["alquiler"],
    price: "RD$25,000 Mensual",
    description: `
  <p>Vive con comodidad y estilo en este hermoso <strong>apartamento en Breeze By Tecasa</strong>, ubicado en el <strong>segundo nivel</strong> de un residencial moderno con <strong>excelentes amenidades y seguridad 24 horas</strong> 🏡✨.</p>

  <p><strong>Ubicación:</strong> Breeze By Tecasa, Santiago</p>

  <strong>Distribución del Inmueble:</strong>
  <ul>
    <li>🛋️ Sala</li>
    <li>🍴 Comedor</li>
    <li>🧑‍🍳 Cocina</li>
    <li>🛏️ 3 habitaciones</li>
    <li>🚻 2 baños</li>
    <li>🚪 Walking clóset</li>
    <li>🧺 Área de lavado</li>
    <li>🍃 Balcón</li>
    <li>🚘 2 parqueos</li>
  </ul>

  <strong>Características del Residencial:</strong>
  <ul>
    <li>🏊‍♂️ Piscina</li>
    <li>🏀 Cancha de basketball</li>
    <li>🤸 Área de juegos infantiles</li>
    <li>💪 GYM</li>
    <li>🎉 Gacebo para actividades</li>
    <li>🍗 Área de BBQ</li>
    <li>🔥 Gas común</li>
    <li>👮 Seguridad 24 horas</li>
    <li>🎥 Cámaras de vigilancia</li>
  </ul>

  <p>Disfruta de un ambiente tranquilo, seguro y lleno de comodidades. Ideal para familias o profesionales que buscan <strong>calidad de vida y cercanía a todo</strong> lo que Santiago ofrece.</p>
  `,
    size: "",
    beds: 3,
    baths: 2,
    parking: 2,
    lat: 19.476847479782066,
    lng: -70.65567787519664,
    mainImage: "../assets/properties/breeze-by-tecasa/main-image.webp",
    gallery: generateGallery("breeze-by-tecasa", 17),
  },
  {
    id: 12,
    title: "Apartamento Amueblado en Torre Real IV",
    location: "Santiago",
    status: ["alquiler"],
    price: "RD$49,000 Mensual",
    description: `
  <p>Disfruta de la comodidad y el estilo de este <strong>apartamento totalmente amueblado en Torre Real IV</strong>, con mantenimiento incluido. Ubicado en <strong>Gurabo, Santiago de los Caballeros</strong>, dentro de un residencial moderno y seguro con todas las amenidades que necesitas 🏢✨.</p>

  <strong>Características del Apartamento:</strong>
  <ul>
    <li>🛏️ 3 habitaciones (principal con baño y walking clóset)</li>
    <li>🚻 2 baños</li>
    <li>🛋️ Sala</li>
    <li>🍴 Comedor</li>
    <li>🧑‍🍳 Cocina</li>
    <li>🧺 Área de lavado</li>
    <li>🍃 Balcón</li>
    <li>🚘 2 parqueos</li>
  </ul>

  <strong>Comodidades del Residencial:</strong>
  <ul>
    <li>🏊‍♂️ Piscina</li>
    <li>🏋🏻‍♀️ Gimnasio</li>
    <li>🛖 Gacebo para actividades</li>
    <li>🍖 Área de BBQ</li>
    <li>🏀 Cancha de basketball</li>
    <li>🛝 Área de juegos infantiles</li>
    <li>🛗 Elevador</li>
    <li>👮 Seguridad 24 horas</li>
    <li>📹 Cámaras de vigilancia</li>
  </ul>

  <p>Ideal para quienes buscan <strong>confort, seguridad y una ubicación privilegiada</strong> en Santiago. ¡Listo para mudarte y disfrutarlo desde el primer día! 🏠✨</p>
  `,
    size: "",
    beds: 3,
    baths: 2,
    parking: 2,
    lat: 19.47373934104225,
    lng: -70.66596919394847,
    mainImage: "../assets/properties/torre-IV-amueblado/main-image.webp",
    gallery: generateGallery("torre-IV-amueblado", 9),
  },
  {
    id: 13,
    title: "Apartamento en Residencial Los Naranjos III",
    location: "Santiago",
    status: ["alquiler"],
    price: "RD$23,000 Mensual",
    description: `
  <p>Encantador <strong>apartamento en alquiler</strong> ubicado en el <strong>Residencial Los Naranjos III</strong>, en la zona de Los Rieles de Gurabo, Santiago. Un espacio moderno, funcional y seguro, ideal para familias que buscan comodidad y buena ubicación 🏡✨.</p>

  <p><strong>Superficie:</strong> 90 m²</p>

  <strong>Distribución del Apartamento:</strong>
  <ul>
    <li>🛋️ Sala</li>
    <li>🍴 Comedor</li>
    <li>🧑‍🍳 Cocina</li>
    <li>🛏️ 3 habitaciones</li>
    <li>🚻 2 baños</li>
    <li>🧺 Área de lavado</li>
    <li>🚗 2 parqueos</li>
  </ul>

  <strong>Comodidades del Residencial:</strong>
  <ul>
    <li>🏊‍♀️ Piscina</li>
    <li>👶 Área infantil</li>
    <li>🏀 Cancha de basketball</li>
    <li>🎉 Salón de eventos</li>
    <li>🎥 Cámaras de seguridad</li>
    <li>👮 Seguridad 24/7</li>
  </ul>

  <p>Vive en un entorno tranquilo y familiar, con todas las amenidades necesarias para disfrutar del confort que mereces. ¡Tu nuevo hogar en <strong>Los Rieles de Gurabo</strong> te espera! 🏠✨</p>
  `,
    size: "90m²",
    beds: 3,
    baths: 2,
    parking: 2,
    lat: 19.490141420945275,
    lng: -70.64892128868988,
    mainImage:
      "../assets/properties/residencial-los-naranjos-III/main-image.webp",
    gallery: generateGallery("residencial-los-naranjos-III", 9),
  },
  {
    id: 14,
    title: "Apartamento en Treo Residencial - Próximo al HOMS",
    location: "Santiago",
    status: ["alquiler"],
    price: "RD$90,000 Mensual",
    description: `
  <p>Descubre el exclusivo <strong>Treo Residencial</strong>, un moderno proyecto de apartamentos ubicado próximo a la <strong>Autopista Duarte</strong>, al <strong>HOMS</strong> y a solo 5 minutos del <strong>Aeropuerto del Cibao</strong> ✈️🏢. Diseñado para ofrecer <strong>confort, elegancia y diversión</strong> sin salir de casa 🏡✨.</p>

  <p><strong>Superficie del Apartamento:</strong> 115 m²</p>

  <strong>Distribución del Apartamento:</strong>
  <ul>
    <li>🛏️ 3 habitaciones (principal con walking clóset)</li>
    <li>🚿 2 baños</li>
    <li>🛋️ Sala</li>
    <li>🍽️ Comedor</li>
    <li>🌅 Balcón</li>
    <li>👩‍🍳 Cocina</li>
    <li>🧺 Área de lavado</li>
    <li>🚪 Salida de emergencia</li>
    <li>🚗 2 parqueos + 🚙 parqueos de visita</li>
  </ul>

  <strong>Características del Proyecto:</strong>
  <ul>
    <li>🏊 Piscina</li>
    <li>🏢 Área común</li>
    <li>🛗 Ascensor</li>
    <li>💪 Gimnasio</li>
    <li>🎉 Gazebo para actividades</li>
    <li>🌳 Área de recreación</li>
    <li>🧸 Área de juegos infantiles</li>
    <li>☀️ Sun Deck</li>
  </ul>

  <strong>Terminaciones y Seguridad:</strong>
  <ul>
    <li>🌳 Madera preciosa</li>
    <li>🪵 Cerámica importada</li>
    <li>🍳 Cocina con tope de granito</li>
    <li>⚡ Planta eléctrica en áreas comunes</li>
    <li>🛡️ Seguridad 24 horas</li>
    <li>🚪 Portón eléctrico</li>
    <li>📞 Intercom</li>
    <li>🎥 Cámaras de seguridad</li>
  </ul>

  <p>Un proyecto pensado para quienes desean <strong>calidad, confort y ubicación privilegiada</strong> en Santiago. ¡Haz de Treo Residencial el lugar donde empiece tu nueva historia! 🌟</p>
  `,
    size: "115m²",
    beds: 3,
    baths: 2,
    parking: 2,
    lat: 19.430035794893207,
    lng: -70.65024069846304,
    mainImage: "../assets/properties/treo-residencial/main-image.webp",
    gallery: generateGallery("treo-residencial", 17),
  },
  {
    id: 15,
    title: "Apartamento en Verdana Deluxes - Tercer Nivel",
    location: "Santiago",
    status: ["alquiler"],
    price: "RD$30,000 Mensual",
    description: `
  <p>Vive con estilo en este <strong>amplio apartamento en Verdana Deluxes</strong>, ubicado en el <strong>tercer nivel</strong> de un residencial moderno, seguro y con excelente ubicación en Santiago 🏡✨.</p>

  <p><strong>Superficie:</strong> 198 m²</p>

  <strong>Distribución del Apartamento:</strong>
  <ul>
    <li>🛋️ Sala</li>
    <li>🍴 Comedor</li>
    <li>🧑‍🍳 Cocina</li>
    <li>🛏️ 3 habitaciones</li>
    <li>🚻 2.5 baños</li>
    <li>🚪 Walking clóset</li>
    <li>🧺 Área de lavado</li>
    <li>🧹 Cuarto de servicio</li>
    <li>🍃 Balcón espacioso</li>
    <li>🚘 2 parqueos</li>
  </ul>

  <strong>Características del Residencial:</strong>
  <ul>
    <li>👮 Seguridad 24 horas</li>
    <li>🎥 Cámaras de vigilancia</li>
    <li>🚪 Portón eléctrico</li>
  </ul>

  <p>Este apartamento ofrece <strong>espacios amplios, elegantes y bien distribuidos</strong>, ideales para quienes buscan confort, privacidad y tranquilidad en una de las zonas más exclusivas de Santiago 🌆.</p>
  `,
    size: "198m²",
    beds: 3,
    baths: 2.5,
    parking: 2,
    lat: 19.42501749887288,
    lng: -70.65019683102048,
    mainImage: "../assets/properties/verdana-deluxes/main-image.webp",
    gallery: generateGallery("verdana-deluxes", 9),
  },
  {
    id: 16,
    title: "Apartamento en Torre Real VIII - Los Álamos",
    location: "Santiago",
    status: ["alquiler"],
    price: "RD$38,000",
    description: `
  <p>Disfruta de la elegancia y confort de este <strong>apartamento en Torre Real VIII</strong>, ubicado en <strong>Los Álamos</strong>, Santiago. Un residencial moderno, seguro y con excelentes amenidades para toda la familia 🏢✨.</p>

  <p><strong>Nivel:</strong> 1er piso</p>

  <strong>Distribución del Apartamento:</strong>
  <ul>
    <li>👩‍🍳 Cocina moderna y funcional</li>
    <li>🛋️ Sala</li>
    <li>🧺 Área de lavado</li>
    <li>🌅 Balcón</li>
    <li>🛏️ 1 habitación principal con baño y walk-in clóset</li>
    <li>🛏️ 2 habitaciones secundarias con clóset</li>
    <li>🚿 Baño común</li>
    <li>🅿️ 2 parqueos</li>
  </ul>

  <strong>Amenidades del Proyecto:</strong>
  <ul>
    <li>🏊 Piscina</li>
    <li>🎉 Área social para eventos o reuniones</li>
    <li>💪 Gimnasio equipado</li>
    <li>👧 Área infantil</li>
    <li>💦 Calentador</li>
    <li>🛗 Ascensor en cada torre</li>
    <li>🛡️ Seguridad 24/7</li>
  </ul>

  <p>Un espacio ideal para quienes buscan <strong>comodidad, seguridad y un ambiente familiar</strong> en una de las zonas más exclusivas de Santiago. ¡Tu nuevo hogar te espera en Torre Real VIII – Los Álamos! 🏡💫</p>
  `,
    size: "",
    beds: 3,
    baths: 2,
    parking: 2,
    lat: 19.4313057579927,
    lng: -70.6652846048258,
    mainImage:
      "../assets/properties/torre-real-VIII-los-alamos/main-image.webp",
    gallery: generateGallery("torre-real-VIII-los-alamos", 21),
  },
];
