import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '', 
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value, 
            // truy cập đến input, lấy value của input
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value, 
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        //hàm này để ngăn cản việc tải lại trang (default) khi mình submit
        if (!this.state.title || !this.state.salary){
            alert ('Please enter the contents')
            return; 
        }

        console.log('>>> check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() *1001),
            title: this.state.title, 
            salary: this.state.salary
        })
        //title: this.state.title: It assigns the value of the title property from the component's state to the title property of the object.
        //The purpose of this code is to add a new job with specific details to some data structure or state, likely managed by the parent component.
        //đây là object gồm 3 phần tử 
        //lời gọi hàm thôi 
        this.setState({
            title: 'sâsa', 
            salary: ''
        })
        // {}: Inside the setState method, an object is provided with the new state values.
        // In summary, this code sets the title and salary properties in the component's state to empty strings
    }
       

    render(){
        return (
            <form>
                    <div htmlFor="fname">Job Title:</div><br/>
                    {/* trình fix bug lênnn=))) fix dc bug incorrect use of label: form_element */}
                    <input 
                    type="text" 
                    defaultValue={this.state.title}
                    onChange = {(event) => this.handleChangeTitleJob(event)} 
                    />
                    {/* gán onChange = 1 function của React */}
                    {/* event này chính là event mà thằng HTML nó truyển cho cta, nó dùng global */}
                    {/* tức hàm này, khi dùng onChange, onCLick thì nó đã truyền cho cta rồi */}

                    {/* dễ hiểu hơn: nếu k có hàm onChange, event thì ta không thể nhập input được. Trước khi dùng, chỉ có thể thay đổi dữ liệu
                    từ inspect -> components. Event onChange chính là event giúp chúng ta nhập input vào 
                    */}
                    <br/>
                    <div htmlFor="lname">Salary:</div><br/>
                    <input 
                    type="text" 
                    defaultValue={this.state.salary}
                    onChange = {(event) => this.handleChangeSalary(event)}
                    // {} để gọi đến React, event này lấy từ html ra 
                    />
                    <br/><br/>
                    <input type="submit" 
                    onClick={(event) => this.handleSubmit(event)}
                    //câu hỏi: cách event onClick này hoạt động là gì 
                    //-> để lưu lại dữ liệu ở phần console sau khi ấn submit 


                    //bản chất đăng nhập fb: nhập input -> truyền vào state -> onChange để lưu lại data -> ấn đăng nhập thì lấy data trên state để truyền cho API
                    />
            </form>        
        )
    }
}

export default AddComponent