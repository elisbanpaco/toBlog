<p align="center">
  <img src="public/logo.webp" alt="toBlog" width="300" />
</p>

[![Astro](https://img.shields.io/badge/Astro-7-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Turso](https://img.shields.io/badge/Turso-LibSQL-4FF8D2?logo=turso&logoColor=black)](https://turso.tech/)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-blue)](LICENSE)

Aplicación de código abierto para escribir, publicar y leer artículos, con editor visual, asistencia de IA y biblioteca personal.

## Funcionalidades

- **Publicación:** borradores, edición, duplicación, portada, etiquetas y tiempo estimado de lectura.
- **Editor visual:** formato de texto, imágenes, bloques de código con resaltado y contenido de YouTube, Spotify, X y enlaces con vista previa.
- **Asistente de IA:** mejora, resume, reescribe y continúa textos. Permite adjuntar documentos e imágenes y conectar Ollama, OpenAI, Gemini o DeepSeek.
- **Lectura e interacción:** comentarios con respuestas, aplausos, enlaces para compartir y artículos guardados en Biblioteca.
- **Studio:** panel de artículos con búsqueda, filtros y métricas de vistas y lecturas.
- **Cuentas:** registro, verificación de correo, recuperación de contraseña y perfil editable.
- **Interfaz móvil:** navegación inferior, tipografía de lectura y fuentes alojadas en la aplicación.

## Tecnologías

Astro 7, React 19, TypeScript, Tailwind CSS 4 y TipTap. Base de datos SQLite/Turso con Drizzle, sesiones con Lucia, imágenes en Cloudflare R2 y correo con Resend. Incluye adaptador para Netlify.

## Desarrollo local

Necesitas Node.js 22 LTS actualizado y pnpm.

```bash
git clone https://github.com/elisbanpaco/myBlog.git
cd myBlog
pnpm install
cp .env.example .env
```

Para usar SQLite local, configura en `.env`:

```ini
TURSO_DATABASE_URL=file:.astro/content.db
TURSO_AUTH_TOKEN=
PUBLIC_URL=http://localhost:4321
```

Deja vacías las credenciales de los servicios que no hayas configurado. Después, crea las tablas e inicia el servidor:

```bash
pnpm db:push:local
pnpm exec astro dev --background
```

Abre [localhost:4321](http://localhost:4321). Gestiona el servidor con `pnpm exec astro dev status`, `pnpm exec astro dev logs` y `pnpm exec astro dev stop`.

**Datos de ejemplo, opcionales:** `pnpm db:seed:local` crea el usuario `admin` con contraseña `admin1234`. Este comando elimina datos existentes; úsalo solo en una base local desechable. El usuario de ejemplo ya tiene el correo verificado.

## Servicios y configuración

Las variables disponibles están en [`.env.example`](.env.example).

| Servicio | Configuración | Uso |
|---|---|---|
| Turso | `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN` | Base de datos remota; puede sustituirse por SQLite local. |
| Cloudflare R2 | `R2_ENDPOINT`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`, `R2_PUBLIC_URL` | Subida y acceso público a imágenes. |
| Resend | `API_RESEND`, `RESEND_FROM_EMAIL`, `PUBLIC_URL` | Verificación de correo y recuperación de contraseña. |
| IA | Ajustes del asistente en Studio | Ollama local o una clave del proveedor elegido. |

Los ajustes de IA se guardan en el navegador. Las solicitudes a proveedores externos pasan por el servidor de la aplicación. La IA es opcional; el registro con verificación y la recuperación de contraseña necesitan correo configurado.

## Comandos

| Comando | Función |
|---|---|
| `pnpm build` | Genera la aplicación para producción con el adaptador de Netlify. |
| `pnpm lint` | Revisa el código con ESLint. |
| `pnpm db:studio` | Abre el explorador de la base de datos. |
| `pnpm db:push:remote` | Aplica el esquema a la base de datos remota configurada. |

### Error del emulador de Netlify

Si `astro dev` falla con `unexpected argument '--allow-scripts'`, el error proviene del emulador local de Edge Functions. Si no usas Edge Functions, puedes desactivar su emulación en `astro.config.mjs`:

```js
adapter: netlify({
  devFeatures: { edgeFunctions: false },
}),
```

Esta opción afecta al desarrollo local. Consulta la [documentación del adaptador](https://docs.astro.build/en/guides/integrations-guide/netlify/).

## Contribuir

Puedes reportar errores, proponer mejoras o enviar un pull request. Describe el problema y, si cambia la interfaz, adjunta capturas de escritorio y móvil.

## Licencia

[MIT](LICENSE).
