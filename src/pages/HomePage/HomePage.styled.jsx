import styled from "styled-components";
import background from '../../images/photo4.jpg';

export const Home = styled.div`
 text-align: center;
 margin-left: auto;
 margin-right: auto;
 max-width: 900px;
 background-image: url(${background});
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color:  #ffffff;
  padding-top: 20px;
  text-shadow: 2px 2px 4px blue;

`;


export const Title2 = styled.p`
  display: block;
  color:  #ffffff;
  text-shadow: 2px 2px 4px blue;
   
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  cursor: pointer;
  margin: 5px 10px 15px;
  border-radius: 5px;
  color:  #ffffff;
  background-color: transparent;
  border: 3px solid  #ffffff;
  transition: all 0.5s ease;
  padding: 12;
  font-weight: 900;
  text-shadow: 2px 2px 4px blue;
 

  &:hover {
    border: 3px solid  blue;
     color: blue;
     text-shadow: 2px 2px 4px #5ac8fa;
     
  }
`;


export const Title3 = styled.h3`
  font-size: 20px;
  color: white;
  padding-bottom: 20px;
    
`;

export const TitleName = styled.span`
  color: white;
    
`;
export const Contacts = styled.span`
  width: 150px;
  padding: 3px 10px;
  border-radius: 40px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: blue;
  margin: 10px;

  &:hover,
  &:focus {
     text-decoration: underline;
     color: white;
};

`;

