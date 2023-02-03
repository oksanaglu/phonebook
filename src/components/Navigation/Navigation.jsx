import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { Link } from "./Navigation.styled";

export const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
    return (
        <nav>
            <Link to='/'>Home</Link> {isLoggedIn && <Link to='/contacts'>Contacts</Link>}
        </nav>
    );
};
export default Navigation;