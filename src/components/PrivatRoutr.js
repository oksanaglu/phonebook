import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from 'redux/auth';


export const PrivateRoute = ({ children, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute