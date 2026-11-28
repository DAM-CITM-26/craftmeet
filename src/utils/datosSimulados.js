const LUGARES = ['Gràcia', 'Sants', 'Raval', 'Poblenou', 'Eixample'];

export function datosDeTaller(id) {
    const aforo = 6 + (id % 7);
    const dia = String(1 + (id % 28)).padStart(2, '0');

    return {
        fecha: `2026-12-${dia}`,
        hora: id % 2 === 0 ? '18:00' : '11:00',
        lugar: LUGARES[id % LUGARES.length],
        precio: 15 + (id % 7) * 5,
        aforo,
        reservas: id % aforo,
    };
}