import './panel.css'
import PanelSetting from "./panelSetting";
function Panel({setFullName=null}){
    return(
        <div className="panel">
            <h1>Personal information</h1>
            <PanelSetting name="Full name" setter={setFullName}/>
        </div>
    )
}
export default Panel;