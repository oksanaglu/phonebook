import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { authOperations, authSelectors } from "redux/auth";
import { Form, Error, Label, LoginTitle } from "./LoginPage.styled";


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
            <LoginTitle>Please enter your email and password:</LoginTitle>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        
                    />
                </Label>
                <Label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </Label>
                <Button variant="contained" type="submit">Sign in</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    );

};

export default LoginPage;

