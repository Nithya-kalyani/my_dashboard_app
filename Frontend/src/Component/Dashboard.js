import React from 'react';
import Table from '../Component/Table';
import Report from '../Component/Report';
import Todolist from '../Component/Todo';
import Screenshot from '../Component/Screenshot';


class Dashboard extends React.Component {
    render() {
      const {toggle} = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="mt-2 m-2 float-left">
                            <div class="dropdown">
                                <a class="btn btn selectbtn dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Design Task
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="/">Web App</a>
                                    <a class="dropdown-item" href="/">UI/UX</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 m-2 float-right">
                            <button className="btn btn colorButton"><span className=""><i class="fa fa-plus p-1" aria-hidden="true"></i></span><span className="d-none d-md-inline font-weight-bold">ADD PROJECT</span></button>
                        </div>
                    </div>
                </div>
                <div className=" rounded-left d-none d-md-block rounded-left pr-2">
                    <img className="sidebarArrow img-responsive" onClick={toggle} src="/Assets/left_arrow.png" alt=""/>
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-8 border">
                        <div><Table/></div>
                    </div>
                    <div className="col-md-4 col-sm-4 border border-right-0 p-3">
                    <div><Report/></div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-8 border-bottom-0 border">
                        <div><Todolist/></div>
                    </div>
                    <div className="col-md-4 col-sm-4 border border-right-0 border-bottom-0 p-3">
                        <div><Screenshot/></div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}
export default Dashboard;;