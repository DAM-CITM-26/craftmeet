export function EtiquetaPlazas({ libres }) {
    if (libres <= 0) return <span className="tag tag-larga">Completo</span>;
    if (libres === 1) return <span className="tag tag-media">¡Última plaza!</span>;
    if (libres === 2) return <span className="tag tag-media">¡Últimas 2 plazas!</span>;
    return <span className="tag tag-rapida">{libres} plazas</span>;
}