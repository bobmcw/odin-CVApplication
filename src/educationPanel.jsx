import { useState } from "react";
import PanelSetting from "./panelSetting";
function EducationPanel({ values = [], setValues }) {
  const [edit, setEdit] = useState(false);
  if (!edit) {
    return (
      <div className="panel">
        <h1>Education</h1>
        {values.map((value) => {
          <h2>{value}</h2>;
        })}
        <button onClick={setEdit(true)}>+ Add</button>
      </div>
    );
  }
  const education = {
    school: "",
    degree: "",
    "start date": "",
    "end date": "",
    location: "",
  };
  return (
    <div className="panel">
      <h1>Education</h1>
      <PanelSetting name="school" values={education} />
      <PanelSetting name="degree" values={education} />
      <div className="dates">
        <PanelSetting name="start date" values={education} />
        <PanelSetting name="end date" values={education} />
      </div>
      <PanelSetting name="degree" values={education} />
    </div>
  );
}
export default EducationPanel;
