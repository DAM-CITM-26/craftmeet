// Devuelve una lista NUEVA: quita el elemento si estaba, lo añade si no (intereses, guardados…)
export function alternar(lista, elemento) {
    if (lista.includes(elemento)) return lista.filter((e) => e !== elemento)
    return [...lista, elemento]
}