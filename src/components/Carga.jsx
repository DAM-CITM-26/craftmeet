export function Carga({ cargando, error, onReintentar, children }) {
    if (cargando) {
        return (
            <p className="card-meta" role="status">
                Cargando talleres…
            </p>
        );
    }

    if (error) {
        return (
            <div className="stack" role="alert">
                <p>No se han podido cargar los talleres.</p>
                <button type="button" className="boton" onClick={onReintentar}>
                    Reintentar
                </button>
            </div>
        );
    }

    return children;
}