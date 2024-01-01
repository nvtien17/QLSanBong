import "./about.css";
import img1 from "../../App/img/silder/img1.jpg";
import img2 from "../../App/img/silder/img2.jpg";
import img3 from "../../App/img/silder/img3.jpg";
import img4 from "../../App/img/silder/img4.jpg";
import img5 from "../../App/img/silder/img5.jpg";
import img6 from "../../App/img/silder/img6.jpg";
import img7 from "../../App/img/silder/img7.jpg";
import img8 from "../../App/img/silder/img8.jpg";
import { NavLink } from 'react-router-dom';




function About() {
	return (
		<div className="about">
			<div className="about_row">
				<h1>VỀ CHÚNG TÔI</h1>
				<h2>Chào mừng bạn đến với "Thế giới bóng đá nguyên xá" - Nơi Hội Tụ Niềm Đam Mê Bóng Đá!</h2>
				<p>Bạn là sinh viên Đại học Công nghiệp Hà Nội hoặc một người trẻ đam mê đá bóng? Bạn muốn tận hưởng không khí sôi động của trận đấu, tận dụng thời gian rảnh rỗi để thể hiện tài năng và đam mê của mình? Hãy đến với chúng tôi - "Thế giới bóng đá nguyên xá"!</p>
				<img className="img_about" src={img1} />
			</div>
			<div className="about_row">
				<h2>Chúng tôi là ai?</h2>
				<p>
					"Thế giới bóng đá nguyên xá" không chỉ là một cửa hàng cho thuê sân bóng thông thường, mà còn là nơi hội tụ những đam mê, nơi các tay săn bàn, thủ môn xuất sắc và những đội bóng tài năng có thể tỏa sáng. Với đội ngũ nhân viên chuyên nghiệp và đam mê bóng đá, chúng tôi cam kết mang đến cho bạn trải nghiệm tuyệt vời nhất trên sân cỏ.
				</p>
				<img className="img_about" src={img2} />
			</div>
			<div className="about_row">
				<h2>Dịch vụ chúng tôi cung cấp:</h2>
				<p>
					1.<b> Cho thuê sân bóng chất lượng:</b>  Sân cỏ nhân tạo tiêu chuẩn, ánh đèn hiện đại và các tiện nghi khác như phòng thay đồ sạch sẽ, giúp bạn thoải mái hóa trải nghiệm bóng đá của mình.
				</p>
				<p>
					2.<b> Giảm giá đặc biệt cho sinh viên:</b>  Chúng tôi hiểu rõ áp lực tài chính đối với sinh viên, vì vậy chúng tôi cung cấp giảm giá đặc biệt để đảm bảo bạn có cơ hội tham gia vào hoạt động thể thao yêu thích mà không làm ảnh hưởng đến ngân sách của bạn.
				</p>
				<p>
					3. <b>Tổ chức giải đấu và sự kiện: </b>
					Chúng tôi tổ chức các giải đấu thường xuyên, mang đến không khí cạnh tranh và hứng khởi cho cộng đồng đam mê bóng đá.
				</p>
				<p>
					4. <b>Tiện ích và dịch vụ khác:
					</b>  Ngoài ra, "Thế giới bóng đá nguyên xá" còn cung cấp các tiện ích khác tại canteen sân như café bóng đá, nơi thư giãn sau trận đấu và nhiều dịch vụ khác để làm cho trải nghiệm của bạn trọn vẹn.
				</p>
				<p>Việc bạn cần phải làm chỉ là
					<NavLink
						to='/contact'
					> liên hệ </NavLink>ngay cho chúng tôi để tham khảo các dịch vụ trước khi tiến hành đặt sân, phản hồi nhanh chóng và giải đáp mọi thắc mắc khách hàng là nhiệm vụ hàng đầu chúng tôi sẽ thực hiện.

				</p>
			</div>
			<div className="about_row">
				<h2>Những hình ảnh tại "Thế giới bóng đá Nguyên Xá</h2>
				<div className="img_about_list">
					<img src={img1} />
					<img src={img2} />
					<img src={img3} />
					<img src={img4} />
					<img src={img5} />
					<img src={img6} />
					<img src={img7} />
					<img src={img8} />
					<img src={img1} />

				</div>
			</div>
			<div className="about_row">
				<h2>Chúng tôi đang chờ đón bạn!</h2>
				<p>Hãy đến với chúng tôi để trải nghiệm không gian "Thế giới bóng đá nguyên xá" - nơi bạn không chỉ chơi bóng, mà còn tận hưởng niềm vui và đam mê của mình. Đừng để cuộc vui trôi qua, hãy đặt sân ngay hôm nay và hòa mình vào không khí sôi động của bóng đá!</p>
			</div>
		</div>
	)
}
export default About