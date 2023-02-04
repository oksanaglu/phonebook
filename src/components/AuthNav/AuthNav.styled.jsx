import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12;
  font-weight: 700;
  color: white;
  transition: all 0.5s ease;
  
  &.active {
    color: blue;
  }

  &:not(:last-child){
   margin-right: 12px;
  }
`;