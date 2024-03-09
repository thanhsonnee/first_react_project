import React from "react";
import {toast} from 'react-toastify';


class AddTodo extends React.Component{
    state = {
        title: ''
    }
    
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value, 
            //mỗi lần gọi hàm OnChange, thì ta sẽ lấy được state của hàm này 
        })
    }
    handleAddTodo = () => {
        if (!this.state.title){
            //nếu this.state rỗng thì trả về true 
            toast.error(`Missing Todo title!`)
            //chúng ta muốn lấy tiền của khách hàng không dễ đâu=)))
            return;  
            //return để ngay lập tức thoát khỏi hàm này 
        }
        // alert("click me") //test xem code chạy được hay chưa
        // giờ nhiệm vụ là: lsao để khi ấn vào Add, thì nó gọi ngược về thằng cha, thêm listTodo vào cho chúng ta 
        let todo = {
            id: Math.floor(Math.random() *1001),
            title: this.state.title 
        }

        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
        //gọi ngược lên thằng cha, để thêm thằng todo
    }
    render(){
        let {title} = this.state; 
        //dùng sự kiện Onchange để khi thay đổi input, chúng ta phải lưu lại state của nó 
        
        return(
            <div className='add-todo'>
                    <input type='text' value = {title}
                        onChange={(event) => this.handleOnChangeTitle (event)}
                        //truyền vào event của thằng HTML 
                    />
                    <button type="button" className="add"
                    onClick={(event) => this.handleAddTodo (event)}
                    >Add</button>
                </div>
        )
    }
}

export default AddTodo