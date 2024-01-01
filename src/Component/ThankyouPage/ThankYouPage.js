import React from 'react';
import './ThankyouPage.css'
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
    const navigate = useNavigate();

    const clickReturnTT = () => {
        // Chuyển hướng đến trang chủ
        navigate('/');
    };

    return (
        <div className="thank-you-container">
            <div className="thank-you-message">
                <h1>Cảm ơn bạn đã đặt sân</h1>
                <p>Chúng tôi đã nhận được đơn đặt sân của bạn. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.</p>
                <button className='but' onClick={clickReturnTT}>Quay lại Trang chủ</button>
            </div>
        </div>
    );
};

export default ThankYouPage;
