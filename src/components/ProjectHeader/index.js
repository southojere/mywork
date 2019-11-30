import React from "react";
import { ProjectTextWrapper, Link } from "./styles";

const ProjectHeader = ({ title, subHeading, link, ...props }) => {
  if (link) {
    return (
      <Link href={link} target="_blank">
        <ProjectTextWrapper {...props}>
          <h3>{title}</h3>
          <p>{subHeading}</p>
        </ProjectTextWrapper>
      </Link>
    );
  }

  return (
    <ProjectTextWrapper {...props}>
      <h3>{title}</h3>
      <p>{subHeading}</p>
    </ProjectTextWrapper>
  );
};

export default ProjectHeader;
