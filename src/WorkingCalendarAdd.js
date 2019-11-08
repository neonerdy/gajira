import React, {Component} from 'react';


class WorkingCalendarAdd extends Component
{

    render() {
        return(
          
          <div id="addWorkingCalendar" class="modal fade" role="dialog">
                
            <div class="modal-dialog modal-lg">
                
                <div class="modal-content">

                      <div class="modal-header">
                        <h4>Add Working Calendar</h4>
                      </div>
                      <br/>
                
                      <div class="modal-body">

                          <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Month</label>
                              <div class="col-md-7 col-sm-12 required">
                                 <select class="form-control" name="priority" onChange={this.onValueChange}>
                                    <option value=""></option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                 </select>
                               </div>

                          </div>

                          <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Year</label>
                              <div class="col-md-7 col-sm-12 required">
                                 <input type="text" class="form-control" name="defaultValue" onChange={this.onValueChange}/>
                               </div>
                          </div>

                          <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Work Day</label>
                              <div class="col-md-7 col-sm-12 required">
                                   <input type="text" class="form-control" name="defaultValue" onChange={this.onValueChange}/>
                               </div>
                          </div>

                          <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Off Day</label>
                              <div class="col-md-7 col-sm-12 required">
                                   <input type="text" class="form-control" name="defaultValue" onChange={this.onValueChange}/>
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


export default WorkingCalendarAdd;