import './panel.css'
import PanelSetting from "./panelSetting";
function Panel(){
    return(
        <div className="panel">
            <h1>Personal information</h1>
            <PanelSetting name="Full name"/>
        </div>
    )
}
export default Panel;