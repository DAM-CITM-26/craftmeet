| En la referencia (js/componentes.js)  | En React                         | Nivel     |
|---------------------------------------|----------------------------------|-----------|
| EtiquetaDuracion({ texto })           | components/EtiquetaDuracion.jsx  | Átomo     |
| Valoracion({ valor })                 | components/Valoracion.jsx        | Átomo     |
| Portada({ juego })                    | components/Portada.jsx           | Átomo     |
| FichaJuego({ juego })                 | components/FichaJuego.jsx        | Molécula  |
| Chips({ nombre, opciones, valor })    | components/Chips.jsx             | Molécula  |
| Carrusel({ juegos })                  | components/Carrusel.jsx          | Organismo |
| ListaJuegos({ juegos })               | components/ListaJuegos.jsx       | Organismo |
| PantallaInicio({ estado })            | pages/Inicio.jsx                 | Pantalla  |
| estado.duracion                       | useState en Inicio               | Estado    |
| categorizarDuracion, filtrarPorDuracion | utils/juegos.js                | Lógica    |
| JUEGOS (js/datos.js)                  | data/juegos.js                   | Datos     |