import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Employee from './Employee';
import MasterData from './MasterData';
import Absence from './Absence';
import Payroll from './Payroll';
import Dashboard from './Dashboard';
import EmployeeAdd from './EmployeeAdd';
import DepartmentAdd from './DepartmentAdd';
import BranchAdd from './BranchAdd';
import BranchEdit from './BranchEdit';
import DepartmentEdit from './DepartmentEdit';
import JobTitleAdd from './JobTitleAdd';
import JobTitleEdit from './JobTitleEdit';
import SalaryComponentAdd from './SalaryComponentAdd';



class App extends Component
{


 
  render() {
 
    
    return(
      
      <div>
        <Route exact path="/" component={MasterData}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/master-data" component={MasterData}/>
        <Route exact path="/employee" component={Employee}/>
        <Route exact path="/absence" component={Absence}/>
        <Route exact path="/payroll" component={Payroll}/>
        <Route exact path="/add-branch" component={BranchAdd}/>
        <Route exact path="/edit-branch/:id" component={BranchEdit}/>
        <Route exact path="/add-department" component={DepartmentAdd}/>
        <Route exact path="/edit-department/:id" component={DepartmentEdit}/>
        <Route exact path="/add-jobtitle" component={JobTitleAdd}/>
        <Route exact path="/edit-jobtitle/:id" component={JobTitleEdit}/>
        <Route exact path="/add-salary-component" component={SalaryComponentAdd}/>
                
        
        <Route exact path="/add-employee" component={EmployeeAdd}/>
        
        


      </div>  
      
    )
  }
}

export default App;
