import { NavLink } from 'react-router-dom';

const PANTALLAS = [
    { to: '/', icono: '✨', texto: 'Para ti' },
    { to: '/buscar', icono: '🔍', texto: 'Buscar' },
    { to: '/guardados', icono: '❤️', texto: 'Guardados' },
];

const claseActiva = ({ isActive }) => (isActive ? 'activa' : '');

export function Navegacion() {
    return (
        <nav className="pestanas" aria-label="Secciones">
            {PANTALLAS.map(({ to, icono, texto }) => (
                <NavLink key={to} to={to} end={to === '/'} className={claseActiva}>
                    <span aria-hidden="true">{icono}</span>
                    {texto}
                </NavLink>
            ))}
        </nav>
    );
}