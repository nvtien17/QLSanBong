import React from "react";
import './Footer.css';
import img1 from '../../App/img/bank/payment-1.png';
import img2 from '../../App/img/bank/payment-2.png';
import img3 from '../../App/img/bank/payment-3.png';
import img4 from '../../App/img/bank/payment-4.png';

function Footer() {
	return (
		<footer className="footer">


			<div className="footer__information">
				<div className="grid wide">
					<div className="row">
						<div className="col l-2-4 m-6 c-12">
							<div className="footer__infomation-contact">
								<h3 className="footer__infomation--contact-heading">LIÊN HỆ</h3>
								<ul className="footer__infomation--contact-list">
									<li className="footer__infomation--contact-name">Bóng đá Nguyên Xá</li>
									<li className="footer__infomation--contact-address">Địa chỉ: Số 6, ngõ 11, Phố Nguyên Xá, Phường Minh Khai, Quận Bắc Từ Liêm, TP.Hà Nội.</li>
									<li className="footer__infomation--contact-email">Email: pmnmnhom8@gmail.vn</li>
									<li className="footer__infomation--contact-phone">Số điện thoại: 0373984009</li>
									<li>
										<div className="gird">
											<div className="row no-gutters">
												<div className="col l-3">
													<img className="footer__infomation--bank" src={img1} alt="" />
												</div>
												<div className="col l-3">
													<img className="footer__infomation--bank" src={img2} alt="" />
												</div>
												<div className="col l-3">
													<img className="footer__infomation--bank" src={img3} alt="" />
												</div>
												<div className="col l-3">
													<img className="footer__infomation--bank" src={img4} alt="" />
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col l-2-4 m-6 c-12">
							<div className="footer__infomation-content">
								<h3 className="footer__infomation--heading">KÊNH BÁN HÀNG</h3>
								<ul className="footer__infomation--list">
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Shoope</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Sendo</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Zalo</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Lazada</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Tiki</a></li>
								</ul>
							</div>
						</div>
						<div className="col l-2-4 m-4 c-12">
							<div className="footer__infomation-content">
								<h3 className="footer__infomation--heading">TÌM HIỂU THÊM</h3>
								<ul className="footer__infomation--list">
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Về TGBD Nguyên Xá</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Chương trình khuyến mãi</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Hướng dẫn đặt hàng</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Hướng dẫn chọn sân</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Tin tức</a></li>
								</ul>
							</div>
						</div>
						<div className="col l-2-4 m-4 c-12">
							<div className="footer__infomation-content">
								<h3 className="footer__infomation--heading">CHÍNH SÁCH</h3>
								<ul className="footer__infomation--list">
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Chính sách bán hàng</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Chính sách hoàn hàng</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Chính sách vận chuyển</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Chính sách cộng tác viên</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Chính sách bảo hành</a></li>
								</ul>
							</div>
						</div>
						<div className="col l-2-4 m-4 c-12">
							<div className="footer__infomation-content">
								<h3 className="footer__infomation--heading">SẢN PHẨM</h3>
								<ul className="footer__infomation--list">
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Sản phẩm nổi bật</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Bộ sưu tập mới</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Bộ sưu tập 2024</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Sản phẩm nổi bật</a></li>
									<li className="footer__infomation--item"><a href="#" className="footer__infomation--link">Sản phẩm khuyến mãi</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer >
	)
}
export default Footer
