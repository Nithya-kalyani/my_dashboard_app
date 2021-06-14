import React from 'react';


const Report = () => {

    return(
    <React.Fragment>
        <div>
            <div className="mb-2"><h5><strong>Report</strong></h5></div>
            <div className="reportStyle p-2 m-4">
               <div class="row pl-1">
                   <div className="col-md-3 col-sm-5 col-3 p-0"><span><button className="btn reportGraph mt-1"><img className="img-responsive"  src="/Assets/graph.png" alt=""/></button></span></div>
                    <div className="col-md-6 col-sm-7 col-5 p-1">
                        <div className="row text-white"><small>WEEKLY ACTIVITY</small></div>
                        <div className="row text-white pt-1"><b>52%</b></div>
                    </div>
                    <div className="col-md-3 col-sm-2 col-3 p-1">
                        <div className="row float-right rounded text-white pl-2 pr-2 reportCloud"><i class="fa fa-cloud pr-1 mt-1" aria-hidden="true"></i><small>17%</small></div>
                    </div>
               </div>
            </div>
            <div className="reportTime p-2 ml-4 mr-4 mt-2">
               <div class="row pl-1">
                   <div className="col-md-3 col-sm-5 col-3 p-0"><span><button className="btn reportTimeblue mt-1"><img className="img-responsive"  src="/Assets/timer_blue.png" alt=""/></button></span></div>
                    <div className="col-md-6 col-sm-7 col-5 p-1">
                        <div className="row text-secondary"><small>WORKED THIS WEEK</small></div>
                        <div className="row text-dark pt-1"><b>11:56:33</b></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-3 p-1">
                        <div className="row float-right rounded text-danger pl-2 pr-2 reportArrow"><i class="fa fa-caret-down pr-1 mt-1 " aria-hidden="true"></i><small>17%</small></div>
                    </div>
               </div>
            </div>
            <div className="">
               <div class="row p-1 m-4">
                    <button className="btn btn w-100 pdfButton"><img className="img-responsive"  src="/Assets/pdf.png" alt=""/><span className="pl-3">EXPORT AS PDF</span></button>
               </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Report;