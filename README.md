# Portafolio personal de Lidia Roxana Tuy Bocel

Soy estudiante del Técnico Universitario en Informática
en la Universidad del Valle de Guatemala.

Este sitio presenta mi formación, habilidades y proyectos.

## Páginas

- Inicio.
- Sobre mí.
- Habilidades.
- Proyectos.
- Contacto.
- Error 404 personalizado.

## Tecnologías utilizadas

- Python.
- Django.
- HTML.
- CSS.
- JavaScript.

## Funciones de JavaScript

- Menú desplegable para celular.
- Validación del formulario de contacto.
- Filtro de proyectos por tecnología.

El formulario valida los datos en el navegador.
No envía ni guarda mensajes.

## Cómo ejecutar el proyecto en Windows

1. Tener Python instalado.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir una terminal en la carpeta donde está manage.py.
4. Ejecutar estos comandos uno por uno:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe manage.py runserver
```

5. Abrir esta dirección en el navegador:

http://127.0.0.1:8000/

Para detener el servidor, presionar Ctrl + C.

En las siguientes sesiones, solo es necesario ejecutar:

```powershell
.\.venv\Scripts\python.exe manage.py runserver
```

## Cómo probar el error 404

Detener el servidor y modificar temporalmente
mi_portafolio/settings.py:

```python
DEBUG = False
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']
```

Guardar y ejecutar:

```powershell
.\.venv\Scripts\python.exe manage.py runserver --insecure
```

Abrir:

http://127.0.0.1:8000/no-existe/

La opción --insecure se utiliza únicamente para esta prueba local.

Al terminar, detener el servidor, restaurar DEBUG = True
y volver a iniciarlo con el comando normal.