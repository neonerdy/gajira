import React, {Component} from 'react';
import axios from 'axios';
import config from './Config';
import NavBar from './NavBar';
import Header from './Header';


class WorkCalendarAdd extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            month: '',
            year: '',
            workDay: '',
            offDay: ''
        }
     }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    validateWorkCalendar = () => {

        let isValid = true;
        let error = {};

        if (this.state.month === '') {
            error.month = 'is required';
            isValid = false;
        }

        if (this.state.year === '') {
          error.year = 'is required';
          isValid = false;
        }
        
        if (this.state.workDay === '') {
          error.workDay = 'is required';
          isValid = false;
        }

        if (this.state.offDay === '') {
          error.offDay = 'is required';
          isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    
    }


    saveWorkCalendar = () => {

        
        let isValid = this.validateWorkCalendar();

        if (isValid) 
        {
            let workCalendar = {
                month: this.state.month,
                year: this.state.year,
                workDay: this.state.workDay,
                offDay: this.state.offDay
            }

            axios.post(config.serverUrl + '/api/workcalendar/save', workCalendar).then(response=> {
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

                                 <h3>Add Work Calendar</h3>
                                <br/>

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
                                  &nbsp;&nbsp;<span style={errStyle}>{this.state.error.month}</span>
                              </div>

                              <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Year</label>
                                  <div class="col-md-7 col-sm-12 required">
                                    <input type="text" class="form-control" name="defaultValue" onChange={this.onValueChange}/>
                                  </div>
                                  &nbsp;&nbsp;<span style={errStyle}>{this.state.error.year}</span>
                              </div>

                              <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Work Day</label>
                                  <div class="col-md-7 col-sm-12 required">
                                      <input type="text" class="form-control" name="defaultValue" onChange={this.onValueChange}/>
                                  </div>
                                  &nbsp;&nbsp;<span style={errStyle}>{this.state.error.workDay}</span>
                              </div>

                              <div class="form-group  row"><label class="col-md-3 control-label" style={{textAlign:'right'}}>Off Day</label>
                                  <div class="col-md-7 col-sm-12 required">
                                      <input type="text" class="form-control" name="defaultValue" onChange={this.onValueChange}/>
                                  </div>
                                  &nbsp;&nbsp;<span style={errStyle}>{this.state.error.offDay}</span>
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

export default WorkCalendarAdd;

