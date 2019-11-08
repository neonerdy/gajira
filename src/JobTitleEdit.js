import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';


class JobTitleEdit extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            id: '',
            titleName: '',
            description: ''
        }
     }

     componentDidMount() {

        let id = this.props.match.params.id;
        this.getJobTitleById(id);
     }


     getJobTitleById = (id) => {

         axios.get(config.serverUrl + '/api/jobtitle/getbyid/' + id).then(response=> {
            this.setState({
                id: response.data.id,
                titleName: response.data.titleName,
                description: response.data.description
            })       
         })
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


    updateJobTitle = () => {

        
        let isValid = this.validateJobTitle();

        if (isValid) 
        {
            let jobTitle = {
                id: this.state.id,
                titleName: this.state.titleName,
                description: this.state.description
            }

            axios.put(config.serverUrl + '/api/jobtitle/update', jobTitle).then(response=> {
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

                                 <h3>Edit Job Title</h3>
                                <br/>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Title Name</label>
                                    <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                        name="titleName" onChange={this.onValueChange} value={this.state.titleName}/>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.titleName}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Description</label>
                                    <div class="col-md-7 col-sm-12"><input type="text" class="form-control" 
                                        name="description" onChange={this.onValueChange} value={this.state.description}/>
                                    </div>
                                </div>

                                <br/><br/>

                                <div class="text-right">
                                    <button type="button" class="btn btn-bold btn-pure btn-secondary" onClick={this.cancelUpdate}>CANCEL</button>
                                    <button class="btn btn-label btn-info" onClick={this.updateJobTitle}><label><i class="ti-check"></i></label> UPDATE</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>


                
            </div>


        )
    }


}

export default JobTitleEdit;

