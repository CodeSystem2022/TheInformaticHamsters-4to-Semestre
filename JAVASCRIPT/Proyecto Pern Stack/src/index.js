import morgan from "morgan";

import app from "./app.js";
import {pool} from "./db.js";



pool.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
    app.listen(3000);
    console.log("Server on port", 3000);
    pool.end();
});

