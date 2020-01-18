import styled from "styled-components";

const Title = styled.h1`
  margin-top: 0;
  font-size: 42px;
  text-decoration: underline;
`;

const ContentContainer = styled.div`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ListOfProjects = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  top: 30%;
  width: 50%;
  @media (max-width: 576px) {
    position: fixed;
    top: 25%;
    opacity: 0.5;
    width: unset;
    left: 0;
    z-index: -1;
  }
`;

export { Title, ImageContainer, ListOfProjects, ContentContainer };
