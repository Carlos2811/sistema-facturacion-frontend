# 🖥️ Sistema de Facturación - Frontend

Este es el **frontend** de la aplicación de facturación, desarrollado en **Angular 15+** con **Bootstrap 5**.  
Permite crear facturas, buscarlas y mostrar clientes/productos obtenidos desde el backend.

---

## 🚀 Tecnologías usadas
- Angular 15+
- TypeScript
- Bootstrap 5
- Angular Router
- Angular Forms / Reactive Forms
- HttpClient (para comunicación con la API)

---

## 📦 Instalación y ejecución

1. Clonar el repositorio:
   git clone https://github.com/Carlos2811/sistema-facturacion-frontend/pull/new/master
   cd sistema-facturacion/frontend
2. Instalar dependencias:
  npm install
3. Ejecutar en modo desarrollo:
  ng serve
El frontend estará disponible en http://localhost:4200.

🔗 Conexión con el backend
El servicio de Angular apunta al backend en:
https://localhost:44342/api


📁 Estructura principal

src/app/
 ├── components/
 │    ├── navbar/           # Navbar Bootstrap
 │    ├── home/             # Página de bienvenida
 │    ├── invoice-create/   # Formulario para crear facturas
 │    ├── invoice-search/   # Buscar facturas y mostrar resultados
 │
 ├── models/                # Interfaces de datos
 ├── services/              # Servicios HTTP (API REST)
 ├── app.routes.ts          # Configuración de rutas
 └── app.component.ts       # Componente principal
✅ Funcionalidades
Crear facturas con clientes y productos.

Cálculo automático de subtotal, IVA (19%) y total.

Búsqueda de facturas por número, cliente o rango de fechas.

UI responsiva con Bootstrap.

🛠️ Scripts útiles
ng serve → Levanta el frontend en dev.

ng build → Compila para producción en /dist.

ng test → Ejecuta pruebas unitarias (si se definen).
