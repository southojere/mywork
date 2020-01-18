import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { HomeContainer, Header, Desc, ViewMyWorkButton } from "./styles";
const Home = ({ scrollToWork }) => {
  return (
    <HomeContainer>
      <Header>Hello!</Header>
      <Desc>
        I'm Jeremy Southon, a full stack developer who loves to develop fun and
        unique experiences with technology.
      </Desc>
      <ViewMyWorkButton onClick={scrollToWork}>
        <ArrowDownwardIcon />
        {"View my work"}
      </ViewMyWorkButton>
    </HomeContainer>
  );
};

export default Home;
