# Grimorio de Hechizos: Un Proyecto con DOM y Eventos en JavaScript

Este proyecto es una aplicación web interactiva que simula un grimorio de hechizos para demostrar el uso de JavaScript en la manipulación del DOM y el manejo de eventos.

## ✨ Vista Previa
<img width="1599" height="727" alt="image" src="https://github.com/user-attachments/assets/cc53243d-8272-4e38-b066-ddf192b754bb" />
<br>
<img width="1599" height="728" alt="image" src="https://github.com/user-attachments/assets/c049c82e-e70e-4acc-85ee-ce30475c718f" />
<br>
<img width="1599" height="726" alt="image" src="https://github.com/user-attachments/assets/28d1a1fb-883b-4c56-a6c3-1eaa1f10937a" />

---

## 🔮 Funcionalidades

-   **Grimorio Interactivo:** Los usuarios pueden añadir, eliminar y marcar hechizos como "aprendidos". Un contador se actualiza dinámicamente.
-   **Pacto Infernal:** Un formulario temático que, al ser completado, añade los datos del usuario a una tabla en una sección inferior.
-   **Navegación y Animaciones:** La página utiliza un scroll suave para navegar entre secciones. Los elementos principales aparecen con una animación suave a medida que entran en la pantalla.

---

## 🛠️ Tecnologías y Conceptos Implementados

### Eventos Utilizados
-   `click` (para todos los botones de la aplicación).
-   `keypress` (para añadir hechizos con la tecla Enter).
-   `DOMContentLoaded` (para la carga inicial del script y hechizos por defecto).

### Manipulaciones del DOM
-   **Creación de nodos:** `<li>`, `<tr>`.
-   **Adición y eliminación de nodos:** `appendChild()`, `remove()`.
-   **Modificación de clases:** `classList.toggle()` para el estilo de "aprendido".
-   **Modificación de texto:** `textContent` para el contador y los botones.
-   **Navegación por scroll:** `scrollIntoView()` para moverse entre secciones.

### Funciones y APIs Clave
-   **`agregarHechizo()`:** Crea y configura un nuevo hechizo en la lista.
-   **`agregarAlma()`:** Crea una nueva fila en la tabla con los datos del formulario.
-   **`IntersectionObserver`:** Gestiona las animaciones de entrada de manera eficiente.

---

## 🚀 Archivos y Ejecución

-   **Código Fuente:** `index.html`, `styles.css`, `script.js`.
-   **Para Ejecutar:** Simplemente abre el archivo `index.html` en cualquier navegador web moderno.

---

## ✍️ Autores

-   Ana Sofía Arango Yanza
-   Juan David Morán Santuisty
-   Karold Dirley Delgado Arciniegas
