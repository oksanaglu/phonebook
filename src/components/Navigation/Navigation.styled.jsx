import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12;
  margin-right: 12px;
  justify-content: space-between;
  font-weight: 700;
  color: white;
     text-shadow: 2px 2px 4px #000000;
  &.active {
    color: blue;
    text-shadow: 1px 1px 1px white;
  
 
  }

`;