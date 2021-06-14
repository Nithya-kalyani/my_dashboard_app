import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Sidebar extends React.Component {

    render(){
        return (
            <React.Fragment>
                <div className="">
                    <nav class="navbar navbar-expand-sm navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon "></span>
                        </button>
                        <span className="d-md-none d-sm-flex">
                            <span className="mr-4"><img className="img-responsive"  src="/Assets/notification.png" alt=""/></span>
                            <span className="mr-4"><img className="img-responsive"  src="/Assets/settings.png" alt=""/></span>
                            <span className="mr-4"><img height="30" width="30" className="img-responsive rounded-circle"  src="/Assets/avatar.png" alt=""/></span>
                        </span>
                    
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav d-block">
                                <div className="pl-4 pt-3">
                                    <img className="img-responsive" src="/Assets/logo.png" alt=""/>
                                </div>

                                <br/>
                                <div className="p-1 pl-3">
                                    <div className="sidebarLink nav-item active d-flex p-1">
                                        <Link className="nav-link text-decoration-none"  to="/"><span><img className="img-responsive mr-3"  src="/Assets/speedometer.png" alt=""/></span><span>Dashboard</span></Link>
                                    </div>
                                    <div className="sidebarLink nav-item d-flex p-1">
                                        <Link className="nav-link text-decoration-none"  to="/"><span><img className="img-responsive mr-3"  src="/Assets/graph.png" alt=""/></span><span>Activity</span></Link>
                                    </div>
                                    <div className="sidebarLink nav-item  d-flex p-1">
                                        <Link className="nav-link text-decoration-none"  to="/"><span><img className="img-responsive mr-3"  src="/Assets/timer_white.png" alt=""/></span><span>Timesheet</span></Link>
                                    </div>
                                    <div><li><hr color="#BDB7B7" class="myhrline ml-3"/></li></div>
                                    <div className="sidebarLink nav-item active d-flex p-1">
                                        <Link className="nav-link text-decoration-none"  to="/"><span><img className="img-responsive mr-3"  src="/Assets/icons8-today-96.png" alt=""/></span><span>To Do</span></Link>
                                    </div>
                                    <div className="sidebarLink nav-item d-flex p-1">
                                        <Link className="nav-link text-decoration-none"  to="/"><span><img className="img-responsive mr-3"  src="/Assets/bill.png" alt=""/></span><span>Invoices</span></Link>
                                    </div>
                                    <div className="sidebarLink nav-item  d-flex p-1">
                                        <Link className="nav-link text-decoration-none"  to="/"><span><img className="img-responsive mr-3"  src="/Assets/folder.png" alt=""/></span><span>Projects</span></Link>
                                    </div>
                                    <div><li><hr color="#BDB7B7" class="myhrline ml-3"/></li></div>
                                    <div className="sidebarLink nav-item active d-flex p-1">
                                        <Link className="nav-link text-decoration-none"  to="/"><span><img className="img-responsive mr-3"  src="/Assets/help.png" alt=""/></span><span>Help</span></Link>
                                    </div>
                                    <div className="sidebarLink nav-item d-flex p-1 pb-0">
                                        <Link className="nav-link text-decoration-none"  to="/"><span><img className="img-responsive mr-3"  src="/Assets/download.png" alt=""/></span><span>Download APP</span></Link>
                                    </div>
                                </div>
                                <div className="d-none d-md-block p-0">
                                    <span><img height="170" className="img-responsive"  src="/Assets/sidebar_overlay.png" alt=""/></span>
                                </div>
                                <div className="d-none d-md-flex ml-4 mb-1">
                                    <span className="pr-4 pl-1"><img className="img-responsive"  src="/Assets/notification.png" alt=""/></span>
                                    <span className="pl-4 pr-4"><img className="img-responsive"  src="/Assets/settings.png" alt=""/></span>
                                    <span className="pl-2"><img height="30" width="30" className="img-responsive rounded-circle"  src="/Assets/avatar.png" alt=""/></span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </React.Fragment>
        
        )
    }
}
export default Sidebar;