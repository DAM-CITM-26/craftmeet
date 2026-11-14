export function filtrarPorIntereses(talleres, elegidos) {
    if (elegidos.length === 0) return talleres
    return talleres.filter((taller) => taller.intereses.some((interes) => elegidos.includes(interes)))
}