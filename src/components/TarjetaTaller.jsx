export function TarjetaTaller({ taller, misReservas }) {
    return (
        <a className="card" href={`#/taller/${taller.id}`}>
            <Portada taller={taller} />
            <div className="card-cuerpo">
                <h3>{taller.titulo}</h3>
                <p className="card-meta">{fechaCorta(taller.fecha)} · {taller.hora} · {taller.lugar}</p>
                <div className="row">
                    <b>{taller.precio} €</b>
                    <EtiquetaPlazas libres={plazasLibres(taller, misReservas)} />
                </div>
            </div>
        </a>
    );
}