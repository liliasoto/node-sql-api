import { getConnection } from "../database/connection.js"
import sql from 'mssql'

export const getContactosSolo = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM contactosSolo");
    console.log(result);
    res.json(result.recordset);
}

export const getContactoSolo = async (req, res) => {
    console.log(req.params.id);
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .query("SELECT * FROM contactosSolo WHERE id = @id");
    if (result.rowsAffected[0] === 0){
        return res.status(404).json({message: "Contact not found"});
    }
    
    return res.json(result.recordset[0]);
}

export const createContactoSolo = async (req,res) => {
    console.log(req.body);
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("nombre", sql.Text, req.body.nombre)
        .input("apellido", sql.Text, req.body.apellido)
        .input("email", sql.Text, req.body.email)
        .input("rol", sql.Text, req.body.rol)
        .query(
            "INSERT INTO contactosSolo (nombre, apellido, email, rol) VALUES (@nombre, @apellido, @email, @rol); SELECT SCOPE_IDENTITY() AS id;"
        );
    console.log(result);

    res.json({
        id: result.recordset[0].id,
        nombre: req.body.nombre, 
        apellido: req.body.apellido,
        email: req.body.email,
        rol: req.body.rol,
    });
}