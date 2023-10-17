import { pool } from "../db.js";
// 7.2 Utilización de bcrypt para proteger el password #166-- Alumno Miguel Rodriguez Saquilan
import bcrypt  from "bcrypt";
import {createAccessToken} from "../libs/jwt.js"

export const signin = (req, res) => res.send("Ingresando");



export const signup = async (req, res, next) => {
    const {name, email, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword);

        const result =  await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) Returning *", [name, email, password]);
       
        // 7.3 Creación del token -> conectando con el frontend: Parte 2 -- Alumna: Giuliana Paola Diaz Luna
        const token = await createAccessToken({id: result.rows[0].id});
        console.log(result);
         // return res.json(result.rows[0]);
         return res.json({
            token: token,
        });
    } catch (error) {
        if(error.code === "23505"){
            return res.status(400).json({message: "El correo ya esta registrado"});
        }  
        next(error)  
    }
};

// 8.2 Cierre de sesión -> signout -- Alumno Miguel Rodriguez Saquilan
export const signout = (req, res) => {
    res.clearCookie("token");
    return res.json({message: "Secion cerrada"})
};

export const profile  = async(req, res) => {
        const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [req.usuarioId]);
        return res.json(result.rows[0]);
};

// 7.4  Cookies -> Guardar el token con cookie -- Alumno: Marcelo A.Quispe

res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 60 * 60 * 24 * 1000,}) // 1 day}) 
return res.json(result.rows[0]); // Fin parte 7.4