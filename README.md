# ¿Cómo usar esta API?

Esta API se creó utilizando Node.js y Express, tiene una base de datos SQL que se basa en una instancia para SQL Server 2022 de con Docker.

Fue creada para los proyectos de especialidad VitalCheck Web y Móvil.

A continuación se muestran los pasos para el proceso de instalación y ejecución de la API.

### Requisitos 

Debes tener instalados:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Visual Studio Code
- Node.js y npm

### Clonar el repositorio de la API
```bash
git clone https://github.com/liliasoto/node-sql-api
cd node-sql-api
npm install
```
En caso de que indique que faltan instalarse dependencias has lo siguiente:
```bash
npm install express mssql cors dotenv morgan
npm install nodemon -D
```
### Configurar y ejecutar el contenedor de Docker para SQL Server
Después en la carpeta de la API correr el siguiente comando, será para tener una instancia mssql-server para SQL Server 2022
```bash
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong#Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```
Para ejecutarlo simplemente abre Docker Desktop y has clic en el botón play del contenedor
### Preparar base de datos
Instala la extensión "SQL Server (mssql)" en Visual Studio Code.

Abre la extensión y añade una conexión con los siguientes datos:

```bash
Nombre del servidor: localhost
Tipo de autenticación: SQL Login
Nombre de usuario: sa
Contraseña: yourStrong#Password
```

Ejecuta los querys señalados con el comentario --INSTRUCCIONES PARA VITALCHECK WEB o --INSTRUCCIONES PARA VITALCHECK MÓVIL según sea el caso, que están en el archivo db.sql en la carpeta Database.

### Conectar el dispositivo Android a la API (Sólo para vitalcheck móvil)

Se debe tener en cuenta que se debe conectar el dispositivo Android a la API, esto se hace con los siguientes comandos

```bash
adb devices
adb -s emulator-5554 reverse tcp:3000 tcp:3000
```

### Ejecutar la API
Asegurate de tener corriendo el contenedor de Docker, una vez corriendo sólo tienes que ejecutar el siguiente comando: 
```bash
npm run dev
```