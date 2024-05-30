import { getConnection } from "../database/connection.js"
import sql from 'mssql'

export const getEstadosDeSalud = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM EstadoSalud");
    console.log(result);
    res.json(result.recordset);
}

export const getUnEstadoSalud = async (req, res) => {
    console.log(req.params.id);
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .query("SELECT * FROM EstadoSalud WHERE id = @id");
    if (result.rowsAffected[0] === 0){
        return res.status(404).json({message: "EstadoSalud not found"});
    }
    
    return res.json(result.recordset[0]);
}

export const createEstadoSalud = async (req,res) => {
    console.log(req.body);
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("nivel_oxigeno", sql.Decimal, req.body.nivel_oxigeno)
        .input("pulso_cardiaco", sql.Int, req.body.pulso_cardiaco)
        .input("fecha_hora", sql.DateTime, req.body.fecha_hora)
        .query(
            "INSERT INTO EstadoSalud (nivel_oxigeno, pulso_cardiaco, fecha_hora) VALUES (@nivel_oxigeno, @pulso_cardiaco, @fecha_hora); SELECT SCOPE_IDENTITY() AS id;"
        );
    console.log(result);

    res.json({
        id: result.recordset[0].id,
        nivel_oxigeno: req.body.nivel_oxigeno, 
        pulso_cardiaco: req.body.pulso_cardiaco,
        fecha_hora: req.body.fecha_hora,
    });
}