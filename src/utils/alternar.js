export function alternar(lista, elemento) {
    if (lista.includes(elemento)) return lista.filter((e) => e !== elemento)
    return [...lista, elemento]
}
