
import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';

class BranchEdit extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            id: '',
            branchName: '',
            branchHead: ''
        }

    }

    componentDidMount() {

        let id = this.props.match.params.id;
        console.log(id);
        this.getBranchById(id);
    }

    getBranchById = (id) => {
        axios.get(config.serverUrl + '/api/branch/getbyid/' + id).then(response=> {
            this.setState({
                id: response.data.id,
                branchName: response.data.branchName,
                branchHead: response.data.branchHead
            })
        })
    }



    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    validateBranch = () => {

        let isValid = true;
        let error = {};

        if (this.state.branchName === '') {
            error.branchName = 'is required';
            isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    
    }


    updateBranch = () => {

        
        let isValid = this.validateBranch();

        if (isValid) 
        {
            let branch = {
                id: this.state.id,
                branchName: this.state.branchName,
                branchHead: this.state.branchHead
            }

            axios.put(config.serverUrl + '/api/branch/update', branch).then(response=> {
               this.props.history.push('/master-data');
            })

        }


    }

    cancelUpdate = () => {
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

                             <h3>Edit Branch</h3>
                            <br/>

                            <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Branch Name</label>
                                <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                    name="branchName" onChange={this.onValueChange} value={this.state.branchName}/>
                                </div>
                                &nbsp;&nbsp;<span style={errStyle}>{this.state.error.branchName}</span>
                            </div>

                            <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Branch Head</label>
                                <div class="col-md-7 col-sm-12"><input type="text" class="form-control" 
                                    name="branchHead" onChange={this.onValueChange} value={this.state.branchHead}/>
                                </div>
                            </div>

                            <br/><br/>

                            <div class="text-right">
                                <button type="button" class="btn btn-bold btn-pure btn-secondary" onClick={this.cancelUpdate}>CANCEL</button>
                                <button class="btn btn-label btn-info" onClick={this.updateBranch}><label><i class="ti-check"></i></label> UPDATE</button>
                            </div>




                        </div>
                    </div>

                </div>

            </main>


            
        </div>




        )
    }


}

export default BranchEdit;

