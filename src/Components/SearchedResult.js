import NavBar from "./NavBar";

function SearchedResult() {
  const searchedEmployee = localStorage.getItem("searchBar");
  const searchEmployee = JSON.parse(searchedEmployee);

  return (
    <div className="viewSearched">
       <NavBar/>
    <div className="Card">
      <h1>Searched Employee</h1>
      {searchEmployee.map((data, index) => (
        <div key={index}>
          <div className="searchedCards">
            <div>
            <h2>{data.employeeName}</h2>
            <p>{data.employeeId}</p>
            <h3>{data.employeeEmail}</h3>
            <p>{data.employeePhoneNumber}</p>
            <h3>{data.employeePosition}</h3>
            </div>
               <img id="preview" src={data.employeeImg} alt="employeePic" width={30}/>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SearchedResult;
