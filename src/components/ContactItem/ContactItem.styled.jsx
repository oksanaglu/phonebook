import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Text = styled.p`
 margin: 10px 0;
 color: blue;
 font-size: 20px;

`

export const Button = styled.button`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 2px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  background-color: inherit;
  border: 1px solid #1d628b;
  border-radius: 5px;
  color: #1d628b;

  &:hover {
    border: 1px solid blue;
    background-color: #007aff;
    color: blue;
  }

`;


