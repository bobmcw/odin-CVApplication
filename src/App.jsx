import Preview from './preview.jsx'
import Panel from './panel.jsx';
import EducationPanel from './educationPanel.jsx';
import { useState } from 'react';
import './App.css'
import ExperiencePanel from './experiencePanel.jsx';
function App(){
  const [values, SetValues] = useState({
    "Full name": "Your name",
    "Email": "",
    "Phone": "",
    "Location": "",
  });
  const [education, SetEducation] = useState([]);
  const [experience, SetExperience] = useState([]);
    return(
      <div className="app">
        <div className="panels">
          <Panel className="panel"
            setValues={SetValues}
            values={values}
           />
           <EducationPanel  values={education} setValues={SetEducation} />
           <ExperiencePanel  values={experience} setValues={SetExperience} />
        </div>
        <Preview className="preview" values={values} education={education} experience={experience} />
      </div>
    )
}
export default App;