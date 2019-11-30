import React from "react";
import { ProjectTextWrapper } from "./styles";

const ProjectHeader = ({ title, subHeading, ...props }) => {
  return (
    <ProjectTextWrapper {...props}>
      <h3>{title}</h3>
      <p>{subHeading}</p>
    </ProjectTextWrapper>
  );
};


export default ProjectHeader;