// '2026-11-21' → '21/11'
export function fechaCorta(fecha) {
    const [, mes, dia] = fecha.split('-')
    return `${dia}/${mes}`
}