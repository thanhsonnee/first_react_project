import React from 'react'; 
import './ListTodo.scss'
import AddTodo from './AddTodo';
//import ở đây và gọi nó ở dưới
import {toast} from 'react-toastify';


class ListTodo extends React.Component{
    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homework'}, 
            {id: 'todo2', title: 'Playing soccer'}, 
            {id: 'todo3', title: 'Listening to music'}, 
        ]
   }
    //đối với React, khi thao tác với dữ liệu, chúng ta sử dụng kiểu Array hoặc kiểu Object 
    
    addNewTodo = (todo) => { 
        // let currentListTodo = this.state.listTodos; 
        // currentListTodo.push(todo); 
        //This function is used to add a new todo item to the component's state.
        //It takes a todo parameter, which is presumably an object representing a todo item.

    this.setState ({
        listTodos: [...this.state.listTodos, todo],
        // listTodos: currentListTodo
        //It uses the setState function to update the component's state
        //It spreads the existing listTodos array using the spread operator (...) and adds the new todo to the end of the array.
        })

        toast.success("Wow so easy!")
    }
    //cách này hơi khó hiểu chút 
    render (){
        //The render method returns JSX (React elements) to be rendered.
        let {listTodos} = this.state; 
        // = câu lệnh: let listTodos = this.state.listTodos; 

        return (
            <div className = 'list-todo-container'>
                <AddTodo
                    addNewTodo = {this.addNewTodo}
                    //đã truyền sang thằng con 
                    //In JavaScript, the this keyword refers to an object.
                    //Which object depends on how this is being invoked (used or called).
                    //The AddTodo component is passed a prop named addNewTodo, which is assigned the reference to the addNewTodo method. This allows the AddTodo component to call addNewTodo when needed.
                /> 
                {/* đây là thao tác chia cắt component */}
                <div className='list-todo-content'>
                    {listTodos && listTodos.length >0 && 
                        // nếu không có .length > 0 thì khi dùng .map sẽ bị lỗi
                        listTodos.map ((item, index) => {
                        //chưa hiểu lệnh map này lắm
                            return(
                                    <div className='todo-child' key = {item.id}>
                                    {/* không thao tác với index vì khi 'chế biến' lại phần tử thì hiệu năng không cao đâu */}
                                        <span> {index + 1} - {item.title} </span>
                                        {/* This is another JavaScript expression inside curly braces. 
                                        It suggests that there's an object named item with a property called title */}
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button>
                                        {/* css sẽ áp dụng thuộc tính được đặt ở thẻ gần nhất */}
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        )
   }
}

export default ListTodo; 

//Revise the lesson 
// Object Properties: The named values, in JavaScript objects, are called properties.

// Property     Value
// firstName    John
// Methods are actions that can be performed on objects.

// Object properties can be both primitive values, other objects, and functions.
// An object method is an object property containing a function definition.