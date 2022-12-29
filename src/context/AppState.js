import { AppContext } from "./AppContext";
import React, { useState } from "react";
const AppState = (props) => {
  const [employList, setEmployList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [emId, setEmpId] = useState("");
  const [name, setName] = useState('');
  const [age, setAge] = useState("");
  const [designation, setdesignation] = useState("");
  const [Salary, setSalary] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [profile, setProfile] = useState("");

  return (


    <div>
      <AppContext.Provider value={{ employList, setEmployList, isEdit, setIsEdit, emId, setEmpId, age, setAge, designation, setdesignation, Salary, setSalary, setName, name, setWhatsapp, whatsapp, setProfile, profile }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppState;
