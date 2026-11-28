// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { useTalleres } from './hooks/useTalleres.js';
import { NuevoInteres } from './utils/NuevoInteres.js';
import { Layout } from './components/Layout.jsx';
import { Carga } from './components/Carga.jsx';
import ParaTi from './pages/ParaTi.jsx';
import Buscar from './pages/Buscar.jsx';
import Taller from './pages/Taller.jsx';
import NoEncontrada from './pages/NoEncontrado.jsx';

export default function App() {
    const { talleres, cargando, error, reintentar } = useTalleres();
    const intereses = NuevoInteres(talleres);
    const estadoCarga = { cargando, error, onReintentar: reintentar };

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    index
                    element={
                        <Carga {...estadoCarga}>
                            <ParaTi talleres={talleres} intereses={intereses} />
                        </Carga>
                    }
                />
                <Route
                    path="buscar"
                    element={
                        <Carga {...estadoCarga}>
                            <Buscar talleres={talleres} intereses={intereses} />
                        </Carga>
                    }
                />
                <Route path="taller/:id" element={<Taller />} />
                <Route path="*" element={<NoEncontrada />} />
            </Route>
        </Routes>
    );
}