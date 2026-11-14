// Texto en el título · 'Todas' y 'Cualquiera' no filtran
export function buscarTalleres(talleres, { texto, categoria, precioMax }) {
    const buscado = texto.trim().toLowerCase()
    return talleres.filter(
        (taller) =>
            taller.titulo.toLowerCase().includes(buscado) &&
            (categoria === 'Todas' || taller.categoria === categoria) &&
            (precioMax === 'Cualquiera' || taller.precio <= Number(precioMax)),
    )
}