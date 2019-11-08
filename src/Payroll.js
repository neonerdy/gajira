
import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from './NavBar';
import Header from './Header';


class Payroll extends Component
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

                        <div class="row">
                       
                       <div class="col-sm">
                           <h3>Payroll</h3>
                       </div>
                           <div class="col-sm">
                           

                           <div class="btn-group pull-right">
                          
                                   <select class="form-control">
                                       <option>Month</option>
                                       <option>January</option>
                                       <option>February</option>
                                       <option>March</option>
                                       <option>April</option>
                                       
                                   </select>
                                   &nbsp;&nbsp;
                                   <select class="form-control">
                                       <option>Year</option>
                                       <option>2018</option>
                                       <option>2019</option>
                                   </select>
                                   &nbsp;&nbsp;
                                   <button class="btn pull-right btn-secondary"><i class="fa fa-filter"/></button>
                                   &nbsp;&nbsp;&nbsp;
                                   <button class="btn btn-info">Process Payroll</button>
                                   
                            </div>

                       </div>

                       
                   </div>


                            <div class="row">
                                
                                
                                <div class="col-4">
                                
                                     
                                    <div class="card">
                                        <h5 class="card-title">

                                            <input type="text" class="form-control" placeholder="Search ..."/>
                                        </h5>

                                     
                        
                                        <Scrollbars  
                                            style={{ height: 600 }}
                                            
                                        >
                        
                                            <div class="media-list media-list-sm media-list-hover media-list-divided">
                                
                
                                                <div class="media media-single">
                                                    <a href="#">
                                                        <img class="avatar" src="assets/img/avatar/a1.jpg" />
                                                    </a>
                                                    <div class="media-body">
                                                        <h6><a href="#">Ariyanto</a></h6>
                                                        <small>Marketing</small>
                                                    </div>
                                                    <div class="media-right">

                                                    </div>

                                                </div>
                
                
                                                <div class="media media-single">
                                                    <a href="#">
                                                        <img class="avatar" src="assets/img/avatar/a3.jpg" />
                                                    </a>
                                                  
                                                    <div class="media-body">
                                                        <h6><a href="#">Erika Kartawidjaja</a></h6>
                                                        <small>Finance</small>
                                                    </div>
                                                    <div class="media-right">
                                                  
                                                     

                                                    </div>
                                                </div>


                                            </div>
                                        </Scrollbars>

                                </div>
                        

                                    
                                    

                                </div>



                           
                                <div class="col-8">
                                    
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#attendance">PAYROLL DETAIL</a>
                                        </li>
                                      
                                    </ul>


                                  
                                    <div class="tab-content">

                                      
                                      
                                        
                                        <div class="alert alert-danger" role="alert">
                                            <h4>Ariyanto</h4>
                                            Salary : <b>12.000</b>, Deduction : <b>3.000</b>, Total : <b>9.000</b>
                                        </div>


                                        <div class="divider text-uppercase fw-500">SALARY COMPONENT</div>

                                        <div class="row">

                                            <div class="col-md-6 col-xl-3">
                                                <div class="card card-body text-center">
                                                <div class="fs-40 fw-100">7000</div>
                                                <div>Base Salary</div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-xl-3">
                                                <div class="card card-body text-center">
                                                <div class="fs-40 fw-100">30</div>
                                                <div>Lunch</div>
                                                </div>
                                            </div>


                                            <div class="col-md-6 col-xl-3">
                                                <div class="card card-body text-center">
                                                <div class="fs-40 fw-100">50</div>
                                                <div>Transportation</div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-xl-3">
                                                <div class="card card-body text-center">
                                                <div class="fs-40 fw-100">100</div>
                                                <div>Communication</div>
                                                </div>
                                            </div>

                                            
                                            <div class="col-md-6 col-xl-3">
                                                <div class="card card-body text-center">
                                                <div class="fs-40 fw-100">500</div>
                                                <div>Health Allowance</div>
                                                </div>
                                            </div>


                                        </div>


                                        <div class="divider text-uppercase fw-500">DEDUCTION</div>
                                        
                                        <div class="row">

                                            <div class="col-md-6 col-xl-3">
                                                <div class="card card-body text-center">
                                                <div class="fs-40 fw-100">7000</div>
                                                <div>Tax</div>
                                                </div>
                                            </div>
                                        </div>








                                    

                                    </div>

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

export default Payroll;