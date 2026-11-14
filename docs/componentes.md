| En la referencia (js/componentes.js)                                     | En React                               | Nivel     |
|--------------------------------------------------------------------------|----------------------------------------|-----------|
| EtiquetaPlazas({ libres })                                               | src/components/EtiquetaPlazas.jsx      | Átomo     |
| Portada({ taller })                                                      | src/components/Portada.jsx             | Átomo     |
| TarjetaTaller({ taller, misReservas })                                   | src/components/TarjetaTaller.jsx       | Molécula  |
| ChipsIntereses({ intereses, elegidos })                                  | src/components/ChipsIntereses.jsx      | Molécula  |
| ListaTalleres({ talleres, misReservas, vacio })                          | src/components/ListaTalleres.jsx       | Organismo |
| Capas({ estado })                                                        | src/components/Capas.jsx               | Organismo |
| PantallaParaTi({ estado })                                               | src/pages/PantallaParaTi.jsx           | Pantalla  |
| PantallaTaller({ estado, id })                                           | src/pages/PantallaTaller.jsx           | Pantalla  |
| PantallaBuscar({ estado })                                               | src/pages/PantallaBuscar.jsx           | Pantalla  |
| PantallaGuardados({ estado })                                            | src/pages/PantallaGuardados.jsx        | Pantalla  |
| Vacio({ icono, texto })                                                  | src/components/Vacio.jsx               | Átomo     |
| Chips({ nombre, opciones, valor })                                       | src/components/Chips.jsx               | Molécula  |
| PantallaNoEncontrada( )                                                  | src/pages/PantallaNoEncontrada.jsx     | Pantalla  |
| datos.js(js/datos.js)                                                    | src/data/talleres.js                   | Datos     |
| estado.interesesElegidos                                                 | useState en App                        | Estado    |
| estado.setInteresesElegidos                                              | useState en App                        | Estado    |
| estado.misReservas                                                       | useState en App                        | Estado    |
| filtrarPorIntereses(talleres, elegidos)                                  | src/utils/filtrarPorIntereses.js       | Lógica    |
| alternar(lista, elemento)                                                | src/utils/alternar.js                  | Lógica    |
| plazasLibres(taller, misReservas)                                        | src/utils/plazasLibres.js              | Lógica    |
| buscarTalleres(buscar, (talleres, { texto, categoria, precioMax }))      | src/utils/buscarTalleres.js            | Lógica    |