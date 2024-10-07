import { getConnection } from "../database/connection.js"
import sql from 'mssql'

// Obtener todas las mediciones
export const getMediciones = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Medicion");
    console.log(result);
    res.json(result.recordset);
};

// Obtener una medición por id de medición
export const getMedicionById = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .query("SELECT * FROM Medicion WHERE id = @id");
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "Measurement not found" });
    }
    res.json(result.recordset[0]);
};

// Obtener todas las mediciones de un usuario por id de usuario
export const getMedicionesByUsuarioId = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("usuario_id", sql.Int, req.params.usuario_id)
        .query("SELECT * FROM Medicion WHERE usuario_id = @usuario_id");
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "No measurements found for this user" });
    }
    res.json(result.recordset);
};

// Crear una nueva medición
export const createMedicion = async (req, res) => {
    console.log(req.body);
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("nivel_oxigeno", sql.Decimal(5, 2), req.body.nivel_oxigeno)
        .input("pulso_cardiaco", sql.Int, req.body.pulso_cardiaco)
        .input("fecha_hora", sql.DateTime, req.body.fecha_hora)
        .input("usuario_id", sql.Int, req.body.usuario_id)
        .query(
            "INSERT INTO Medicion (nivel_oxigeno, pulso_cardiaco, fecha_hora, usuario_id) VALUES (@nivel_oxigeno, @pulso_cardiaco, @fecha_hora, @usuario_id); SELECT SCOPE_IDENTITY() AS id;"
        );
    console.log(result);

    res.json({
        id: result.recordset[0].id,
        nivel_oxigeno: req.body.nivel_oxigeno,
        pulso_cardiaco: req.body.pulso_cardiaco,
        fecha_hora: req.body.fecha_hora,
        usuario_id: req.body.usuario_id,
    });
};

// Actualizar una medición por id
export const updateMedicion = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("nivel_oxigeno", sql.Decimal(5, 2), req.body.nivel_oxigeno)
        .input("pulso_cardiaco", sql.Int, req.body.pulso_cardiaco)
        .input("fecha_hora", sql.DateTime, req.body.fecha_hora)
        .input("id", sql.Int, req.params.id)
        .query(
            "UPDATE Medicion SET nivel_oxigeno = @nivel_oxigeno, pulso_cardiaco = @pulso_cardiaco, fecha_hora = @fecha_hora WHERE id = @id"
        );

    console.log(result);

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "Measurement not found" });
    }

    res.json({
        id: req.params.id,
        nivel_oxigeno: req.body.nivel_oxigeno,
        pulso_cardiaco: req.body.pulso_cardiaco,
        fecha_hora: req.body.fecha_hora,
    });
};

// Eliminar una medición por id
export const deleteMedicion = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .query("DELETE FROM Medicion WHERE id = @id");

    console.log(result);

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "Measurement not found" });
    }

    res.json({ message: "Measurement deleted" });
};
