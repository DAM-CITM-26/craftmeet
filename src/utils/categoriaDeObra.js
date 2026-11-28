const CATEGORIAS = {
    Ceramic: 'Cerámica',
    Textile: 'Costura',
    Jewelry: 'Joyería',
    Print: 'Papel',
    Painting: 'Pintura',
};

export function categoriaDeObra({ type }) {
    return CATEGORIAS[type] ?? 'Otros';
}