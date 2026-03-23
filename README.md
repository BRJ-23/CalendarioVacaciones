# 🏖️ Calendario de Vacaciones

Una aplicación web interactiva y sencilla para planificar y visualizar los días de vacaciones. Permite a los usuarios marcar preferencias de días (prioritarios y flexibles) sobre un calendario anual, calculando y gestionando de forma rápida el tiempo libre disponible.

## ✨ Características

- **Interfaz Intuitiva:** Vista de calendario anual clara y fácil de interpretar.
- **Tipos de Días:** 
  - 🔵 **Prioritarios:** Días de vacaciones fijos o preferentes.
  - 🔷 **Flexibles:** Días marcados como opcionales o negociables.
  - 🔴 **Festivos y Convenio:** Indicadores visuales de días no laborables oficiales.
- **Gestión de Estado:** Posibilidad de guardar y cargar la planificación (mediante el panel de control).
- **Diseño Responsivo:** Preparado para visualizarse tanto en pantallas grandes como desde el móvil.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla). No requiere servidor ni procesos de compilación complejos.
- **Testing:** [Playwright](https://playwright.dev/) para pruebas End-to-End (E2E), asegurando que la carga y la lógica principal ocurren sin errores en consola.

## 🚀 Instalación y Uso

### Usar la aplicación
Al ser una aplicación web estática, no se requiere instalación para usarla.
Simplemente selecciona el archivo `index.html` (ponle el nombre que prefieras) y abrelo en tu navegador web de preferencia.

### Ejecutar las pruebas (Playwright)
Si deseas contribuir al código y asegurarte de que todo funciona correctamente, el proyecto cuenta con un entorno de pruebas automatizado.

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2. Clona el repositorio e instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta los tests de Playwright:
   ```bash
   npx playwright test
   ```
4. Para ver el reporte de resultados (si ha habido fallos o para ver el detalle):
   ```bash
   npx playwright show-report
   ```

## 📂 Estructura del Proyecto

```text
/
├── Vacaciones.html        # Archivo principal de la aplicación (UI y Lógica)
├── package.json           # Configuración del proyecto y dependencias (Playwright)
├── playwright.config.js   # Archivo de configuración para las pruebas 
└── tests/
    └── consola.spec.js    # Test automatizado
```

## ✒️ Autor

Creado por [BRJ-23](https://github.com/BRJ-23).
