import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import employeeService from "../services/employee.service";

const AddLeave = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const saveLeave = (e) => {
        e.preventDefault();

        const employee = { name, lastName, startDate, endDate, reason, id };
        if (id) {
            //update
            employeeService.updateLeave(employee)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                    history.push('/leave');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            //create
            employeeService.createLeave(employee)
                .then(response => {
                    console.log("employee added successfully", response.data);
                    history.push("/employeeshome");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
        }
    }
    const cancel = (e) => {
        history.push("/employeeshome");
    }

    useEffect(() => {
        if (id) {
            employeeService.getLeave(id)
                .then(employee => {
                    setName(employee.data.name);
                    setLastName(employee.data.lastName);
                    setStartDate(employee.data.startDate);
                    setEndDate(employee.data.endDate);
                    setReason(employee.data.reason);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <div className="container">
            <h3>Apply For Leave</h3>
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
                    {/* <input
                        type="text"
                        className="form-control col-4"
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Enter Department"
                    /> */}
                    <input type="date" id="start" className="form-control col-4"
                        value={startDate} onChange={(e) => setStartDate(e.target.value)}
                        min="2022-01-01" max="2024-12-31"></input>

                </div>
                <div className="form-group">
                    {/* <input
                        type="text"
                        className="form-control col-4"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter Location"
                    /> */}
                     <input type="date" id="end" className="form-control col-4"
                         value={endDate} onChange={(e) => setEndDate(e.target.value)}
                        min="2022-01-01" max="2024-12-31"></input>

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Enter reason"
                    />
                </div>
                
                <div >
                    <button onClick={(e) => saveLeave(e)} className="btn btn-primary">Save</button>

                    <button style={{ marginLeft: "240px" }} onClick={(e) => cancel(e)} className="btn btn-primary">Cancel</button>
                </div>
            </form>
            <hr />
            <Link to="/employeeshome">Back to List</Link>
        </div>
    )
}

export default AddLeave;