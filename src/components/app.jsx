import React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import {
    Capas, PantallaParaTi, PantallaTaller, PantallaBuscar, PantallaGuardados, Aviso, PantallaNoEncontrada,
    FranjaSprint, PantallaAlcance
} from './componentes.jsx';

import { alternar } from './logica.js';
import { TALLERES } from './datos.js';

// ── GUARDAR EN EL MÓVIL (Sprint 3) ──
export function cargar(clave, inicial) {
    const guardado = localStorage.getItem('craftmeet-' + clave);
    return guardado ? JSON.parse(guardado) : inicial;
}
export function guardar(clave, valor) {
    localStorage.setItem('craftmeet-' + clave, JSON.stringify(valor));
}

// ── ESTADO ──
const estado = {
    intereses: [],
    texto: '',
    categoria: 'Todas',
    precioMax: 'Cualquiera',
    guardados: cargar('guardados', []),
    misReservas: cargar('reservas', []),
    capa: null,
    tallerCapa: null,
    plazas: 1,
    aviso: null,
};

// ── RUTAS ──
const RUTAS = [
    { id: 'parati', titulo: 'Para ti', sprint: 1, pantalla: PantallaParaTi },
    { id: 'buscar', titulo: 'Buscar', sprint: 2, pantalla: PantallaBuscar },
    { id: 'guardados', titulo: 'Guardados', sprint: 3, pantalla: PantallaGuardados },
    { id: 'taller', titulo: (id) => (TALLERES.find((t) => t.id === id) || {}).titulo, sprint: 2, pantalla: PantallaTaller, pestana: 'parati' },
];

// ── ALCANCE ──
const ALCANCE = [
    { "sprint": 1, "pieza": "Para ti", "detalle": "los talleres en tarjetas, con los chips de intereses filtrando la lista y las plazas libres" },
    { "sprint": 2, "pieza": "Navegación", "detalle": "la barra de pestañas con vuestras secciones, cada una con su dirección (React Router)" },
    { "sprint": 2, "pieza": "Ficha del taller", "detalle": "su pantalla con su dirección (#/taller/7), a la que se llega desde cada tarjeta" },
    { "sprint": 2, "pieza": "Buscar", "detalle": "por texto, con el filtro de categoría y de precio máximo" },
    { "sprint": 2, "pieza": "Datos y «no encontrado»", "detalle": "los talleres llegan del servidor (dam-fake-api), con «cargando» y error; y la página de «no encontrado»" },
    { "sprint": 2, "pieza": "Publicada", "detalle": "en GitHub Pages e instalable en el móvil" },
    { "sprint": 3, "pieza": "Guardados", "detalle": "el corazón de la ficha guarda el taller, y la pestaña Guardados los lista; se recuerda al cerrar la app" },
    { "sprint": 3, "pieza": "Reservar", "detalle": "un panel con el número de plazas y la confirmación, que vuelve al inicio" },
    { "sprint": 3, "pieza": "Pruebas unitarias", "detalle": "al menos 3, con Vitest, sobre vuestras funciones de cálculo" },
    { "sprint": 3, "pieza": "Lighthouse", "detalle": "accesibilidad y rendimiento, corrigiendo lo que marque (en clase)" },
    { "sprint": 3, "pieza": "En el móvil", "detalle": "la app instalada funciona igual que en el ordenador y recuerda lo guardado (en clase)" },
];

export function rutaActual() {
    const [id, parametro] = location.hash.replace('#/', '').split('/');
    if (!id) return { ruta: RUTAS[0], parametro };
    if (id === 'alcance') return { ruta: { id: 'alcance', titulo: 'Qué toca en cada sprint', sprint: 0, pantalla: PantallaAlcance }, parametro };
    return { ruta: RUTAS.find((r) => r.id === id), parametro };
}

// Arrels de React per al renderitzat
let rootApp = null;
let rootCapas = null;

// ── PINTAR: Dibuixa els components JSX a través dels roots de React ──
export function pintar() {
    const { ruta, parametro } = rutaActual();

    let ComponentePantalla = ruta ? ruta.pantalla : null;
    let titulo = ruta ? (typeof ruta.titulo === 'function' ? ruta.titulo(Number(parametro)) : ruta.titulo) : '';
    let sprint = ruta ? ruta.sprint : 2;

    if (!ComponentePantalla) {
        ComponentePantalla = PantallaNoEncontrada;
        titulo = 'No encontrada';
        sprint = 2;
    }

    const activo = document.activeElement;
    const campoActivo = activo && activo.dataset ? activo.dataset.campo : null;

    document.querySelector('#titulo').textContent = titulo;
    const etiqueta = document.querySelector('#sprint');
    etiqueta.textContent = sprint === 0 ? 'Alcance' : 'Sprint ' + sprint;
    etiqueta.className = 'tag tag-s' + sprint;

    // Inicialitzar arrels de React si encara no estan creades
    const elApp = document.querySelector('#app');
    const elCapas = document.querySelector('#capas');

    if (!rootApp && elApp) rootApp = createRoot(elApp);
    if (!rootCapas && elCapas) rootCapas = createRoot(elCapas);

    // Renderitzar JSX a l'element #app
    if (rootApp) {
        rootApp.render(
            <>
                {sprint !== 0 && <FranjaSprint sprint={sprint} />}
                <ComponentePantalla estado={estado} id={Number(parametro)} alcance={ALCANCE} />
            </>
        );
    }

    // Renderitzar JSX a l'element #capas
    if (rootCapas) {
        rootCapas.render(
            <>
                <Capas estado={estado} />
                {estado.aviso && <Aviso texto={estado.aviso} />}
            </>
        );
    }

    const pestanaActiva = ruta ? ruta.pestana || ruta.id : '';
    document.querySelectorAll('.pestanas a').forEach((enlace) => {
        enlace.classList.toggle('activa', enlace.dataset.pestana === pestanaActiva || (enlace.getAttribute('href') === '#/' && ruta === RUTAS[0]));
    });

    if (campoActivo) {
        const campo = document.querySelector(`[data-campo="${campoActivo}"]`);
        if (campo) {
            campo.focus();
            if (campo.type === 'search' || campo.type === 'text') campo.setSelectionRange(campo.value.length, campo.value.length);
        }
    }
}

export function mostrarAviso(texto) {
    estado.aviso = texto;
    setTimeout(() => {
        estado.aviso = null;
        pintar();
    }, 2500);
}

// ── EVENTOS ──
document.addEventListener('click', (evento) => {
    const boton = evento.target.closest('[data-accion]');
    if (!boton) return;
    const accion = boton.dataset.accion;
    const valor = boton.dataset.valor;
    if (accion === 'cerrar') estado.capa = null;
    if (accion === 'interes') estado.intereses = alternar(estado.intereses, valor);
    if (accion === 'categoria') estado.categoria = valor;
    if (accion === 'guardar') {
        estado.guardados = alternar(estado.guardados, Number(valor));
        guardar('guardados', estado.guardados);
    }
    if (accion === 'abrir-reserva') {
        estado.capa = 'reservar';
        estado.tallerCapa = Number(valor);
        estado.plazas = 1;
    }
    if (accion === 'plazas-menos') estado.plazas -= 1;
    if (accion === 'plazas-mas') estado.plazas += 1;
    if (accion === 'confirmar-reserva') {
        estado.misReservas = [...estado.misReservas, { tallerId: estado.tallerCapa, plazas: estado.plazas }];
        guardar('reservas', estado.misReservas);
        estado.capa = null;
        mostrarAviso('¡Reserva confirmada!');
        location.hash = '#/';
    }
    pintar();
});

document.addEventListener('input', (evento) => {
    const campo = evento.target.dataset.campo;
    if (!campo) return;
    const valor = evento.target.value;
    if (campo === 'texto') estado.texto = valor;
    if (campo === 'precioMax') estado.precioMax = valor;
    pintar();
});

window.addEventListener('hashchange', () => {
    estado.capa = null;
    window.scrollTo(0, 0);
    pintar();
});

pintar();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}