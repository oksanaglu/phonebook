import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Text = styled.p`
 margin: 10px 0;
`

export const Button = styled.button`
  margin-left: 20px;
  
  cursor: pointer;
  height: 50%;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid black;
   :hover,
   :focus {
    background-color: dodgerblue;
  }
`;

