import { useState } from 'react';

export function useBuscador() {
    const [texto, setTexto] = useState('');
    const [categoria, setCategoria] = useState('Todas');
    const [precioMax, setPrecioMax] = useState('Cualquiera');

    return { texto, setTexto, categoria, setCategoria, precioMax, setPrecioMax };
}