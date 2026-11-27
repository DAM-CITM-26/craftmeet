const TITULOS = {
    '/': 'Para ti',
    '/buscar': 'Buscar',
    '/guardados': 'Guardados',
};

export function seccionActual(pathname) {
    if (pathname.startsWith('/taller/')) return 'Taller';
    return TITULOS[pathname] ?? 'No encontrado';
}