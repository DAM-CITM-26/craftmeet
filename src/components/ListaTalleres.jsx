import { TarjetaTaller } from './TarjetaTaller.jsx';
import { Vacio } from './Vacio.jsx';

export function ListaTalleres({ talleres, misReservas, vacio }) {
    if (talleres.length === 0) return <Vacio icono="🔍" texto={vacio} />;
    return (
        <div className="grid">
            {talleres.map((taller) => (
                <TarjetaTaller key={taller.id} taller={taller} misReservas={misReservas} />
            ))}
        </div>
    );
}