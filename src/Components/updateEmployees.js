import { useEffect, useState } from "react";


function UpdateEmployee() {
  const updateEmployee = localStorage.getItem("staffData");
  let staffData = JSON.parse(updateEmployee);
  const update = localStorage.getItem("employee");
  let upEmployee = JSON.parse(update);


  const [employeeIndex, setEmployeeIndex] = useState(0);
 
  useEffect(() => {
    for (let i = 0; i < staffData.length; i++) {
      if (upEmployee[0].employeeId === staffData[i].employeeId) {
        setEmployeeIndex(i);
      }
    }
  }, [upEmployee, staffData, employeeIndex]);

  const [employee, setEmployee] = useState({
    empID: upEmployee[0].employeeId,
    name: upEmployee[0].employeeName,
    empEmailAdress: upEmployee[0].employeeEmail,
    position: upEmployee[0].employeePosition,
    phoneNumber: upEmployee[0].employeePhoneNumber,
  });

  function save() {
    staffData[employeeIndex].employeeId = employee.empID;
    staffData[employeeIndex].employeeName = employee.name;
    staffData[employeeIndex].employeeEmail = employee.empEmailAdress;
    staffData[employeeIndex].employeePosition = employee.position;
    staffData[employeeIndex].employeePhoneNumber = employee.phoneNumber;

    localStorage.setItem("staffData", JSON.stringify(staffData));
    console.log(employee);
    console.log( staffData);
    window.location.reload();
  }



  const handleChange=(e) =>setEmployee(prevState =>({...prevState, [e.target.name]:e.target.value}),
  console.log(employee)
  
  )

  return (

    <div>
      <div className="form">
        <input type="text" name="name"  placeholder="Name and Surname" onChange={handleChange} />
           
        <input  type="number" name="empID" placeholder="Id Number" onChange={handleChange} />
     
        <input type="email" name="empEmailAdress"  placeholder="Email Address" onChange={handleChange} />
            
        <input type="number" name="phoneNumber" placeholder="Phone Number" onChange={handleChange}  />         
       
        <input  type="file" name="image" onChange={handleChange} />       
        
        <select  name="position" onChange={handleChange}  >
          <option>Select Job Position</option>
          <option>General Assistant (GA)</option>
          <option>Meat Technician (MT)</option>
          <option>Block Man (BM)</option>
          <option>Trainee Manager (TM)</option>
        </select>
        <button onClick={save}>UPDATE INFO</button>
      </div>
    </div>
   
  );
}

export default UpdateEmployee;
