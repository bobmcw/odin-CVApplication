import './panel.css'
import PanelSetting from "./panelSetting";
function Panel({setValues,values}){
    return(
        <div className="panel">
            <h1>Personal information</h1>
            <PanelSetting name="Full name" setValues={setValues} values={values}/>
        </div>
    )
}
export default Panel;