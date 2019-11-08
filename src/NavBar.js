
import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import MasterData from './MasterData';


class NavBar extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            active: ''        
        }
    }

    onMasterDataClicked = () => {
        this.setState({
            active: 'menu-item active'
        })
    }
    
    render() {

        
        return(
            <aside class="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg">
            <header class="sidebar-header">
              
              <span class="logo">
                <a href="index.html"><img src="../assets/img/logo-light.png" alt="logo"/></a>
              </span>
      
              <span class="sidebar-toggle-fold"></span>
            </header>
      
            <nav class="sidebar-navigation">
              <ul class="menu">
      
              <li class="menu-category">Main Menu</li>
      
      
                <li class="menu-item ">
                   <Link to="/dashboard" className="menu-link">
                      <span class="icon icon fa fa-tv"></span>
                      <span class="title">Dashboard</span>
                  </Link>
                </li>
                
      
                 
                <li class="menu-item">
                    <Link to="/master-data" className="menu-link">
                        <span class="icon icon fa fa-puzzle-piece"></span>
                        <span class="title">Master Data</span>
                    </Link>
                </li>
              
                <li class="menu-item">
                    <Link to="/employee" className="menu-link">
                        <span class="icon fa fa-user"></span>
                        <span class="title">Employees</span>
                    </Link>
                 </li>

                    
                <li class="menu-item">
                  <Link to="/absence" className="menu-link">
                    <span class="icon fa fa-calendar-check-o"></span>
                    <span class="title">Absence</span>
                  </Link>
                </li>


              
      
                <li class="menu-item">
                  <Link to="/payroll" className="menu-link">
                    <span class="icon fa fa-usd"></span>
                    <span class="title">Payroll</span>
                  </Link>
      
                  </li>
      
      
      
              </ul>
            </nav>
      
          </aside>
      
        )
    }

}

export default NavBar;