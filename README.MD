# 📚 Documentación del Proyecto Backend - Gestión de Usuarios y Autenticación

---

## 📌 Tecnologías utilizadas:

* **Node.js** (con CommonJS)
* **TypeScript**
* **Express**
* **TypeORM**
* **PostgreSQL**
* **bcryptjs** (para hashing de contraseñas)
* **jsonwebtoken** (para autenticación vía JWT)
* **dotenv** (para variables de entorno)

---

## 📌 Arquitectura: Hexagonal (Ports and Adapters)

El proyecto está estructurado siguiendo la arquitectura **Hexagonal (o Clean Architecture)**.

### Principales capas:

| Capa                | Descripción                                              |
| ------------------- | -------------------------------------------------------- |
| **Dominio**         | Entidades y contratos (interfaces de repositorios)       |
| **Aplicación**      | Casos de uso (lógica de negocio)                         |
| **Infraestructura** | Adaptadores concretos: Express (HTTP), TypeORM (DB), etc |
| **Configuración**   | Conexión a base de datos, variables de entorno           |

---

## 📌 Estructura de Carpetas:

```
backend/
├── .env
├── package.json
├── tsconfig.json
├── src/
│   ├── domain/
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   └── Account.ts
│   │   └── repositories/
│   │       ├── UserRepository.ts
│   │       └── AccountRepository.ts
│   ├── application/
│   │   └── usecases/
│   │       ├── CreateUser.ts
│   │       ├── CreateAccount.ts
│   │       └── LoginAccount.ts
│   └── infrastructure/
│       ├── controllers/
│       │   ├── UserController.ts
│       │   └── AuthController.ts
│       └── persistence/
│           ├── UserRepositoryImpl.ts
│           └── AccountRepositoryImpl.ts
│       └── data-source.ts
└── src/index.ts
```

---

## 📌 Variables de Entorno (.env):

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD="mi_password"
DB_NAME=mi_base_de_datos
JWT_SECRET=mi_secreto_super_seguro
```

---

## 📌 Entidades (Dominio):

### User.ts (Perfil o información de usuario)

```ts
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;
}
```

---

### Account.ts (Cuenta para autenticación)

```ts
@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;
}
```

---

## 📌 Casos de uso (Aplicación):

* **CreateUser.ts** → Crear perfiles de usuario
* **CreateAccount.ts** → Registrar cuentas para login
* **LoginAccount.ts** → Validar email + password, devolver JWT

---

## 📌 Repositorios (Dominio + Infraestructura):

* **UserRepository.ts** → Contrato para gestión de usuarios
* **AccountRepository.ts** → Contrato para gestión de cuentas

Implementaciones:

* **UserRepositoryImpl.ts**
* **AccountRepositoryImpl.ts**

---

## 📌 Controladores (Infraestructura → Express):

### `/users`

* POST `/users` → Crear perfil de usuario

### `/auth`

* POST `/auth/register` → Crear cuenta de acceso (con email + password)
* POST `/auth/login` → Login y obtener JWT

---

## 📌 Flujo de Registro de Cuentas:

1. **POST `/auth/register`**
   Body JSON:

```json
{
    "name": "Leonardo",
    "email": "test@example.com",
    "password": "123456"
}
```

---

## 📌 Flujo de Login:

1. **POST `/auth/login`**
   Body JSON:

```json
{
    "name": "Leonardo",
    "email": "test@example.com",
    "password": "123456"
}
```

Respuesta:

```json
{
    "token": "JWT_GENERADO_AQUI",
    "accountId": 1
}
```

---

## 📌 Seguridad:

* Las contraseñas están **hasheadas con bcrypt** antes de almacenarse.
* Los tokens JWT tienen **expiración de 1 hora**.

---

## 📌 Inicialización del Proyecto:

1. Instala dependencias:

```bash
cd backend
npm install
```

2. Crea tu base de datos PostgreSQL con el nombre que pusiste en `.env`.

3. Ejecuta el backend en modo desarrollo:

```bash
npm run dev
```

TypeORM creará las tablas automáticamente por el parámetro:

```ts
synchronize: true
```

*(Solo en desarrollo, no en producción).*

---

## 📌 Mejoras futuras planteadas:

* Agregar roles y permisos para un control de acceso.
* Crear middlewares de autenticación (para proteger endpoints).
* Crear pruebas unitarias por capa.
* Separar DTOs o Request Objects.
* Crear migraciones de base de datos.

---

## ✅ Resumen:

Este proyecto sigue **Hexagonal Architecture**, tiene **capas bien separadas**, y ya cubre:
✅ Persistencia (TypeORM + PostgreSQL)
✅ Creación de perfiles (User)
✅ Registro de cuentas (Account)
✅ Login con generación de JWT
