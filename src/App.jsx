import Preview from './preview.jsx'
import Panel from './panel.jsx';
import { useState } from 'react';
import './App.css'
function App(){
  const [fullName, SetFullName] = useState("Your name here");
    return(
      <div className="app">
        <Panel className="preview"
          setFullName={SetFullName}
         />
        <Preview className="panel" fullName={fullName}/>
      </div>
    )
}
export default App;