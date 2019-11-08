import React, {Component} from 'react';
import NavBar from './NavBar';
import Header from './Header';


class Dashboard extends Component
{




    render() {
        return(
             <div>  
                <Header/>
                <NavBar/>
            
                <main>

                    
                    <div class="main-content">

                    <br/><br/>

                       

                        <br/>

                        <div class="row">


                     

                                <div class="col-md-6 col-lg-4">
                                    <div class="card card-body bg-purple">
                                    <div class="flexbox">
                                        <span class="ti-layout fs-40"></span>
                                        <span class="fs-40">4</span>
                                    </div>
                                    <div class="text-right">Departments</div>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-4">
                                <div class="card card-body">
                                <div class="flexbox">
                                    <span class="ti-user text-purple fs-40"></span>
                                    <span class="fs-40 fw-100">50</span>
                                </div>
                                <div class="text-right">Employees</div>
                                </div>
                            </div>


                            <div class="col-md-6 col-lg-4">
                            <div class="card card-body">
                            <div class="flexbox">
                                <span class="ti-wallet text-danger fs-40"></span>
                                <span class="fs-40">8</span>
                            </div>
                            <div class="text-right">Salary Component</div>
                            </div>
                        </div>



                    </div>


                    


                    </div>
                    
                    
                </main>



            </div>
        )
    }

}


export default Dashboard;
 