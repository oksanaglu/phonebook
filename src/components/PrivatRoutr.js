import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from 'redux/auth';

// Если маршрут частный и пользователь вошел в систему, визуализировать компонент
// В противном случае визуализировать <Navigate> в redirectTo



export const PrivateRoute = ({ children, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute


