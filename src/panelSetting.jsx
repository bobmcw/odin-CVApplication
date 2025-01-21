function PanelSetting({name}){
    return(
    <>
    <input type="text" id={{name}+"Input"} />
    <label htmlFor={{name}+"Input"}>{name}</label>
    </>
    )
}
export default PanelSetting;