# Ejercicio 1

El objetivo de este ejercicio es utilizar los principios básicos de renderizado y escapsulado de
componentes en React.

Tenemos la base de la aplicación creada con algunas utilidades que usaremos en el futuro, placeholders de componentes aún sin rellenar, y una pantalla llamada movies.js . En este fichero tenemos hardcodeada una lista de las peliculas que tenemos que renderizar, cada una de ellas usando el componente MovieListItem.

Además, sería de utilizando empezar a crear layouts para nuestras applicaciones.

Para ello, propongo dos tareas:

1. Renderizar un componente MovieListItem que muestre el nombre de la pelicula de la lista. El
   HTML resultante debería ser:

```
<article class="border mb-2 p-2">
  El titulo de la peli
</article>
```

2. Hacer que la pantalla Movies haga uso del componente GeneralLayout

Teoría útil:

Un componente en React es simplemente una función que recibe un objeto props y devuelve HTML.
Las props corresponden a los atributos que añadimos al componente.

```
const MiComponente = (props) => {
  return (
    <p>{props.text}</p>
  )
}
```

se usará en otros componentes React como

```
<MiComponente text="Hola!" />
```

Dada una un array, se puede renderizar cada element usando el método map

```
const misCosas = [.......]

return (
  {misCosas.map(miCosa => <Componente>{miCosa.titulo})</Componente>}
)
```

Una propiedad especial de los componentes React es "children", que es todo aquello que recibes entre
las tags:

```
const ComponentWrapper = (props) => <div>{props.children}</div>

<ComponentWrapper><p>hola!</p></ComponentWrapper>
```
