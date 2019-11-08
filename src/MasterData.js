
import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from './NavBar';
import Header from './Header';
import BranchAdd from './BranchAdd';
import DepartmentAdd from './DepartmentAdd';
import JobTitleAdd from './JobTitleAdd';
import SalaryComponentAdd from './SalaryComponentAdd';
import UserLoginAdd from './UserLoginAdd';

import axios from 'axios';
import config from './Config';
import BranchEdit from './BranchEdit';


class MasterData extends Component
{

    constructor(props) {
      super(props); 
      this.state = {
          branchId: '',
          branchName: '',
          branches : [],
          departmentId: '',
          departmentName: '',
          departments: [],
          
          jobTitleId: '',
          jobTitleName: '',
          jobTitles: [],
         
          salaryComponentId: '',
          salaryComponentName: '',
          salaryComponents: [],

          workCalendarId: '',
          workCalendarName: '',  
          workCalendars: [],

          userLogins: []
      }

    }

    componentDidMount() {
      this.getBranches();
      this.getDepartments();
      this.getJobTitles();
      this.getSalaryComponents();
    }


    /* BRANCH */

    
    getBranches = () => {
      axios.get(config.serverUrl + '/api/branch/getall').then(response=> {
        this.setState({
          branches: response.data
        })
      })
    }

    addBranch = () => {
      this.props.history.push('/add-branch');
    }

    editBranch = (id) => {
      this.props.history.push('/edit-branch/' + id);
    }

    deleteBranch = (id) => {
        axios.delete(config.serverUrl + '/api/branch/delete/' + id).then(response=> {
        this.getBranches();
      })
    }


    onDeleteBranch = (branchId,branchName) => {
      this.setState({
        branchId: branchId,
        branchName: branchName
      })
    }


  
    /* DEPARTMENT */
    
    getDepartments = () => {
      axios.get(config.serverUrl + '/api/department/getall').then(response=> {
        this.setState({
          departments: response.data
        })
      })
    }


    addDepartment = () => {
      this.props.history.push('/add-department');
    }


    editDepartment = (id) => {
      this.props.history.push('/edit-department/' + id);
    }


    deleteDepartment = (id) => {
      axios.delete(config.serverUrl + '/api/department/delete/' + id).then(response=> {
        this.getDepartments();
      })
    }
    

    onDeleteDepartment = (departmentId,departmentName) => {
      this.setState({
        departmentId: departmentId,
        departmentName: departmentName
      })
    }


    
    /* JOB TITLE */


    getJobTitles = () => {
      axios.get(config.serverUrl + '/api/jobtitle/getall').then(response=> {
        this.setState({
          jobTitles: response.data
        })
      })
    }

    addJobTitle = () => {
      this.props.history.push('add-jobtitle');
    }

    editJobTitle = (id) => {
      this.props.history.push('/edit-jobtitle/' + id);
    }


    deleteJobTitle = (id) => {
      axios.delete(config.serverUrl + '/api/jobtitle/delete/' + id).then(response=> {
        this.getJobTitles();
      })
    }
    

    onDeleteJobTitle = (jobTitleId, jobTitleName) => {
      this.setState({
        jobTitleId: jobTitleId,
        jobTitleName: jobTitleName
      })
    }


    

    /* SALARY COMPONENT */


    getSalaryComponents = () => {
      axios.get(config.serverUrl + '/api/salarycomponent/getall').then(response=> {
        this.setState({
          salaryComponents: response.data
        })
      })
    }

    addSalaryComponent = () => {
      this.props.history.push('add-salary-component');
    }

    editSalaryComponent = (id) => {
      this.props.history.push('/edit-salary-component/' + id);
    }


    deleteSalaryComponent = (id) => {
      axios.delete(config.serverUrl + '/api/salarycomponent/delete/' + id).then(response=> {
        this.getSalaryComponents();
      })
    }
    

    onDeleteSalaryComponent = (salaryComponentId, salaryComponentName) => {
      this.setState({
        salaryComponentId: salaryComponentId,
        salaryComponentName: salaryComponentName
      })
    }




     /* WORK CALENDAR */


    getWorkCalendars = () => {
      axios.get(config.serverUrl + '/api/workcalendar/getall').then(response=> {
        this.setState({
          workCalendars: response.data
        })
      })
    }

    addWorkCalendar = () => {
      this.props.history.push('add-work-calendar');
    }

    editWorkCalendar = (id) => {
      this.props.history.push('/edit-work-calendar/' + id);
    }


    deleteWorkCalendar = (id) => {
      axios.delete(config.serverUrl + '/api/workcalendar/delete/' + id).then(response=> {
        this.getWorkCalendars();
      })
    }
    

    onDeleteWorkCalendar = (workCalendarId, workCalendarName) => {
      this.setState({
        workCalendarId: workCalendarId,
        workCalendarName: workCalendarName
      })
    }





    render() 
    {
    
      return(

            <div>
                <Header/>
                <NavBar/>
        
              <main>


                <div class="main-content">
                    <br/><br/>



                <br/>

                {/* DELETE DATA */}

                <div id="deleteBranch" class="modal fade" role="dialog">
                
                  <div class="modal-dialog">
                      
                      <div class="modal-content">

                            <div class="modal-header">
                              <h4>Delete Branch</h4>
                            </div>
                            <div class="modal-body">
                            Are you sure want to delete '{this.state.branchName}' ?
                            </div>

                            <div class="modal-footer">
                              <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal" onClick={this.onModalClosed} ref={this.closeBtn}>Close</button>
                              <button class="btn btn-label btn-danger" onClick={()=>this.deleteBranch(this.state.branchId)} data-dismiss="modal"><label><i class="ti-check"></i></label> YES</button>
                            </div>
                          
                        </div>
                    </div>
              </div>


              <div id="deleteDepartment" class="modal fade" role="dialog">
                
                <div class="modal-dialog">
                    
                    <div class="modal-content">

                          <div class="modal-header">
                            <h4>Delete Department</h4>
                          </div>
                          <div class="modal-body">
                          Are you sure want to delete '{this.state.departmentName}' ?
                          </div>

                          <div class="modal-footer">
                            <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal">Close</button>
                            <button class="btn btn-label btn-danger" onClick={()=>this.deleteDepartment(this.state.departmentId)} data-dismiss="modal"><label><i class="ti-check"></i></label> YES</button>
                          </div>
                        
                      </div>
                  </div>
            </div>


            <div id="deleteJobTitle" class="modal fade" role="dialog">
                
                <div class="modal-dialog">
                    
                    <div class="modal-content">

                          <div class="modal-header">
                            <h4>Delete Job Title</h4>
                          </div>
                          <div class="modal-body">
                          Are you sure want to delete '{this.state.jobTitleName}' ?
                          </div>

                          <div class="modal-footer">
                            <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal">Close</button>
                            <button class="btn btn-label btn-danger" onClick={()=>this.deleteJobTitle(this.state.jobTitleId)} data-dismiss="modal"><label><i class="ti-check"></i></label> YES</button>
                          </div>
                        
                      </div>
                  </div>
            </div>



            <div id="deleteSalaryComponent" class="modal fade" role="dialog">
                
                <div class="modal-dialog">
                    
                    <div class="modal-content">

                          <div class="modal-header">
                            <h4>Delete Salary Component</h4>
                          </div>
                          <div class="modal-body">
                          Are you sure want to delete '{this.state.salaryComponentName}' ?
                          </div>

                          <div class="modal-footer">
                            <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal">Close</button>
                            <button class="btn btn-label btn-danger" onClick={()=>this.deleteSalaryComponent(this.state.salaryComponentId)} data-dismiss="modal">
                              <label><i class="ti-check"></i></label> YES
                            </button>
                          </div>
                        
                      </div>
                  </div>
            </div>





                 <div class="row">
                  
                  <div class="col-md-6 col-lg-4">
          
          
                      <div class="card">
                        <h5 class="card-title"><strong>BRANCH ({this.state.branches.length})</strong></h5>
          
                        <Scrollbars  
                        style={{ height: 350 }}
                          autoHide
                      >
          
                        <div class="media-list media-list-sm media-list-hover media-list-divided">
                           {this.state.branches.map(b=> 

                                <div class="media media-single">
                                <div class="media-body">
                                  <h6>{b.branchName}</h6>
                                </div>
                                <div class="media-right">
                                <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" onClick={()=>this.editBranch(b.id)}>EDIT</a>
                                  &nbsp;&nbsp; &nbsp;&nbsp;
                                 
                                  <a href="#" data-toggle="modal" data-target="#deleteBranch" onClick={()=>this.onDeleteBranch(b.id,b.branchName)}><i class="fa fa-trash" style={{color:'red'}}/></a>

                                </div>

                                </div>
                            )}
                          
                        </div>
                    
                        </Scrollbars>
          
                        <div class="text-center bt-1 border-light p-2">
                          <a class="text-default text-uppercase d-block fs-10 fw-500 ls-1" href="#" onClick={this.addBranch}>Add Branch</a>
                        </div>
                      </div>
                    </div>

                                  
                  <div class="col-md-6 col-lg-4">
          
                    
                    <div class="card">
                        <h5 class="card-title"><strong>DEPARTMENT ({this.state.departments.length})</strong></h5>

                        <Scrollbars style={{ height: 350 }} autoHide>


                          {this.state.departments.map(d=> 
                          
                            <div class="media-list media-list-sm media-list-hover media-list-divided">

                              <div class="media media-single">
                                  <div class="media-body">
                                    <h6><a href="#">{d.departmentName}</a></h6>
                                  </div>
                                  <div class="media-right">
                                        <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" onClick={()=>this.editDepartment(d.id)}>EDIT</a>                             
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        <a href="#" data-toggle="modal" data-target="#deleteDepartment" onClick={()=>this.onDeleteDepartment(d.id,d.departmentName)}><i class="fa fa-trash" style={{color:'red'}}/></a>
                                  </div>
                              </div>

                            </div>

                            )}

                          
                        

            </Scrollbars>

            <div class="text-center bt-1 border-light p-2">
              <a class="text-default text-uppercase d-block fs-10 fw-500 ls-1" href="#" onClick={this.addDepartment}>Add Department</a>
            </div>
          </div>
        </div>





        <div class="col-md-6 col-lg-4">
          
                    
          <div class="card">
              <h5 class="card-title"><strong>JOB TITLE ({this.state.jobTitles.length})</strong></h5>

              <Scrollbars style={{ height: 350 }} autoHide>

                  {this.state.jobTitles.map(jt=> 
                  <div class="media-list media-list-sm media-list-hover media-list-divided">  

                      <div class="media media-single">
                          <div class="media-body">
                            <h6><a href="#">{jt.titleName}</a></h6>
                          </div>
                          <div class="media-right">
                                <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" onClick={()=>this.editJobTitle(jt.id)}>EDIT</a>                             
                                &nbsp;&nbsp; &nbsp;&nbsp;
                                <a href="#" data-toggle="modal" data-target="#deleteJobTitle" onClick={()=>this.onDeleteJobTitle(jt.id,jt.titleName)}>
                                    <i class="fa fa-trash" style={{color:'red'}}/>
                                </a>

                          </div>
                      </div>

                  </div>
                  )}


                  </Scrollbars>

              <div class="text-center bt-1 border-light p-2">
                <a class="text-default text-uppercase d-block fs-10 fw-500 ls-1" href="#" onClick={this.addJobTitle}>Add Job Title</a>
              </div>
            </div>

      </div>






      <div class="col-md-6 col-lg-4">
                
                          
                <div class="card">
                    <h5 class="card-title"><strong>SALARY COMPONENT ({this.state.salaryComponents.length})</strong></h5>

                    <Scrollbars  
                    style={{ height: 350 }}
                    autoHide
                >

              {this.state.salaryComponents.map(sc=> 

                    <div class="media-list media-list-sm media-list-hover media-list-divided">

                      <div class="media media-single">
                          <div class="media-body">
                            <h6><a href="#">{sc.componentName}</a></h6>
                          </div>
                          <div class="media-right">
                                <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" onClick={()=>this.editSalaryComponent(sc.id)}>EDIT</a>                             
                                &nbsp;&nbsp; &nbsp;&nbsp;
                                <a href="#" data-toggle="modal" data-target="#deleteSalaryComponent" onClick={()=>this.onDeleteSalaryComponent(sc.id, sc.componentName)}>
                                    <i class="fa fa-trash" style={{color:'red'}}/>
                                </a>
                                      
                          </div>
                      </div>
                  </div>
                )}


        </Scrollbars>

        <div class="text-center bt-1 border-light p-2">
          <a class="text-default text-uppercase d-block fs-10 fw-500 ls-1" href="#" onClick={this.addSalaryComponent}>Add Salary Component</a>
        </div>
      </div>
      </div>





      <div class="col-md-6 col-lg-4">
                
                          
                <div class="card">
                    <h5 class="card-title"><strong>WORKING CALENDAR ({this.state.workCalendars.length})</strong></h5>

                    <Scrollbars  
                    style={{ height: 350 }}
                    autoHide
                >

              <div class="media-list media-list-sm media-list-hover media-list-divided">

                  <div class="media media-single">
                      <div class="media-body">
                        <h6><a href="#">January 2019</a></h6>
                      </div>
                      <div class="media-right">
                          <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px">EDIT</a>                             
                           &nbsp;&nbsp; &nbsp;&nbsp;
                          <i class="fa fa-trash" style={{color:'red'}}/>
                                  
                      </div>
                  </div>

        </div>


        </Scrollbars>

        <div class="text-center bt-1 border-light p-2">
          <a class="text-default text-uppercase d-block fs-10 fw-500 ls-1" href="#" onClick={this.addWorkCalendar}>Add Working Calendar</a>
        </div>
      </div>
      </div>





      <div class="col-md-6 col-lg-4">
                
                          
                <div class="card">
                    <h5 class="card-title"><strong>USER LOGIN (2)</strong></h5>

                    <Scrollbars  
                    style={{ height: 350 }}
                    autoHide
                >

              <div class="media-list media-list-sm media-list-hover media-list-divided" 
                              >

              <div class="media media-single">
                  <div class="media-body">
                    <h6><a href="#">Administrator</a></h6>
                  </div>
                  <div class="media-right">
                        <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px">EDIT</a>                             
                                &nbsp;&nbsp; &nbsp;&nbsp;
                                <i class="fa fa-trash" style={{color:'red'}}/>
                              
                  </div>
              </div>


              <div class="media media-single">
                  <div class="media-body">
                    <h6><a href="#">Don Bosco</a></h6>
                  </div>
                  <div class="media-right">
                        <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px">EDIT</a>                             
                                &nbsp;&nbsp; &nbsp;&nbsp;
                                <i class="fa fa-trash" style={{color:'red'}}/>
                              

                  </div>
              </div>



        </div>


        </Scrollbars>

        <div class="text-center bt-1 border-light p-2">
          <a class="text-default text-uppercase d-block fs-10 fw-500 ls-1" href="#" data-toggle="modal" data-target="#addUserLogin">Add User Login</a>
        </div>
      </div>
      </div>













                
                </div>
          
                </div>

            </main>
            </div>
        
        )
    }


}

export default MasterData;