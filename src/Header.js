
import React, {Component} from 'react';


class Header extends Component
{

    render() {

        return(
            <div>

                <header class="topbar">
                    <div class="topbar-left">
                        <span class="topbar-btn sidebar-toggler"><i>&#9776;</i></span>
                    </div>

                    <div class="topbar-right">

                        <ul class="topbar-btns">
                            <li class="dropdown">
                                <span class="topbar-btn" data-toggle="dropdown" style={{color:'gray'}}><img class="avatar" src="assets/img/avatar/a5.jpg" alt="..."/>&nbsp;&nbsp;Ellen Watson</span>
                                <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="page/profile.html"><i class="ti-user"></i> Profile</a>
                                <a class="dropdown-item" href="page-extra/user-login-3.html"><i class="ti-power-off"></i> Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header>

           </div>
       
        )

    }


}

export default Header;