import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//node modules code rất nhiều, thừa thãi, nên không nên đẩy lên github
//Components là thứ có thể giúp các bạn tái sử dụng code và giúp trang web của bạn chạy mượt mà hơn thôi
//Components là những viên gạch xây dựng nên website của các bạn 
//Định nghĩa component là 1 hàm/1 class mà nó trả về 1 khối HTML 
//JSX chính là định nghĩa 1 biến = 1 thẻ html (tương tự như kiểu dữ liệu số nguyên, array...)
//Nói cách khác là code HTML bên trong file JS

/**
2 components: class component/ function component (function, arrow)
So với các ngôn ngữ/framework khác thì component của React có điều đặc biệt là: nó sử dụng cú pháp JSX
 * 
 * 
 */
reportWebVitals();
