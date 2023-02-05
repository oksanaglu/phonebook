import styled from 'styled-components';

export const Form = styled.form`
  // max-width: 310px;
  // border-radius: 5px;
  // border: 1px solid black;
  // padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  // margin: 10px 0 10px 0;
`;

export const Input = styled.input`
  // width: 200px;
  // margin-top: 3px;
  // :hover,
  // :focus {
  //   border-color:  dodgerblue;
  // }


  width: 300px;
  height: 40px;
  padding: 0 15px 0 15px;
  border-radius: 5px;
`;

export const Button = styled.button`
  // cursor: pointer;
  // border-radius: 5px;
  // border: 1px solid black;
  //  :hover {
  //   background-color: dodgerblue;
  // }


 width: 200px;
  height: 40px;
  cursor: pointer;
  margin: 5px 50px 15px 50px;
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

`;
