
const PRECIOS = [20, 30, 40];

export function FiltroPrecio({ valor, onCambiar }) {
    return (
        <label className="campo">
            Precio máximo
            <select value={valor} onChange={(evento) => onCambiar(evento.target.value)}>
                <option value="Cualquiera">Cualquiera</option>
                {PRECIOS.map((precio) => (
                    <option key={precio} value={precio}>
                        Hasta {precio} €
                    </option>
                ))}
            </select>
        </label>
    );
}

