
import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from './NavBar';
import Header from './Header';


class Absence extends Component
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
                        <h3>Absence</h3>
                    </div>
                    <div class="col-sm">
                        

                    <div class="btn-group pull-right">

                        <select class="form-control">
                            <option>Month</option>
                            <option>January</option>
                            <option>Febrruary</option>
                          </select>
                          &nbsp;&nbsp;
                          <select class="form-control">
                            <option>Year</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            
                          </select>
                          &nbsp;
                          <button class="btn btn-secondary"><i class="fa fa-filter"></i></button>
                          &nbsp;&nbsp;&nbsp;&nbsp;

                      <button class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Add New</button>
                      <div class="dropdown-menu" x-placement="top-start">
                        <a class="dropdown-item" href="#">Acttendance</a>
                        <a class="dropdown-item" href="#">Over Time</a>
                      </div>
                    </div>



                    </div>


                    
                </div>




                 <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#attendance">ATTENDANCE</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#overtime">OVER TIME</a>
                  </li>
                  </ul>


                <div class="tab-content">

                  <div class="tab-pane fade active show" id="attendance">
             
                  <table class="table table-striped">
                  <thead>
                    <tr>
                      <th><b>EMPLOYEE NAME</b></th>
                      <th><b>MONTH</b></th>
                      <th><b>YEAR</b></th>
                      <th><b>WORK DAY</b></th>
                      <th><b>LEAVE DAY</b></th>
                      <th><b>OFF DAY</b></th>
                      <th></th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr>
                        <td>
                          <img class="avatar" src="assets/img/avatar/a1.jpg"/> &nbsp;
                          Ariyanto</td>
                        <td>December</td>
                        <td>2019</td>
                        <td>20</td>
                        <td>2</td>
                        <td>1</td>
                         <td>
                            <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px ">EDIT</a>&nbsp;&nbsp;
                            <i class="fa fa-trash" style={{color:'red'}}></i>&nbsp;&nbsp;
                        </td>   
                    </tr>

                    <tr>
                        <td>
                        <img class="avatar" src="assets/img/avatar/a3.jpg"/> &nbsp;
                          Erika Kartawidjaja</td>
                        <td>December</td>
                        <td>2019</td>
                        <td>20</td>
                        <td>0</td>
                        <td>0</td>
                         <td>
                            <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px ">EDIT</a>&nbsp;&nbsp;
                            <i class="fa fa-trash" style={{color:'red'}}></i>&nbsp;&nbsp;
                        </td>   
                    </tr>


                  </tbody>
                </table>

             
                  </div>
                  <div class="tab-pane fade" id="overtime">
            
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

export default Absence;