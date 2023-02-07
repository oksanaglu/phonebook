import { IconButton, Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authOperations, authSelectors } from 'redux/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
import { TitleName, UserContainer } from "./UserMenu.styled"

export const UserMenu = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUserName);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <UserContainer>
            {isLoggedIn && (
                <TitleName>{name}</TitleName>
            )}
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={() => dispatch(authOperations.logOut())}>Exit</MenuItem>
            </Menu>
        </UserContainer>
    );
};

export default UserMenu;

