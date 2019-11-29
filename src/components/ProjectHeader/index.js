import React from "react";
import { ProjectTextWrapper } from "./styles";

const ProjectHeader = ({ title, subHeading }) => {
  return (
    <ProjectTextWrapper>
      <h3>{title}</h3>
      <p>{subHeading}</p>
    </ProjectTextWrapper>
  );
};


export default ProjectHeader;