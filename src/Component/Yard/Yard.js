
const Yard = ({ value,  handleOrder}) => {
    const classElement = function (value) {
        let result = 'state_item ready';
        if (value === 0) {
            result = 'state_item short-time'
        } else if (value === -1) {
            result = 'state_item busy'
        }
        return result
    }
    const clickOrder = () => {
        handleOrder(value)
    }
    return (
        <div className="col l-4 m-6 c-12">
            <div className="yard-item">
                <div className="yard-item-img" style={{ backgroundImage: `url(${value.img})` }}>

                    <div className="yard-info">
                        <div className="overlay"></div>
                        <div className={classElement(value.state)}>
                            {value.status}
                        </div>
                    </div>
                </div>
                <div className="yard-item-info">
                    <div className="yard-item-name">
                        {value.name}
                    </div>
                    <div className="item-category">
                        <div className="categoy-title">Thể loại</div>
                        <div className="category-number">
                            Sân {value.category}
                        </div>
                    </div>
                    <div className="yart-item-vote">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="price-item">
                        <div className="price-title">
                            Giá :
                        </div>
                        <div className="price-number">{value.price} đ/h</div>
                    </div>
                    <div className={value.state === 1 ? 'main-order btn-oder' : 'main-order busy-item'} onClick={clickOrder}>
                        Đặt sân
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Yard