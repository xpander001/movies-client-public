# Ejercicio 4

Entendamos las dependencias de useEffect. useEffec se ejecuta tanto en el primer render, como
cada una de las veces en las que una de sus dependencias cambie. Para ello, las compara usando
=== (esto es importante para el futuro).

La forma de hacer que useEffect se ejecute solo al renderizar (equivalente a componentDidMount -bueno, más o menos-)
es pasar como dependencias un array vacío.

```
useEffect(() => {
  console.log('Me ejecuto solo en render);
}, [])
```

Sin embargo, si queremos que se ejecute cuando, por ejemplo, nuestra variable de estado 'query' cambie, podemos pasarle

```
useEffect(() => {
  console.log('Me en render y cada vez que query cambie);
}, [query])
```

Aunque parezca una tontería, aquí radica la potencia de useEffect. Podemos suscribirnos a cambios en nuestras variables para lanzar los
side effects que queramos.

Para este ejercicio, primero vamos a refactorizar nuestro input en el componente search-form. Intentemos hacer tres pasos:

1. El formulario nos permite escribir en él sin cambios. Cuando hagamos submit presionando enter, lanzaremos una query a
   'api/movie?title=${query}', que nos devolverá resultados del backend filtrados por nombre.
2. Cambiaremos el formulario para ejecutar la búsqueda no sólo al hacer enter, sino al escribir.
3. Para no agobiar a nuestro backend, en vez de lanzar la query cada vez que se escriba, la lanzaremos cuando haya pasado
   medio segundo desde que el usuario haya dejado de teclear.

Nota; en React, los componentes form aceptan una propiedad que se llama 'onSubmit' de la misma forma que los input aceptan onChange.
