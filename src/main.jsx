import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>                          
            <App />
        </BrowserRouter>                          
    </StrictMode>
);

fetch('https://openaccess-api.clevelandart.org/api/artworks/?q=ceramic&has_image=1&limit=3')
    .then((r) => console.log('RESPUESTA', r.status, r.ok))
    .catch((e) => console.log('FALLO', e));
