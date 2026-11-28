
// src/pages/Buscar.jsx
import { useBuscador } from '../hooks/useBuscador.js';
import { useMisReservas } from '../hooks/useMisReservas.js';
import { buscarTalleres } from '../utils/buscarTalleres.js';
import { Buscador } from '../components/Buscador.jsx';
import { Chips } from '../components/Chips.jsx';
import { FiltroPrecio } from '../components/FiltroPrecio.jsx';
import { ListaTalleres } from '../components/ListaTalleres.jsx';

export default function Buscar({ talleres, intereses }) {
    const { texto, setTexto, categoria, setCategoria, precioMax, setPrecioMax } = useBuscador();
    const misReservas = useMisReservas();

    const resultados = buscarTalleres(talleres, { texto, categoria, precioMax });

    return (
        <section className="seccion stack">
            <Buscador valor={texto} onCambiar={setTexto} />
            <Chips
                nombre="Categoría"
                opciones={['Todas', ...intereses]}
                valor={categoria}
                onCambiar={setCategoria}
            />
            <FiltroPrecio valor={precioMax} onCambiar={setPrecioMax} />
            <p className="card-meta">{resultados.length} talleres</p>
            <ListaTalleres
                talleres={resultados}
                misReservas={misReservas}
                vacio="No hay talleres que coincidan con tu búsqueda."
            />
        </section>
    );
}


