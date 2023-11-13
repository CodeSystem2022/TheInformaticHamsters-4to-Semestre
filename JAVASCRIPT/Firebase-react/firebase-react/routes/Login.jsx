import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, serUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClickLogin = () => {
        setUser(true);
        navigate("/");
    };

    return (
        <>
        {}
        <h1>Login</h1>
        {}
        <h2>{user ? "En linea" : "offline"}</h2>
        {}
        <button onClick={handleClickLogin}>Acceder</button>
        
        
        </>
    );
};

export default Login;