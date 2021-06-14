import React from 'react';


const Tabledata = (props) => {
    const renderProject = ({projectData}) => {
        if(projectData){
            return projectData.map((item)=>{
                
                return(
                    <React.Fragment>
                        <tr className="p-1">
                            <td>
                                <span className="rounded p-2 font-weight-bold colorButton">{item._id}</span>
                                <span className="pl-3 overflow-hidden">{item.project}</span>
                            </td>
                            <td>{item.date}</td>
                            <td>{item.startTime}</td>
                            <td>{item.stopTime}</td>
                            <td>{item.duration}</td>
                        </tr>
                    </React.Fragment>
                )
            })
        }
    }
    return(
    <React.Fragment>
        <div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-12 p-3">
                    <span className="float-left"><h5><strong>Timesheet</strong></h5></span>
                    <span className="float-right">
                        <span><button className="btn btn colorButton d-none d-md-inline"><span className="">VIEW FULL SHEET</span></button></span>
                        <span className="d-none d-md-inline p-3 pr-0 mr-0"><button className="btn btn-white border-0"><img className="img-responsive" src="/Assets/more.png" alt=""/></button></span>
                    </span>
                </div>
            </div>
            <div className="table-responsive">
                <table class="table table-striped mb-3">
                    <thead>
                        <tr className="p-1">
                            <th>Project</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>Stop Time</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>{renderProject(props)}</tbody>
                </table>
            </div>
        
        </div>
    </React.Fragment>
    )
}

export default Tabledata;