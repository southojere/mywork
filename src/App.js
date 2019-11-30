import React, { useState, useEffect } from "react";
import "./App.css";
import Client from "./services/contentful";
import ProjectHeader from "./components/ProjectHeader";
import styled from "styled-components";
import NProgress from "nprogress";

import { Trail } from "react-spring/renderprops";
import Nav from "./components/nav";

const Title = styled.h1`
  margin-top: 0;
  font-size: 48px;
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

const SayHi = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 3rem;
  margin-left: 2rem;
  left: 0;
  p {
    margin: 0;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    NProgress.start();
    Client.getEntries().then(entries => {
      const projects = entries.items;
      const projectModels = projects.map(project => {
        const { fields } = project;
        const { title: projectTitle, desc, thumbnail } = fields;
        const { url } = thumbnail.fields.file;

        return {
          projectTitle,
          projectDesc: desc,
          thumbnailUrl: url
        };
      });
      setProjects(projectModels);
      setLoading(false);
      NProgress.done();
    });
  }, []);

  if (loading) return null;
  return (
    <div className="App">
      <Title>My Work</Title>

      <ContentContainer>
        <ListOfProjects>
          <Trail
            items={projects}
            keys={item => item.key}
            from={{ transform: "translate3d(-100px,0px,0)" }}
            to={{ transform: "translate3d(0px,0px,0)" }}
          >
            {project => props => (
              <ProjectHeader
                style={props}
                key={project.projectTitle} // TODO: use id from contentful
                title={project.projectTitle}
                subHeading={project.projectDesc}
                onMouseEnter={() => setCurrentProject(project)}
                // onMouseLeave={() => setCurrentProject(null)}
              />
            )}
          </Trail>
        </ListOfProjects>
        <ImageContainer>
          {currentProject && (
            <img src={currentProject.thumbnailUrl} width={"100%"} />
          )}
        </ImageContainer>
      </ContentContainer>
      <Nav></Nav>
      <SayHi>
        <p>
          <b>Say hello - </b> southon55@gmail.com
        </p>
      </SayHi>
    </div>
  );
}

export default App;
