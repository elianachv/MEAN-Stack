# Actividad 10 Unidad 4
Explicación básica del funcionamiento del framework express implementado con la base de datos local eduBIT

## Archivos principales
### index.js
Archivo que genera la conexión con la bd y el que recibe las solicitudes de los usuarios para redirigirlos a las diferentes rutas.

### app.js
Archivo que recibe las rutas para pasarselas al archivo index. Es un puente entre la API y el Endpoint de conexión a los usuarios

## Rutas
Espacios a los que llegan las solicitudes de los usuarios para desencadenar acciones.
Es la API (una sala que expone información y servicios para ser consumidos).

### userRoutes.js
Archivo que expone las rutas. Crea las rutas para redireccionar a las diferentes url de la app

## Controladores
Funciones que interactuan para dar vida al modelo

## Modelo
Esquema de los objetos

## Frontend con Angular
### Componentes
Los componetes son la interfaz grafica con la que interactua el usuario

### Servicios
Son el puente entre la interfaz gráfica y la API del servidor implementado en express para el acceso a los datos de la base de datos

### Modelos 
Son clases que estructuran los objetos que se enviaran al servidor

### Enrutamiento
El enrutamiento de angular solo afecta el comportamiento de las vistas y no las conexiones propias del sevidor que contiene la api



