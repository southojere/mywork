import styled from "styled-components";

const ProjectTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1rem 0;
  user-select: none;
  h3,
  p {
    margin: 0;
  }

  &:hover {
    color: #ff4c5a;
    text-decoration: underline;
  }
`;


const Link = styled.a`
  color: unset;
  text-decoration: none;
  cursor: pointer;
`

export { ProjectTextWrapper, Link };
