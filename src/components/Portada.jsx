const EMOJI_CATEGORIA = {
    Cerámica: '🏺',
    Costura: '🧵',
    Pintura: '🎨',
    Joyería: '💍',
    Macramé: '🪢',
    Papel: '📜'
};

const OTROS = '✨';


export function Portada({ taller }) {
    return (
        <div className="portada" style={{ background: 'var(--color-acento)' }} aria-hidden="true">
            {EMOJI_CATEGORIA[taller.categoria] ?? OTROS}
        </div>
    );
}

