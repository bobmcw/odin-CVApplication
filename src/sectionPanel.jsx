import { useState } from "react";
import Creator from "./creator";
function SectionPanel({name, values=[], setValues}){
    const [edit,setEdit] = useState(false);
    if(!edit){
        return(
        <div>
            <h1>{name}</h1>
            {values.map((value) => {
                <h2>{value["name"]}</h2>
            })}
            <button onClick={setEdit(true)}>+ Add</button>
        </div>
        )
    }
}
export default SectionPanel;