import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import employeeService from '../services/employee.service';

const PerformanceList = () => {

  const [performances, setPerformances] = useState([]);
  const history = useHistory();

  const init = () => {
    employeeService.getAllPerformance()
      .then(response => {
        console.log('Printing performance data', response.data);
        setPerformances(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  const cancel = (e) => {
    history.push("/performance");
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    employeeService.removePerformance(id)
      .then(response => {
        console.log('employee performance deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h2 style={{textAlign:"center"}}>Congratulations</h2>
      <h3 style={{textAlign:"center"}}>Employee of The Month (Department wise)</h3>
      <hr />
      <div>
        <Link to="/adding" className="btn btn-primary mb-2">Add Employee of The Month</Link>
        <button style={{ marginLeft: "80%" }} onClick={(e) => cancel(e)} className="btn btn-primary">Log Out</button>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              performances.map(performance => (
                <tr key={performance.id}>
                  <td>{performance.name}</td>
                  <td>{performance.lastName}</td>
                  <td>{performance.department}</td>
                  <td>
                    {/* <Link className="btn btn-info" to={`/performances/editing/${performance.id}`}>Update</Link> */}

                    <button className="btn btn-danger ml-2" onClick={() => {
                      handleDelete(performance.id);
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

export default PerformanceList;