
import React, {Component} from 'react';
import NavBar from './NavBar';
import Header from './Header';


class EmployeeAdd extends Component
{

    render() {
        return(
            <div>

                <Header/>
                <NavBar/>
         
                <main>

              
                    <div class="main-content">

                        <br/><br/>
                        <div class="card">
                            <div class="card-body">
                                <h3>Add Employee</h3>
                              
                                <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#general">GENERAL</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#salary">SALARY COMPONENT</a>
                                </li>
                                </ul>

                                <div class="tab-content">
                                   

                                    <div class="tab-pane fade active show" id="general">

                                        <br/>
                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Employee Code</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="employeeCode" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Employee Name</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="employeeName" onChange={this.onValueChange}/>
                                            </div>
                                        </div>


                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Department</label>
                                        <div class="col-md-7 col-sm-12 required">
                                                <select class="form-control" name="priority" onChange={this.onValueChange}>
                                                    <option value=""></option>
                                                    <option value="High">IT</option>
                                                    <option value="Normal">Finance</option>
                                                    <option value="Low">Marketing</option>
                                                </select>
                                            </div>
                                        </div>
                                        

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Occupation</label>
                                        <div class="col-md-7 col-sm-12 required">
                                                <select class="form-control" name="priority" onChange={this.onValueChange}>
                                                    <option value=""></option>
                                                    <option value="High">Manager</option>
                                                    <option value="Normal">Team Leader</option>
                                                    <option value="Low">Developer</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Join Date</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>
                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Photo</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                            <div class="col-md-2 col-sm-1">
                                                <button class="btn btn-secondary">Add</button>
                                            </div>
                                        </div>


                                        

                                        <div class="divider text-uppercase fw-500">ADDRESS</div>


                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Address</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>City</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Province</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Phone</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>E-Mail</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>
                                      
                                       
                                        <div class="divider text-uppercase fw-500">PERSONAL INFO</div>
                                        
                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>National ID Number</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>


                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Birth Date</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Gender</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>


                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Religion</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>


                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Marital Status</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Number of Childs</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>


                                        <div class="divider text-uppercase fw-500">PAYROLL INFO</div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Salary Type</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                
                                                <select class="form-control" name="priority" onChange={this.onValueChange}>
                                                    <option value=""></option>
                                                    <option value="High">Daily</option>
                                                    <option value="Normal">Monthly</option>
                                                </select>
                                        
                                            </div>
                                        </div>


                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Bank Name</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>


                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Account Number</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                        <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Tax ID Number</label>
                                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                name="occupation" onChange={this.onValueChange}/>
                                            </div>
                                        </div>

                                    </div>



                                     <div class="tab-pane fade active" id="salary">
                                         <br/>
                                            
                                            <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Base Salary</label>
                                                <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                    name="employeeCode" onChange={this.onValueChange}/>
                                                </div>
                                            </div>

                                            <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Transportation Allowance</label>
                                                <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                    name="employeeCode" onChange={this.onValueChange}/>
                                                </div>
                                            </div>

                                            <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Communication Allowance</label>
                                                <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                    name="employeeCode" onChange={this.onValueChange}/>
                                                </div>
                                            </div>

                                            <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Lunch Allowance</label>
                                                <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                                    name="employeeCode" onChange={this.onValueChange}/>
                                                </div>
                                            </div>
                                            


                                    </div>   


                                        <br/><br/>

                                     

                                        <div class="text-right">
                                             <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal">CANCEL</button>
                                             <button class="btn btn-label btn-info"><label><i class="ti-check"></i></label> SAVE</button>
                                        </div>


                                
                                    <br/><br/>


                                 



                                    
                                  
                                
                                </div>




                            </div>
                        </div>
                    
                    </div>

                </main>
                
            </div>
        )
    }


}

export default EmployeeAdd;