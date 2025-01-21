import Preview from './preview.jsx'
import Panel from './panel.jsx';
import './App.css'
function App(){
    return(
      <div className="app">
        <Panel className="preview" />
        <Preview className="panel" />
      </div>
    )
}
export default App;