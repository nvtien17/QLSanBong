import './Header.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Heading() {
    return (
        <div className="container">
            <div className="header">
                <div className="logo">

                </div>
                <div className="header_name">
                    <div className="name_football_pitches">
                        Thế giới bóng đá Nguyên Xá
                    </div>
                    <div className="name_header_slogan">
                        Uy tín - chất lượng - bảo mật
                    </div>
                </div>

            </div>
            <div className="nav">
                <div className="menu">
                    <i className="bi bi-justify"></i>
                    Menu
                </div>
                <div className="link_list">
                    <Link
                        to=''
                        className='link_icon'
                    >
                        Trang chủ
                    </Link>
                    <Link
                        to='about'
                        className='link_icon'>
                        Giới thiệu
                    </Link>
                    <Link

                        to='contact'
                        className='link_icon'
                    >
                        Liên hệ
                    </Link>

                    <Link

                        to='login'
                        className='link_icon'
                    >
                        Đăng nhập
                    </Link>
                    <Link

                        to='register'
                        className='link_icon'
                    >
                        Đăng ký
                    </Link>

                </div>
            </div>


        </div>
    )
}
export default Heading