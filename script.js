/* =========================================================
   INVITACIÓN DENISE & MIGUEL
   SCRIPT.JS
========================================================= */


/* =========================================================
   ELEMENTOS
========================================================= */

const envelope =
    document.getElementById("envelope");

const seal =
    document.getElementById("seal");

const closeEnvelope =
    document.getElementById("closeEnvelope");


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const OPEN_TIME = 1600;


/* =========================================================
   ABRIR SOBRE
========================================================= */

function openEnvelope() {

    /*
        Evitamos que pueda activarse
        varias veces mientras se abre.
    */

    if (
        envelope.classList.contains("opened")
    ) {

        return;

    }


    /*
        Bloqueamos el scroll mientras
        se realiza la animación.
    */

    document.body.style.overflow = "hidden";


    /*
        Activamos las dos puertas.
    */

    envelope.classList.add("opened");


    /*
        Cuando termina la animación,
        permitimos cerrar nuevamente
        el sobre.
    */

    setTimeout(() => {

        envelope.classList.add("can-close");

    }, OPEN_TIME);


    /*
        Después de la apertura,
        el usuario puede desplazarse
        normalmente por toda la invitación.
    */

   setTimeout(() => {

    document.body.style.overflow = "";

    /*
        Una vez terminada la apertura,
        retiramos la pantalla del sobre
        para revelar completamente el Hero.
    */

    envelope.classList.add("hidden");

}, OPEN_TIME);

}


/* =========================================================
   CERRAR SOBRE
========================================================= */

function closeEnvelopeAnimation() {

    /*
        Volvemos a bloquear el scroll
        mientras las puertas regresan.
    */

    document.body.style.overflow = "hidden";


    /*
        Quitamos el estado abierto.
    */

    envelope.classList.remove("opened");

    envelope.classList.remove("can-close");


    /*
        Esperamos a que termine la animación.
    */

    setTimeout(() => {

        document.body.style.overflow = "";

    }, OPEN_TIME);

}


/* =========================================================
   EVENTO DEL SELLO
========================================================= */

seal.addEventListener(
    "click",
    openEnvelope
);


/* =========================================================
   EVENTO CERRAR
========================================================= */

closeEnvelope.addEventListener(
    "click",
    closeEnvelopeAnimation
);


/* =========================================================
   SOPORTE PARA TECLADO
========================================================= */

seal.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openEnvelope();

        }

    }
);


/* =========================================================
   EVITAR SCROLL CON RUEDA
   MIENTRAS EL SOBRE ESTÁ CERRADO
========================================================= */

window.addEventListener(
    "wheel",
    (event) => {

        if (
            !envelope.classList.contains("opened")
        ) {

            event.preventDefault();

        }

    },
    {
        passive: false
    }
);


/* =========================================================
   EVITAR SCROLL TÁCTIL
   MIENTRAS EL SOBRE ESTÁ CERRADO
========================================================= */

window.addEventListener(
    "touchmove",
    (event) => {

        if (
            !envelope.classList.contains("opened")
        ) {

            event.preventDefault();

        }

    },
    {
        passive: false
    }
);


/* =========================================================
   ALTURA REAL DEL VIEWPORT
   ESPECIALMENTE PARA CELULARES
========================================================= */

function updateViewportHeight() {

    const viewportHeight =
        window.visualViewport
            ? window.visualViewport.height
            : window.innerHeight;


    document.documentElement.style.setProperty(
        "--vh",
        `${viewportHeight}px`
    );

}


updateViewportHeight();


/* =========================================================
   ACTUALIZAR AL CAMBIAR TAMAÑO
========================================================= */

window.addEventListener(
    "resize",
    updateViewportHeight
);


/* =========================================================
   VISUAL VIEWPORT
========================================================= */

if (window.visualViewport) {

    window.visualViewport.addEventListener(
        "resize",
        updateViewportHeight
    );

}