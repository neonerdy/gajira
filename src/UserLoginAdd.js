
import React, {Component} from 'react';

class UserLoginAdd extends Component
{
    render() {

        return(

            <div id="addUserLogin" class="modal fade" role="dialog">
                    
            <div class="modal-dialog modal-lg">
                
                <div class="modal-content">

                    <div class="modal-header">
                        <h4>Add User Login</h4>
                    </div>
                    <br/>
                
                    <div class="modal-body">

                        <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>User Name</label>
                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                name="titleName" onChange={this.onValueChange}/>
                            </div>
                        </div>

                        <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Password</label>
                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                name="description" onChange={this.onValueChange}/>
                            </div>
                        </div>


                        <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>FullName</label>
                            <div class="col-md-7 col-sm-12 required"><input type="text" class="form-control" 
                                name="description" onChange={this.onValueChange}/>
                            </div>
                        </div>
                        

                        <br/>
                    
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal">Close</button>
                        <button class="btn btn-label btn-info"><label><i class="ti-check"></i></label> SAVE</button>
                    </div>
                    
                </div>
            </div>
        </div>
        )



    }


}


export default UserLoginAdd;