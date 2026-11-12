import React from 'react';
import { filtrarPorIntereses, plazasLibres, buscarTalleres, fechaCorta } from './logica.js';
import { TALLERES, INTERESES } from './datos.js';

const EMOJI_CATEGORIA = {
    Cerámica: '🏺',
    Costura: '🧵',
    Pintura: '🎨',
    Joyería: '💍',
    Macramé: '🪢',
    Papel: '📜'
};

// ── ÁTOMOS ──

export function EtiquetaPlazas({ libres }) {
    if (libres <= 0) return <span className="tag tag-larga">Completo</span>;
    if (libres === 1) return <span className="tag tag-media">¡Última plaza!</span>;
    if (libres === 2) return <span className="tag tag-media">¡Últimas 2 plazas!</span>;
    return <span className="tag tag-rapida">{libres} plazas</span>;
}

export function Portada({ taller }) {
    return (
        <div className="portada" style={{ background: 'var(--color-acento)' }} aria-hidden="true">
            {EMOJI_CATEGORIA[taller.categoria]}
        </div>
    );
}

// ── MOLÉCULAS ──

export function TarjetaTaller({ taller, misReservas }) {
    return (
        <a className="card" href={`#/taller/${taller.id}`}>
            <Portada taller={taller} />
            <div className="card-cuerpo">
                <h3>{taller.titulo}</h3>
                <p className="card-meta">{fechaCorta(taller.fecha)} · {taller.hora} · {taller.lugar}</p>
                <div className="row">
                    <b>{taller.precio} €</b>
                    <EtiquetaPlazas libres={plazasLibres(taller, misReservas)} />
                </div>
            </div>
        </a>
    );
}

export function ChipsIntereses({ intereses, elegidos }) {
    return (
        <div className="chips">
            {intereses.map((interes) => (
                <button
                    key={interes}
                    className={`chip ${elegidos.includes(interes) ? 'activo' : ''}`}
                    data-accion="interes"
                    data-valor={interes}
                    aria-pressed={elegidos.includes(interes)}
                >
                    {interes}
                </button>
            ))}
        </div>
    );
}

// ── ORGANISMOS ──

export function ListaTalleres({ talleres, misReservas, vacio }) {
    if (talleres.length === 0) return <Vacio icono="🔍" texto={vacio} />;
    return (
        <div className="grid">
            {talleres.map((taller) => (
                <TarjetaTaller key={taller.id} taller={taller} misReservas={misReservas} />
            ))}
        </div>
    );
}

export function Capas({ estado }) {
    if (estado.capa !== 'reservar') return null;
    const taller = TALLERES.find((t) => t.id === estado.tallerCapa);
    const libres = plazasLibres(taller, estado.misReservas);

    return (
        <Panel
            titulo={`Reservar: ${taller.titulo}`}
            contenido={
                <>
                    <SelectorCantidad nombre="plazas" etiqueta="Plazas" valor={estado.plazas} min={1} max={libres} />
                    <p>Total: <b>{estado.plazas * taller.precio} €</b></p>
                    <div className="row">
                        <button className="btn" data-accion="confirmar-reserva">Confirmar reserva</button>
                        <button className="btn btn-secundario" data-accion="cerrar">Cancelar</button>
                    </div>
                </>
            }
        />
    );
}

// ── PANTALLAS ──

export function PantallaParaTi({ estado }) {
    const talleres = filtrarPorIntereses(TALLERES, estado.intereses);
    return (
        <section className="seccion stack">
            <h2>¿Qué te apetece crear?</h2>
            <ChipsIntereses intereses={INTERESES} elegidos={estado.intereses} />
            <p className="card-meta">{talleres.length} talleres</p>
            <ListaTalleres talleres={talleres} misReservas={estado.misReservas} vacio="No hay talleres con estos intereses." />
        </section>
    );
}

export function PantallaTaller({ estado, id }) {
    const taller = TALLERES.find((t) => t.id === id);
    if (!taller) return null;
    const libres = plazasLibres(taller, estado.misReservas);
    const guardado = estado.guardados.includes(taller.id);

    return (
        <article className="stack">
            <div className="card">
                <Portada taller={taller} />
            </div>
            <div className="row">
                <EtiquetaPlazas libres={libres} />
                <span className="tag">{taller.categoria}</span>
            </div>
            <p>{taller.descripcion}</p>
            <p className="card-meta">{fechaCorta(taller.fecha)} · {taller.hora} · {taller.lugar} · <b>{taller.precio} €</b></p>
            <div className="row">
                <button
                    className="btn"
                    data-accion="abrir-reserva"
                    data-valor={taller.id}
                    disabled={libres <= 0}
                >
                    Reservar plaza
                </button>
                <MarcaSprint sprint={3} />
                <button
                    className="btn btn-secundario"
                    data-accion="guardar"
                    data-valor={taller.id}
                >
                    {guardado ? '❤️ Guardado' : '🤍 Guardar'}
                </button>
                <MarcaSprint sprint={3} />
            </div>
        </article>
    );
}

export function PantallaBuscar({ estado }) {
    const talleres = buscarTalleres(TALLERES, estado);
    return (
        <div className="stack">
            <label className="oculto" htmlFor="buscar">Buscar taller</label>
            <input
                id="buscar"
                className="buscador"
                type="search"
                defaultValue={estado.texto}
                placeholder="🔍  Busca un taller"
                data-campo="texto"
            />
            <Chips nombre="categoria" opciones={['Todas', ...INTERESES]} valor={estado.categoria} />
            <label className="field">Precio máximo
                <select data-campo="precioMax" defaultValue={estado.precioMax}>
                    {['Cualquiera', '20', '30', '50'].map((p) => (
                        <option key={p} value={p}>
                            {p === 'Cualquiera' ? p : `${p} €`}
                        </option>
                    ))}
                </select>
            </label>
            <p className="card-meta">{talleres.length} talleres</p>
            <ListaTalleres talleres={talleres} misReservas={estado.misReservas} vacio="No hay talleres con esta búsqueda." />
        </div>
    );
}

export function PantallaGuardados({ estado }) {
    const talleres = TALLERES.filter((t) => estado.guardados.includes(t.id));
    return <ListaTalleres talleres={talleres} misReservas={estado.misReservas} vacio="Todavía no has guardado ningún taller. Pulsa 🤍 en su ficha." />;
}

// ── COMUNES ──

export function Vacio({ icono, texto }) {
    return (
        <div className="vacio">
            <p className="icono" aria-hidden="true">{icono}</p>
            <p>{texto}</p>
        </div>
    );
}

export function Chips({ nombre, opciones, valor }) {
    return (
        <div className="chips">
            {opciones.map((opcion) => (
                <button
                    key={opcion}
                    className={`chip ${opcion === valor ? 'activo' : ''}`}
                    data-accion={nombre}
                    data-valor={opcion}
                    aria-pressed={opcion === valor}
                >
                    {opcion}
                </button>
            ))}
        </div>
    );
}

export function EstrellasPulsables({ nombre, valor }) {
    return (
        <div className="estrellas" role="group" aria-label={`Puntuación: ${valor} de 5`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" data-accion={nombre} data-valor={n} aria-label={`${n} de 5`}>
                    {n <= valor ? '★' : '☆'}
                </button>
            ))}
        </div>
    );
}

export function SelectorCantidad({ nombre, etiqueta, valor, min, max }) {
    return (
        <div className="cantidad">
            <span>{etiqueta}</span>
            <button type="button" data-accion={`${nombre}-menos`} disabled={valor <= min} aria-label="Menos">−</button>
            <output aria-live="polite">{valor}</output>
            <button type="button" data-accion={`${nombre}-mas`} disabled={valor >= max} aria-label="Más">+</button>
        </div>
    );
}

export function Panel({ titulo, contenido }) {
    return (
        <>
            <div className="fondo" data-accion="cerrar"></div>
            <div className="panel stack" role="dialog" aria-modal="true" aria-label={titulo}>
                <h2>{titulo}</h2>
                {contenido}
            </div>
        </>
    );
}

export function Aviso({ texto }) {
    return <p className="aviso" role="status">{texto}</p>;
}

export function PantallaNoEncontrada() {
    return (
        <>
            <Vacio icono="🧭" texto="Esta página no existe." />
            <p className="centrado"><a className="btn enlace-btn" href="#/">Volver al inicio</a></p>
        </>
    );
}

// ── SOLO DE LA REFERENCIA ──

const FECHAS_SPRINT = { 1: 'del 9 al 18 de noviembre', 2: 'del 18 de noviembre al 2 de diciembre', 3: 'del 2 al 16 de diciembre' };

export function FranjaSprint({ sprint }) {
    const cuando = {
        1: 'Es lo que toca en el Sprint 1 (la barra de pestañas de abajo es del Sprint 2).',
        2: 'No se hace en el Sprint 1.',
        3: 'No se hace hasta el Sprint 3.'
    }[sprint];

    return (
        <p className={`franja-sprint franja-s${sprint}`}>
            Pantalla del <b>Sprint {sprint}</b> ({FECHAS_SPRINT[sprint]}). {cuando} <a href="#/alcance">Qué toca en cada sprint</a>
        </p>
    );
}

export function MarcaSprint({ sprint }) {
    return <span className={`tag tag-s${sprint}`} title={`Se hace en el Sprint ${sprint}`}>S{sprint}</span>;
}

export function PantallaAlcance({ alcance }) {
    return (
        <div className="stack">
            <p>Cada sprint solo pide sus piezas. <b>No hay que hacerlo todo de golpe:</b> lo de los sprints siguientes se ve aquí para que podáis planificar el backlog y, si os sobra tiempo, adelantar.</p>
            {[1, 2, 3].map((sprint) => {
                const piezas = alcance.filter((p) => p.sprint === sprint);
                return (
                    <article key={sprint} className={`alcance-sprint alcance-s${sprint}`}>
                        <h2>Sprint {sprint} <span className="card-meta">· {FECHAS_SPRINT[sprint]}</span></h2>
                        <ul>
                            {piezas.map((p, index) => (
                                <li key={index}><b>{p.pieza}</b>: {p.detalle}</li>
                            ))}
                        </ul>
                    </article>
                );
            })}
            <p className="card-meta">Lo que no está en esta lista es opcional y no puntúa. Las etiquetas S2 y S3 de los botones dicen en qué sprint se hace cada cosa.</p>
        </div>
    );
}