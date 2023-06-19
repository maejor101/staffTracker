import { useState } from "react";
import UpdateEmployee from "./updateEmployees";


function DisplayEmployee(props) {

  let stringifyEmployee = localStorage.getItem("staffData");
  let employees = JSON.parse(stringifyEmployee);

  function deleteFun(event, index) {
    employees.splice(index, 1);
    localStorage.setItem("staffData", JSON.stringify(employees));
    window.location.reload();
  }

  const [displayForm, setDisplayForm] = useState(false);

  const edit = (event, data) => {
    localStorage.setItem("employee", JSON.stringify([data]));
    setDisplayForm(!displayForm);
  };

  
  return (
    <div>
      <table className="displayInfo">
        <tbody>
          <tr>
            <th>Name & Surname</th>
            <th>ID Number</th>
            <th>Email Adress</th>
            <th>Phone Number</th>
            <th>Position</th>
          </tr>
          {props.employeeProfiles.map((data, index) => (
            <tr key={index}>
              <td className="imageFrame">
                <img id="preview" src={data.employeeImg} alt="mugshot" width={30}></img>
                {data.employeeName}
              </td>
              <td>{data.employeeId}</td>
              <td>{data.employeeEmail}</td>
              <td>{data.employeePhoneNumber}</td>
              <td>
                {data.employeePosition}
                <div className="displayButtons">
                  <button onClick={(event) => deleteFun(event, index)}>DELETE</button>

                  <button onClick={(event) => edit(event, data)} > UPDATE </button>
                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {displayForm && <UpdateEmployee />}
  
    </div>
  );
}

export default DisplayEmployee;
