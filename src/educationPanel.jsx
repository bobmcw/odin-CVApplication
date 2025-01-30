import { useState } from "react";
import PanelSetting from "./panelSetting";
import trashIcon from "./assets/delete.svg"
import editIcon from "./assets/edit.svg";
import "./educationPanel.css"
function EducationPanel({ values = [], setValues }) {
  const [edit, setEdit] = useState(false);
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    "start date": "",
    "end date": "",
    location: "",
    key: crypto.randomUUID()
  });
  if (!edit) {
    return (
      <div className="panel">
        <h1>Education</h1>
        {values.map((value) => {
          return (
            <div className="educationItem" key={value.key}>
              <h2>{value["school"]}</h2>
              <img src={trashIcon} alt="delete" onClick={() => setValues(values.filter(a => a.key != value.key))}/>
              <img
                src={editIcon}
                alt="edit"
                onClick={() => handleEdit(value)}
              />
            </div>
          );
        })}
        <button onClick={() => setEdit(true)}>+ Add</button>
      </div>
    );
  }
  function handleEdit(value) {
    console.log(value)
    setEducation({
        school: value.school,
        degree: value.degree,
        "start date": value["start date"],
        "end date": value["end date"],
        location: value.location,
        key: value.key
    });
    setEdit(true);
  }
  function handleSet(educationItem) {
    let newItem = true
    const newItems = values.map((item) => {
        if(educationItem.key == item.key){
            newItem = false
            return educationItem
        }
        else{
            return item
        }
    })
    if(newItem){
        setValues([...values,educationItem])
    }
    else{
        setValues(newItems)
    }
    setEducation({
    school: "",
    degree: "",
    "start date": "",
    "end date": "",
    location: "",
    key: crypto.randomUUID()
  })
    setEdit(false);
  }
  return (
    <div className="panel">
      <h1>Education</h1>
      <PanelSetting name="school" values={education} setValues={setEducation} />
      <PanelSetting name="degree" values={education} setValues={setEducation} />
      <div className="dates">
        <PanelSetting
          name="start date"
          values={education}
          setValues={setEducation}
        />
        <PanelSetting
          name="end date"
          values={education}
          setValues={setEducation}
        />
      </div>
      <PanelSetting
        name="location"
        values={education}
        setValues={setEducation}
      />
      <button onClick={() => handleSet(education)}>confirm</button>
    </div>
  );
}
export default EducationPanel;
