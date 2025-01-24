import './panelSetting.css'
function PanelSetting({name="", setter=null}){
    return(
    <div className="settingContainer">
        <label htmlFor={name+"Input"}>{name}</label>
        <input type="text" id={name+"Input"} onChange={(event) => 
            event.target.value == "" ? setter("Your name here") : setter(event.target.value)} />
    </div>
    )
}
export default PanelSetting;