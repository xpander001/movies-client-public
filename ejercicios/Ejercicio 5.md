# Ejercicio 5

Rutas!!!!

Una SPA en una sola página está bien... pero la web está basada en rutas, no?

React en sí misma no tiene opinión acerca de las rutas. Recordemos, es solo una librería de vistas! Así que aquí empezamos a complicar las cosas metiendo libs adicionales del ecosistema.

Para rutas, la librería de facto es React router, que ofrece una forma declarativa de generar rutas para nuestra app. https://reactrouter.com/

Aunque al principio nos resulte raro, acostumbrados a ficheros de rutas únicos (el clásico routes.rb), está forma de declararlas en React favorece la encapsulación de funcionalidades y funciona basando todo en componentes (The React Way que dicen los rockstars de twitter).

El objetivo del ejercicio es añadir una pantalla nueva en la que carguemos el detalle de una movie (title y description), bajo la ruta `http://localhost:3000/movies/:movieId`.

Para ello aprenderemos por encima para que nos suenen lo que son los providers, añadiremos una pantalla nueva en nuestra carpeta de screens, y generaremos el índice de rutas.

Sobre los providers y context:

https://es.reactjs.org/docs/context.html
