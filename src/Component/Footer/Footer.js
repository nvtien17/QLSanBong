import React from "react";
import './Footer.css';
import img1 from '../../App/img/bank/payment-1.png';
import img2 from '../../App/img/bank/payment-2.png';
import img3 from '../../App/img/bank/payment-3.png';
import img4 from '../../App/img/bank/payment-4.png';

function Footer() {
	return (
		<footer class="footer">


			<div class="footer__information">
				<div class="grid wide">
					<div class="row">
						<div class="col l-2-4 m-6 c-12">
							<div class="footer__infomation-contact">
								<h3 class="footer__infomation--contact-heading">LIÊN HỆ</h3>
								<ul class="footer__infomation--contact-list">
									<li class="footer__infomation--contact-name">Bóng đá Nguyên Xá</li>
									<li class="footer__infomation--contact-address">Địa chỉ: Số 6, ngõ 11, Phố Nguyên Xá, Phường Minh Khai, Quận Bắc Từ Liêm, TP.Hà Nội.</li>
									<li class="footer__infomation--contact-email">Email: pmnmnhom8@gmail.vn</li>
									<li class="footer__infomation--contact-phone">Số điện thoại: 0373984009</li>
									<li>
										<div class="gird">
											<div class="row no-gutters">
												<div class="col l-3">
													<img class="footer__infomation--bank" src={img1} alt="" />
												</div>
												<div class="col l-3">
													<img class="footer__infomation--bank" src={img2} alt="" />
												</div>
												<div class="col l-3">
													<img class="footer__infomation--bank" src={img3} alt="" />
												</div>
												<div class="col l-3">
													<img class="footer__infomation--bank" src={img4} alt="" />
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="col l-2-4 m-6 c-12">
							<div class="footer__infomation-content">
								<h3 class="footer__infomation--heading">KÊNH BÁN HÀNG</h3>
								<ul class="footer__infomation--list">
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Shoope</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Sendo</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Zalo</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Lazada</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Tiki</a></li>
								</ul>
							</div>
						</div>
						<div class="col l-2-4 m-4 c-12">
							<div class="footer__infomation-content">
								<h3 class="footer__infomation--heading">TÌM HIỂU THÊM</h3>
								<ul class="footer__infomation--list">
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Về TGBD Nguyên Xá</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Chương trình khuyến mãi</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Hướng dẫn đặt hàng</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Hướng dẫn chọn sân</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Tin tức</a></li>
								</ul>
							</div>
						</div>
						<div class="col l-2-4 m-4 c-12">
							<div class="footer__infomation-content">
								<h3 class="footer__infomation--heading">CHÍNH SÁCH</h3>
								<ul class="footer__infomation--list">
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Chính sách bán hàng</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Chính sách hoàn hàng</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Chính sách vận chuyển</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Chính sách cộng tác viên</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Chính sách bảo hành</a></li>
								</ul>
							</div>
						</div>
						<div class="col l-2-4 m-4 c-12">
							<div class="footer__infomation-content">
								<h3 class="footer__infomation--heading">SẢN PHẨM</h3>
								<ul class="footer__infomation--list">
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Sản phẩm nổi bật</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Bộ sưu tập mới</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Bộ sưu tập 2022</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Sản phẩm nổi bật</a></li>
									<li class="footer__infomation--item"><a href="#" class="footer__infomation--link">Sản phẩm khuyến mãi</a></li>
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
