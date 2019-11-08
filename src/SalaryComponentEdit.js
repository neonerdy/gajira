import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';


class SalaryComponentEdit extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            id: '',
            componentName: '',
            occurance: '',
            defaultValue: ''
        }
     }

     componentDidMount() {

        let id = this.props.match.params.id;
        this.getSalaryComponentById(id);
     }


     getSalaryComponentById = (id) => {

        axios.get(config.serverUrl + '/api/salarycomponent/getbyid/' + id).then(response=> {
             this.setState({
                 id: response.data.id,
                 componentName: response.data.componentName,
                 occurance: response.data.occurance,
                 defaultValue: response.data.defaultValue
             })
         })
     }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    validateSalaryComponent = () => {

        let isValid = true;
        let error = {};

        if (this.state.componentName === '') {
            error.componentName = 'is required';
            isValid = false;
        }

        if (this.state.occurance === '') {
            error.occurance = 'is required';
            isValid = false;
        }


        this.setState({
            error: error
        })

        return isValid;
    
    }


    updateSalaryComponent = () => {

        
        let isValid = this.validateSalaryComponent();

        if (isValid) 
        {
            let salaryComponent = {
                id: this.state.id,
                componentName: this.state.componentName,
                occurance: this.state.occurance,
                defaultValue: this.state.defaultValue === ''?0 : this.state.defaultValue
            }

            axios.put(config.serverUrl + '/api/salarycomponent/update', salaryComponent).then(response=> {
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

                                 <h3>Edit Salary Component</h3>
                                <br/>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Component Name</label>
                                    <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                        name="componentName" onChange={this.onValueChange} value={this.state.componentName}/>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.componentName}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Occurance</label>
                                    <div class="col-md-7 col-sm-12 required">
                                        <select class="form-control" name="occurance" onChange={this.onValueChange} value={this.state.occurance}>
                                            <option value=""></option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Daily">Daily</option>
                                        </select>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.occurance}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Default Value</label>
                                    <div class="col-md-7 col-sm-12"><input type="text" class="form-control" 
                                        name="defaultValue" onChange={this.onValueChange} value={this.state.defaultValue}/>
                                    </div>
                                </div>

                                <br/><br/>

                                <div class="text-right">
                                    <button type="button" class="btn btn-bold btn-pure btn-secondary" onClick={this.cancelUpdate}>CANCEL</button>
                                    <button class="btn btn-label btn-info" onClick={this.updateSalaryComponent}><label><i class="ti-check"></i></label> UPDATE</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>


                
            </div>


        )
    }


}

export default SalaryComponentEdit;

