import './panelSetting.css'
function PanelSetting({name="", setter=null}){
    return(
    <div className="settingContainer">
        <label htmlFor={name+"Input"}>{name}</label>
        <input type="text" id={name+"Input"} onChange={(event) => setter(event.target.value)} />
    </div>
    )
}
export default PanelSetting;