# Blog Personal

Este es un proyecto de **blog personal** desarrollado con **Next.js** y autenticación con **Google** mediante `next-auth`. Los datos se gestionan con **Prisma** y se almacenan en **MongoDB**.

---

### Tecnologías Utilizadas
- **Next.js 15** - Framework para React
- **React 19** - Biblioteca de UI
- **NextAuth 5** - Autenticación con Google
- **Prisma 6** - ORM para base de datos
- **MongoDB** - Base de datos NoSQL
- **SWR** - Manejo de datos asíncronos
- **React Quill** - Editor de texto enriquecido
- **Framer Motion** - Animaciones
- **Lucide-react** - Íconos SVG

---

### Estructura del Proyecto
```
/blog-personal
│── prisma/                   # Configuración de Prisma
│   ├── schema.prisma         # Esquema de base de datos
│── src/
│   ├── app/
│   │   ├── api/auth/         # API para autenticación
│   │   ├── api/posts/        # API para posts
│   │   ├── api/categories/   # API para categorías
│   ├── components/           # Componentes reutilizables
│   ├── context/              # Contexto global (si es necesario)
│   ├── hooks/                # Hooks personalizados
│   ├── types/                # Rutas de la aplicación
│   ├── styles/               # Estilos globales
│── .env                      # Variables de entorno
│── package.json              # Dependencias y scripts
│── tsconfig.json             # Configuración de TypeScript
│── next.config.mjs           # Configuración de Next.js
```
---

### Diagrama de Clases

![diagram-export-5-4-2025-09_37_24](https://github.com/user-attachments/assets/6188ac79-c814-49f5-986c-cf7d3cc4a3ff)

---

### Estructura de la Aplicación

![diagram-export-5-4-2025-09_39_16](https://github.com/user-attachments/assets/e8abee7e-a83c-4142-bfd4-1b41a58b0ba3)

### 🔧 Configuración Inicial

#### 1️⃣ Clonar el Repositorio
```sh
git clone https://github.com/usuario/blog-personal.git
cd blog-personal
```

#### 2️⃣ Instalar Dependencias
```sh
yarn install  # O npm install
```

#### 3️⃣ Configurar Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto con:
```env
DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/blog"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="clave_secreta"
GOOGLE_CLIENT_ID="tu_cliente_id"
GOOGLE_CLIENT_SECRET="tu_secreto"
```

#### 4️⃣ Configurar Prisma y Base de Datos
```sh
npx prisma generate
```

#### 5️⃣ Ejecutar el Proyecto
```sh
yarn dev  # O npm run dev
```

---

### 🛠 Funcionalidades
✅ Autenticación con Google mediante **NextAuth**  
✅ Creación, edición y eliminación de posts  
✅ Editor de texto enriquecido con **React Quill**  
✅ Optimización de datos con **SWR**  
✅ Animaciones con **Framer Motion**  
✅ Base de datos con **Prisma + MongoDB**  

---

### 📌 Modelo de Datos (`prisma/schema.prisma`)
```prisma
model Account {
    id                String  @id @default(cuid()) @map("_id")
    userId            String
    type              String
    provider          String
    providerAccountId String  @map("provider_account_id")
    refresh_token     String?
    access_token      String?
    expires_at        Int?
    token_type        String?
    scope             String?
    id_token          String?
    session_State     String?

    user User @relation(fields: [userId], references: [id], onDelete: Cascade)

    @@unique([provider, providerAccountId])
}

model Session {
    id           String   @id @default(cuid()) @map("_id")
    sessionToken String   @unique
    userId       String
    expires      DateTime
    user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Category {
    id    String  @id @default(cuid()) @map("_id")
    slug  String  @unique
    title String
    img   String?
    Posts Post[]
}

model Post {
    id        String    @id @default(cuid()) @map("_id")
    createdAt DateTime  @default(now())
    slug      String    @unique
    title     String
    desc      String?
    body      String
    img       String?
    userEmail String
    views     Int       @default(0)
    likes     Int       @default(0)
    catSlug   String
    hashtags  String[]
    cat       Category  @relation(fields: [catSlug], references: [slug])
    author    User      @relation(fields: [userEmail], references: [email])
    comments  Comment[]
}

model User {
    id            String    @id @default(cuid()) @map("_id")
    email         String    @unique
    emailVerified DateTime?
    name          String?
    image         String?
    address       Address?
    accounts      Account[]
    sessions      Session[]
    Post          Post[]
    Comment       Comment[]
}

model Comment {
    id        String   @id @default(cuid()) @map("_id")
    createdAt DateTime @default(now())
    userEmail String
    postSlug  String
    content   String
    user      User     @relation(fields: [userEmail], references: [email])
    post      Post     @relation(fields: [postSlug], references: [slug])
}

type Address {
    street String
    city   String
    state  String
    zip    String
}
```

---

### 🔄 Fetch de Datos con SWR
```tsx
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function PostsList() {
  const { data: posts, error } = useSWR("/api/posts", fetcher);

  if (error) return <p>Error al cargar los posts</p>;
  if (!posts) return <p>Cargando...</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

## Conclusión
Este proyecto proporciona una base sólida para un **blog personal** con autenticación de Google, manejo de posts y categorías, y una experiencia optimizada con tecnologías modernas.

🚀 **Mejoras futuras:**
- Likes y bookmarks
- Implementación de SSR para mejor rendimiento

¡Listo para construir tu blog personal!
