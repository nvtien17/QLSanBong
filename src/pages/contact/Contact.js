import './contact.css';
import member_Cuong from "../../App/img/member/member_cuong.jpg";
import member_Duc from "../../App/img/member/member_duc.jpg";
import member_Lan from "../../App/img/member/member_lan.jpg";
import member_Thang from "../../App/img/member/member_thang.jpg";
import member_Tien from "../../App/img/member/member_tien.jpg";

function Contact() {
    return (
        <div id='contact'>
            <h1>LIÊN HỆ</h1>
            <h2 className='subtitle'>Thông tin liên hệ</h2>
            <div className='contact_info'>
                <p>Địa chỉ sân : Số 6, Ngõ 11, Phố Nguyên Xá, Phường Minh Khai, Quận Bắc Từ Liêm, TP.Hà Nội</p>
                <p></p>
                <p>Email : nhom8pmmnm005@gmail.com</p>
                <p>Hotline : +84 362 484 984 || + 84 377 339 603</p>
            </div>

            <h2 className='subtitle'>Thông tin thành viên</h2>
            <div class="evaluate">
                <div class="evaluate__overlay"></div>
                <div class="grid wide">
                    <div class="row">
                        <div class="col l-4 m-6 c-12">
                            <div class="evaluate__user">
                                <div class="evaluate__user-img">
                                    <img src={member_Cuong} alt="" />
                                </div>
                                <div class="evaluate__content">


                                    <h3 class="evaluate__content--name">Nguyễn Mạnh Cường</h3>
                                    <p className='member_dob'>Ngày sinh : 04/05/2002</p>
                                    <p className='member_contact'> Liên hệ :
                                        0362738689 / cuongnm04@gmail.com
                                    </p>
                                    <p class="evaluate__content--desc">

                                        Sân bóng sở hữu hệ thống cơ sở vật chất hiện đại, với hệ thống chiếu sáng hiện đại, cung cấp nguồn ánh sáng chân thực nhất cho người chơi trên sân
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col l-4 m-6 c-12">
                            <div class="evaluate__user">
                                <div class="evaluate__user-img">
                                    <img src={member_Duc} alt=" " />
                                </div>
                                <div class="evaluate__content">
                                    <h3 class="evaluate__content--name">Đoàn Trung Đức</h3>
                                    <p className='member_dob'>Ngày sinh : 03/06/2002</p>
                                    <p className='member_contact'> Liên hệ :
                                        0364738987 / ducdt03@gmail.com
                                    </p>
                                    <p
                                        class="evaluate__content--desc">

                                        Sân bóng sở hữu hệ thống cơ sở vật chất hiện đại, với hệ thống chiếu sáng hiện đại, cung cấp nguồn ánh sáng chân thực nhất cho người chơi trên sân
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col l-4 m-6 c-12">
                            <div class="evaluate__user">
                                <div class="evaluate__user-img">
                                    <img src={member_Lan} alt="" />
                                </div>
                                <div class="evaluate__content">


                                    <h3 class="evaluate__content--name">Trần Giang Lân</h3>
                                    <p className='member_dob'>Ngày sinh : 28/02/2002</p>
                                    <p className='member_contact'> Liên hệ :
                                        0372210399 / lantg14@gmail.com
                                    </p>
                                    <p class="evaluate__content--desc">

                                        Sân bóng sở hữu hệ thống cơ sở vật chất hiện đại, với hệ thống chiếu sáng hiện đại, cung cấp nguồn ánh sáng chân thực nhất cho người chơi trên sân.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row2'>
                            <div class="col l-4 m-6 c-12">
                                <div class="evaluate__user">
                                    <div class="evaluate__user-img">
                                        <img src={member_Thang} alt="" />
                                    </div>
                                    <div class="evaluate__content">


                                        <h3 class="evaluate__content--name">Đặng Hữu Thắng</h3>
                                        <p className='member_dob'>Ngày sinh : 04/09/2002</p>
                                        <p className='member_contact'> Liên hệ :
                                            0362738212 / thangdh09@gmail.com
                                        </p>
                                        <p class="evaluate__content--desc">

                                            Sân bóng sở hữu hệ thống cơ sở vật chất hiện đại, với hệ thống chiếu sáng hiện đại, cung cấp nguồn ánh sáng chân thực nhất cho người chơi trên sân
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-4 m-6 c-12">
                                <div class="evaluate__user">
                                    <div class="evaluate__user-img">
                                        <img src={member_Tien} alt="" />
                                    </div>
                                    <div class="evaluate__content">


                                        <h3 class="evaluate__content--name">Nguyễn Văn Tiến</h3>
                                        <p className='member_dob'>Ngày sinh : 17/04/2002</p>
                                        <p className='member_contact'> Liên hệ :
                                            0362484984 / tiennv@gmail.com
                                        </p>
                                        <p class="evaluate__content--desc">

                                            Sân bóng sở hữu hệ thống cơ sở vật chất hiện đại, với hệ thống chiếu sáng hiện đại, cung cấp nguồn ánh sáng chân thực nhất cho người chơi trên sân
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact