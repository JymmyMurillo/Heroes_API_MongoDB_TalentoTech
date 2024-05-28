# API de Heroes

Esta es una API simple para gestionar una lista de heroes. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos.

## Requisitos

- Node.js (V14 o superior)
- nmp (V6 o superior)
- Una base de datos MongoDB

## Instalacion

1. Clona el repositorio:
```sh
git clone https://github.com/JymmyMurillo/Heroes_API_MongoDB_TalentoTech.git
```
2. Instalar dependencias:
```sh
npm install
```

3. Crea el archivo database.js en el directorio raíz del proyecto:

```sh
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

```

4. Crea el archivo hero.js en el directorio raíz del proyecto:

```sh
const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;


```
 5. Configura un nuevo archivo .env

 ```sh
MONGO_URI=mongodb://tu_usuario:tu_contraseña@tu_host:tu_puerto/tu_base_de_datos

```

## Uso
1. Inicia el servidor:

```sh
npm run dev
```
2. La API estará disponible en http://localhost:3000.

## Endpoints
1. Obtener todos los héroes
- URL: /heroes
- Método: GET
- Descripción: Obtiene una lista de todos los héroes.
- Respuesta:
```sh
[
  {
    "id": 1,
    "name": "Superman",
    "image": "https://example.com/superman.jpg"
  },
  ...
]
```

2. Obtener un héroe por ID
- URL: /heroes/:id
- Método: GET
- Descripción: Obtiene un héroe específico por su ID.
- Respuesta:
```sh
{
  "id": 1,
  "name": "Superman",
  "image": "https://example.com/superman.jpg"
}
```
3. Crear un nuevo héroe
- URL: /heroes
- Método: POST
- Descripción: Crea un nuevo héroe.
- Cuerpo de la solicitud:
```sh
{
  "name": "Nombre del héroe",
  "image": "URL de la imagen del héroe"
}
```
- Respuesta:
```sh
{
  "id": 6,
  "name": "Nombre del héroe",
  "image": "URL de la imagen del héroe"
}
```
4. Actualizar un héroe existente
- URL: /heroes/:id
- Método: PUT
- Descripción: Actualiza los datos de un héroe existente.
- Cuerpo de la solicitud:
```sh
{
  "name": "Nuevo nombre del héroe",
  "image": "Nueva URL de la imagen del héroe"
}
```
- Respuesta:
```sh
{
  "id": 1,
  "name": "Nuevo nombre del héroe",
  "image": "Nueva URL de la imagen del héroe"
}
```
5. Eliminar un héroe
 - URL: /heroes/:id
 - Método: DELETE
 - Descripción: Elimina un héroe por su ID.
 - Respuesta:
```sh
{
  "message": "Héroe eliminado"
}
```


## Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.





