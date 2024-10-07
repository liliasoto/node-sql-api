import { getConnection } from "../database/connection.js"
import sql from 'mssql'

export const getUsuarios = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Usuarios");
    console.log(result);
    res.json(result.recordset);
}

export const getUsuario = async (req, res) => {
    console.log(req.params.id);
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .query("SELECT * FROM Usuarios WHERE id = @id");
    if (result.rowsAffected[0] === 0){
        return res.status(404).json({message: "User not found"});
    }
    
    return res.json(result.recordset[0]);
}

export const createUsuario = async (req,res) => {
    console.log(req.body);
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("nombre_usuario", sql.VarChar, req.body.nombre_usuario)
        .input("correo", sql.VarChar, req.body.correo)
        .input("contraseña", sql.VarChar, req.body.contraseña)
        .input("fecha_nacimiento", sql.Date, req.body.fecha_nacimiento)
        .input("genero", sql.VarChar, req.body.genero)
        .input("peso", sql.Decimal, req.body.peso)
        .input("fecha_creacion", sql.DateTime, req.body.fecha_creacion)
        .query(
            "INSERT INTO Usuarios (nombre_usuario, correo, contraseña, fecha_nacimiento, genero, peso, fecha_creacion) VALUES (@nombre_usuario, @correo, @contraseña, @fecha_nacimiento, @genero, @peso, @fecha_creacion); SELECT SCOPE_IDENTITY() AS id;"
        );
    console.log(result);

    res.json({
        id: result.recordset[0].id,
        nombre_usuario: req.body.nombre_usuario, 
        correo: req.body.correo,
        contraseña: req.body.contraseña,
        fecha_nacimiento: req.body.fecha_nacimiento,
        genero: req.body.genero,
        peso: req.body.peso,
        fecha_creacion: req.body.fecha_creacion,
    });
}

export const updateUsuario = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("peso", sql.Decimal, req.body.peso)
        .input("id", sql.Int, req.params.id)
        .query("UPDATE Usuarios SET peso = @peso WHERE id = @id");

    console.log(result);

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({
        id: req.params.id,
        nombre_usuario: req.body.nombre_usuario,
        correo: req.body.correo,
        contraseña: req.body.contraseña,
        fecha_nacimiento: req.body.fecha_nacimiento,
        genero: req.body.genero,
        peso: req.body.peso,
    });
};


export const deleteUsuario = async (req,res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input("id", sql.Int, req.params.id)
        .query("DELETE FROM Usuarios WHERE id = @id");
    console.log(result);
    if (result.rowsAffected[0] === 0){
        return res.status(404).json({message: "User not found"});
    }

    return res.json("User deleted");
}

export const loginUsuario = async (req, res) => {
    const { nombre_usuario, contraseña } = req.body;

    // Asegurarme de que req.body tiene los valores correctos
    console.log('Nombre de usuario:', nombre_usuario);
    console.log('Contraseña:', contraseña);

    if (!nombre_usuario || !contraseña) {
        return res.status(400).json({ message: "Faltan credenciales" });
    }

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("nombre_usuario", sql.VarChar, nombre_usuario)
            .query("SELECT * FROM Usuarios WHERE nombre_usuario = @nombre_usuario");

        // Si no se encuentra el usuario
        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "El usuario no existe" });
        }

        const usuario = result.recordset[0];

        // Verificar la contraseña
        if (usuario.contraseña !== contraseña) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        // Si el usuario y la contraseña son correctos
        return res.json({ message: "Inicio de sesión exitoso", usuario: usuario });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

