import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'; 
import App from './App.jsx'

// Importacions actualitzades afegint ./componentes/
/*import {
    EtiquetaPlazas, Portada, TarjetaTaller, ChipsIntereses, ListaTalleres, Capas, PantallaParaTi, PantallaTaller, PantallaBuscar, PantallaGuardados, Vacio, Chips, EstrellasPulsables, SelectorCantidad, Panel, Aviso, PantallaNoEncontrada,
    FranjaSprint, MarcaSprint, PantallaAlcance
} from './components/componentes.js';

import { cargar, guardar, rutaActual, pintar, mostrarAviso } from './components/app.js';
import { filtrarPorIntereses, alternar, plazasLibres, buscarTalleres, fechaCorta } from './components/logica.js';*/

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)