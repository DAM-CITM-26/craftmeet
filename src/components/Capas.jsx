export function Capas({ estado }) {
    if (estado.capa !== 'reservar') return null;
    const taller = TALLERES.find((t) => t.id === estado.tallerCapa);
    const libres = plazasLibres(taller, estado.misReservas);

    return (
        <Panel
            titulo={`Reservar: ${taller.titulo}`}
            contenido={
                <>
                    <SelectorCantidad nombre="plazas" etiqueta="Plazas" valor={estado.plazas} min={1} max={libres} />
                    <p>Total: <b>{estado.plazas * taller.precio} €</b></p>
                    <div className="row">
                        <button className="btn" data-accion="confirmar-reserva">Confirmar reserva</button>
                        <button className="btn btn-secundario" data-accion="cerrar">Cancelar</button>
                    </div>
                </>
            }
        />
    );
}