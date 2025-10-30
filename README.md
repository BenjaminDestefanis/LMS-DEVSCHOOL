# LMS-DEVSCHOOL
Software and Lenguajes Academy
# Full Stack Learning Management System - LMS
Este documento provee la estructura para el desarrollo de un LMS (Learning Management System).
Incluye manejo de cursos, estudiantes, evaluaciones , y todo tipo de contenido.

## Desarrollo del proyecto
1. Frontend: React.js para la contstruccion de la interface del usuario.
2. Backend: Node.js + Express.js para desarrollo de servidor y APIs.
3. Database: PostgreSQL para almesanemiento de informacion como cursos, Articulos, Asignaciones etc.
4. Authentication: JWT (JSOS Web Tokens).
5. File Storage: Utilizar servicios en la nube como AWS S3 o alternativas, para el alamacenamiento de (Videos, PDFs, etc.)

## Estructura del proyecto

### Frontend (React)
## Componentes
1. Navbar : Links a Dashboard, courses, login, sign-up, etc.
2. Dashboard: Visualizacion de estado de cursos, progresos, etc.
3. Course List: Lista de cursos acecibles.
4. Courses Details: Vista de detalles del curso, evaluaciones, ejercicios, etc.
5. Profile: Perfil del usuario y progreso.

6. State Management: Usando Redux y React Context API para el manejo del estado global.
7. API integration: Usando Axios o Fetch para manejo de solicitudes HTTP con el backend y APIs.

### Backend (Node.js & Express.js)

1. API Structure: Organizacion del backend utilizando MVC (Model-View-Controller)
2. Controllers: Manejadores de logica (Courses, users, etc.)
3. Models: Definicion de Schemas para postgreSQL (User, Course, Assignment, etc.)
4. Routes: Rutas para los diferentes recursos (api/courses/, /api/users/, etc.)

5. API endpoints:
6. AUTHENTICACION --
7. POST /api/auth/register: Registro de usuarios nuevos (Admin, teacher, student)
8. POST /api/auth/login: Acceso, utilizando JWT token.
9. COURSE MANAGEMENT --
10. POST /api/courses: Administradores e Instructores pueden crear cursos.
11. GET /api/courses: Fetch para obtener todos los cursos disponibles.
12. GET /api/courses/:id: Fetch para obtener detalles del curso.
13. PUT /api/courses/:id: Actualizacion de un curso.
14. DELETE /api/courses/:id: Eliminacion de un curso.
15. ASSIGNMENTS & QUIZZES --
16. POST /api/courses/:id/assignments: Agregar evaluaciones a un curso.
17. GET /api/courses/:id/assignments: Obtener evaluaciones.
18. POST /api/courses/:id/quizzes: Agregar ejercicios a un curso.
19. GET /api/courses/:id/quizzes: Obtener ejercicios.
20. PROGRESS TRAKING:
21. GET /api/users/:id/progress: Obtener progreso de un usuario en un curso.
22. PUT /api/users/:id/progress: Actualizacion del progreso en un curso.

### Caracteristicas claves
#### Roles de Usuario
1. Admin: Manejo de users, courses, assignments, and quizzes.
2. Teacher: Puede crear y administrar cursos, actualizar ejercicios y evaluaciones.
3. Student: Completar cursos, ejercicios, y evaluaciones.





## Creado por Benjamin Baigorria (Desarrollador de Software)