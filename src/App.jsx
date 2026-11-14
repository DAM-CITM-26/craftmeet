import ParaTi from './pages/ParaTi.jsx';

export default function App(){
    return(
        <>
            <header className="cabecera">
                <h1 id="titulo">Para ti</h1>
                <a className="tag tag-s1" href="#/alcance" title="Qué toca en cada sprint">Sprint 1</a>
            </header>
            <main>
                <ParaTi />
            </main>
        </>
    )
}