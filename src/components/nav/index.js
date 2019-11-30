import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  right: 4rem;
  bottom: 0;
  margin-bottom: 3rem;
  a {
    color: black;
  }
  a:not(:last-child) {
    margin-right: 2rem;
  }
  a:hover {
    color: #ff4c5a;
  }

  @media (max-width: 576px) {
    position: unset !important;
    margin: 3rem 0 3rem 0;
    display: flex;
    justify-content: center;
    
  }
  
`;

const Nav = () => {
  return (
    <NavContainer>
      <a href="https://github.com/southojere" target="_blank">
        Github
      </a>
      <a href="https://twitter.com/jerm_je" target="_blank">
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/jeremy-southon-559a93176/"
        target="_blank"
      >
        LinkedIn
      </a>
    </NavContainer>
  );
};

export default Nav;
