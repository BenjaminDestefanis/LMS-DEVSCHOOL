# PASOS DE DESARROLLO

## PASO 1 -
### Configuracion Frontend Instlacion de React --
1. npx create-react-app

### Configuracion Backend --
1. npm install express sequelize pg pg-hstore bcryptjs jsonwebtoken cors dotenv
2. express -- Configuracion de rutas, backend, endpoints etc.
3. sequelize -- ORM para el manejo de bases de datos PostgreSQL.
4. pg -- Controlador oficial de PostgreSQL para Node.js.
5. pg-hstore -- Libreria para serializar y desarializar datos JSON a formato Hstore de PostreSQL.
6. bcryptjs -- Encriptacion de contraseñas.
7. jsonwebtoken -- Tokens de autenticacion.
8. cors -- Habilita cors. Permite request entre diferentes dominios / politicas de acceso / etc.
9. dotenv -- Claves de seguridad.

## PASO 2 -
### Configuracion de Base de datos.

backend/
├── config/
│   └── database.js // Configuracion Base de datos
├── models/
│   └── User.js // Modelos Base de datos
├── routes/
├── app.js
├── server.js
└── package.json