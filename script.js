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
    id: "rabanos",
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

  if (mensaje) {
    mensaje.textContent = `¡Bienvenido! Has visitado nuestras tradiciones ${visitas} ${sufijo}.`;
  }

  if (visitCounter) {
    animarContador(visitCounter, visitas);
  }
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
  if (reactionCounter) reactionCounter.textContent = reacciones.toLocaleString("es-MX");
  if (commentCounter) commentCounter.textContent = comentarios.length.toLocaleString("es-MX");
}

/* ---------- 6. EQUIPO 1: GALERÍA Y FILTROS ---------- */

function renderizarGaleria() {
  if (!grid) return;

  const region = regionFilter ? regionFilter.value : "Todas";
  const tipo = typeFilter ? typeFilter.value : "Todas";

  const filtradas = tradiciones.filter(tradicion => {
    const coincideRegion =
      region === "Todas" || tradicion.region === region;

    const coincideTipo =
      tipo === "Todas" || tradicion.tipo === tipo;

    const coincideFavorito =
      !onlyFavorites || !onlyFavorites.checked || favoritos.includes(tradicion.id);

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
    visual.style.height = "180px";
    visual.style.overflow = "hidden";

    // Imagen real sustituyendo los íconos
    const img = document.createElement("img");
    img.src = tradicion.imagen;
    img.alt = tradicion.nombre;
    img.style.width = "100%";
    img.style.height = "100%";
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

  if (resultsMessage) {
    resultsMessage.textContent =
      `${filtradas.length} ${filtradas.length === 1 ? "tradición encontrada" : "tradiciones encontradas"}.`;
  }

  if (emptyState) {
    emptyState.hidden = filtradas.length !== 0;
  }
}

function sincronizarRegion(region) {
  regionSeleccionada = region;
  if (regionFilter) regionFilter.value = region;

  document.querySelectorAll(".region-btn").forEach(boton => {
    const activo = boton.dataset.region === region;
    boton.classList.toggle("active", activo);
    boton.setAttribute("aria-pressed", String(activo));
  });

  renderizarGaleria();
}

document.querySelectorAll(".region-btn").forEach(boton => {
  boton.addEventListener("click", () => {
    sincronizarRegion(boton.dataset.region);
  });
});

if (regionFilter) {
  regionFilter.addEventListener("change", () => {
    sincronizarRegion(regionFilter.value);
  });
}

if (typeFilter) typeFilter.addEventListener("change", renderizarGaleria);
if (onlyFavorites) onlyFavorites.addEventListener("change", renderizarGaleria);

function alternarFavorito(id) {
  const indice = favoritos.indexOf(id);
  let accion;

  if (indice >= 0) {
    favoritos.splice(indice, 1);
    accion = "eliminado";
  } else {
    favoritos.push(id);
    accion = "agregado";
    reacciones++;
  }

  guardarStorage(STORAGE.favoritos, favoritos);
  guardarStorage(STORAGE.reacciones, reacciones);

  actualizarContadores();
  renderizarGaleria();

  emitirEvento("tradiciones:favorito", {
    id,
    accion,
    total: favoritos.length
  });
}

/* ---------- 7. MODAL CON NARRADOR DE VOZ ---------- */

function abrirModal(id) {
  const tradicion = tradiciones.find(item => item.id === id);
  if (!tradicion || !modalRoot) return;

  cerrarModal();

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "traditionModal";
  overlay.setAttribute("role", "presentation");

  const panel = document.createElement("section");
  panel.className = "modal-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "true");
  panel.setAttribute("aria-labelledby", "modalTitle");

  const cerrar = document.createElement("button");
  cerrar.className = "modal-close";
  cerrar.type = "button";
  cerrar.textContent = "×";
  cerrar.setAttribute("aria-label", "Cerrar ventana");

  const visual = document.createElement("img");
  visual.src = tradicion.imagen;
  visual.alt = tradicion.nombre;
  visual.style.width = "100%";
  visual.style.maxHeight = "220px";
  visual.style.objectFit = "cover";
  visual.style.borderRadius = "12px";
  visual.style.marginBottom = "15px";

  const titulo = document.createElement("h2");
  titulo.id = "modalTitle";
  titulo.textContent = tradicion.nombre;

  const lugar = document.createElement("p");
  lugar.textContent = `📍 ${tradicion.lugar} · ${tradicion.tipo}`;

  const historia = document.createElement("p");
  historia.textContent = tradicion.historia;

  const dato = document.createElement("p");
  const datoFuerte = document.createElement("strong");
  datoFuerte.textContent = "¿Sabías que? ";
  dato.append(datoFuerte, document.createTextNode(tradicion.dato));

  const acciones = document.createElement("div");
  acciones.className = "modal-actions";

  const escuchar = document.createElement("button");
  escuchar.type = "button";
  escuchar.className = "btn btn-outline";
  escuchar.textContent = "🔊 Escuchar historia";

  escuchar.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no permite narrar el texto.");
      return;
    }

    window.speechSynthesis.cancel();

    const narracion = new SpeechSynthesisUtterance(
      `${tradicion.nombre}. ${tradicion.historia} ¿Sabías que? ${tradicion.dato}`
    );

    narracion.lang = "es-MX";
    narracion.rate = 0.92;
    window.speechSynthesis.speak(narracion);
  });

  const favorito = document.createElement("button");
  favorito.type = "button";
  favorito.className = "btn btn-primary";
  favorito.textContent = favoritos.includes(id)
    ? "❤️ Quitar de favoritas"
    : "🤍 Añadir a favoritas";

  favorito.addEventListener("click", () => {
    alternarFavorito(id);
    favorito.textContent = favoritos.includes(id)
      ? "❤️ Quitar de favoritas"
      : "🤍 Añadir a favoritas";
  });

  acciones.append(escuchar, favorito);
  panel.append(cerrar, visual, titulo, lugar, historia, dato, acciones);
  overlay.appendChild(panel);
  modalRoot.appendChild(overlay);

  document.body.classList.add("modal-open");
  cerrar.focus();

  cerrar.addEventListener("click", cerrarModal);

  overlay.addEventListener("click", evento => {
    if (evento.target === overlay) cerrarModal();
  });

  emitirEvento("tradiciones:modal", { id });
}

function cerrarModal() {
  const modal = document.getElementById("traditionModal");

  if (modal) {
    modal.remove();
    document.body.classList.remove("modal-open");
    window.speechSynthesis?.cancel();
  }
}

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") cerrarModal();
});

/* ---------- 8. PASAPORTE CULTURAL ---------- */

function renderizarPasaporte() {
  const contenedor = document.getElementById("passportChecklist");
  if (!contenedor) return;

  contenedor.replaceChildren();

  tradiciones.forEach(tradicion => {
    const etiqueta = document.createElement("label");
    etiqueta.className = "passport-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = pasaporte.includes(tradicion.id);
    checkbox.value = tradicion.id;

    checkbox.addEventListener("change", () => {
      if (checkbox.checked && !pasaporte.includes(tradicion.id)) {
        pasaporte.push(tradicion.id);
      } else {
        pasaporte = pasaporte.filter(id => id !== tradicion.id);
      }

      guardarStorage(STORAGE.pasaporte, pasaporte);
      actualizarPasaporte();
    });

    const texto = document.createElement("span");
    texto.textContent = `${tradicion.emoji} ${tradicion.nombre}`;

    etiqueta.append(checkbox, texto);
    contenedor.appendChild(etiqueta);
  });

  actualizarPasaporte();
}

function actualizarPasaporte() {
  const total = tradiciones.length;
  const completadas = pasaporte.length;
  const porcentaje = total ? Math.round(completadas / total * 100) : 0;

  const percentEl = document.getElementById("passportPercent");
  const fillEl = document.getElementById("progressFill");
  const barra = document.getElementById("passportProgress");
  const mensaje = document.getElementById("passportMessage");

  if (percentEl) percentEl.textContent = `${porcentaje}%`;
  if (fillEl) fillEl.style.width = `${porcentaje}%`;
  if (barra) barra.setAttribute("aria-valuenow", String(porcentaje));

  if (mensaje) {
    if (porcentaje === 100) {
      mensaje.textContent = "¡Felicidades! Has completado tu pasaporte cultural. 🇲🇽";
    } else if (porcentaje >= 50) {
      mensaje.textContent = "¡Vas muy bien! Sigue descubriendo México. ✨";
    } else if (porcentaje > 0) {
      mensaje.textContent = "¡Buen comienzo! Todavía hay mucho por descubrir.";
    } else {
      mensaje.textContent = "¡Tu aventura cultural comienza aquí!";
    }
  }

  emitirEvento("tradiciones:pasaporte", { porcentaje, completadas, total });
}

/* ---------- 9. EQUIPO 3: VALIDACIÓN Y LIBRO DE VISITAS ---------- */

const campos = {
  name: document.getElementById("visitorName"),
  origin: document.getElementById("visitorOrigin"),
  email: document.getElementById("visitorEmail"),
  favorite: document.getElementById("visitorFavorite"),
  comment: document.getElementById("visitorComment")
};

const mensajesCampo = {
  name: document.getElementById("nameMessage"),
  origin: document.getElementById("originMessage"),
  email: document.getElementById("emailMessage"),
  favorite: document.getElementById("favoriteMessage"),
  comment: document.getElementById("commentMessage")
};

function validarCampo(clave) {
  const campo = campos[clave];
  if (!campo) return true;

  const valor = campo.value.trim();
  let mensaje = "";

  if (!valor) {
    mensaje = "Este campo es obligatorio.";
  } else if (clave === "name" && valor.length < 2) {
    mensaje = "Escribe al menos 2 caracteres.";
  } else if (clave === "email") {
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor);
    if (!correoValido) mensaje = "Escribe un correo válido.";
  } else if (clave === "comment" && valor.length < 5) {
    mensaje = "Tu recuerdo debe tener al menos 5 caracteres.";
  }

  campo.classList.toggle("invalid", Boolean(mensaje));
  campo.classList.toggle("valid", !mensaje);
  campo.setAttribute("aria-invalid", String(Boolean(mensaje)));

  if (mensajesCampo[clave]) {
    mensajesCampo[clave].textContent = mensaje;
    mensajesCampo[clave].className =
      "field-message " + (mensaje ? "error" : "success");
  }

  return !mensaje;
}

Object.keys(campos).forEach(clave => {
  if (campos[clave]) {
    campos[clave].addEventListener("input", () => validarCampo(clave));
    campos[clave].addEventListener("blur", () => validarCampo(clave));
  }
});

function llenarSelectorFavoritas() {
  const selector = campos.favorite;
  if (!selector) return;

  tradiciones.forEach(tradicion => {
    const opcion = document.createElement("option");
    opcion.value = tradicion.id;
    opcion.textContent = tradicion.nombre;
    selector.appendChild(opcion);
  });
}

function renderizarComentarios() {
  if (!commentsWall) return;

  commentsWall.replaceChildren();

  comentarios.forEach(comentario => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "comment-card";

    const nombre = document.createElement("h4");
    nombre.textContent = `💌 ${comentario.name}`;

    const origen = document.createElement("p");
    origen.className = "comment-origin";
    origen.textContent = comentario.origin;

    const texto = document.createElement("p");
    texto.className = "comment-text";
    texto.textContent = comentario.comment;

    const favorita = tradiciones.find(
      item => item.id === comentario.favorite
    );

    const insignia = document.createElement("span");
    insignia.className = "comment-favorite";
    insignia.textContent = favorita
      ? `❤️ ${favorita.nombre}`
      : "❤️ Tradición mexicana";

    const fecha = document.createElement("small");
    fecha.className = "comment-date";

    const fechaValida = new Date(comentario.date);
    fecha.textContent = Number.isNaN(fechaValida.getTime())
      ? ""
      : fechaValida.toLocaleDateString("es-MX", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });

    tarjeta.append(nombre, origen, texto, insignia, fecha);
    commentsWall.prepend(tarjeta);
  });

  if (wallEmpty) wallEmpty.hidden = comentarios.length !== 0;
  actualizarContadores();
}

if (visitorForm) {
  visitorForm.addEventListener("submit", evento => {
    evento.preventDefault();

    const claves = Object.keys(campos);
    const valido = claves.map(validarCampo).every(Boolean);

    if (!valido) {
      if (formMessage) {
        formMessage.textContent = "Revisa los campos marcados antes de continuar.";
        formMessage.className = "form-message error";
      }
      const primerInvalido = claves.find(clave =>
        campos[clave] && campos[clave].classList.contains("invalid")
      );

      if (primerInvalido && campos[primerInvalido]) campos[primerInvalido].focus();
      return;
    }

    const nuevoComentario = {
      id: (window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`),
      name: campos.name.value.trim(),
      origin: campos.origin.value.trim(),
      favorite: campos.favorite.value,
      comment: campos.comment.value.trim(),
      date: new Date().toISOString()
    };

    comentarios.unshift(nuevoComentario);
    comentarios = comentarios.slice(0, 100);

    const guardado = guardarStorage(STORAGE.muro, comentarios);

    if (!guardado) {
      comentarios.shift();
      if (formMessage) {
        formMessage.textContent =
          "No se pudo guardar el recuerdo. Revisa el almacenamiento del navegador.";
        formMessage.className = "form-message error";
      }
      return;
    }

    reacciones++;
    guardarStorage(STORAGE.reacciones, reacciones);

    renderizarComentarios();
    actualizarContadores();

    if (formMessage) {
      formMessage.textContent = "¡Tu recuerdo ya forma parte del muro! 🇲🇽";
      formMessage.className = "form-message success";
    }

    visitorForm.reset();

    Object.keys(campos).forEach(clave => {
      if (campos[clave]) {
        campos[clave].classList.remove("valid", "invalid");
        campos[clave].removeAttribute("aria-invalid");
      }
      if (mensajesCampo[clave]) {
        mensajesCampo[clave].textContent = "";
        mensajesCampo[clave].className = "field-message";
      }
    });

    emitirEvento("tradiciones:comentarioPublicado", {
      totalComentarios: comentarios.length,
      totalReacciones: reacciones
    });
  });
}

/* ---------- 10. FRASES ALEATORIAS ---------- */

const frases = [
  "Como México no hay dos.",
  "El que nace para tamal, del cielo le caen las hojas.",
  "Más vale paso que dure y no trote que canse.",
  "Camarón que se duerme, se lo lleva la corriente.",
  "Al mal tiempo, buena cara.",
  "Barriga llena, corazón contento.",
  "No dejes para mañana lo que puedas hacer hoy.",
  "De poquito en poquito se llena el jarrito.",
  "El que persevera alcanza.",
  "Cada pueblo tiene su historia y cada tradición su corazón."
];

const quoteBtn = document.getElementById("quoteButton");
if (quoteBtn) {
  quoteBtn.addEventListener("click", () => {
    const elemento = document.getElementById("randomQuote");
    if (!elemento) return;
    let nuevaFrase = Math.floor(Math.random() * frases.length);

    if (frases.length > 1 && elemento.dataset.indice !== undefined) {
      while (String(nuevaFrase) === elemento.dataset.indice) {
        nuevaFrase = Math.floor(Math.random() * frases.length);
      }
    }

    elemento.dataset.indice = String(nuevaFrase);
    elemento.textContent = `“${frases[nuevaFrase]}”`;
  });
}

/* ---------- 11. EVENTOS Y MENÚ ---------- */

document.addEventListener("tradiciones:comentarioPublicado", () => {
  actualizarContadores();
});

document.addEventListener("tradiciones:favorito", () => {
  actualizarContadores();
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const abierto = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(abierto));
    menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    menuToggle.textContent = abierto ? "✕" : "☰";
  });

  mainNav.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      menuToggle.textContent = "☰";
    });
  });
}

/* ---------- 12. INICIALIZACIÓN ---------- */

function iniciarAplicacion() {
  llenarSelectorFavoritas();
  inicializarVisitas();
  renderizarGaleria();
  renderizarPasaporte();
  renderizarComentarios();
  actualizarContadores();

  console.log("🇲🇽 Descubre las Tradiciones de México listo.");
}

iniciarAplicacion();
