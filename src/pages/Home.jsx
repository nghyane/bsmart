import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import './login.css';

const contentStyle = {
};

const Home = () => {
  return (
    <div style={{
      position: 'relative'
    }}>
      <div className='home-banner'>
      </div>
      <div className='home-banner2'>
        <h1
          style={{
            fontSize: '20px',
            lineHeight: '70px',
            color: '#ff630e',
            fontWeight: '500',
            marginTop: '10%',
            letterSpacing: '2px'
          }}
        >KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
        <p style={{
          color: 'white',
          marginBottom: '20px'
        }}>
          <span
            style={{
              fontSize: '70px',
              lineHeight: '77px',
              fontWeight: '700'
            }}
          >Trở thành lập trình viên chuyên nghiệp tại BSmart</span>
        </p>
        <p style={{ color: 'white', padding: ' 0 15%', lineHeight: '30px', marginBottom: '70px' }}>
          Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ năng lập trình của bạn. Tất cả các giảng viên của chúng tôi đều có nhiều kinh nghiệm trong thực tế và giảng dạy.
        </p>
        <Link
          style={{
            padding: '20px 15px',
            border: 'none',
            borderRadius: '5px',
            fontWeight: '500'
          }}
          className='btn-home'
          to="/courses"
        >
          XEM KHÓA HỌC
        </Link>
      </div>
      <div className='aboutus-banner'>
        <div className='aboutus-overlay'>
          <h1 style={{
            fontSize: '45px',
            lineHeight: '55px',
            fontWeight: '700',
            color: '#0e0a38',
            marginBottom: '30px'
          }}>Về chúng tôi</h1>
          <div className='row' style={{ display: 'flex', padding: '0 7%' }}>
            <div className='col-md-6 col-sm-12'>
              <p style={{ fontSize: '20px', fontWeight: '500', textAlign: 'justify', lineHeight: '30px' }}>
                BSmart khai thác nhu cầu tuyển dụng lập trình, kết nối việc làm tới doanh nghiệp và tích hợp các dự án với công nghệ mới nhất vào phương pháp đào tạo tích cực cho các học viên học xong có việc làm ngay. Chương trình giảng dạy được biên soạn may đo dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.
              </p>
              <div className='d-flex mt-3 justify-content-center'>
                <Link
                  style={{
                    padding: '20px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: '500',
                    marginBottom: '20px',
                  }}
                  className='btn-home'
                  to="/register"
                >
                  XEM KHÓA HỌC
                </Link>
                <Link
                  style={{
                    padding: '20px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: '500',
                    marginBottom: '20px',
                    marginLeft: '20px'
                  }}
                  className='btn-home'
                  to="/register"
                >
                  HỖ TRỢ TƯ VẤN
                </Link>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <div className='img-aboutus'>
                <img style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 15px #000' }} src="../../public/assets/images/banner-2.jpg" alt="rere" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='advantages-page' style={{ marginBottom: '60px' }}>
        <div className='container'>
          <h2 class="section-heading text-center section-heading-title-mobile">Điểm ưu việt tại BSmart</h2>
          <div class="row">
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="service-card">
                <div class="d-flex align-items-center pt-2 pb-2">
                  <div class="card-icon me-2">
                    <i class="fa fa-check-circle-o"></i>
                  </div>
                  <h4 class="card-title-home">
                    Học theo lộ trình, có định hướng
                  </h4>
                </div>
                <div class="card-content">
                  BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm
                  phát triển năng lực và niềm đam mê lập trình của bạn để có
                  việc ngay sau học.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="service-card">
                <div class="d-flex align-items-center pt-2 pb-2">
                  <div class="card-icon me-2">
                    <i class="fa fa-cogs"></i>
                  </div>
                  <h4 class="card-title-home">
                    Nền tảng cốt lõi trong lập trình
                  </h4>
                </div>
                <div class="card-content">
                  BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất
                  trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ
                  và môi trường làm việc.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="service-card">
                <div class="d-flex align-items-center pt-2 pb-2">
                  <div class="card-icon me-2">
                    <i class="fa fa-fire"></i>
                  </div>
                  <h4 class="card-title-home">Mài giũa bạn qua thực tế</h4>
                </div>
                <div class="card-content">
                  Đội ngũ Giảng viên và các Mentor là những người dày dạn kinh
                  nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt
                  những kinh nghiệm "máu lửa" cho bạn.
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="service-card">
                <div class="d-flex align-items-center pt-2 pb-2">
                  <div class="card-icon me-2">
                    <i class="fa fa-users"></i>
                  </div>
                  <h4 class="card-title-home">
                    Mentor tận tâm
                  </h4>
                </div>
                <div class="card-content">
                  Bạn sẽ được giao dự án và làm theo Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong qui trình Scrum, Agile. Được Mentor hỗ trợ tân tâm, nhiệt tình.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="service-card">
                <div class="d-flex align-items-center pt-2 pb-2">
                  <div class="card-icon me-2">
                    <i class="fa fa-qrcode"></i>
                  </div>
                  <h4 class="card-title-home">
                    Cộng nghệ mới, thực tế
                  </h4>
                </div>
                <div class="card-content">
                  Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="service-card">
                <div class="d-flex align-items-center pt-2 pb-2">
                  <div class="card-icon me-2">
                    <i class="fa fa-trophy"></i>
                  </div>
                  <h4 class="card-title-home">Trao tay chìa khóa thành công</h4>
                </div>
                <div class="card-content">
                  Hướng dẫn viết CV, phỏng vấn. Kết nối doanh nghiệp, gặp gỡ doanh nghiệp, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='learnpath'>
        <div className='container-fluid'>
          <div className="row">
            <div class="col-md-6 col-sm-12 p-0 image-mobile-home-page">
              <div class="left-section left-section-mobile">
                <div class="left-section-content">
                  <h2 class="text-center">Trái ngành</h2>
                  <p class="text-center">From zero to hero</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 p-0 image-mobile-home-page">
              <div class="right-section right-section-mobile">
                <div class="right-section-content">
                  <h2 class="text-center">Đã biết lập trình</h2>
                  <p class="text-center">
                    Đã có kiến thức tư duy lập trình và OOP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: '40px', paddingTop: '30px' }} className="courses">
        <div className="courses-content">
          <h2 className='text-center'
            style={{
              fontSize: '45px',
              lineHeight: '55px',
              fontWeight: '700',
              color: '#0e0a38',
              marginBottom: '20px'
            }}
          >Khoá học tiêu biểu</h2>
          <div style={{ padding: '0 90px' }}>
            <Carousel
              arrows
              infinite={false}
              slidesToShow={4}  // Hiển thị 4 thẻ
              slidesToScroll={1}  // Mỗi lần cuộn 1 thẻ
            >
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    {/* Price */}
                    <div className="price-cost-detail">1.200.000 đ</div>

                    <div className="banner-course" style={{ backgroundImage: 'url(/assets/images/devops-course-banner.png)' }}>
                      <div className="logo-course">
                        <img src="/assets/images/avatar-mentor-1.jpg" alt="Logo devops" />
                      </div>
                    </div>

                    <div className="card-body pt-5">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        <div className="icon-lv-title-right">
                          <img src="/assets/images/icon-title-course.png" className="icon-title-course" alt="icon-title-course" />
                        </div>

                        {/* Title course */}
                        <h5 className="card-title">Khoá học Devops</h5>
                      </div>

                      <p className="sub-title">Mentor Cường</p>
                      <p className="description">
                        Với 15 buổi học, kết hợp giữa lý thuyết và những bài thực
                        hành thực tiễn, học viên học tại BSmart sẽ có cơ hội tiếp
                        cận xu hướng làm việc mới, hiện đại hơn, có khả năng sử
                        dụng các công cụ hỗ trợ cho những teams đã, đang và sẽ
                        triển khai theo mô hình DevOps. Khóa học DevOps on AWS của
                        BSmart được thiết kế dựa trên việc tổng hợp những kinh
                        nghiệm và kỹ năng thực tiễn trong quá trình làm dự án thực
                        tế, đồng thời cập nhật và tổng hợp từ nhiều nguồn khác
                        nhau, từ đó giúp học viên có cái nhìn bao quát và rõ nhất
                        về DevOps
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      <div className="feedback-time">
                        <div className="time">
                          <img src="assets/images/clock-time.png" className="icon-time" alt="hinh-anh-front-end-icontime" />
                          <p>20hr</p>
                        </div>

                        <div className="time">
                          <img src="assets/images/user.png" className="icon-user" alt="hinh-anh-front-end-iconuser" />
                          <p>106 học viên</p>
                        </div>

                        <div className="mark">
                          <img src="assets/images/check-mark.png" className="icon-V" alt="hinh-anh-front-end-iconV" />
                          <p>26 Buổi học</p>
                        </div>
                      </div>

                      <button className="btn-invite-course mt-2">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    {/* Price */}
                    <div className="price-cost-detail">1.200.000 đ</div>

                    <div className="banner-course" style={{ backgroundImage: 'url(/assets/images/net-course-banner.jpg)' }}>
                      <div className="logo-course">
                        <img src="/assets/images/avatar-mentor-3.jpg" alt="Logo devops" />
                      </div>
                    </div>

                    <div className="card-body pt-5">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        <div className="icon-lv-title-right">
                          <img src="/assets/images/icon-title-course.png" className="icon-title-course" alt="icon-title-course" />
                        </div>

                        {/* Title course */}
                        <h5 className="card-title">Khoá học .NET Basic</h5>
                      </div>

                      <p className="sub-title">Mentor Phúc</p>
                      <p className="description">
                        Khóa học lập trình asp.net dành cho các bạn sinh viên khoa
                        CNTT các trường Trung cấp - Cao đẳng - Đại học . Và tất cả
                        các đối tượng yêu thích, đam mê và mong muốn trở thành lập
                        trình viên công nghệ .NET
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      <div className="feedback-time">
                        <div className="time">
                          <img src="assets/images/clock-time.png" className="icon-time" alt="hinh-anh-front-end-icontime" />
                          <p>20hr</p>
                        </div>

                        <div className="time">
                          <img src="assets/images/user.png" className="icon-user" alt="hinh-anh-front-end-iconuser" />
                          <p>106 học viên</p>
                        </div>

                        <div className="mark">
                          <img src="assets/images/check-mark.png" className="icon-V" alt="hinh-anh-front-end-iconV" />
                          <p>26 Buổi học</p>
                        </div>
                      </div>

                      <button className="btn-invite-course mt-2">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    {/* Price */}
                    <div className="price-cost-detail">1.200.000 đ</div>

                    <div className="banner-course" style={{ backgroundImage: 'url(/assets/images/net-mvc-course.png)' }}>
                      <div className="logo-course">
                        <img src="/assets/images/avatar-mentor-1.jpg" alt="Logo devops" />
                      </div>
                    </div>

                    <div className="card-body pt-5">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        <div className="icon-lv-title-right">
                          <img src="/assets/images/icon-title-course.png" className="icon-title-course" alt="icon-title-course" />
                        </div>

                        {/* Title course */}
                        <h5 className="card-title">Khoá học .NET MVC</h5>
                      </div>

                      <p className="sub-title">Mentor Cường</p>
                      <p className="description">
                        Khóa học này là khóa học thứ 3 của các bạn giúp các bạn có
                        cái nhìn tổng quan và các bước để xây dựng một dự án thực
                        tế sử dụng ASP.NET MVC. Khóa học này mình xây dựng không
                        theo một giáo trình nào mà đi thẳng vào thực tế dự án.
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      <div className="feedback-time">
                        <div className="time">
                          <img src="assets/images/clock-time.png" className="icon-time" alt="hinh-anh-front-end-icontime" />
                          <p>20hr</p>
                        </div>

                        <div className="time">
                          <img src="assets/images/user.png" className="icon-user" alt="hinh-anh-front-end-iconuser" />
                          <p>106 học viên</p>
                        </div>

                        <div className="mark">
                          <img src="assets/images/check-mark.png" className="icon-V" alt="hinh-anh-front-end-iconV" />
                          <p>26 Buổi học</p>
                        </div>
                      </div>

                      <button className="btn-invite-course mt-2">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    {/* Price */}
                    <div className="price-cost-detail">1.200.000 đ</div>

                    <div className="banner-course" style={{ backgroundImage: 'url(/assets/images/front-end-course.png)' }}>
                      <div className="logo-course">
                        <img src="/assets/images/avatar-mentor-2.jpg" alt="Logo devops" />
                      </div>
                    </div>

                    <div className="card-body pt-5">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        <div className="icon-lv-title-right">
                          <img src="/assets/images/icon-title-course.png" className="icon-title-course" alt="icon-title-course" />
                        </div>

                        {/* Title course */}
                        <h5 className="card-title">Khoá học Front End</h5>
                      </div>

                      <p className="sub-title">Mentor Long</p>
                      <p className="description">
                        Khóa học Frontend là quy trình sử dụng các ngôn ngữ HTML, CSS, JavaScript để thiết kế, xây dựng giao diện cho trang web
                        hoặc ứng dụng web, giúp người dùng có thể xem và tương tác trực tiếp trên đó. Mục tiêu của việc thiết kế trang web là
                        giúp người dùng dễ dàng sử dụng khi mở trang web.
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      <div className="feedback-time">
                        <div className="time">
                          <img src="assets/images/clock-time.png" className="icon-time" alt="hinh-anh-front-end-icontime" />
                          <p>20hr</p>
                        </div>

                        <div className="time">
                          <img src="assets/images/user.png" className="icon-user" alt="hinh-anh-front-end-iconuser" />
                          <p>106 học viên</p>
                        </div>

                        <div className="mark">
                          <img src="assets/images/check-mark.png" className="icon-V" alt="hinh-anh-front-end-iconV" />
                          <p>26 Buổi học</p>
                        </div>
                      </div>

                      <button className="btn-invite-course mt-2">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    {/* Price */}
                    <div className="price-cost-detail">1.200.000 đ</div>

                    <div className="banner-course" style={{ backgroundImage: 'url(/assets/images/net-api-course.jpg)' }}>
                      <div className="logo-course">
                        <img src="/assets/images/avatar-mentor-2.jpg" alt="Logo devops" />
                      </div>
                    </div>

                    <div className="card-body pt-5">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        <div className="icon-lv-title-right">
                          <img src="/assets/images/icon-title-course.png" className="icon-title-course" alt="icon-title-course" />
                        </div>

                        {/* Title course */}
                        <h5 className="card-title">Khoá học .NET API</h5>
                      </div>

                      <p className="sub-title">Mentor Long</p>
                      <p className="description">
                        Khoá học này thiết kế theo phương pháp mới xây dựng một
                        REST API chuẩn REST từng bước sau đó refactoring code theo
                        Design Pattern.
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      <div className="feedback-time">
                        <div className="time">
                          <img src="assets/images/clock-time.png" className="icon-time" alt="hinh-anh-front-end-icontime" />
                          <p>20hr</p>
                        </div>

                        <div className="time">
                          <img src="assets/images/user.png" className="icon-user" alt="hinh-anh-front-end-iconuser" />
                          <p>106 học viên</p>
                        </div>

                        <div className="mark">
                          <img src="assets/images/check-mark.png" className="icon-V" alt="hinh-anh-front-end-iconV" />
                          <p>26 Buổi học</p>
                        </div>
                      </div>

                      <button className="btn-invite-course mt-2">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: '40px', paddingTop: '30px' }} className="menter-us">
        <div className="courses-content">
          <h2 className='text-center'
            style={{
              fontSize: '45px',
              lineHeight: '55px',
              fontWeight: '700',
              color: '#0e0a38',
              marginBottom: '20px'
            }}
          >Mentor tiêu biểu</h2>
          <div style={{ padding: '0 90px' }}>
            <Carousel
              arrows
              infinite={false}
              slidesToShow={4}  // Hiển thị 4 thẻ
              slidesToScroll={1}  // Mỗi lần cuộn 1 thẻ
            >
              <div className="owl-item" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item">
                  <div className="course-card">
                    <div className="out__sigle-mentor-home">
                      <img src="/assets/images/instructor-2.jpg" alt="" />
                      <div className="out__sigle-info">
                        <h3>Shane Warne</h3>
                        <h4>Instructor</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item">
                  <div className="course-card">
                    <div className="out__sigle-mentor-home">
                      <img src="/assets/images/instructor-2.jpg" alt="" />
                      <div className="out__sigle-info">
                        <h3>Shane Warne</h3>
                        <h4>Instructor</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item">
                  <div className="course-card">
                    <div className="out__sigle-mentor-home">
                      <img src="/assets/images/instructor-2.jpg" alt="" />
                      <div className="out__sigle-info">
                        <h3>Shane Warne</h3>
                        <h4>Instructor</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item">
                  <div className="course-card">
                    <div className="out__sigle-mentor-home">
                      <img src="/assets/images/instructor-2.jpg" alt="" />
                      <div className="out__sigle-info">
                        <h3>Shane Warne</h3>
                        <h4>Instructor</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item">
                  <div className="course-card">
                    <div className="out__sigle-mentor-home">
                      <img src="/assets/images/instructor-2.jpg" alt="" />
                      <div className="out__sigle-info">
                        <h3>Shane Warne</h3>
                        <h4>Instructor</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </Carousel>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: '40px', paddingTop: '50px' }} className="courses">
        <div className="courses-content">
          <h2 className='text-center'
            style={{
              fontSize: '45px',
              lineHeight: '55px',
              fontWeight: '700',
              color: '#0e0a38',
              marginBottom: '20px'
            }}
          >Câu chuyện của học viên</h2>
          <div style={{ padding: '0 90px' }}>
            <Carousel
              arrows
              infinite={false}
              slidesToShow={4}  // Hiển thị 4 thẻ
              slidesToScroll={1}  // Mỗi lần cuộn 1 thẻ
            >
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    <div className="banner-course" style={{ backgroundImage: 'url(https://algo.edu.vn/wp-content/uploads/2022/05/be2.jpg)' }}>
                    </div>

                    <div className="card-body">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        

                        {/* Title course */}
                        <h5 className="card-title">Karik</h5>
                      </div>

                      <p className="sub-title">.NET Basic</p>
                      <p className="sub-title">
                        
                      "Con có tự tin, mạnh dạn hơn khi trình bày, thuyết trình về lập trình"
                    
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    <div className="banner-course" style={{ backgroundImage: 'url(https://algo.edu.vn/wp-content/uploads/2022/05/ethan-2-2.jpg)' }}>
                    </div>

                    <div className="card-body">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        

                        {/* Title course */}
                        <h5 className="card-title">Ethen</h5>
                      </div>

                      <p className="sub-title">ReactJS</p>
                      <p className="sub-title">
                      
                      "Em phát triển rất nhiều, giúp các môn học trên trường dễ dàng hơn"
                    
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    <div className="banner-course" style={{ backgroundImage: 'url(https://algo.edu.vn/wp-content/uploads/2022/05/be1.jpg)' }}>
                    </div>

                    <div className="card-body">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        

                        {/* Title course */}
                        <h5 className="card-title">Sulin</h5>
                      </div>

                      <p className="sub-title">Front-end</p>
                      <p className="sub-title">
                       
                      "Có thể tự tạo nên dự án riêng và học cách quản lý,
                      phát triển dự án"
                    
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    <div className="banner-course" style={{ backgroundImage: 'url(https://algo.edu.vn/wp-content/uploads/2022/05/im3-1-1.png)' }}>
                    </div>

                    <div className="card-body">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        

                        {/* Title course */}
                        <h5 className="card-title">Trần Tiến</h5>
                      </div>

                      <p className="sub-title">ReactJS</p>
                      <p className="sub-title">
                        
                      "Con có thể thuần thục viết code, thật tuyệt vời"
                    
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: '316.5px', marginRight: '10px' }}>
                <div className="item d-flex">
                  <div className="card course-card">
                    <div className="banner-course" style={{ backgroundImage: 'url(https://algo.edu.vn/wp-content/uploads/2022/05/be2.jpg)' }}>
                    </div>

                    <div className="card-body">
                      {/* Icon lv */}
                      <div className="d-flex flex-column position-relative">
                        

                        {/* Title course */}
                        <h5 className="card-title">Karik</h5>
                      </div>

                      <p className="sub-title">.NET Basic</p>
                      <p className="sub-title">
                        
                      "Con có tự tin, mạnh dạn hơn khi trình bày, thuyết trình về lập trình"
                    
                      </p>

                      <div className="testi-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="advan-2" style={{ marginTop: '80px'}}>
        <div class="container">
          <div class="advantages-2-content">
            <h4 class="text-center">
              Định hướng và Chuẩn hoá lộ trình học tập
            </h4>
            <h2 class="text-center">
              Học Thật, Dự Án Thật, Giảng Viên Tận Tâm
            </h2>
            <div class="d-flex justify-content-center">
              <Link to="/courses" class=" btn-primary-custom-select m-2 title-index1">
                Danh sách khoá học
              </Link>
              <button class=" btn-outline-secondary-custom m-2 title-index1">
                Tư vấn lộ trình
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;