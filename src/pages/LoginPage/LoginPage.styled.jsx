import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 0 15px 0 15px;
  border-radius: 5px;
`;

export const Error = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color:  blue; 
`;
