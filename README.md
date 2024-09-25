# Actividad S07
## Docente:
Heber Gomez Hurtado 

## Integrantes:
- Juan Lopez Cordova
- Cuevas Fernandez Victor Alexander
- Lozano de la Cruz Maximo Aron
***

El objetivo de este proyecto es desarrollar una página ficticia de productos en equipo, utilizando HTML y CSS para crear tarjetas de producto con efectos interactivos que mejoren la experiencia del usuario. Los estudiantes trabajarán bajo la metodología de Aprendizaje Basado en Problemas (ABP), permitiendo la colaboración y resolución creativa de problemas.

## Pregunta Guía
¿Cómo podemos diseñar una página de productos interactiva que sea atractiva, fácil de navegar y que utilice técnicas de transformación y animación en CSS para mejorar la experiencia del usuario?

## Desarrollo del Proyecto
### Fase 1: Identificación del Problema y Análisis
Los estudiantes deberán investigar los elementos clave de una página de productos efectiva. Reflexionarán sobre cómo debería ser el diseño visual y qué interacciones son adecuadas para la experiencia del usuario.
### Fase 2: Búsqueda de Información
El equipo investigará ejemplos de animaciones y transformaciones en CSS aplicados a tarjetas de productos y analizará sitios web reales que utilicen estas técnicas.
### Fase 3: Diseño y Desarrollo
El equipo asignará roles y comenzará a desarrollar la página utilizando HTML y CSS. Cada tarjeta de producto incluirá efectos visuales interactivos cuando el usuario pase el cursor sobre ellas.
#### Ejemplo de Código CSS para Tarjeta de Producto
```css
.product-card {
    width: 300px;
    height: 400px;
    background-color: #f5f5f5;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.product-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.product-img {
    width: 100%;
    height: 250px;
    background-color: #ddd;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.product-details {
    padding: 15px;
}
```
### Fase 04: Prototipo
Los estudiantes desarrollarán un prototipo funcional de la página, implementando las animaciones y transiciones definidas en las tarjetas de productos.
### Fase 05: Evaluación del Prototipo
El prototipo será presentado al profesor y a los compañeros, quienes darán retroalimentación sobre su diseño y funcionalidad.
### Fase 06: Iteración y Mejora
Con base en la retroalimentación, el equipo hará ajustes al diseño para optimizar la página y mejorar la experiencia del usuario.