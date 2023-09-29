import { pool } from "../db.js";

export const listarTareas = (req, res) => res.send('obteniendo tareas');

export const listarTarea = (req, res) => res.send('obteniendo tarea unica');

export const crearTarea = async(req, res) => {
    const { titulo, descripcion } = req.body;
    
    try { const {rows} = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)', [titulo, descripcion]);
    console.log(rows);
    res.send('Creando tarea');
    } catch (error) {
        console.log("Algo salio mal");
    }
   
};


export const actualizarTarea = (req, res) => res.send('actualizando tarea unica');


// Método eliminarTarea Alumno:  Marcelo Quispe

export const eliminarTarea = async (req, res) => {
    const resultado = await pool.query ('DELETE * FROM tareas WHERE id = $1', (req.params.id));
    
    if (resultado.rowCount === 0) {
        return res.status(404).json ({
            message: "No existe la tarea con  ese  id"
        });
    }
    return res.sendStats(204);
}    
