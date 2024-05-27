import sql from 'mssql';

const dbSettings = {
    user: "sa",
    password: "yourStrong#Password",
    server: "localhost",
    database: "vitalcheck",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
};

export const getConnection = async () => {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch (error){
        console.log(error);
    }
};