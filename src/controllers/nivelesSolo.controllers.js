import { getConnection } from "../database/connection.js"
import sql from 'mssql'

export const getNivelesSolo = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM nivelesSolo");
    console.log(result);
    res.json(result.recordset);
}

export const getNivelSolo = async (req, res) => {
    console.log(req.params.id);
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .query("SELECT * FROM nivelesSolo WHERE id = @id");
    if (result.rowsAffected[0] === 0){
        return res.status(404).json({message: "Nivel not found"});
    }
    
    return res.json(result.recordset[0]);
}