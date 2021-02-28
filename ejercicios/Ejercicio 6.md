# Ejercicio 6

Por ahora estamos cargando una ruta de detalle en la que estamos mostrando una template... Vamos a cargar el contenido para la página llamando a `api/movie/${movieId}`.

Para obtener el movieId de la url, React router nos ofrece un hook que se llama useParams:

`const { movieId } = useParams();`
