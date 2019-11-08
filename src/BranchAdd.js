
import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';


class BranchAdd extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            branchName: '',
            branchHead: ''
        }

        this.closeBtn = React.createRef();
        
    }



    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onModalClosed = () => {
      
        this.setState({
            error: {},
            branchName: '',
            branchHead: ''
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


    saveBranch = () => {

        
        let isValid = this.validateBranch();

        if (isValid) 
        {
            let branch = {
                branchName: this.state.branchName,
                branchHead: this.state.branchHead
            }

            axios.post(config.serverUrl + '/api/branch/save', branch).then(response=> {
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

                                 <h3>Add Branch</h3>
                                <br/>

                                <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Branch Name</label>
                                    <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                        name="branchName" onChange={this.onValueChange}/>
                                    </div>
                                    &nbsp;&nbsp;<span style={errStyle}>{this.state.error.branchName}</span>
                                </div>

                                <div class="form-group  row"><label class="col-md-3" style={{textAlign:'right'}}>Branch Head</label>
                                    <div class="col-md-7 col-sm-12"><input type="text" class="form-control" 
                                        name="branchHead" onChange={this.onValueChange}/>
                                    </div>
                                </div>

                                <br/><br/>

                                <div class="text-right">
                                    <button type="button" class="btn btn-bold btn-pure btn-secondary" onClick={this.cancelAdd}>CANCEL</button>
                                    <button class="btn btn-label btn-info" onClick={this.saveBranch}><label><i class="ti-check"></i></label> SAVE</button>
                                </div>




                            </div>
                        </div>

                    </div>

                </main>


                
            </div>


        )
    }


}

export default BranchAdd;

