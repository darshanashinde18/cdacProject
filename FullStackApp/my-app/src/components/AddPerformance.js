import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import employeeService from "../services/employee.service";

const AddPerformance = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const savePerformance = (e) => {
        e.preventDefault();

        const employee = { name, lastName, department, id };
        if (id) {
            //update
            employeeService.updatePerformance(employee)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                    history.push('/performance');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            //create
            employeeService.createPerformance(employee)
                .then(response => {
                    console.log("employee added successfully", response.data);
                    history.push("/performance");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
        }
    }
    const cancel = (e) => {
        history.push("/performance");
    }

    useEffect(() => {
        if (id) {
            employeeService.getPerformance(id)
                .then(employee => {
                    setName(employee.data.name);
                    setLastName(employee.data.lastName);
                    setDepartment(employee.data.department);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <div className="container">
            <h3>Add Employee</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Enter Department"
                    />

                </div>





                <div >
                    <button onClick={(e) => savePerformance(e)} className="btn btn-primary">Save</button>

                    <button style={{ marginLeft: "240px" }} onClick={(e) => cancel(e)} className="btn btn-primary">Cancel</button>
                </div>
            </form>
            <hr />
            <Link to="/performance">Back to List</Link>
        </div>
    )
}

export default AddPerformance;