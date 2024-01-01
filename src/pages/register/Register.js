import { Link } from "react-router-dom";
import './register.css';
function register() {
    return (
        <form className="register-container" method="post">
            <h1 className="register-title">Đăng ký</h1>
            <input className="register-textbox" placeholder="Họ và tên" name="name" required/>
            <input className="register-textbox" placeholder="Số điện thoại" name="phone" required/>
            <input className="register-textbox" placeholder="Tên đăng nhập" name="username" required/>
            <input className="register-textbox" placeholder="Mật khẩu" name="password" required/>
            <button className="register-button" type="submit">Đăng ký</button>
            <div className="link-login">
                Bạn đã có tài khoản?
                <Link to="/login" className="dangnhap">Đăng nhập</Link>
            </div>
        </form>
    )
}

export default register