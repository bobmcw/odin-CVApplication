import Preview from './preview.jsx'
import Panel from './panel.jsx';
import EducationPanel from './educationPanel.jsx';
import { useState } from 'react';
import './App.css'
function App(){
  const [values, SetValues] = useState({
    "Full name": "Your name",
    "Email": "",
    "Phone": "",
    "Location": "",
  });
  const [education, SetEducation] = useState([]);
    return(
      <div className="app">
        <div className="panels">
          <Panel className="panel"
            setValues={SetValues}
            values={values}
           />
           <EducationPanel  values={education} setValues={SetEducation} />
        </div>
        <Preview className="preview" values={values}/>
      </div>
    )
}
export default App;