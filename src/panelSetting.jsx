import './panelSetting.css'
function PanelSetting({name}){
    return(
    <>
    <div className="settingContainer">
        <label htmlFor={name+"Input"}>{name}</label>
        <input type="text" id={name+"Input"} />
    </div>
    </>
    )
}
export default PanelSetting;