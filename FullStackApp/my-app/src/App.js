import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeesList';
import PerformanceList from './components/PerformanceList';
import AddPerformance from './components/AddPerformance';
import AddLeave from './components/AddLeave';
import LeaveList from './components/LeaveList';
import EmployeeLeaveList from './components/EmployeeLeaveList';
import EmployeeAddLeave from './components/EmployeeAddLeave';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './components/AddEmployee';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import EmployeeHome from './components/EmployeeHome';
import EmployeePerformanceList from './components/EmployeePerformanceList';
import Start from './components/Start';
function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
          <Route exact path="/" component={Start} />
            <Route exact path="/home" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/list" component={EmployeeList} />
            <Route exact path="/added" component={AddLeave} />
            <Route exact path="/performance" component={PerformanceList} />
            <Route exact path="/leave" component={LeaveList} />
            <Route exact path="/empadded" component={EmployeeAddLeave} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/adding" component={AddPerformance} />
            <Route path="/employees/edit/:id" component={AddEmployee} />
            <Route path="/employeeshome" component={EmployeeHome} />
            <Route path="/employeeperformance" component={EmployeePerformanceList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
