# Lumen Billing

Lumen Billing es una aplicación para gestionar y calcular facturas basadas en datos de dispositivos IoT (medidores de agua, energía, etc.) mediante la API de ThingsBoard. El proyecto incluye un backend en Go, un frontend en Next.js y una base de datos PostgreSQL, todo orquestado con Docker.

---

## Estructura del Proyecto

```
billing-app/
│
├── app/           # Backend en Go
├── ui/            # Frontend en Next.js
├── Dockerfile     # Imagen multi-stage para backend y frontend
├── docker-compose.yml
├── entrypoint.sh
├── wait-for-it.sh
└── README.md
```

---

## Requisitos Previos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Configuración Rápida

### 1. Variables de Entorno

Asegúrate de configurar las variables de entorno necesarias en el archivo `docker-compose.yml` para la base de datos y ThingsBoard.  
Si necesitas variables adicionales para el frontend, puedes agregarlas en `ui/.env.local`.

### 2. Construir y Levantar los Servicios

Desde la raíz del proyecto, ejecuta:

```sh
docker compose up --build
```

Esto hará lo siguiente:

- Construirá las imágenes del backend (Go) y frontend (Next.js).
- Levantará la base de datos PostgreSQL.
- Esperará a que la base de datos esté lista antes de iniciar el backend.
- Iniciará el frontend en modo producción.

### 3. Acceso a la Aplicación

- **Frontend (Next.js):** [http://localhost:3000](http://localhost:3000)
- **Backend (Go API):** [http://localhost:4001/api/v1](http://localhost:4001/api/v1)
- **Base de datos (PostgreSQL):** puerto local `5434`, usuario y contraseña según `docker-compose.yml`.

---

## Flujo de Arranque

1. **PostgreSQL** se inicia y crea la base de datos `billing`.
2. El contenedor `app` espera a que la base de datos esté lista usando `wait-for-it.sh`.
3. El backend Go se conecta a la base de datos y arranca en el puerto 4001.
4. El frontend Next.js se inicia en el puerto 3000.
5. El frontend puede comunicarse con el backend usando `/api/v1` gracias a la configuración de proxy en Next.js.

---

## Comandos Útiles

- **Reconstruir todo desde cero (sin cache):**
  ```sh
  docker compose build --no-cache
  docker compose up
  ```

- **Detener y eliminar los contenedores:**
  ```sh
  docker compose down
  ```

- **Ver logs de los servicios:**
  ```sh
  docker compose logs -f
  ```

---

## Personalización

- **Variables de entorno del backend:**  
  Modifica las variables en la sección `environment` del servicio `app` en `docker-compose.yml`.

- **Variables de entorno del frontend:**  
  Puedes agregar variables en `ui/.env.local` y acceder a ellas en Next.js usando el prefijo `NEXT_PUBLIC_`.

---

## Notas

- El backend y el frontend corren en el mismo contenedor y se comunican internamente usando `localhost`.
- El backend espera a que la base de datos esté lista antes de arrancar, evitando errores de conexión temprana.
- Si necesitas exponer la base de datos a herramientas externas, usa el puerto `5434` en tu máquina local.

---

## Contribuciones

¡Toda contribución es bienvenida!  
Abre un pull request o crea un issue en el repositorio.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.