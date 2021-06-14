import React from 'react';
import Tabledata from './Tabledata';
const url = 'https://developedashboard.herokuapp.com/project';

class Table extends  React.Component  {
    constructor(){
        super() 
        this.state={
            project:''
        }
    }


    render(){
        return(
            <Tabledata projectData={this.state.project}/>
        );
    }

    componentDidMount(){
        fetch(url,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({project:data})})
    }
}
export default Table;