import { AppBar } from "@mui/material";
import { useSelector } from "react-redux"
import { authSelectors } from "redux/auth";
import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import { HeaderHome } from "./AppBar.styled";


export const Header = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <AppBar position="static">
            <HeaderHome>
                <Navigation /> {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </HeaderHome>
        </AppBar>
    );
};

export default Header;




