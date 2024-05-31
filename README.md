# ¿Cómo usar esta API?

Esta API se creó utilizando Node.js y Express, tiene una base de datos SQL que se basa en una instancia para SQL Server 2022 de con Docker.

Fue creada para los proyectos de especialidad VitalCheck Web y Móvil.

A continuación se muestran los pasos para el proceso de instalación y ejecución de la API.

### Clonar el repositorio de la API
```bash
git clone https://github.com/liliasoto/node-sql-api
cd node-sql-api
npm install
```
### Configurar y ejecutar el contenedor de Docker para SQL Server
Primero se debe tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Después en la carpeta de la API correr el siguiente comando, será para tener una instancia mssql-server para SQL Server 2022
```bash
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong#Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```
### Preparar base de datos
Ejecutar los querys señalados con el comentario --INSTRUCCIONES PARA VITALCHECK WEB o --INSTRUCCIONES PARA VITALCHECK MÓVIL según sea el caso, que están en el archivo db.sql en la carpeta Database.

A continuación se muestran algunos elementos importantes a tomar en cuenta en cuanto a la base de datos:

```bash
user: "sa"
password: "yourStrong#Password"
server: "localhost"
database: "vitalcheck"
```

### Ejecutar la API
Asegurate de tener corriendo el contenedor de Docker, una vez corriendo sólo tienes que ejecutar el siguiente comando: 
```bash
npm run dev
```