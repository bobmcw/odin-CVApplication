import { useState } from "react";
import PanelSetting from "./panelSetting";
import trashIcon from "./assets/delete.svg";
import editIcon from "./assets/edit.svg";
import "./experiencePanel.css";
function ExperiencePanel({ values = [], setValues }) {
  const [edit, setEdit] = useState(false);
  const [experience, setExperience] = useState({
    "company name": "",
    position: "",
    "start date": "",
    "end date": "",
    location: "",
    description: "",
  });
  if (!edit) {
    return (
      <div className="panel">
        <h1>Experience</h1>
        {values.map((value) => {
          return (
            <div className="experienceItem" key={value["company name"]}>
              <h2>{value["company name"]}</h2>
              <img
                src={trashIcon}
                alt="delete"
                onClick={() =>
                  setValues(values.filter((a) => a.school != value.school))
                }
              />
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
    setExperience({
      "company name": value["company name"],
      position: value["position"],
      "start date": value["start date"],
      "end date": value["end date"],
      "location": value["location"],
      "description": value["description"],
    });
    setEdit(true);
  }
  function handleSet(experienceItem) {
    setValues([...values, experienceItem]);
    setExperience({
      "company name": "",
      position: "",
      "start date": "",
      "end date": "",
      location: "",
      description: "",
    });
    setEdit(false);
  }
  return (
    <div className="panel">
      <h1>Experience</h1>
      <PanelSetting
        name="company name"
        values={experience}
        setValues={setExperience}
      />
      <PanelSetting
        name="position"
        values={experience}
        setValues={setExperience}
      />
      <div className="dates">
        <PanelSetting
          name="start date"
          values={experience}
          setValues={setExperience}
        />
        <PanelSetting
          name="end date"
          values={experience}
          setValues={setExperience}
        />
      </div>
      <PanelSetting
        name="location"
        values={experience}
        setValues={setExperience}
      />
      <PanelSetting
        name="description"
        values={experience}
        setValues={setExperience}
        className="description"
      />
      <button onClick={() => handleSet(experience)}>confirm</button>
    </div>
  );
}
export default ExperiencePanel;
