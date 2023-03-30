# Paginación con números de página en JavaScript

Este proyecto muestra cómo crear una paginación con números de página utilizando JavaScript, HTML y CSS. Se utiliza una API de ejemplo para obtener los productos y se muestran 9 productos por página.

## Instalación y ejecución

Para ejecutar este proyecto, primero debes clonar el repositorio a tu computadora. Luego, abre el archivo index.html en tu navegador para ver el proyecto en acción.

## Código

### main.js

- `fetchData`: esta función realiza una petición a la API especificada y devuelve los datos en formato JSON.
- `setAtr`: esta función establece los atributos `id` y `class` en un elemento HTML.
- `createContainer`: esta función crea una sección, un título y un contenedor para los productos.
- `createCard`: esta función crea una tarjeta para cada producto con su imagen, título, precio y descripción.
- `getProductData`: esta función obtiene los productos de la API utilizando la función fetchData().
- `setProducts`: esta función establece los productos en el contenedor de productos y los muestra en la página.
- `setPagination`: esta función genera los números de página y los agrega al contenedor de paginación.
- `addPaginationListeners`: esta función agrega eventos de escucha a cada número de página para cambiar de página cuando sea presionado.

## Recursos adicionales

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Manipulando elementos HTML en JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Contact
ivantarquini91@gmail.com