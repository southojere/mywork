import styled from "styled-components";

const HomeContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
`;

const Header = styled.h1`
  font-size: 42;
  text-decoration: underline;
`;

const Desc = styled.p`
  max-width: 50%;
  font-size: 32px;
  @media (max-width: 576px) {
    max-width: unset;
  }
`;

const ViewMyWorkButton = styled.div`
  display: flex;
  cursor: pointer;
  &:hover {
    color: #ff4c5a;
    text-decoration: underline;
  }
`;

export { HomeContainer, Header, Desc, ViewMyWorkButton };
