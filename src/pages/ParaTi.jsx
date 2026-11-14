import { useState } from 'react';
import { TALLERES, INTERESES } from '../data/talleres.js';
import { filtrarPorIntereses } from '../utils/filtrarPorIntereses.js';
import { alternar } from '../utils/alternar.js';
import { ChipsIntereses } from '../components/ChipsIntereses.jsx';
import { TarjetaTaller } from '../components/TarjetaTaller.jsx';

export function ParaTi() { // O export default ParaTi, depèn de com ho cridis des de l'App principal
    const [interesesElegidos, setInteresesElegidos] = useState([]);
    const [misReservas] = useState(() => {
        const guardado = localStorage.getItem('craftmeet-reservas');
        return guardado ? JSON.parse(guardado) : [];
    });

    const handleAlternarInteres = (interes) => {
        setInteresesElegidos((prev) => alternar(prev, interes));
    };

    const talleresFiltrados = filtrarPorIntereses(TALLERES, interesesElegidos);

    return (
        <>
            <main id="app">
                <section className="seccion stack">
                    <h2>¿Qué te apetece crear?</h2>
                    <ChipsIntereses
                        intereses={INTERESES}
                        elegidos={interesesElegidos}
                        // Nota: depèn de com hagis programat ChipsIntereses, 
                        // potser rep 'onAlternar' o 'data-accion'. Revisa l'arxiu de ChipsIntereses.
                    />
                    <p className="card-meta">{talleresFiltrados.length} talleres</p>
                    <div className="grid">
                        {talleresFiltrados.map((taller) => (
                            <TarjetaTaller key={taller.id} taller={taller} misReservas={misReservas} />
                        ))}
                    </div>
                </section>
            </main>

            <nav className="pestanas" aria-label="Secciones">
                <a href="#/" className="activa">
                    <span aria-hidden="true">✨</span>Para ti
                </a>
                <a href="#/buscar">
                    <span aria-hidden="true">🔍</span>Buscar
                </a>
                <a href="#/guardados">
                    <span aria-hidden="true">❤️</span>Guardados
                </a>
            </nav>
        </>
    );
}