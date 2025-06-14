#!/bin/bash

# Esperar a que la base de datos esté disponible
/wait-for-it.sh db:5432 --timeout=60 --strict -- echo "Database is up"
# Ejecutar backend (Go)
cd /app
./server &
# Ejecutar frontend (Next.js en modo producción)
cd /ui
npm run start
