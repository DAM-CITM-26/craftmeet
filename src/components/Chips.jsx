export function Chips({ nombre, opciones, valor, onCambiar }) {
    return (
        <div className="chips" role="group" aria-label={nombre}>
            {opciones.map((opcion) => (
                <button
                    key={opcion}
                    type="button"
                    className={`chip ${opcion === valor ? 'activo' : ''}`}
                    aria-pressed={opcion === valor}
                    onClick={() => onCambiar(opcion)}
                >
                    {opcion}
                </button>
            ))}
        </div>
    );
}