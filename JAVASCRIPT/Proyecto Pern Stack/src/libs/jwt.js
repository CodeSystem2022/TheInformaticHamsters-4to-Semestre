// 7.3 Creación del token -> conectando con el frontend: Parte 1 - Alumna: Giuliana Paola Diaz Luna
import jwt from "jsonwebtoken";

export const createAccessToken = (payLod) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payLod, "xyz123", { expiresIn: "1d" }, // https://github.com/vercel/ms
        (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
}
