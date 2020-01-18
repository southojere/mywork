import React from "react";
import PropTypes from "prop-types";
import { Trail } from "react-spring/renderprops";
import {
  Title,
  ImageContainer,
  ListOfProjects,
  ContentContainer
} from "./styles";
import ProjectHeader from "../../components/ProjectHeader";

const Work = props => {
  const { projects, currentProject, setCurrentProject } = props;
  return (
    <div style={{ marginBottom: "7rem" }}>
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
                link={project.websiteUrl}
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
    </div>
  );
};

Work.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentProject: PropTypes.object,
  setCurrentProject: PropTypes.func.isRequired
};

export default Work;
