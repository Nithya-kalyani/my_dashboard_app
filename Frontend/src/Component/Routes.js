import React from 'react';
import Sidebar from '../Component/Sidebar';
import DashBoard from '../Component/Dashboard';
import {BrowserRouter} from 'react-router-dom';
import './index.css'

class Routing extends React.Component {
    constructor(){
        super() 
        this.state={
            clicked:false
        }
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }; 
    render(){
        const sidebar ={
            width: "-15%",
            display: "none"
        }
        const bodySlide ={
            width: "100%"
        }
        return (
            <BrowserRouter>
            <div className="dashboard">
                <div className="">
                    <div class="">
                        <div className="sidebarContainer" style={this.state.clicked ?  sidebar : null}>
                            <Sidebar/>
                        </div>
                    </div>
                    <div className="">
                        <div className="bodyContainer" style={this.state.clicked ?  bodySlide : null}>
                            <DashBoard
                            toggle={this.handleClick}/>
                        </div>
                    </div>
                </div>
            </div>
                
                
            </BrowserRouter> 
        
        )
    }
}
export default Routing;