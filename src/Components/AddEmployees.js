import { useEffect, useState } from "react";

function NewForm(props) {
  const [employeeImg, setEmployeeImg] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState("");
  const [employeePosition, setEmployeePosition] = useState("");

  function Add() {
    props.addEmployees(
      employeeName,
      employeeId,
      employeeEmail,
      employeePhoneNumber,
      employeePosition,
      employeeImg
    );

   window.location.reload();
  }

  function handleImage(event){

      const image = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.addEventListener('load', () => {
       setEmployeeImg( reader.result);
    console.log(reader.result)

    });

  }
  
  return (
    <div>
      <div className="form">

        <input
          type="text"
          placeholder="Name & Surname"
          onChange={(event) => setEmployeeName(event.target.value)}
        />
        <input
          type="number"
          placeholder="ID Number"
          onChange={(event) => setEmployeeId(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email Adress"
          onChange={(event) => setEmployeeEmail(event.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={(event) => setEmployeePhoneNumber(event.target.value)}
        />
        <select onChange={(event) => setEmployeePosition(event.target.value)}>
          <option>Select Job Position</option>
          <option>General Assistant (GA)</option>
          <option>Meat Technician (MT)</option>
          <option>Block Man (BM)</option>
          <option>Trainee Manager (TM)</option>
        </select>
        <input type="file" accept="img/*"  onChange={handleImage}/>

        <button onClick={Add}>Add Employee</button>
      </div>
    </div>
  );
}

export default NewForm;
