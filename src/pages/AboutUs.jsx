import React from 'react';

const AboutUs = () => {
  return (
    <div>
      
      <section className="banner__aboutus ">
        <div className="container  " >
          <div className="caption-content text-center">
            <h2 className="title-banner2">Về chúng tôi</h2>
            <p>
              <a href="/">
                <strong>Trang chủ</strong>
              </a>
              <span> &gt; </span>
              <strong> Về chúng tôi</strong>
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="aboutus1 ">
        <div className="container">
          <div className="aboutus-content1">
            <div className="row">
              <div className="col-md-6 col-sm-12 content-aboutus-1">
                <img className="img-2" src="assets/images/icon-logo.png" alt="Logo" />
                <h1 className="title-banner1">
                  Câu chuyện của một nhóm người với đam mê lập trình bất tận
                </h1>
                <br />
                <p className="write-1 fs-4 text-end">
                  Từ việc nhận thấy được sự khó khăn, gặp rào cản về vấn đề học tập cũng như bằng cấp của một số bạn có định hướng, đam mê về lập trình, BSmart đã tạo nên một cộng đồng cho mọi đối tượng, mọi lứa tuổi, kết nối các bạn có cùng đam mê, cùng thắc mắc để cùng phát triển...
                </p>
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="banner-aboutus1">
                  <img className="img-1" src="assets/images/banner-aboutus.jpg" alt="Hinh anh" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="banner1 custom-banner">
        <div className="container1">
          <div className="caption-content text-center ">
            <h2>SỨ MỆNH VÀ TẦM NHÌN</h2>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <p>
                  Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ năng lập trình của bạn. Tất cả các giảng viên của chúng tôi đều có nhiều kinh nghiệm trong thực tế và giảng dạy.
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center">
                <div className="my-element" />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <p>
                  Ở BSmart, chúng tôi nói không với sự muộn màng, dù là bạn người đến từ lĩnh vực ngoài công nghệ, dù bạn đến từ độ tuổi nào, chúng tôi luôn khai phá được tiềm năng ở bên trong bạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="information-2">
        <div className="content-2">
          <div className="row">
            <div className="caption_img">
              <img className="img-aboutus-4" src="/assets/images/WEB-01.png" alt="About us" style={{ width: "100%" }} />
              {/* <img className="img-aboutus-4" src="/assets/images/MOBILE-01.png" alt="Mobile version" style={{ display: "none" }} /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="information-1">
        <div className="content-1">
          <div className="row">
            <div className="caption_img1">
              <div className="img_aboutus_3">
                <a href="/courses">
                  <button className="bt-aboutus_1">ĐĂNG KÝ NGAY!</button>
                </a>
              </div>
              <img className="img-aboutus-end" src="assets/images/export 04-01.png" alt="Register Now" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>


      {/* Development Roadmap */}
      <section className="information">
        <div className="container">
          <div className="row">
            <div className="introduction">
              <h3>LỘ TRÌNH PHÁT TRIỂN</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5">
        <div className="employ__box">
          <img className="img-aboutus-1" src="assets/images/LỘ TRÌNH PHÁT TRIỂN-01.png" alt="Development Roadmap" />
          <img className="img-aboutus-2" src="assets/images/MOBILE PAGE-01.png" alt="Mobile Roadmap" />
        </div>
      </div>
    </div>
  );
};


export default AboutUs;
