import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const { user } = useContext(useContext);

    if (!user) {
        return <Navigate to="/login" />;
    }
    

    return children;
}

export default RequireAuth;