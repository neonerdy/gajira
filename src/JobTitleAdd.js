import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';


class JobTitleAdd extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            titleName: '',
            description: ''
        }
     }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    validateJobTitle = () => {

        let isValid = true;
        let error = {};

        if (this.state.titleName === '') {
            error.titleName = 'is required';
            isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    
    }


    saveJobTitle = () => {

        
        let isValid = this.validateJobTitle();

        if (isValid) 
        {
            let jobTitle = {
                titleName: this.state.titleName,
                description: this.state.description
            }

            axios.post(config.serverUrl + '/api/jobtitle/save', jobTitle).then(response=> {
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

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Title Name</label>
                                    <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                        name="titleName" onChange={this.onValueChange}/>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.titleName}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Description</label>
                                    <div class="col-md-7 col-sm-12"><input type="text" class="form-control" 
                                        name="description" onChange={this.onValueChange}/>
                                    </div>
                                </div>

                                <br/><br/>

                                <div class="text-right">
                                    <button type="button" class="btn btn-bold btn-pure btn-secondary" onClick={this.cancelAdd}>CANCEL</button>
                                    <button class="btn btn-label btn-info" onClick={this.saveJobTitle}><label><i class="ti-check"></i></label> SAVE</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>


                
            </div>


        )
    }


}

export default JobTitleAdd;

