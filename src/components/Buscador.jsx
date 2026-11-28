export function Buscador({ valor, onCambiar }) {
    return (
        <input
            type="search"
            className="buscador"
            placeholder="Busca un taller"
            aria-label="Buscar taller"
            value={valor}
            onChange={(evento) => onCambiar(evento.target.value)}
        />
    );
}