import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Text = styled.p`
 margin: 10px 0;
color: blue;

  // margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
  // border-bottom: 2px dashed #1d628b;

  // border-bottom-style: dotted;
  // border-bottom: thick green;
`

export const Button = styled.button`
  margin-left: 20px;
  
  // cursor: pointer;
  // height: 50%;
  // font-size: 13px;
  // border-radius: 5px;
  // border: 1px solid black;
  //  :hover,
  //  :focus {
  //   background-color: dodgerblue;
  // }

       display: flex;
    align-content: ja;
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
    color: blue;
     border: 1px solid blue;
      background-color: #1d628b;

   
  }
`;

