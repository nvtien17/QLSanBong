import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../GlobalState'
import './Order.css'
function Order() {
    const context = useContext(StateContext)
    console.log(context.yard);
    return (
        <div className="order-yard ">
            <div className="overlay-order"></div>
            <div className="order-yard-main">
                <div className="order-yard-heading">
                    <div className="heading-title">
                        Đặt sân
                    </div>
                    <Link to='/' className="heading-icon-close">
                        <i className="bi bi-x-circle"></i>
                    </Link>
                </div>
                <div className="order-yard-body">
                    <div className="row-order">
                        <div className="order-yard-title">Tên sân : </div>
                        <div className="row-item-value">{context.yard.name} </div>
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Ảnh sân
                        </div>

                        <div className="row-item-value">
                            <img className='yard-img' src={context.yard.img} />
                        </div>
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Mô tả : Sân hiện đang trống có thể đặt ngay
                        </div>
                    </div>
                    <div className="order-date-yard">
                        <div className="order-yard-title">
                            Ngày đặt sân
                        </div>
                        <div className="order-date-yard-input">
                            <input className='select-day-order' type="date" name="" id="" />
                        </div>

                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Giờ đặt sân
                        </div>
                        <div className="order-time">
                            <div className='order-time-row'>
                                <div className='order-time-item'>14h-16h</div>
                                <div className='order-time-item'>16h-18h</div>
                            </div>

                            <div className='order-time-row'>
                                <div className='order-time-item'>18h-20h</div>
                                <div className='order-time-item'>20h-22h</div>
                            </div>

                        </div>

                    </div>


                    <div className="row-order">
                        <div className="order-yard-title">
                            Giá sân (1h) :
                        </div>
                        <div className="row-item-value">
                            {context.yard.price} đ
                        </div>
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Tổng số tiền cần thanh toán :
                        </div>
                        <div className="row-item-value">
                        {context.yard.price * 2} đ
                        </div>
                    </div>


                    <div className="bottom-order">
                        <div className="btn-order-yard">
                            Đặt sân
                        </div>
                    </div>

                </div>




            </div>
            <Outlet />
        </div>
    )
}
export default Order