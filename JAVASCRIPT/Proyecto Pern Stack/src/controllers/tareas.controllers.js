import { pool } from "../db.js";

export const listarTareas = async (req, res, next) => res => {
    console.log(req.usuarioId);
    const resultado = await pool.query('SELECT * FROM tareas1');
    console.log(resultado);
    return res.json(resultado.rows);

}

// 6.4 Método para obtener tarea -> listarTarea => ahora en singular - Alumna: Giuliana Paola Diaz Luna
export const listarTarea = async (req, res) => {
    const resultado =await pool.query('SELECT *FROM tareas WHERE id =$1', [req.params.id]);
    if (resultado.rowCount ===0) {
        return res.status(404).json({
            message: 'La tarea no existe'
        });
    } 
    return res.json(resultado.rows[0]);
}

export const crearTarea = async (req, res) => {
    const { titulo, descripcion } = req.body;

    // 6.2 Comenzamos con la conexión de crearTareas - Parte -> 3 Pruebas y manejo de errores - Alumna: Giuliana Paola Diaz Luna
    // Parte -> 4 Utilización de Returning => para que devuelva una respuesta
    try {
        //throw new Error('algo salio mal');
        const { rows } = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2) RETURNING *', [titulo, descripcion]);
        //console.log(rows);
        //res,send ('creando tarea');
        res.json(result.rows[0]);
        console.log(result.rows[0]);
    } catch (error) {
        if (error.code === '23505') {
            return res.send - status(400).json({
                message: 'Ya existe una tarea con ese titulo'
            //return res.send('ya existe una tarea con ese titulo');
            });
        }
        console.log(error);
        next(error);
    }

};

// Método actualizarTarea ----- Alumna: Nadia Acosta

export const actualizarTarea = async (req, res) => {
    const { titulo, descripcion } = req.body;
    const id = req.params.id;
    const result = await pool.query('UPDATE tareas SET titulo = $1, description = $2 WHERE id= $3 RETURNING *', { titulo, descripcion, id });

    if (result.rowCount === 0) {
        return res.status(404).json({
            message: 'No existe una tarea con ese id'
        });
        return res.json(result);
    }
};


// Método eliminarTarea Alumno:  Marcelo Quispe

export const eliminarTarea = async (req, res) => {
    const resultado = await pool.query('DELETE * FROM tareas WHERE id = $1', (req.params.id));

    if (resultado.rowCount === 0) {
        return res.status(404).json({
            message: "No existe la tarea con  ese  id"
        });
    }
    return res.sendStats(204);
} 
