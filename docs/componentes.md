| En la referencia (js/componentes.js)                                     | En React                               | Nivel     |
|--------------------------------------------------------------------------|----------------------------------------|-----------|
| EtiquetaPlazas({ libres })                                               | src/components/EtiquetaPlazas.jsx      | Átomo     |
| Portada({ taller })                                                      | src/components/Portada.jsx             | Átomo     |
| TarjetaTaller({ taller, misReservas })                                   | src/components/TarjetaTaller.jsx       | Molécula  |
| ChipsIntereses({ intereses, elegidos })                                  | src/components/ChipsIntereses.jsx      | Molécula  |
| ListaTalleres({ talleres, misReservas, vacio })                          | src/components/ListaTalleres.jsx       | Organismo |
| Capas({ estado })                                                        | src/components/Capas.jsx               | Organismo |
| ParaTi({ estado })                                                       | src/pages/ParaTi.jsx                   | Pantalla  |
| Taller({ estado, id })                                                   | src/pages/Taller.jsx                   | Pantalla  |
| Buscar({ estado })                                                       | src/pages/Buscar.jsx                   | Pantalla  |
| PantallaGuardados({ estado })                                            | src/pages/PantallaGuardados.jsx        | Pantalla  |
| Vacio({ icono, texto })                                                  | src/components/Vacio.jsx               | Átomo     |
| Chips({ nombre, opciones, valor })                                       | src/components/Chips.jsx               | Molécula  |
| NoEncontrado()                                                           | src/pages/NoEncontrado.jsx             | Pantalla  |
| datos.js(js/datos.js)                                                    | src/data/talleres.js                   | Datos     |
| elegidos (estado.interesesElegidos)                                      | src/hooks/useInteresesElegidos.js      | Estado    |
| alternarInteres (antes setInteresesElegidos)                             | src/hooks/useINteresesElegidos.js      | Estado    |
| misReservas (estado.misReservas)                                         | src/hooks/useMisReservas.js            | Estado    |
| filtrarPorIntereses(talleres, elegidos)                                  | src/utils/filtrarPorIntereses.js       | Lógica    |
| alternar(lista, elemento)                                                | src/utils/alternar.js                  | Lógica    |
| plazasLibres(taller, misReservas)                                        | src/utils/plazasLibres.js              | Lógica    |
| buscarTalleres(buscar, (talleres, { texto, categoria, precioMax }))      | src/utils/buscarTalleres.js            | Lógica    |
| fechaCorta(fecha)                                                        | src/utils/fechaCorta.js                | Lógica    |
| seccionActual()                                                          | src/utils/seccionActual.js             | Lógica    |
| Navegacion()                                                             | src/components/Navegacion.jsx          | Organismo |
| Layout()                                                                 | src/components/Layout.jsx              | Plantilla |
| Buscador                                                                 | src/components/Buscador.jsx            | Molécula  |
| FiltroPrecio                                                             | src/components/FiltroPrecio.jsx        | Molécula  |
| Estado                                                                   | src/hooks/useBuscador.jsx              | Estado    |