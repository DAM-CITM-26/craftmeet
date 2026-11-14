export function ChipsIntereses({ intereses, elegidos, onAlternar }) {
    return (
        <div className="chips">
            {intereses.map((interes) => (
                <button
                    key={interes}
                    type="button"
                    className={`chip ${elegidos.includes(interes) ? 'activo' : ''}`}
                    aria-pressed={elegidos.includes(interes)}
                    onClick={() => onAlternar(interes)}
                >
                    {interes}
                </button>
            ))}
        </div>
    );
}
