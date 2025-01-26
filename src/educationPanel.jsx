import { useState } from "react";
import PanelSetting from "./panelSetting";
import trashIcon from "./assets/delete.svg"
import "./educationPanel.css"
function EducationPanel({ values = [], setValues }) {
  const [edit, setEdit] = useState(false);
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    "start date": "",
    "end date": "",
    location: "",
  });
  if (!edit) {
    return (
      <div className="panel">
        <h1>Education</h1>
        {values.map((value) => {
          return (
            <div className="educationItem" key={value["school"]}>
              <h2>{value["school"]}</h2>
              <img src={trashIcon} alt="delete" onClick={() => setValues(values.filter(a => a.school != value.school))}/>
            </div>
          );
        })}
        <button onClick={() => setEdit(true)}>+ Add</button>
      </div>
    );
  }
  function handleSet(educationItem) {
    setValues([...values, educationItem]);
    setEducation({
    school: "",
    degree: "",
    "start date": "",
    "end date": "",
    location: "",
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
