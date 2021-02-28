# Ejercicio 7

Vamos viendo como los hooks nos permiten reducir boilerplate e incluso compartir funcionalidad. Sin embargo, ahora que cargamos datos en dos pantallas, en ambas el proceso es similar. Recibimos una promesa (la llamada a apiClient), ponemos estados a loading, cargamos data, ponemos loaded a true...

Y si creamos un hook que haga eso para poder reutilizarlo siempre que queramos?

Vamos a añadir un hook a nuestra carpeta de hooks que se llame 'use-api-call'. Este hook devolverá las variables loaded, loading y data, además de un método run. Este método run recibirá por param una promesa, y modificará las variables que nos devuelve de acuerdo al tiempo de vida de esta promesa.

Finalmente, cambiaremos todo el boilerplate de nuestras pantallas Movies y MovieDetail por la llamada al hook.

Ejemplo de uso:

```
const { data, loaded, run } = useApiCall();
```

Cuando queramos ejecutar la promesa:

```
run(apiClient(`api/movie/${movieId}`));
```

Puede que en algún momento nos encontremos con algún bucle infinito de network... así que vamos a echar mientras desarrollamos un vistazo al inspector del browser...
