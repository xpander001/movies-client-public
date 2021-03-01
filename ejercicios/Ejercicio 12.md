# Ejercicio 12

Vamos con patrones avanzados. Vamos a hablar de los componentes compuestos, y para eso vamos a crear una modal para confirmar que queremos hacer log out.

Queremos que el componente tenga esta pinta en el header:

```
<Modal>
  <ModalButton>
    <Button primary outline>
      Logout
    </Button>
  </ModalButton>
  <ModalContent>
    <p>Are you sure you want to log out?</p>
    <div>
      <Button fullWidth primary onClick={logout}>
        Yes, I want to log out
      </Button>
    </div>
  </ModalContent>
</Modal>
```

El propio componente modal tiene que gestionar su propio estado, sin que el padre sepa si está abierto o cerrado.

Pistas:

- Si queremos crear una copia de un elemento de React, se puede hacer de esta forma:

```
const ModalButton = ({ children }) => {
  return React.cloneElement(children, {
    onClick: () => {
      // Abrimos la modal
      if (children.props.onClick) {
        // Dejamos que el hijo implemente su click si hace falta
        children.props.onClick();
      }
    },
  });
};
```

- Recordemos: context se puede definir y usar en cualquier sitio. No solo en el root de la aplicación!! Allá donde lo definamos, sus hijos podrán acceder a sus valores.

Para nota: Hacemos que se cierre la modal si presionamos ESC? `const ESCAPE_KEY = 27;`

- Para la modal, con el CSS proporcionado, usar este markup de ejemplo:

```
<div className="modal or modal--open">
  <div className="modal__overlay"></div>
  <div className="modal__content border">
    <div className="d-flex flex-row-reverse">
      <Button size="small" primary onClick={aqui haremos algo, no?}>
        close
      </Button>
    </div>
    <div>aquí qué va?</div>
  </div>
</div>
```
