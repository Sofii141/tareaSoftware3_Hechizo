# Grimorio de Hechizos: Un Proyecto con DOM y Eventos en JavaScript

Este proyecto es una aplicación web interactiva que simula un grimorio de hechizos para demostrar el uso de JavaScript en la manipulación del DOM y el manejo de eventos.

## ✍️ Autores

-   Ana Sofía Arango Yanza
-   Juan David Morán Santuisty
-   Karold Dirley Delgado Arciniegas
  
## ✨ Características Principales

-   **Grimorio Dinámico:** Añade, elimina y marca hechizos como "aprendidos". 
-   **Partículas Interactivas:** Fondo animado con partículas mágicas implementado con `particles.js`.
-   **Ritual de Sellado Animado:** Al enviar el formulario del "Pacto Infernal", se activa una animación SVG de un pentagrama dibujándose, seguida de un mensaje de confirmación.
-   **Formulario Temático:** Un formulario para "sellar el pacto" que guarda los datos en una tabla dinámica en la parte inferior.
-   **Animaciones Suaves:** Los elementos de cada sección aparecen con animaciones de entrada (`IntersectionObserver`).

## 🔮 Vista Previa

<img width="1599" height="735" alt="image" src="https://github.com/user-attachments/assets/a0ca8f1a-17c3-49f1-bf41-14468b0e3975" />
<br>
<img width="1599" height="736" alt="image" src="https://github.com/user-attachments/assets/2822b3b7-42b8-400b-af4e-9f6636a97f5a" />
<br>
<img width="1599" height="732" alt="image" src="https://github.com/user-attachments/assets/4047d625-4e15-4b99-81a2-f10ac7cc8664" />
<br>
<img width="1599" height="729" alt="image" src="https://github.com/user-attachments/assets/f69106c0-1098-4f77-88df-831cf48407dd" />

---

## 🛠️ Tecnologías y Conceptos Clave

-   **JavaScript (ES6+):**
    -   **Manipulación del DOM:** Creación (`createElement`), adición (`appendChild`) y eliminación (`remove`) de elementos.
    -   **Manejo de Eventos:** `click`, `keypress`, `mouseover`, `DOMContentLoaded`.
    -   **APIs Modernas:** `IntersectionObserver` para animaciones eficientes al hacer scroll.
    -   **Timers:** `setTimeout` para orquestar la secuencia de animaciones del ritual.
-   **CSS3:**
    -   **Animaciones y Transiciones:** `keyframes` para la animación del pentagrama (SVG) y transiciones para la opacidad y transformaciones.
    -   **Flexbox:** Para centrar y alinear contenido dinámicamente.
    -   **Variables CSS (Custom Properties):** Para un sistema de diseño temático y mantenible.
    -   **Pseudoelementos:** Para los bordes de los contenedores.
-   **Librerías Externas:**
    -   **`particles.js`:** Para el fondo de partículas interactivas.

---

## 🚀 Cómo Empezar

No se requiere ninguna instalación. Simplemente clona el repositorio y abre el archivo `index.html` en tu navegador web preferido.

```bash
git clone https://github.com/Sofii141/tareaSoftware3_Hechizo.git
cd tareaSoftware3_Hechizo
# Abre index.html en el navegador
