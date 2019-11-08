import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';


class SalaryComponentAdd extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            componentName: '',
            occurance: '',
            defaultValue: ''
        }
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


    saveSalaryComponent = () => {

        
        let isValid = this.validateSalaryComponent();

        if (isValid) 
        {
            let salaryComponent = {
                componentName: this.state.titleName,
                occurance: this.state.description,
                defaultValue: this.state.defaultValue
            }

            axios.post(config.serverUrl + '/api/salarycomponent/save', salaryComponent).then(response=> {
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

                                 <h3>Add Job Title</h3>
                                <br/>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Component Name</label>
                                    <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                        name="componentName" onChange={this.onValueChange}/>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.componentName}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Occurance</label>
                                    <div class="col-md-7 col-sm-12 required">
                                        <select class="form-control" name="occurance" onChange={this.onValueChange}>
                                            <option value=""></option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Daily">Daily</option>
                                        </select>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.occurance}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Default Value</label>
                                    <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                        name="defaultValue" onChange={this.onValueChange}/>
                                    </div>
                                </div>


                                <br/><br/>

                                <div class="text-right">
                                    <button type="button" class="btn btn-bold btn-pure btn-secondary" onClick={this.cancelAdd}>CANCEL</button>
                                    <button class="btn btn-label btn-info" onClick={this.saveSalaryComponent}><label><i class="ti-check"></i></label> SAVE</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>


                
            </div>


        )
    }


}

export default SalaryComponentAdd;

