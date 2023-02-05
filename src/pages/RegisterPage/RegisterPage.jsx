import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { authOperations, authSelectors } from "redux/auth";
import { Form, Error, Label, RegisterTitle, RegisterContainer } from "./RegisterPage.styled";


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
        <RegisterContainer>
            <RegisterTitle>Registration</RegisterTitle>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    <TextField
                        label="Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="enter your name"
                        required
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                    />
                </Label>

                <Label>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        required
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                    />
                </Label>

                <Label>
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="at least 7 characters"
                        required
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                    />
                </Label>
                <Button variant="contained" type="submit">To register</Button>
                {error && <Error>{error}</Error>}
            </Form>
        </RegisterContainer>
    );
};

export default RegisterPage;