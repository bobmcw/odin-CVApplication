import Preview from './preview.jsx'
import Panel from './panel.jsx';
import { useState } from 'react';
import './App.css'
function App(){
  const [fullName, SetFullName] = useState("Your name here");
  const setters = {
    "fullName": SetFullName,
  }
    return(
      <div className="app">
        <Panel className="preview"
          setters={setters}
         />
        <Preview className="panel" fullName={fullName}/>
      </div>
    )
}
export default App;