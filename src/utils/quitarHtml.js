export function quitarHtml(texto) {
    return (texto ?? '').replace(/<[^>]*>/g, '').trim();
}