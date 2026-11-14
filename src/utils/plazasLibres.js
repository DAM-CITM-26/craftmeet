// Plazas libres: el aforo, menos las reservas que ya tenía y las que he hecho yo
export function plazasLibres(taller, misReservas) {
    let mias = 0
    for (const reserva of misReservas) {
        if (reserva.tallerId === taller.id) mias += reserva.plazas
    }
    return taller.aforo - taller.reservas - mias
}