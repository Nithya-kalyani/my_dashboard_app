import React from 'react';


const Screenshot = () => {

    return(
    <React.Fragment>
        <div>
            <div className=""><h5><strong>Screenshots</strong></h5></div>
            <div className=" p-2 m-1 ml-4 mr-4">
                <div class="row pt-1 border-bottom">
                   <div className="col-md-2 col-sm-5 col-2 p-0"><span><img className="img-responsive"  src="/Assets/picture.png" alt=""/></span></div>
                    <div className="col-md-7 col-sm-7 col-9 p-0">
                        <div><p>shot_1_attach_1.png</p></div>
                    </div>
                    <div className="col-md-3 col-sm-2 col-1 p-1">
                        <div className=""><button class="btn colorButton p-0 pl-1 pr-1"><small>View</small></button></div>
                    </div>
                </div>
                <div class="row pt-1 mt-1 border-bottom">
                   <div className="col-md-2 col-sm-5 col-2 p-0"><span><img className="img-responsive"  src="/Assets/picture.png" alt=""/></span></div>
                    <div className="col-md-7 col-sm-7 col-9 p-0">
                        <div><p>shot_1_attach_3.png</p></div>
                    </div>
                    <div className="col-md-3 col-sm-2 col-1 p-1">
                        <div className=""><button class="btn colorButton p-0 pl-1 pr-1"><small>View</small></button></div>
                    </div>
                </div>
                <div class="row pt-1 mt-1 border-bottom">
                   <div className="col-md-2 col-sm-5 col-2 p-0"><span><img className="img-responsive"  src="/Assets/picture.png" alt=""/></span></div>
                    <div className="col-md-7 col-sm-7 col-9 p-0">
                        <div><p>Screenrecord_12.mov</p></div>
                    </div>
                    <div className="col-md-3 col-sm-2 col-1 p-1">
                        <div className=""><button class="btn colorButton p-0 pl-1 pr-1"><small>Play</small></button></div>
                    </div>
                </div>
                <div class="row mt-3">
                    <button className="btn btn w-100 pdfButton"><span className="pl-3">VIEW ALL</span></button>
               </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Screenshot;