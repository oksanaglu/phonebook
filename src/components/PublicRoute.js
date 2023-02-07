import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from 'redux/auth';
import { PropTypes } from "prop-types";

// Если маршрут ограничен и пользователь вошел в систему, визуализируем <Navigate> для redirectTo
// В противном случае визуализируем компонент

export const PublicRoute = ({ children, redirectTo = '/', restricted = false, }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
    restricted: PropTypes.bool,
};

export default PublicRoute;


