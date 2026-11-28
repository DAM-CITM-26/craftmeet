import { useState, useEffect } from 'react';
import { obtenerTalleres } from '../data/api.js';

export function useTalleres() {
    const [talleres, setTalleres] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [intento, setIntento] = useState(0);

    useEffect(() => {
        let cancelado = false;

        async function cargar() {
            setCargando(true);
            setError(null);
            try {
                const datos = await obtenerTalleres();
                if (!cancelado) setTalleres(datos);
            } catch (e) {
                if (!cancelado) setError(e);
            } finally {
                if (!cancelado) setCargando(false);
            }
        }

        cargar();

        return () => {
            cancelado = true;
        };
    }, [intento]);

    const reintentar = () => setIntento((prev) => prev + 1);

    return { talleres, cargando, error, reintentar };
}