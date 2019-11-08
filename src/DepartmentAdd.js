import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';


class DepartmentAdd extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            departmentName: '',
            departmentHead: ''
        }
     }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    validateDepartment = () => {

        let isValid = true;
        let error = {};

        if (this.state.departmentName === '') {
            error.departmentName = 'is required';
            isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    
    }


    saveDepartment = () => {

        
        let isValid = this.validateDepartment();

        if (isValid) 
        {
            let department = {
                departmentName: this.state.departmentName,
                departmentHead: this.state.departmentHead
            }

            axios.post(config.serverUrl + '/api/department/save', department).then(response=> {
                this.props.history.push('/master-data');
            })

        }


    }

    cancelAdd = () =>{
        this.props.history.push('/master-data');
    }




    render() {

        let errStyle = {
            color: 'darkred'
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

                                 <h3>Add Department</h3>
                                <br/>

                                <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Department Name</label>
                                    <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                        name="departmentName" onChange={this.onValueChange}/>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.departmentName}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Department Head</label>
                                    <div class="col-md-7 col-sm-12"><input type="text" class="form-control" 
                                        name="departmentHead" onChange={this.onValueChange}/>
                                    </div>
                                </div>

                                <br/><br/>

                                <div class="text-right">
                                    <button type="button" class="btn btn-bold btn-pure btn-secondary" onClick={this.cancelAdd}>CANCEL</button>
                                    <button class="btn btn-label btn-info" onClick={this.saveDepartment}><label><i class="ti-check"></i></label> SAVE</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>


                
            </div>


        )
    }


}

export default DepartmentAdd;

