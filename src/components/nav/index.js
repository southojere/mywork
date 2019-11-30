import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  right: 4rem;
  bottom: 0;
    margin-bottom:3rem;
  a {
      color: black;
  }
  a:first-child {
    margin-right: 3rem;
  }
  a:hover {
    color: #ff4c5a;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <a href="https://twitter.com/jerm_je">Twitter</a>
      <a href="https://www.linkedin.com/in/jeremy-southon-559a93176/">LinkedIn</a>
    </NavContainer>
  );
};

export default Nav;
