import { useState } from 'react';
import { TALLERES, INTERESES } from '../data/talleres.js';
import { filtrarPorIntereses } from '../utils/filtrarPorIntereses.js';
import { alternar } from '../utils/alternar.js';
import { ChipsIntereses } from '../components/ChipsIntereses.jsx';
import { ListaTalleres } from '../components/ListaTalleres.jsx';


export default function ParaTi() {
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
        <section className="seccion stack">
            <h2>¿Qué te apetece crear?</h2>
            <ChipsIntereses
                intereses={INTERESES}
                elegidos={interesesElegidos}
                onAlternar={handleAlternarInteres}
            />
            <p className="card-meta">{talleresFiltrados.length} talleres</p>
            <ListaTalleres
                talleres={talleresFiltrados}
                misReservas={misReservas}
                vacio="No hay talleres con estos intereses."
            />
        </section>
    );
}
