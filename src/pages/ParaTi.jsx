import { useState } from 'react';
import { TALLERES, INTERESES } from '../data/talleres.js';
import { filtrarPorIntereses, alternar } from '../components/logica.js';
import { ChipsIntereses, TarjetaTaller } from '../components/componentes.jsx';

function App() {
    // Estat de React
    const [interesesElegidos, setInteresesElegidos] = useState([]);
    const [misReservas, /*setMisReservas*/ ] = useState(() => {
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
                        onAlternar={handleAlternarInteres}
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

export default App;