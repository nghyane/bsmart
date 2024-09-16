const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h3 className="title-address">TP.Hồ Chí Minh</h3>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-4 mb-3">
                        <h3 className="quaters">Trụ sở 1: 117 Tân Cảng, Bình Thạnh</h3>
                        <p className="hotline">Hotline: 096.105.1014</p>
                        <p className="address">Address: 117 Tân Cảng, Bình Thạnh, TPHCM</p>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3">
                        <h3 className="quaters">Trụ sở 2: 117 Tân Cảng, Bình Thạnh</h3>
                        <p className="hotline">Hotline: 096.105.1014</p>
                        <p className="address">Address: 117 Tân Cảng, Bình Thạnh, TPHCM</p>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3">
                        <h3 className="quaters">Trụ sở 3: 117 Tân Cảng, Bình Thạnh</h3>
                        <p className="hotline">Hotline: 096.105.1014</p>
                        <p className="address">Address: 117 Tân Cảng, Bình Thạnh, TPHCM</p>
                    </div>
                </div>
                <hr className="text-success mt-5 mb-5" />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-3">
                        <div className="footer-logo">
                            <a href="index.html"><span className="site-logo site-logo-footer"><img src="/assets/images/icon-logo-footer.png" className="icon-logo" alt="icon-logo" /></span></a>
                            <p className="footer-about-description">
                                Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện
                                các kỹ năng lập trình của bạn. Tất cả các giảng viên của chúng
                                tôi đều có nhiều kinh nghiệm trong thực tế và giảng dạy.
                            </p>
                            <h6>Theo dõi chúng tôi tại:</h6>
                            <ul className="footer-social-icons">
                                <li>
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                </li>
                                {/* <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/company/amazingtech74/" target="_blank"><i className="fa fa-linkedin" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram" /></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCxuIkuRJkam2Ii3xPehiirw" target="_blank"><i className="fa fa-youtube-play" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3">
                        <div className="footer-menu">
                            <h4>Menu</h4>
                            <ul>
                                <li><a href="./index.html">Trang chủ</a></li>
                                <li><a href="./aboutus.html">Về chúng tôi</a></li>
                                <li><a href="./courses.html">Khoá học</a></li>
                                <li><a href="./view-mentor-profile.html">Giảng viên</a></li>
                                <li><a href="./lms.html">Nền tảng LMS</a></li>
                                <li><a href="./blog.html">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-3">
                        <div className="footer-contact">
                            <h4>Liên hệ với chúng tôi</h4>
                            <li>
                                <img src="/assets/images/icon-location.png" className="icon-location" alt="icon-location" />
                                <p className="m-0">Tòa S9.02A, Vinhomes Grand Park, Quận 9</p>
                            </li>
                            <li>
                                <img src="/assets/images/icon-gmail.png" className="icon-gmail" alt="icon-gmail" />
                                <p className="m-0">admin@bsmart.edu.vn</p>
                            </li>
                            <li className="mt-2">
                                <img src="/assets/images/icon-phone.png" className="icon-gmail" alt="icon-gmail" />
                                <p className="m-0">028 9999 79 39</p>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-success mt-5" />
            <div className="container">
                <p className="m-0 text-light text-center">
                    © Bản quyền BSmart 2022 - Empowered by <a href="#">BSmart</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
