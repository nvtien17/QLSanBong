import './Header.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
                    <div className="link_icon">
                        Trang chủ
                    </div>
                    <div className="link_icon">
                        Giới thiệu
                    </div>
                    <div className="link_icon">
                        Liên hệ
                    </div>
                    <div className="link_icon">
                        Đăng nhập
                    </div>
                    <div className="link_icon">
                        Đăng kí
                    </div>

                </div>
            </div>
            <div className="subnav">
                <div className="search-main">
                    <input className="search_input" type="text" placeholder="Tìm kiếm trên Thế giới bóng đá Nguyên Xá ...." />
                    <div className="icon_search">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Heading