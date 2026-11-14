const EMOJI_CATEGORIA = {
    Cerámica: '🏺',
    Costura: '🧵',
    Pintura: '🎨',
    Joyería: '💍',
    Macramé: '🪢',
    Papel: '📜'
};

export function Portada({ taller }) {
    return (
        <div className="portada" style={{ background: 'var(--color-acento)' }} aria-hidden="true">
            {EMOJI_CATEGORIA[taller.categoria]}
        </div>
    );
}