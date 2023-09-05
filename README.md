# Instrucciones para levantar el proyecto

Siga estos pasos para ejecutar el proyecto en su máquina local:

1. Ejecute el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

2. Haga una copia del archivo `.env.example` y renómbrelo a `.env`. Luego, complete el archivo `.env` con las credenciales de la base de datos.

3. Para levantar el proyecto, ejecute el siguiente comando:

   ```bash
   npm run start:dev
   ```

Una vez que el proyecto esté en funcionamiento, estará disponible en el puerto 3000.

## Endpoints de Postman

Puede utilizar los siguientes endpoints de Postman para interactuar con el proyecto:

- **Login** (Puede utilizar el nombre de usuario o el correo electrónico):

  - Método: POST
  - URL: `localhost:3000/auth/login`
  - Cuerpo (Body):

    ```json
    {
      "usernameOrEmail": "challenge",
      "password": "ch411enge"
    }
    ```

- **Buscar productos** (Puede agregar los parámetros "name, description, priceMin, PriceMax" para personalizar la búsqueda; si no se utiliza ninguno, buscará todos los productos):

  - Método: GET
  - URL: `localhost:3000/product`
  - Ejemplos:

    - `localhost:3000/product?name=mouse`
    - `localhost:3000/product?descripcion=brown`
    - `localhost:3000/product?priceMax=1000`
    - Se pueden combinar los parámetros.

- **Crear Producto** (los campos en el ejemplo son obligatorios; "code" y "description" son opcionales, ademas de que las pictures deben ser urls y finalizar con extensiones de imagen):

  - Método: POST
  - URL: `localhost:3000/product`
  - Cuerpo (Body):

    ```json
    {
      "SKU": "skutest",
      "name": "nametest",
      "pictures": ["https://picturestest.com/image.png"],
      "price": 123,
      "currency": "CLP"
    }
    ```

Asegúrese de incluir el token JWT que se obtiene al hacer login en el encabezado "Auth Bearer Token" para las rutas que requieran autenticación con el rol de administrador y estar activo.
