import ParaTi from './pages/ParaTi.jsx';

export default function App() {
    return (
        <>
            <header className="cabecera">
                <h1 id="titulo">Para ti</h1>
                <a className="tag tag-s1" href="#/alcance" title="Qué toca en cada sprint">Sprint 1</a>
            </header>
            <main id="app">
                <ParaTi />
            </main>
            <nav className="pestanas" aria-label="Secciones">
                <a href="#/" className="activa">
                    <span aria-hidden="true">✨</span>Para ti
                </a>
                <a href="#/buscar">
                    <span aria-hidden="true">🔍</span>Buscar
                </a>
                <a href="#/guardados">
                    <span aria-hidden="true">❤️</span>Guardados
                </a>
            </nav>
        </>
    );
}
