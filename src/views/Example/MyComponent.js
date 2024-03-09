// declare class component React
import React from 'react'; 
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

// class MyComponent extends React.Component {
//     state = {
//         name: 'Eric', 
//         channel: 'Hoi dan IT', 
//     }
//     //file js kế thừa lại React.Component
    
//     handleOnChangeName = (event) => {
//         //hàm này nhận tham số đầu vào, chính là event của html 
//         this.setState ({
//             name: event.target.value, 
//         //đơn giản setState là thay đổi trạng thái, mà k cần đụng vào biến state thôi 
//         //đồng thời, setState sẽ gọi React để gọi lại hàm Render 
//         //event.target.value chính là câu lệnh mình truyền vào input 
//         })
//     }

//     handleClickButton = () => {
//         alert("click me");
//         console.log('hit the button'); 
//     }
//     render(){
//     //Khuyên đúng thật sự, có nhiều cái không cần tìm hiểu đâu
//     //Cứ thừa nhận nó đúng đi, ví dụ "tại sao viết Mỹ y dài mà không viết i ngắn ý"
//     //=))))vì nó đéo quan trọng gì tới cuộc sống của mình     
//     // let name = "Thanh Son"; //khác c ở chỗ, k yêu cầu khai báo kiểu dữ liệu
//     //mà khi let như thế kia, mặc định biến này có kiểu dữ liệu string rồi 
//         //nhớ đơn giản: muốn dùng JS bên trong file html thì dùng {}
//         console.log('>>> call render:', this.state)
//         return (
//     //Lưu ý: JSX chỉ return về 1 khối: ví dụ khối h3, div 
//     //đây là fragment của React

//     //this.state.channel chính là cú pháp object của JS
//         <> 
//             <div className='first'>
//                 {/* {console.log ('My name is:', name)} */}
//                 <input value ={this.state.name} type = "text"
//                     onChange={(event) => this.handleOnChangeName(event)} 
//                 //test độ hiểu = câu hỏi: tại sao gõ vào input thì cái my name is ... cũng thay đổi? 
//                 //Dễ thôi, điền input -> thực hiện hàm handleOnChangeName -> setState liên tục -> state hiện tại khác -> this.state.name sẽ thay đổi 
//                 />
                
//                 Hello my component, my name is {this.state['name']}
//             </div>
//             <div className='second'>
//                 My youtube channel is {this.state.channel}
//             </div>
//             <div className='third'>
//                 <button onClick={() => this.handleClickButton()}>Click me</button>
//             </div>
//         </>
//         )
//     //Những con số chạy liên tục trên sàn CK, mà bạn không cần refresh lại website, thì đó gọi là state 
//     //1 ví dụ khác: dùng thẻ input, thay đổi chữ trực tiếp trên website mà k cần reload lại web
//     //State chính là memory của React, giúp lưu lại trạng thái ứng dụng của chúng ta



//     }
// }
//Profiler đo hiệu năng của website 
//React dev tools giúp quản lý sự thay đổi trên file React (Inspect -> Components)

// export default MyComponent; 
//In JavaScript, a default export is a way to share a single value, function, or class as the main thing from a file with other parts of your code.

//12/2/2024
//Learn examples of DOM events
//các sự kiện chủ yếu dùng là onChange, onClick

//KINH NGHIỆM
//Học cứ bình tĩnh, k cần nhanh quá, mà phải hiểu, thế thôi! 
//Đừng tạo áp lực cứ phải nhanh lên 1 cách tiêu cực, mình sẽ hổng kiến thức đấy
//Không phải học dc bnh cứ đem đi khoe, mà học THẬT SỰ CHẮC BAO NHIÊU

//13/2/2024 - Bài #9
//Định dạng form cũng có trong html, từ phía giao diện html gọi lên phía server (server-side) mà mình chưa hiểu lắm
// let carname = 20; 

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {id: 'abcJob1', title: 'developers', salary: '500'},
            {id: 'abcJob2', title: 'testers', salary: '400'},
            {id: 'abcJob3', title: 'project managers', salary: '1000'},
        ]
        //Khi dùng JS, ta có thể convert qua lại giữa string và number
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        //Để refresh lại mà k mất dữ liệu ng dùng nhập vào, thì phải kết nối với back-end
        //Và khi load lại trang, web sẽ tải dữ liệu từ database lên 
        // let currentJobs = this.state.arrJobs; 
        // currentJobs.push(job); 
        
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs,
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs; 
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        //sẽ xóa những cái item k cùng id, mà chả có phần tử nào cùng id với nhau cả
        //-> sẽ xóa được tất cả các phần tử   
        this.setState({
            arrJobs: currentJobs, 
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('>> run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state)
    }
    //hàm này dùng để so sánh quá khứ và hiện tại

    componentDidMount (){
        console.log('>>>run component did mount')
        //đây là nơi gọi API từ phía back-end để lấy dữ liệu 
    }

    render (){
        console.log ('>>> call render: ', this.state)
        return (
            <>
                <AddComponent 
                addNewJob = {this.addNewJob}
                />
                {/* So, in simple terms, this line of code is passing the addNewJob function as a prop to a React component.  
                Vì đã truyền vào biến job ở trên, nên không viết this.addNewJob()
                */}
                
                <ChildComponent 
                // name = {this.state.firstName} //đây là key
                // age ={'20'}
                // brand = {carname}
                // address = {'Hanoi'}
                arrJobs = {this.state.arrJobs}
                deleteAJob = {this.deleteAJob}
                />
                {/* đang truyền 1 biến name có giá trị là string
                chúng ta có thể dùng function để truyền từ thằng con lên thằng cha, nhưng chỉ có thể truyền data từ cha xuống con 
                bản chất của 1 prop chính là 1 biến

                */}
            </>
        )
    }
}

//KINH NGHIỆM: học nhanh, nma học đến đâu chắc kiến thức đến đấy, thế thôi

//KINH NGHIỆM: mình cũng nhận ra, đừng quên 
export default MyComponent; 

//#13: StateLess/StateFull Components (Function và Class)
//#14: Conditional Output: là render thằng JSX theo điều kiện 
//#16: Truyền data từ cha sang con: có thể là 1 object, array, number: prop k nhất thiết là 1 biến, mà có thể là 1 function
//DOM: chính là element lúc inspect thôi, k cần học, thư viện làm việc với nó sẵn rồi
//Anh này cũng theo tư tưởng "chậm mà chắc" như thằng MMQ vậy, và thật sự nó rất hữu ích nha! 
//#18: Virtual DOM: cơ bản là nó tối ưu thuật toán = cách thay đổi những phần tử cần thiết phải thay đổi trong element thôi  

//24/2/2024
//Làm TodoApp: CRUD: create/read/update/delete
