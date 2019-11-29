import React, {useState, useEffect} from 'react';
import './App.css';
import Client from './services/contentful'
import ProjectHeader from './components/ProjectHeader';

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    Client.getEntries().then(entries => {
      const projects = entries.items;
      const projectModels = projects.map(project => {
        const {fields} = project
        const { title: projectTitle, desc, thumbnail } = fields
        const {url} = thumbnail.fields.file;
       
        return  {
          projectTitle,
          projectDesc: desc,
          thumbnailUrl: url,
        }
      })
      setProjects(projectModels)
      setLoading(false)
    })
  },[])
 
  if(loading) return <p>Loading...</p>
  return (
    <div className="App">
     {
       projects.map(project => <ProjectHeader title={project.projectTitle} subHeading={project.projectDesc}/>)
     }
    </div>
  );
}

export default App;
