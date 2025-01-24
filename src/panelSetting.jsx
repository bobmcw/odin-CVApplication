import './panelSetting.css'
function PanelSetting({name="", setValues, values}){
    const handleChange = (newVal) => {
        const newValues = {...values, [name]: newVal}
        setValues(newValues)
    }
    return(
    <div className="settingContainer">
        <label htmlFor={name+"Input"}>{name}</label>
        <input type="text" id={name+"Input"} onChange={(event) => 
            event.target.value == "" ? handleChange("") : handleChange(event.target.value)} />
    </div>
    )
}
export default PanelSetting;