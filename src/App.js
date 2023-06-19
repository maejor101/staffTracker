import "./App.css";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import DisplayEmployee from "./Components/DisplayEmployee";
import { useEffect } from "react";
import NewForm from "./Components/AddEmployees";


function App() {
 const storedEmployees = JSON.parse(localStorage.getItem("staffData")) || [];
  const [staffData, setStaffData] = useState(storedEmployees);


  useEffect(() => {
    localStorage.setItem("staffData", JSON.stringify(staffData));
  }, [staffData]);

  const addEmployees = (
    employeeName,
    employeeId,
    employeeEmail,
    employeePhoneNumber,
    employeePosition,
    employeeImg
  ) => {
    setStaffData((staffData) => [
      ...staffData,
      {
        employeeName: employeeName,
        employeeId: employeeId,
        employeeEmail: employeeEmail,
        employeePhoneNumber: employeePhoneNumber,
        employeePosition: employeePosition,
        employeeImg:employeeImg
      },
    ]);
    console.log(staffData);
  };

  return (
    <div className="App">
      <NavBar />
      <NewForm addEmployees={addEmployees} />
      <div className="display">
        <DisplayEmployee staffData={staffData} />
      </div>
    </div>
    
  );
}

export default App;
