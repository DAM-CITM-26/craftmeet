import { categoriaDeObra } from '../utils/categoriaDeObra.js';
import { quitarHtml } from '../utils/quitarHtml.js';
import { datosDeTaller } from '../utils/datosSimulados.js';

const BASE = 'https://openaccess-api.clevelandart.org/api/artworks';
const TIPOS = ['Ceramic', 'Textile', 'Jewelry', 'Print', 'Painting'];

async function pedir(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        const error = new Error(`Error ${respuesta.status}`);
        error.status = respuesta.status;
        throw error;
    }
    return respuesta.json();
}

function adaptarTaller(obra) {
    const categoria = categoriaDeObra(obra);

    return {
        id: obra.id,
        titulo: obra.title,
        categoria,
        intereses: [categoria],
        descripcion: quitarHtml(obra.description ?? obra.technique ?? ''),
        ...datosDeTaller(obra.id),
    };
}

export async function obtenerTalleres() {
    const respuestas = await Promise.all(
TIPOS.map((tipo) => pedir(`${BASE}/?type=${tipo}&has_image=1&limit=9`)), );
    const obras = respuestas.flatMap(({ data }) => data);
    const sinRepetidos = [...new Map(obras.map((obra) => [obra.id, obra])).values()];
    return sinRepetidos.map(adaptarTaller);
}

export async function obtenerTaller(id) {
    const { data } = await pedir(`${BASE}/${id}`);
    return adaptarTaller(data);
}

