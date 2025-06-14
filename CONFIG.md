# Guía de Configuración de Dispositivos, Locales, Sitios y Clientes en ThingsBoard para Lumen Billing

A continuación se detallan los pasos y requisitos formales para la correcta configuración de los dispositivos, assets y atributos necesarios para la integración y visualización en Lumen Billing.

---

## 1. Dispositivos (Devices)

- **Prefijos obligatorios:**
  - Dispositivos de energía: el nombre debe iniciar con el prefijo `EM` (Ejemplo: `EM-001`).
  - Dispositivos de agua: el nombre debe iniciar con el prefijo `WM` (Ejemplo: `WM-001`).
- **Creación:**  
  Los dispositivos deben ser creados en ThingsBoard siguiendo estos prefijos para su correcta identificación y asociación.

---

## 2. Locales (Assets - Local)

- **Creación:**  
  Cada local debe ser creado como un asset en ThingsBoard.
- **Relación:**  
  Relaciona cada local con sus dispositivos correspondientes (de energía y/o agua).
- **Profile:**  
  El asset debe tener el perfil denominado `"Local"`.
- **Grupo:**  
  Cada local debe pertenecer al grupo del site correspondiente para ser visualizado correctamente.

---

## 3. Sitios (Assets - Site)

- **Creación:**  
  Cada site debe ser creado como un asset principal que agrupa a los locales (assets) relacionados.
- **Relación:**  
  Relaciona el asset del site con todos los locales que le pertenecen (por ejemplo, un centro comercial, edificio, etc.).
- **Profile:**  
  El asset debe tener el perfil denominado `"Site"`.
- **Grupo:**  
  - Crea un grupo con el nombre del site o un identificador claro.
  - Agrega un atributo obligatorio llamado `localsGroup` que debe contener el **ID del grupo** de locales.
- **Visualización:**  
  Cada site debe pertenecer al grupo creado por el customer para ser visualizado.

---

## 4. Clientes (Customer)

- **Creación:**  
  Cada customer debe ser el asset principal del cliente (por ejemplo, la organización principal).
- **Relación:**  
  Relaciona el asset del customer con todos sus sites.
- **Grupo:**  
  - Crea un grupo con el nombre de la organización o un identificador claro.
  - Agrega cada site dentro de este grupo para su visualización.
- **Atributos del asset del customer:**
  - `img` (opcional): imagen de la empresa u organización.
  - `sitesGroup` (obligatorio): debe contener el **ID del grupo** creado para los sites.

---

## 5. Grupo de Billing

- **Creación:**  
  Es obligatorio crear un grupo destinado para el billing.
- **Contenido:**  
  Este grupo debe contener todos los customers que tengan el servicio de billing.
- **Importancia:**  
  El ID de este grupo es necesario para la correcta instalación y funcionamiento del software Lumen Billing.

---

## Notas Finales

- Es fundamental respetar la estructura de prefijos, perfiles y atributos para asegurar la correcta integración y visualización en Lumen Billing.
- Para cualquier consulta o soporte, contactar a:

  **Axl Santos**  
  axlsntz.dev@gmail.com

---