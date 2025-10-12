---
title: "Resumen de videos de YouTube con IA"
excerpt: "Genera resúmenes concisos de videos de YouTube para ahorrar tiempo"
date: "2025-10-11"
author: "Javier Medina"
---

## Introducción
Cuando publiqué mi primer artículo sobre <a href="Notebooklm">NotebookLM </a> comenté que lo usaba para resumir videos de YouTube con IA. Al fin y al cabo lo que buscaba en ese momento era ahorrar tiempo. El proceso resultaba algo molesto, por lo que decidí crear una automatización que lo haga más sencillo y rápido.

Mi objetivo era profundizar en los conceptos aprendidos en cada video y poder seguir el aprendizaje con herramientas como ChatGPT o Claude, sin tener que ver el video completo nuevamente.

## Que genera?
La herramienta crea prompts y tarjetas de repaso (flashcards) para reforzar conceptos vistos en el video.  
<div className="">
<img src="https://raw.githubusercontent.com/javiermedinaj/summarize-yt/main/demo-img/demo3.png" 
     width="500" 
     alt="Demo de prompt y flashcard generados" />
</div>
No es una solución definitiva, pero funciona bien con videos de hasta 35 minutos.  

Tecnologías:
- Frontend: React + TypeScript
- Backend: Node.js + Express
- IA: GPT‑4 vía Azure OpenAI
- Despliegue: Vercel


Creo que todo el proceso puede automatizarse; por eso desarrollé este proyecto para facilitar el aprendizaje y ahorrar tiempo.

## Acceso
Accede a la aplicación aquí: https://summarize-ai-yt.vercel.app/

## Capturas
<img src="https://raw.githubusercontent.com/javiermedinaj/summarize-yt/main/demo-img/demo1.png" 
     style="width: 80%; max-width: 600px; height: auto; display: block; margin: 1em auto;" 
     alt="Demo de la aplicación - Resumen de YouTube" />


## Repo

https://github.com/javiermedinaj/summarize-yt

## Disclaimer
Sin embargo esta es una version preeliminar y no es perfecta. A veces los resúmenes no capturan todos los puntos clave y las flashcards pueden ser demasiado simples o complejas. Estoy trabajando en mejorar la precisión y utilidad de las tarjetas. Cabe aclarar que la IA tambien tiene sesgos y limitaciones, por lo que los resultados pueden variar. Y no se debe usar como unica fuente de aprendizaje.