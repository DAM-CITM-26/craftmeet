export function Vacio({ icono, texto }) {
    return (
        <div className="vacio">
            <p className="icono" aria-hidden="true">{icono}</p>
            <p>{texto}</p>
        </div>
    );
}