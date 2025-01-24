import './panel.css'
import PanelSetting from "./panelSetting";
function Panel({setters={}}){
    return(
        <div className="panel">
            <h1>Personal information</h1>
            <PanelSetting name="Full name" setter={setters.fullName}/>
        </div>
    )
}
export default Panel;