import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';


class DepartmentEdit extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            id: '',
            departmentName: '',
            departmentHead: ''
        }
     }


    componentDidMount() {

        let id = this.props.match.params.id;
        this.getDepartmentById(id);
    }

    getDepartmentById = (id) => {
        axios.get(config.serverUrl + '/api/department/getbyid/' + id).then(response=> {
            this.setState({
                id: response.data.id,
                departmentName: response.data.departmentName,
                departmentHead: response.data.departmentHead
            })
        })
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


    updateDepartment = () => {

        
        let isValid = this.validateDepartment();

        if (isValid) 
        {
            let department = {
                id: this.state.id,
                departmentName: this.state.departmentName,
                departmentHead: this.state.departmentHead
            }

            axios.put(config.serverUrl + '/api/department/update', department).then(response=> {
                this.props.history.push('/master-data');
            })

        }


    }

    cancelUpdate = () =>{
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

                                 <h3>Edit Department</h3>
                                <br/>

                                <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Department Name</label>
                                    <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                        name="departmentName" onChange={this.onValueChange} value={this.state.departmentName}/>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.departmentName}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Department Head</label>
                                    <div class="col-md-7 col-sm-12"><input type="text" class="form-control" 
                                        name="departmentHead" onChange={this.onValueChange} value={this.state.departmentHead}/>
                                    </div>
                                </div>

                                <br/><br/>

                                <div class="text-right">
                                    <button type="button" class="btn btn-bold btn-pure btn-secondary" onClick={this.cancelUpdate}>CANCEL</button>
                                    <button class="btn btn-label btn-info" onClick={this.updateDepartment}><label><i class="ti-check"></i></label> UPDATE</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>


                
            </div>


        )
    }


}

export default DepartmentEdit;

