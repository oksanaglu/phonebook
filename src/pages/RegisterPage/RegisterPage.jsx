import { Label } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { authOperations, authSelectors } from "redux/auth";
import { Form, Error } from "./RegisterPage.styled";


export const RegisterPage = () => {
  
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(authSelectors.getUserError);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h2>Registration</h2>
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
                <Button variant="contained" type="submit">Register</Button>
                {error && <Error>{error}</Error>}
            </Form>
        </>
    );
};

export default RegisterPage;