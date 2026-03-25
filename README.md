# Tienda Online 📱🛒

Aplicación móvil híbrida desarrollada con **Ionic, Angular y Capacitor**, que simula una tienda online con autenticación, consumo de API, carrito de compras y perfil dinámico.  
El proyecto incluye un backend en **Node.js/Express** con JWT para autenticación y un frontend en Ionic.

---

## Funcionalidades principales
- **Autenticación de usuarios** (registro e inicio de sesión con JWT).
- **Consumo de API REST** para mostrar productos.
- **Carrito de compras** con almacenamiento local y sincronización de cantidades.
- **Perfil dinámico** que muestra nombre y correo del usuario autenticado.
- **Integración con Capacitor** para compilar en Android/iOS.

---

## Estructura del proyecto
- `src/` → Código fuente del frontend Ionic/Angular.
- `server.js` → Backend en Node.js con endpoints de registro, login y productos.
- `package.json` → Dependencias del proyecto.
- `assets/img/` → Imágenes de productos y avatar de perfil.

---

##Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/tienda-online.git
cd tienda-online

### 2. Instalar dependencias
npm install

### 3. Ejecutar el backend
node server.js
El servidor se ejecutará en http://localhost:3000.

### 4.Ejecutar el frontend
ionic serve

