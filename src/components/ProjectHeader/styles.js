import styled from "styled-components";

const ProjectTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 1rem 0 1rem 0;
  h3,
  p {
    margin: 0;
  }

  &:hover {
    color: #ff4c5a;
    text-decoration: underline;
  }
`;

export { ProjectTextWrapper };
