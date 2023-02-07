import styled from 'styled-components';

export const Form = styled.form`

`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #1d628b;
  font-weight: bold;
 
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 3px;
  padding: 0 15px 0 15px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #1d628b;

}
`;

export const Button = styled.button`
 
  display: block;
  width: 200px;
  height: 40px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  color: #1d628b;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid #1d628b;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.07);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
  
`;


export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color:  blue;
  padding-top: 0;
  text-shadow: 2px 2px 4px blue;
`;
