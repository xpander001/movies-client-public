# Ejercicio 3

Hoooooooooks!!!

Antes en React todo lo que se podían escribir era componentes funcionales o componentes de clase.
Por lo tanto, nos teníamos que inventar patrones para no acabar teniendo componentes churros que
manejen todo el ciclo de estado y además sepan como pintar las cosas.

Containers (componentes que solo manejan estado) vs Components (componentes -lol- que solo dibujan),
y cosas más elaboradas como Higher order components (más adelante os lo cuento).

Hace dos años Dan Abramov presentó en la react conf los hooks. https://www.youtube.com/watch?v=dpw9EHDh2bM

Nota sobre React: el mundillo de Twitter de devs de React da un poco pereza. Hay muchos "rock star" dev y mucho fanboy del framework.
El problema es 100% la comunidad, no estos tipos. 100% recomendable seguir a Dan y a Kent C. Dodds (de hecho me he aprovechado bastante de sus cursos para este workshop).

## Qué son los hooks?

1. Formas de reutilizar lógica entre componentes
2. Una forma de deshacernos de los class components para el 99% de los casos.

Vamos a empezar por los dos más básicos, useState y useEffect y luego veremos adicionales y crearemos los nuestros propios.

https://es.reactjs.org/docs/hooks-overview.html

Para los valientes:

https://overreacted.io/a-complete-guide-to-useeffect/

(Este es el blog del famoso Dan. Mola todo, pero necesita uno tiempo para ponerse.)
