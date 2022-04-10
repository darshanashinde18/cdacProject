import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import employeeService from "../services/employee.service";

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = { name, lastName, location, department, email, mobile, designation, salary, id };
        if (id) {
            //update
            employeeService.update(employee)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                    history.push('/list');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            //create
            employeeService.create(employee)
                .then(response => {
                    console.log("employee added successfully", response.data);
                    history.push("/list");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
        }
    }
    const cancel = (e) => {
        history.push("/list");
    }

    useEffect(() => {
        if (id) {
            employeeService.get(id)
                .then(employee => {
                    setName(employee.data.name);
                    setLastName(employee.data.lastName);
                    setLocation(employee.data.location);
                    setDepartment(employee.data.department);
                    setEmail(employee.data.email);
                    setMobile(employee.data.mobile);
                    setDesignation(employee.data.designation);
                    setSalary(employee.data.salary);
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
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter Location"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter Mobile no"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="designation"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="Enter designation"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Enter salary"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>
                
                    <button style={{marginLeft:"240px"}} onClick={(e) => cancel(e)} className="btn btn-primary">Cancel</button>
                </div>
            </form>
            <hr />
            <Link to="/list">Back to List</Link>
        </div>
    )
}

export default AddEmployee;