import { AppBar, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux"
import { authSelectors } from "redux/auth";
import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";




export const Header = () => {
    const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
    return (
        <AppBar position="static" sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Typography variant="h6" component="span" sx={{ mr: 2, flexGrow: 1}}>
                    My Phonebook
                </Typography>
                <Navigation /> {isLoggedIn ? <UserMenu/> : <AuthNav/>}
            </Toolbar>
        </AppBar>
    );
};

export default Header;