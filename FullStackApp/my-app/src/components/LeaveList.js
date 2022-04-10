import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import employeeService from '../services/employee.service';

const LeaveList = () => {

  const [leaves, setLeaves] = useState([]);
  const history = useHistory();

  const init = () => {
    employeeService.getAllLeave()
      .then(response => {
        console.log('Printing employees leave data', response.data);
        setLeaves(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  const cancel = (e) => {
    history.push("/leave");
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    employeeService.removeLeave(id)
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
      <h3>List of Employee on Leaves</h3>
      <hr />
      <div>
        {/* <Link to="/added" className="btn btn-primary mb-2">Add Leave</Link> */}
        <button style={{ marginLeft: "80%" }} onClick={(e) => cancel(e)} className="btn btn-primary">Log Out</button>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              leaves.map(leave => (
                <tr key={leave.id}>
                  <td>{leave.name}</td>
                  <td>{leave.lastName}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.reason}</td>
                 
                  <td>
                    {/* <Link className="btn btn-info" to={`/leaves/edited/${leave.id}`}>Update</Link> */}

                    <button className="btn btn-success ml-2" onClick={() => {
                      handleDelete(leave.id);
                    }}>Approve</button>
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

export default LeaveList;
