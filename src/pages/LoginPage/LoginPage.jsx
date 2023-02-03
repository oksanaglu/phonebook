import { Label } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { authOperations, authSelectors } from "redux/auth";


export const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(authSelectors.getUserError);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h2>Enter your Phonebook</h2>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    <TextField
                        onChange={handleChange}
                    />
                </Label>
                <Label>
                    <TextField
                        onChange={handleChange}          
                    />
                </Label>
                <Button variant="contained" type="submit">Sign in</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    );

};

export default LoginPage;