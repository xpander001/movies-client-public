# Ejercicio 2

El objetivo de este ejercicio es aprender sobre el ciclo de vida de los componentes de React y ver cuándo llamar a una API.

Para ello, en cez de utilizar la lista de peliculas hardcodeada de nuestra pantalla movies, vamos a acceder a un endpoint que se llama `https://react-workshop-movies-api.herokuapp.com/api/movie`, que devuelve un listado con el mismo formato que nuestro objeto hardcodeado.

Esa lista de movies vivirá en nuestro estado. Para hacer llamada a la API, el lugar para hacerlo es el método componentDidMount. Los side effects en los componentes de clase se han de llamar una vez que el componente se haya montado.

Así pues, el orden sería `pintamos el componente -> buscamos datos externos y actualizamos estado -> rerender`.

Para saber más sobre el lifecycle de los componentes:

https://es.reactjs.org/docs/react-component.html

(Ya sé, ya veo que están deprecated muchos métodos... luego los cambiamos.)

Nota: Como manejar a mano fetch es un auténtico peñazo, y no quería añadir libs tipo axios he creado una util que se llama apiClient que se encuentra en `utils/api-client.js`.

Es un wrapper que recibe el endpoint (carga la base automáticamente) y devuelve una promesa con el resultado ya en json si es success.

```
apiClient('api/movie').then(...)
```
