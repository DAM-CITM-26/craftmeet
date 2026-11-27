import { useInteresesElegidos } from '../hooks/useInteresesElegidos.js';
import { useMisReservas } from '../hooks/useMisReservas.js';
import { filtrarPorIntereses } from '../utils/filtrarPorIntereses.js';
import { ChipsIntereses } from '../components/ChipsIntereses.jsx';
import { ListaTalleres } from '../components/ListaTalleres.jsx';

export default function ParaTi({ talleres, intereses }) {
    const { elegidos, alternarInteres } = useInteresesElegidos();
    const misReservas = useMisReservas();
    const talleresFiltrados = filtrarPorIntereses(talleres, elegidos);

    return (
        <section className="seccion stack">
            <h2>¿Qué te apetece crear?</h2>
            <ChipsIntereses
                intereses={intereses}
                elegidos={elegidos}
                onAlternar={alternarInteres}
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