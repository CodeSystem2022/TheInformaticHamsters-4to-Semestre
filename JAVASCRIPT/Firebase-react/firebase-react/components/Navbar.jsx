import { useContext } from "react"; 
import { NavLink } from "react-router-dom";
import { userContext } from "../context/UserProvider";

const Navbar = () => {
    const { user, setUser } = useContext(useContext);

    return (
        <div>
            {user ? (
                <>
                    {}
                    <NavLink to="/">Inicio</NavLink>
                    {}
                    <button onClick={() => setUser(false)}>Logout</button>
                </>
             ) : (
                <NavLink to="/login">Login</NavLink>

             )}
        </div>
    )
}

export default Navbar;