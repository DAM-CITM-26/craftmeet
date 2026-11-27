import { useState } from 'react';

const CLAVE = 'craftmeet-reservas';

export function useMisReservas() {
    const [misReservas] = useState(() => {
        const guardado = localStorage.getItem(CLAVE);
        return guardado ? JSON.parse(guardado) : [];
    });

    return misReservas;
}
