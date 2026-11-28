import { Routes, Route } from 'react-router-dom';
import { TALLERES, INTERESES } from './data/talleres.json';
import { Layout } from './components/Layout.jsx';
import ParaTi from './pages/ParaTi.jsx';
import Buscar from './pages/Buscar.jsx';
import Taller from './pages/Taller.jsx';
import NoEncontrado from './pages/NoEncontrado.jsx';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<ParaTi talleres={TALLERES} intereses={INTERESES} />} />       
                <Route path="buscar" element={<Buscar talleres={TALLERES} intereses={INTERESES} />} />
                <Route path="taller/:id" element={<Taller />} />
                <Route path="*" element={<NoEncontrado />} />
            </Route>
        </Routes>
    );
}
