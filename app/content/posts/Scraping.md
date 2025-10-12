---
title: "Como aprovecho el web scraping"
excerpt: "Automatizaciones"
date: "2024-10-10"
author: "Javier Medina"
---

## Intro

De las primeras cosas que aprendí cuando empeze en el mundo de la programación y lo que más me llamó la atención fue encontrar la forma de automatizar tareas. Me di cuenta de que perdía mucho tiempo analizando precios en supermercados para hacer las compras semanales.

Desarrollé un sistema automatizado que recopila ofertas de supermercados usando **web scraping**. El proyecto combina **JavaScript** y **Puppeteer** para extraer datos, **GO** para crear una API, **GitHub Actions** para automatización diaria de precios. 

## Detalles del proyecto

### Que consigo

Toda la información extraída se procesa y se expone a través de una API creada con **Go**. Esta API organiza los datos y los sirve en formato **JSON**, lo que facilita su consumo tanto por mi aplicación como por otros servicios.

La estructura de datos incluye:
- Nombre del producto
- Precio actual
- Precio anterior (si existe descuento)
- Porcentaje de descuento
- Supermercado de origen
- Fecha de última actualización

### Como me mantengo actualizado

La parte más inteligente del proyecto es la automatización. Configuré **GitHub Actions** para ejecutar mis scrapers automáticamente cada 24 horas. Esto significa que siempre tengo información actualizada sin intervención manual.
Tambien salvo espacio creando un backup semanal de los datos en un repositorio aparte.

El workflow también incluye validaciones para asegurar que los datos extraídos sean correctos antes de almacenarlos.

## Como impacta o cual es el futuro

Desde que implementé este sistema, puedo ver todas las ofertas disponibles en los supermercados de mi zona en tiempo real. Esto me ha permitido:
- **Planificar mejor** 
- **Comparar precios** 
- **Evitar viajes innecesarios**



## Lecciones aprendidas

Durante el desarrollo de este proyecto aprendí varios aspectos importantes:

- **Manejo de rate limiting:** Implementar delays entre requests para evitar ser bloqueado
- **Gestión de errores:** Los sitios web cambian constantemente, por lo que el código debe ser robusto
- **Optimización de costos:** Usar recursos gratuitos de forma inteligente para mantener el proyecto sostenible
- **Escalabilidad:** Diseñar pensando en crecimiento futuro

### Posibles features
Estoy pensando como implementar inteligencia artificial para predecir tendencias de precios y optimizar aún más mis compras. Esto podría incluir:
- Análisis histórico de precios para identificar patrones
- Recomendaciones personalizadas basadas en hábitos de compra
- Alertas automáticas cuando un producto alcanza un precio objetivo
## Conclusión

Comencé con el web scraping con proyectos personales pero me esto me permitió ver su potencial. Es una herramienta poderosa no solo para automatizar tareas, sino también para tomar decisiones más informadas en la vida diaria. 

La combinación de tecnología y necesidad personal resultó en una solución práctica que demuestra cómo la programación puede resolver problemas reales del día a día.

