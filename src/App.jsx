import Preview from './preview.jsx'
import Panel from './panel.jsx';
import { useState } from 'react';
import './App.css'
function App(){
  const [values, SetValues] = useState({
    "Full name": "Your name",
    "email": "Email",
  });
    return(
      <div className="app">
        <Panel className="preview"
          setValues={SetValues}
          values={values}
         />
        <Preview className="panel" values={values}/>
      </div>
    )
}
export default App;