import { Outlet, useLocation } from 'react-router-dom';
import { Navegacion } from './Navegacion.jsx';
import { seccionActual } from '../utils/seccionActual.js';

export function Layout() {
    const { pathname } = useLocation();

    return (
        <>
            <header className="cabecera">
                <h1 id="titulo">{seccionActual(pathname)}</h1>
                <span className="tag tag-s2">Sprint 2</span>
            </header>
            <main id="app">
                <Outlet />
            </main>
            <Navegacion />
        </>
    );
}