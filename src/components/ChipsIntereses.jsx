export function ChipsIntereses({ intereses, elegidos }) {
    return (
        <div className="chips">
            {intereses.map((interes) => (
                <button
                    key={interes}
                    className={`chip ${elegidos.includes(interes) ? 'activo' : ''}`}
                    data-accion="interes"
                    data-valor={interes}
                    aria-pressed={elegidos.includes(interes)}
                >
                    {interes}
                </button>
            ))}
        </div>
    );
}