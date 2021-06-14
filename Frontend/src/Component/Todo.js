import React from 'react';
import TodoListdata from './Todolistdata';
const url = 'https://developedashboard.herokuapp.com/todolist';

class Todolist extends  React.Component  {
    constructor(){
        super() 
        this.state={
            todoList:''
        }
    }


    render(){
        return(
            <TodoListdata todoData={this.state.todoList}/>
        );
    }

    componentDidMount(){
        fetch(url,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({todoList:data})})
    }
}
export default Todolist;