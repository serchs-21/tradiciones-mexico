"use strict";

/* =========================================
   DESCUBRE LAS TRADICIONES DE MÉXICO
   JavaScript de los tres equipos integrados
   ========================================= */

/* ---------- 1. DATOS CULTURALES CON IMÁGENES REALES ---------- */

const tradiciones = [
  {
    id: "dia-muertos",
    nombre: "Día de Muertos",
    region: "Centro",
    tipo: "Festividades",
    emoji: "💀",
    color: "#f5d5a0",
    imagen: "dia-muertos.jpg",
    lugar: "Celebración en distintas regiones de México",
    descripcion: "Una celebración para recordar y honrar a los seres queridos.",
    historia: "Las familias preparan altares con fotografías, flores de cempasúchil, velas, alimentos y objetos significativos. La tradición reúne prácticas indígenas y elementos religiosos que han evolucionado a lo largo del tiempo. Su expresión cambia de una comunidad a otra y es reconocida internacionalmente por su valor cultural.",
    dato: "Las ofrendas pueden incluir alimentos y objetos que eran significativos para la persona recordada."
  },
  {
    id: "guelaguetza",
    nombre: "La Guelaguetza",
    region: "Sur",
    tipo: "Danza",
    emoji: "💃",
    color: "#f5c4d6",
    imagen: "guelaguetza.jpg",
    lugar: "Oaxaca",
    descripcion: "Una gran fiesta de música, bailes y convivencia comunitaria.",
    historia: "La Guelaguetza reúne delegaciones de distintas regiones de Oaxaca que comparten sus danzas, música, indumentaria y expresiones culturales. El término se relaciona con la reciprocidad y el acto de compartir. Es una muestra de la diversidad de los pueblos oaxaqueños.",
    dato: "Cada delegación aporta expresiones culturales propias de su comunidad."
  },
  {
    id: "voladores",
    nombre: "Voladores de Papantla",
    region: "Sur",
    tipo: "Danza",
    emoji: "🪶",
    color: "#d4e8bd",
    imagen: "papantla.jpg",
    lugar: "Papantla, Veracruz",
    descripcion: "Un ritual ceremonial que une música, movimiento y simbolismo.",
    historia: "Esta ceremonia tradicional está vinculada con los pueblos totonacos. Los participantes realizan una secuencia ritual alrededor de un poste alto mientras la música y el movimiento tienen significados ceremoniales. Es una expresión cultural transmitida entre generaciones.",
    dato: "La ceremonia de los Voladores fue inscrita por la UNESCO en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad en 2009."
  },
  {
    id: "mariachi",
    nombre: "El Mariachi",
    region: "Centro",
    tipo: "Música",
    emoji: "🎺",
    color: "#c7d9ef",
    imagen: "mariachi.jpg",
    lugar: "Jalisco y otras regiones de México",
    descripcion: "Música emblemática que acompaña fiestas, serenatas y celebraciones.",
    historia: "El mariachi es una expresión musical mexicana asociada especialmente con Jalisco. Sus agrupaciones pueden utilizar violines, trompetas, guitarras, vihuela y guitarrón. Su repertorio incluye sones, rancheras y otros géneros populares.",
    dato: "El mariachi tradicional fue reconocido por la UNESCO como Patrimonio Cultural Inmaterial en 2011."
  },
  {
    id: "nochederabanos",
    nombre: "Noche de Rábanos",
    region: "Sur",
    tipo: "Artesanía",
    emoji: "🌺",
    color: "#f6d6c4",
    imagen: "nochederabanos.jpg",
    lugar: "Oaxaca de Juárez, Oaxaca",
    descripcion: "Una celebración donde los rábanos se transforman en figuras artísticas.",
    historia: "Artesanos elaboran figuras y escenas utilizando rábanos y otros materiales vegetales. Esta tradición se celebra en diciembre en la ciudad de Oaxaca y combina creatividad, identidad local y celebración popular.",
    dato: "Es una de las celebraciones más características de la temporada navideña oaxaqueña."
  },
  {
    id: "carnaval-mazatlan",
    nombre: "Carnaval de Mazatlán",
    region: "Norte",
    tipo: "Festividades",
    emoji: "🎭",
    color: "#d9d0f3",
    imagen: "mazatlan.jpg",
    lugar: "Mazatlán, Sinaloa",
    descripcion: "Desfiles, música, comparsas y celebraciones junto al Pacífico.",
    historia: "El Carnaval de Mazatlán es una festividad con desfiles, presentaciones musicales, carros alegóricos y actividades culturales. Forma parte de la identidad de la ciudad y reúne a residentes y visitantes durante varios días.",
    dato: "Es conocido por sus celebraciones públicas y su tradición musical."
  },
  {
    id: "cocina-mexicana",
    nombre: "Cocina Tradicional Mexicana",
    region: "Centro",
    tipo: "Gastronomía",
    emoji: "🌮",
    color: "#f4dfab",
    imagen: "tradicional.jpg",
    lugar: "Todo México",
    descripcion: "Sabores, técnicas e ingredientes transmitidos entre generaciones.",
    historia: "La cocina tradicional mexicana comprende conocimientos agrícolas, técnicas culinarias, ingredientes regionales y prácticas comunitarias. El maíz, el frijol y el chile son fundamentales en muchas de sus expresiones. Cada región aporta recetas, ingredientes y formas de preparación particulares.",
    dato: "La cocina tradicional mexicana fue inscrita por la UNESCO como Patrimonio Cultural Inmaterial en 2010."
  },
  {
    id: "feria-san-marcos",
    nombre: "Feria de San Marcos",
    region: "Centro",
    tipo: "Festividades",
    emoji: "🎡",
    color: "#f5d1d3",
    imagen: "san-marcos.jpg",
    lugar: "Aguascalientes, Aguascalientes",
    descripcion: "Una feria con música, exposiciones, gastronomía y cultura popular.",
    historia: "La Feria Nacional de San Marcos es una celebración de gran importancia para Aguascalientes. Integra actividades culturales, exposiciones, espectáculos, gastronomía y convivencia, y atrae a visitantes de diferentes lugares.",
    dato: "La feria es una de las celebraciones más reconocidas de Aguascalientes."
  }
];

/* ---------- 2. ALMACENAMIENTO COMPARTIDO ---------- */

const STORAGE = {
  visitas: "visitas",
  favoritos: "favoritos",
  muro: "muroComentarios",
  pasaporte: "pasaporteCultural",
  reacciones: "reacciones"
};

function leerStorage(clave, valorPredeterminado) {
  try {
    const dato = localStorage.getItem(clave);
    return dato === null ? valorPredeterminado : JSON.parse(dato);
  } catch (error) {
    console.warn("No se pudo leer el almacenamiento:", clave, error);
    return valorPredeterminado;
  }
}

function guardarStorage(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
    return true;
  } catch (error) {
    console.error("No se pudo guardar:", clave, error);
    return false;
  }
}

function emitirEvento(nombre, detalle = {}) {
  document.dispatchEvent(
    new CustomEvent(nombre, { detail: detalle })
  );
}

/* ---------- 3. REFERENCIAS DEL DOM ---------- */

const grid = document.getElementById("traditionsGrid");
const regionFilter = document.getElementById("regionFilter");
const typeFilter = document.getElementById("typeFilter");
const onlyFavorites = document.getElementById("onlyFavorites");
const resultsMessage = document.getElementById("resultsMessage");
const emptyState = document.getElementById("emptyState");
const modalRoot = document.getElementById("modalRoot");

const visitCounter = document.getElementById("visitCounter");
const reactionCounter = document.getElementById("reactionCounter");
const commentCounter = document.getElementById("commentCounter");

const visitorForm = document.getElementById("visitorForm");
const commentsWall = document.getElementById("commentsWall");
const wallEmpty = document.getElementById("wallEmpty");
const formMessage = document.getElementById("formMessage");

/* ---------- 4. ESTADO DE LA APLICACIÓN ---------- */

let favoritos = leerStorage(STORAGE.favoritos, []);
let comentarios = leerStorage(STORAGE.muro, []);
let pasaporte = leerStorage(STORAGE.pasaporte, []);
let reacciones = Number(leerStorage(STORAGE.reacciones, 0)) || 0;

if (!Array.isArray(favoritos)) favoritos = [];
if (!Array.isArray(comentarios)) comentarios = [];
if (!Array.isArray(pasaporte)) pasaporte = [];

favoritos = favoritos.filter(id =>
  tradiciones.some(tradicion => tradicion.id === id)
);

pasaporte = pasaporte.filter(id =>
  tradiciones.some(tradicion => tradicion.id === id)
);

let regionSeleccionada = "Todas";

/* ---------- 5. EQUIPO 2: VISITAS ---------- */

function inicializarVisitas() {
  const visitasGuardadas = Number(leerStorage(STORAGE.visitas, 0));
  const visitas = (Number.isFinite(visitasGuardadas) &&
    visitasGuardadas >= 0 ? visitasGuardadas : 0) + 1;

  guardarStorage(STORAGE.visitas, visitas);

  const mensaje = document.getElementById("welcomeMessage");
  const sufijo = visitas === 1 ? "vez" : "veces";

  mensaje.textContent =
    `¡Bienvenido! Has visitado nuestras tradiciones ${visitas} ${sufijo}.`;

  animarContador(visitCounter, visitas);
}

function animarContador(elemento, valorFinal) {
  const duracion = 900;
  const inicio = performance.now();

  elemento.textContent = "0";

  function actualizar(ahora) {
    const progreso = Math.min((ahora - inicio) / duracion, 1);
    const suavizado = 1 - Math.pow(1 - progreso, 3);

    elemento.textContent = Math.floor(valorFinal * suavizado).toLocaleString("es-MX");

    if (progreso < 1) {
      requestAnimationFrame(actualizar);
    } else {
      elemento.textContent = valorFinal.toLocaleString("es-MX");
    }
  }

  requestAnimationFrame(actualizar);
}

function actualizarContadores() {
  reactionCounter.textContent = reacciones.toLocaleString("es-MX");
  commentCounter.textContent = comentarios.length.toLocaleString("es-MX");
}

/* ---------- 6. EQUIPO 1: GALERÍA Y FILTROS ---------- */

function renderizarGaleria() {
  const region = regionFilter.value;
  const tipo = typeFilter.value;

  const filtradas = tradiciones.filter(tradicion => {
    const coincideRegion =
      region === "Todas" || tradicion.region === region;

    const coincideTipo =
      tipo === "Todas" || tradicion.tipo === tipo;

    const coincideFavorito =
      !onlyFavorites.checked || favoritos.includes(tradicion.id);

    return coincideRegion && coincideTipo && coincideFavorito;
  });

  grid.replaceChildren();

  filtradas.forEach(tradicion => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tradition-card";

    const visual = document.createElement("div");
    visual.className = "tradition-visual";
    visual.style.setProperty("--card-color", tradicion.color);
    visual.style.position = "relative";
    visual.style.overflow = "hidden";

    // Muestra la imagen real subida a GitHub
    const img = document.createElement("img");
    img.src = tradicion.imagen;
    img.alt = tradicion.nombre;
    img.style.width = "100%";
    img.style.height = "170px";
    img.style.objectFit = "cover";
    img.style.display = "block";

    const etiqueta = document.createElement("span");
    etiqueta.className = "region-tag";
    etiqueta.textContent = tradicion.region;

    const botonFavorito = document.createElement("button");
    const esFavorita = favoritos.includes(tradicion.id);

    botonFavorito.className =
      "favorite-btn" + (esFavorita ? " is-favorite" : "");
    botonFavorito.type = "button";
    botonFavorito.textContent = esFavorita ? "❤️" : "🤍";
    botonFavorito.setAttribute(
      "aria-label",
      esFavorita
        ? `Quitar ${tradicion.nombre} de favoritas`
        : `Agregar ${tradicion.nombre} a favoritas`
    );
    botonFavorito.setAttribute("aria-pressed", String(esFavorita));

    botonFavorito.addEventListener("click", () => {
      alternarFavorito(tradicion.id);
    });

    visual.append(img, etiqueta, botonFavorito);

    const info = document.createElement("div");
    info.className = "tradition-info";

    const titulo = document.createElement("h3");
    titulo.textContent = tradicion.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = tradicion.descripcion;

    const meta = document.createElement("div");
    meta.className = "tradition-meta";

    const tipoEtiqueta = document.createElement("span");
    tipoEtiqueta.textContent = tradicion.tipo;

    const lugarEtiqueta = document.createElement("span");
    lugarEtiqueta.textContent = tradicion.lugar;

    meta.append(tipoEtiqueta, lugarEtiqueta);

    const botonDetalles = document.createElement("button");
    botonDetalles.className = "btn btn-primary details-btn";
    botonDetalles.type = "button";
    botonDetalles.textContent = "Saber más →";
    botonDetalles.addEventListener("click", () => {
      abrirModal(tradicion.id);
    });

    info.append(titulo, descripcion, meta, botonDetalles);
    tarjeta.append(visual, info);
    grid.appendChild(tarjeta);
  });

  resultsMessage.textContent =
    `${filtradas.length} ${filtradas.length === 1 ? "tradición encontrada" : "tradiciones encontradas"}.`;

  emptyState.hidden = filtradas.length !== 0;
}

function sincronizarRegion
