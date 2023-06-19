import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  const searchBar = localStorage.getItem("staffData");
  const results = JSON.parse(searchBar);
  const [searchEmployee, setSearchEmployee] = useState("");

  const search = () => {
    for (let i = 0; i < results.length; i++) {
      if (searchEmployee === results[i].employeeId) {
        localStorage.setItem("searchBar", JSON.stringify([results[i]]));
      }
    }

    console.log(searchEmployee);
    navigate("/search")
  };
  return (
    <div className="navBar">
      <h1>Staff Tracker</h1>
      <input  type="search" placeholder="Search" onChange={(event) => setSearchEmployee(event.target.value)} />      
      <button onClick={search}>Go</button>
    </div>
  );
}
export default NavBar;
