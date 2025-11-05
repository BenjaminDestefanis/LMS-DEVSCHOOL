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
│   └── database.js     -> Configuracion Base de datos
│   └── config.json     -> Configuracion Migraciones Bases de Datos
├── migrations/         -> Historial de migraciones y modificaciones BD
├── models/
│   └── user.js         -> Modelo Usuario
│   └── article.js      -> Modelo Articulo
│   └── course.js       -> Modelo Curso
│   └── enrollment.js   -> Modelo Tarea
│   └── index.js        -> Configuracion, sincronizacion y realaciones de modelos
├── middleware/
│   └── auth.js         -> Verificador y decodificacion Token
├── routes/
├── └── auth.js         -> Ruta Register/Login
├── utils/
├── └── jwt.js          -> JasonWebToken
├── server.js           -> Servidor
└── package.json



frontend/               (🎯 frontend React)
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    └── src/
        ├── components/     # Componentes reutilizables
        │   ├── ui/         # Componentes de UI básicos
        │   │   ├── Button/
        │   │   ├── Input/
        │   │   ├── Card/
        │   │   └── Modal/
        │   ├── layout/     # Componentes de layout
        │   │   ├── Header/
        │   │   ├── Sidebar/
        │   │   └── Footer/
        │   └── shared/     # Componentes compartidos
        │       ├── LoadingSpinner/
        │       ├── ErrorMessage/
        │       └── Pagination/
        ├── pages/          # Páginas/views de la aplicación
        │   ├── auth/       # Páginas de autenticación
        │   │   ├── Login/
        │   │   └── Register/
        │   ├── dashboard/  # Dashboards por rol
        │   │   ├── StudentDashboard/
        │   │   ├── InstructorDashboard/
        │   │   └── AdminDashboard/
        │   ├── courses/    # Páginas de cursos
        │   │   ├── CourseList/
        │   │   ├── CourseDetail/
        │   │   └── CreateCourse/
        │   ├── articles/   # Páginas de artículos/blog
        │   │   ├── ArticleList/
        │   │   └── ArticleDetail/
        │   └── profile/    # Páginas de perfil
        │       └── UserProfile/
        ├── contexts/       # Contexts de React
        │   ├── AuthContext/
        │   └── ThemeContext/
        ├── hooks/          # Custom hooks
        │   ├── useAuth/
        │   ├── useApi/
        │   └── useLocalStorage/
        ├── services/       # Servicios y llamadas API
        │   ├── api/
        │   │   ├── auth.js
        │   │   ├── courses.js
        │   │   ├── articles.js
        │   │   └── assignments.js
        │   └── storage/
        │       ├── token.js
        │       └── user.js
        ├── utils/          # Utilidades y helpers
        │   ├── constants/
        │   │   ├── roles.js
        │   │   └── routes.js
        │   ├── helpers/
        │   │   ├── formatters.js
        │   │   └── validators.js
        │   └── config/
        │       └── api.js
        ├── styles/         # Estilos globales y temas
        │   ├── globals.css
        │   ├── variables.css
        │   └── components/
        ├── assets/         # Recursos estáticos
        │   ├── images/
        │   ├── icons/
        │   └── fonts/
        ├── App.jsx          # Componente principal
        ├── App.css         # Estilos principales
        ├── index.js        # 
        ├── theme.js        # Estilos de componentes o elementos por defecto de MU
        ├── main.js         # Punto de entrada, como index.jsx -- archivo raiz
        └── routes/         # Configuración de rutas
            ├── AppRouter.js
            ├── PublicRoutes.js
            └── ProtectedRoutes.js