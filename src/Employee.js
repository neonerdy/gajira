
import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from './NavBar';
import Header from './Header';


class Employee extends Component
{


    constructor(props) {
      super(props);
    }


    addEmployee = () => {
      this.props.history.push('/add-employee');
    }
    

    render() {


      
      const popupStyle = {
        width: '800px'
    }

      
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
                      <h3>Employees (4)</h3>
                    </div>
                    <div class="col-sm">

                     <div class="btn-group pull-right">
                       <input type="text" class="form-control" placeholder="Search ..."/>
                       &nbsp;&nbsp;
                          <select class="form-control">
                            <option>All Department</option>
                            <option>IT</option>
                            <option>Finance</option>
                            
                          </select>
                          &nbsp;&nbsp;
                         
                          <button class="btn pull-right btn-info" onClick={this.addEmployee}>Add New Employee</button>
                          
                          {/*}
                          <button class="btn btn-info" data-toggle="modal" data-target="#editComment">Add Employee</button>
                        {*/}  
                 
                     </div>

                    </div>
                  
                </div>


                    </div>
                </div>

      
        
              <div class="card b-1 hover-shadow-2 mb-20">
                  <div class="media card-body">
                    <div class="media-left pr-12">
                      <img class="avatar avatar-xl" src="assets/img/avatar/a1.jpg" alt="..."/>
                    </div>
        
                    <div class="media-body">
                      <div class="mb-2">
                        <span class="fs-20 pr-16" style={{color: 'black'}}>Hossein Shams</span>
                      </div>
                      <small class="fs-16 fw-300 ls-1" style={{color: 'black'}}>Front-end developer</small>
                    </div>
        
                    <div class="media-right text-right d-none d-md-block">
                      <p style={{color: 'black'}}><i class="fa fa-map-marker pr-1"></i> Mahkota Opal 66, Sentul City Bogor</p>
                      <span style={{color: 'black'}}> +62 81593743247</span>
                    </div>
                  </div>
        
                  <footer class="card-footer flexbox align-items-center">
                    <div >
                      <strong>Join Date : </strong>
                      <span>&nbsp;21 Jan, 2017 (2 year 1 month)</span>
                    </div>
                    <div class="card-hover-show">
                      <a class="btn btn-xs fs-10 btn-bold btn-secondary" href="#">Detail</a>
                      <a class="btn btn-xs fs-10 btn-bold btn-secondary" href="#" data-toggle="modal" data-target="#modal-contact">Edit</a>
                      <a class="btn btn-xs fs-10 btn-bold btn-danger" href="#">Delete</a>
                    </div>
                  </footer>
                </div>
        
        
                <div class="card b-1 hover-shadow-2 mb-20">
                  <div class="media card-body">
                    <div class="media-left pr-12">
                      <img class="avatar avatar-xl" src="assets/img/avatar/a5.jpg" alt="..."/>
                    </div>
        
                    <div class="media-body">
                      <div class="mb-2">
                        <span class="fs-20 pr-16" style={{color: 'black'}}>Maryam Amiri</span>
                      </div>
                      <small class="fs-16 fw-300 ls-1" style={{color: 'black'}}>Marketing</small>
                    </div>
        
                    <div class="media-right text-right d-none d-md-block">
                      <p style={{color: 'black'}}><i class="fa fa-map-marker pr-1"></i> Daan Mogot 75, Tebet. Jakarta Selatan</p>
                      <span style={{color: 'black'}}>+62 937439474</span>
                    </div>
                  </div>
        
                  <footer class="card-footer flexbox align-items-center">
                    <div>
                      <strong>Applied on:</strong>
                      <span>&nbsp;21 Jan, 2017</span>
                    </div>
                    <div class="card-hover-show">
                      <a class="btn btn-xs fs-10 btn-bold btn-secondary" href="#">Detail</a>
                      <a class="btn btn-xs fs-10 btn-bold btn-secondary" href="#" data-toggle="modal" data-target="#modal-contact">Edit</a>
                      <a class="btn btn-xs fs-10 btn-bold btn-danger" href="#">Delete</a>
                    </div>
                  </footer>
                </div>
        
        
                <div class="card b-1 hover-shadow-2 mb-20">
                  <div class="media card-body">
                    <div class="media-left pr-12">
                      <img class="avatar avatar-xl" src="assets/img/avatar/a2.jpg" alt="..."/>
                    </div>
        
                    <div class="media-body">
                      <div class="mb-2">
                        <span class="fs-20 pr-16" style={{color: 'black'}}>Tim Hank</span>
                      </div>
                      <small class="fs-16 fw-300 ls-1" style={{color: 'black'}}>Web Developer</small>
                    </div>
        
                    <div class="media-right text-right d-none d-md-block">
                      <p style={{color: 'black'}}><i class="fa fa-map-marker pr-1"></i> Daan Mogot 75, Tebet. Jakarta Selatan</p>
                      <span style={{color: 'black'}}> +62 937439474</span>
                    </div>
                  </div>
        
                  <footer class="card-footer flexbox align-items-center">
                    <div>
                      <strong>Applied on :</strong>
                      <span>&nbsp;21 Jan, 2017</span>
                    </div>
                    <div class="card-hover-show">
                      <a class="btn btn-xs fs-10 btn-bold btn-secondary" href="#">Detail</a>
                      <a class="btn btn-xs fs-10 btn-bold btn-secondary" href="#" data-toggle="modal" data-target="#modal-contact">Edit</a>
                      <a class="btn btn-xs fs-10 btn-bold btn-danger" href="#">Delete</a>
                    </div>
                  </footer>
                </div>
        
        
                <div class="card b-1 hover-shadow-2 mb-20">
                  <div class="media card-body">
                    <div class="media-left pr-12">
                      <img class="avatar avatar-xl" src="assets/img/avatar/a3.jpg" alt="..."/>
                    </div>
        
                    <div class="media-body">
                      <div class="mb-2">
                        <span class="fs-20 pr-16" style={{color: 'black'}}>Michelle Camly</span>
                      </div>
                      <small class="fs-16 fw-300 ls-1" style={{color: 'black'}}>Web Developer</small>
                    </div>
        
                    <div class="media-right text-right d-none d-md-block">
                      <p style={{color: 'black'}}><i class="fa fa-map-marker pr-1"></i> Daan Mogot 75, Tebet. Jakarta Selatan</p>
                      <span style={{color: 'black'}}>+62 937439474</span>
                    </div>
                  </div>
        
                  <footer class="card-footer flexbox align-items-center">
                    <div>
                      <strong>Applied on : </strong>
                      <span>&nbsp;21 Jan, 2017</span>
                    </div>
                    <div class="card-hover-show">
                      <a class="btn btn-xs fs-10 btn-bold btn-secondary" href="#">Detail</a>
                      <a class="btn btn-xs fs-10 btn-bold btn-secondary" href="#" data-toggle="modal" data-target="#modal-contact">Edit</a>
                      <a class="btn btn-xs fs-10 btn-bold btn-danger" href="#">Delete</a>
                    </div>
                  </footer>
                </div>
        
            
        
        



          </div>
        
        
        
        </main>

        </div>

    
        )
    }


}


export default Employee


