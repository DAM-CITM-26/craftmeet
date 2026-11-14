CRAFTMEET - Modelo de Datos 
Entidad: Taller

| Campo       | Tipo                | Ejemplo                                 |
|-------------|---------------------|-----------------------------------------|
| id          | Number              | 1                                       |
| titulo      | String              | "Torno de cerámica para principiantes"  |
| categoria   | String              | "Cerámica"                              |
| fecha       | String (DD-MM-YYYY) | "21-11-2026"                            |
| hora        | String (HH:MM)      | "18:00"                                 |
| lugar       | String              | "Gràcia"                                |
| precio      | Number              | 35                                      |
| aforo       | Number              | 8                                       |
| reservas    | Number              | 6                                       |
| intereses   | Array de Strings    | ["Cerámica"]                            |
| descripcion | String              | "Tus primeras piezas en el torno..."    |


Entidad: Interés

| Tipo                | Ejemplo                                 |
|---------------------|-----------------------------------------|
| Array de strings    | [ "Cerámica", "Costura", "Pintura"]     |
