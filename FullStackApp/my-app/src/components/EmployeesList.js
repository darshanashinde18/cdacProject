import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import employeeService from '../services/employee.service';

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);
  const history = useHistory();

  const init = () => {
    employeeService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  const cancel = (e) => {
    history.push("/list");
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    employeeService.remove(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr />
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        {/* <button style={{ marginLeft: "80%" }} onClick={(e) => cancel(e)} className="btn btn-primary">Log Out</button> */}
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Location</th>
              <th>Department</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.location}</td>
                  <td>{employee.department}</td>
                  <td>{employee.email}</td>
                  <td>{employee.mobile}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>

                    <button className="btn btn-danger ml-2" onClick={() => {
                      handleDelete(employee.id);
                    }}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
}

export default EmployeeList;
