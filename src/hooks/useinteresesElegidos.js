import { useState } from 'react';
import { alternar } from '../utils/alternar.js';

export function useInteresesElegidos() {
    const [elegidos, setElegidos] = useState([]);

    const alternarInteres = (interes) => {
        setElegidos((prev) => alternar(prev, interes));
    };

    return { elegidos, alternarInteres };
}