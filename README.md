# Componentes de cliente

Ejemplo de uso de componentes de cliente.

Por defecto, NextJS trabaja con componentes de servidor usando la técnica SSR (Server Side Rendering).

Sin embargo, en algunos casos necesitaremos usar componentes de cliente, es decir aquellos que se ejecutan en el navegador. Para ello el componente cliente debe colocar `use client` como primera línea del archivo.

Este proyecto implementa un **Carrito de compra** y para ello necesitamos acceder al **[localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)** donde guardaremos y actualizaremos los productos seleccionados. `localStorage` es una característica disponible únicamente en el lado cliente (navegador).

La estructura de páginas y componentes es la siguiente:


```
src
├── app
│   ├── cart
│   │   └── page.jsx
│   └── products
│       └── page.jsx
└── components
    ├── Cart.jsx
    ├── ProductCart.jsx
    └── ProductList.jsx
```

Los componentes cliente son:

- ProductCart
- Cart 

El componente `ProductCart` nos permite añadir un producto a *localStorage*, y `Cart` nos permite sacar de *localStorage*. 

