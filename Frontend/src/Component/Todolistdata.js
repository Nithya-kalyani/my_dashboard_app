import React from 'react';


const TodoListdata = (props) => {
    const renderList = ({todoData}) => {
        console.log("todoData-->", todoData)
        if(todoData){
            return todoData.map((item)=>{
                
                return(
                    <React.Fragment>
                       
                        <div className="m-2">
                            <div class=" row pl-1">
                                <div className="col-md-1 col-sm-2 col-3">
                                    <div className="row todoDate"><b>{item.date}</b></div>
                                    <div className="row todoMonth">{item.month}</div>
                                </div>
                                <div className="col-md-10 todolist col-sm-9 col-9 p-1">
                                    <div className="row pl-4 d-flex justify-content-between">
                                        <span>{item.project}</span>
                                        <span className="d-none d-md-block"><button className="btn btn-white border-0"><img className="img-responsive" src="/Assets/more.png" alt=""/></button></span>
                                    </div>
                                    <div className="row pl-4 pt-0"><small>{item.status}</small></div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })
        }
    }
    return(
    <React.Fragment>
        <div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-12 p-1 pt-2 pl-3">
                    <span className="float-left"><h5><strong>To - Do lists</strong></h5></span>
                </div>
            </div>
            <div>{renderList(props)}</div>
        
        </div>
    </React.Fragment>
    )
}

export default TodoListdata;