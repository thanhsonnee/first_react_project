// declare class component React
import React from 'react'; 
import './Demo.scss'

class ChildComponent extends React.Component {
    //ChildComponent chỉ có prop, không quản lý state
    state = {
        showJobs: false, 
    }
    handleShowHide = () => {
        this.setState ({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job)
        this.props.deleteAJob (job)
    }

    render (){    
        let {arrJobs} = this.props;
        let {showJobs} = this.state; 
        let check = showJobs === true ? 'showJobs: true' : 'showJobs: false';
        console.log('check: ', check);
        // console.log ('>>> check props: ', this.props)
        // // let name = this.props.name; .name là key
        // // let age = this.props.age; 
        // let {name, age, address, abc} = this.props; //bản chất this.props chính là 1 object
        // //name, age là tên biến
        // //chỉ dùng được thế này <=> các bạn đặt tên biến trùng với tên key của thằng object
        // let a = '';

        return (
            <>
                {showJobs === false ? <div>
                    <button className='btn-show'
                        onClick={() => this.handleShowHide()}>
                        Show
                {/* "Đi làm thì không ai viết CSS đâu" */}
                    </button></div>
                :
                //Nếu không có === true, thì React tự hiểu showJobs có giá trị nó mới in ra 
                <>
                <div className='job-lists'>
                {/* child component: {name} - {age} - {address} */}
                {
                        arrJobs.map((item,index) => {
                        //tại sao lại dùng hàm map?
                        //dùng hàm map sẽ trả ra 1 array mới, nên abc là 1 array chứa objects, trả về 3 cái id kia
                        return (
                        //nếu không có thẻ div là nó bị parsing error - unexpected token -> *) which mình vẫn chưa hiểu lắm
                            <div key = {item.id}>
                                {item.title} - {item.salary} <></> 
                                <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                            </div>
                        )
                    })
                }
                {/* {console.log ('>>> check map array: ', a)} */}
                {/* sau khi compile, lỗi trên website: Each child in a list should have a unique "key"
                Hiểu là thằng React muốn hạn chế việc tối ưu hóa performance của website, thì nó sẽ cập nhật lại 3 cái div "developers, testers, proj managers" cho mình
                "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
                */}
                
                
                </div>
               
                <div><button onClick={() => this.handleShowHide()}>Hide</button></div> 
                </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let {abc} = props; //bản chất this.props chính là 1 object
//     //name, age là tên biến
//     //chỉ dùng được thế này <=> các bạn đặt tên biến trùng với tên key của thằng object
    
//     //chỉ dùng đc function component<=> chúng ta chỉ có props và cta render data thôi
//     //đc khuyên là: chỉ dùng function component <=> dùng với thằng Hook nó mới hữu ích
//     return (
//         <>
//             <div className='job-lists'>
//             {/* child component: {name} - {age} - {address} */}
//             {
//                 abc.map((item,index) => {
//                     if (item.salary >= 500){
//                         return (
//                     //nếu không có thẻ div là nó bị parsing error - unexpected token -> *) which mình vẫn chưa hiểu lắm
//                         <div key = {item.id}>
//                             {item.title} - {item.salary} $
//                         </div>
//                     )
//                     }
//                     //tại sao lại dùng hàm map?
//                     //dùng hàm map sẽ trả ra 1 array mới, nên abc là 1 array chứa objects, trả về 3 phần tử div kia
                    
//                 })
//             }
//             {/* {console.log ('>>> check map array: ', a)} */}
//             {/* sau khi compile, lỗi trên website: Each child in a list should have a unique "key"
//             Hiểu là thằng React muốn hạn chế việc tối ưu hóa performance của website, thì nó sẽ cập nhật lại 3 cái div "developers, testers, proj managers" cho mình
//             "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
//             */}
            
            
//             </div>
//         </>
//     )
// }



//KINH NGHIỆM: học nhanh, nma học đến đâu chắc kiến thức đến đấy, thế thôi
//14/2/24
//Mình có ý định nhảy sang học Js á, vì nhiều cty yêu cầu Js hơn, nhưng mà đừng quên, mình lm cnay vẫn có sản phẩm,
//đó là todoApp react. 
//- Còn spham JS, tiếp tục xem code Ice cream hồi trc mình bỏ dở thôi
//- Còn spham web trc của mình trên Github, hãy xem nếu k down về máy, mình có chạy dc code đó không/ hay nhà tuyển dụng có xem dc sản phẩm đó k! 
//sau đó quay sang JS vẫn chưa muộn. TUY NHIÊN, mình cần có sản phẩm THẬT TỐT, nhất là với JS để đi apply, vậy thôi! Mà muốn thế, phải hiểu JS để tự code

export default ChildComponent; 

//16/2/24
//Tư duy code: Job-lists đg ở ChildComponent -> phải viết hàm ở MyComponent truyền xuống, thay đổi state của cha 
//từ thằng con, gọi ngược lên thằng cha để xóa 1 cái job 