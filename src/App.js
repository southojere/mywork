import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Client from "./services/contentful";
import styled from "styled-components";
import NProgress from "nprogress";

import Nav from "./components/nav";
import Work from "./pages/work";
import Home from "./pages/home";

const Warning = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  top: 0;
  left: 0;
  height: 35px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: #ff4c5a;
  min-width: 100%;
`;

const SayHi = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 3rem;
  margin-left: 3rem;
  left: 0;
  p {
    margin: 0;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentProject, setCurrentProject] = useState(null);
  const workRef = useRef(null);
  const scrollToWork = () => scrollToRef(workRef);

  useEffect(() => {
    NProgress.start();
    Client.getEntries().then(entries => {
      const projects = entries.items;
      const projectModels = projects.map(project => {
        const { fields } = project;
        const { title: projectTitle, desc, thumbnail, websiteUrl } = fields;
        const { url } = thumbnail.fields.file;

        return {
          projectTitle,
          projectDesc: desc,
          thumbnailUrl: url,
          websiteUrl
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
      <Warning>Currently under construction</Warning>
      {/* <Nav></Nav> */}
      <Home scrollToWork={scrollToWork}></Home>

      <span ref={workRef}>
        <Work
          projects={projects}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      </span>
      {/* <SayHi>
        <p>
          <b>Say hello - </b> southon55@gmail.com
        </p>
      </SayHi> */}
    </div>
  );
}

export default App;
