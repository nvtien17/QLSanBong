import './login.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOption } from '../../constants';

export default function Login() {
    const [eye, setEye] = useState(false)

    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const { email, password } = values
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if(!values.email || !values.password){
            toast.success('Vui lòng nhập đủ thông tin !', toastOption);
            return
        }  
    }
    
    return (
        <div className="login">
            <div className="login-container">
                <div className="header">
                    <div className="heading">
                        Đăng nhập
                    </div>
                    <p className="title">
                        Bạn có thể đăng nhập bằng địa chỉ email của mình
                    </p>
                </div>
                <form action="" className="content">
                    <div className="input-group">
                        <label htmlFor="email" className="label">Địa chỉ Email</label>
                        <div className="input">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" className="label">Mật khẩu</label>
                        <div className="input">
                            <input
                                type={eye ? "text" : "password"}
                                name="password"
                                id="password"
                                value={password}
                                onChange={handleChange}
                            />
                            {
                                eye ?
                                    <span onClick={() => { setEye(false) }}>
                                        Ẩn
                                    </span> :
                                    <span onClick={() => { setEye(true) }}>
                                        Hiện
                                    </span>
                            }

                        </div>
                    </div>

                    <button onClick={handleLogin}>Đăng nhập</button>
                    <div className="outer-link">
                        Bạn không có tài khoản? <Link to="/register">Đăng ký</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
