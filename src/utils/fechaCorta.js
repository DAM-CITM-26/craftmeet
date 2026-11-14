export function fechaCorta(fecha) {
    const [, mes, dia] = fecha.split('-')
    return `${dia}/${mes}`
}
