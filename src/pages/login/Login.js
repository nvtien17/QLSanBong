import { Link } from "react-router-dom";
import './login.css';

function login() {
    return (
        <form className="login-container" method="post">
            <h1 className="login-title">Đăng nhập</h1>
            <input className="login-textbox" placeholder="Tên Đăng nhập" name="username" required/>
            <input className="login-textbox" placeholder="Mật khẩu" name="password" required/>
            <div className="login-container-button">
                <button className="login-button" type="submit">Đăng nhập</button>
                <Link to='/register' className="login-button dangky">Đăng ký</Link>
            </div>
        </form>
    )
}

export default login