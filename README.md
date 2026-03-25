# Tienda Online 

Aplicación móvil híbrida desarrollada con Ionic, Angular y Capacitor, que simula una tienda online con autenticación, consumo de API, carrito de compras y perfil dinámico. El proyecto incluye un backend en Node.js/Express con JWT para autenticación y un frontend en Ionic.

## Funcionalidades principales
- Autenticación de usuarios (registro e inicio de sesión con JWT).
- Consumo de API REST para mostrar productos.
- Carrito de compras con almacenamiento local y sincronización de cantidades.
- Perfil dinámico que muestra nombre y correo del usuario autenticado.
- Integración con Capacitor para compilar en Android/iOS.

## Estructura del proyecto
- `src/` → Código fuente del frontend Ionic/Angular.
- `server.js` → Backend en Node.js con endpoints de registro, login y productos.
- `package.json` → Dependencias del proyecto.
- `assets/img/` → Imágenes de productos y avatar de perfil.

## Instalación y ejecución
Clonar el repositorio:
```bash
git clone https://github.com/TU_USUARIO/tienda-online.git
cd tienda-online

Instalar dependencias:
npm install

Ejecutar el backend:
node server.js

El servidor se ejecutará en http://localhost:3000.

Ejecutar el frontend:
 ionic serve
La aplicación se abrirá en el navegador en http://localhost:8100.

Compilación con Capacitor
Para generar el proyecto nativo:
ionic build
npx cap add android
npx cap add ios
npx cap copy
npx cap open android
npx cap open ios

Esto abrirá el proyecto en Android Studio o Xcode para pruebas en emulador o dispositivo físico.

Referencias
Ionic Framework Docs. (s.f.). Introduction to Ionic. Recuperado de https://ionicframework.com/docs

Android Studio Developers. (s.f.). Home page. Recuperado de https://developer.android.com/studio

Capacitor. (s.f.). Capacitor: Cross-platform Native Runtime for Web Apps. Recuperado de https://capacitorjs.com/docs

Khanna, R. (2016). Getting Started with Ionic. Packt.
