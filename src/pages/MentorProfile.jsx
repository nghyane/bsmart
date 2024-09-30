import React from "react";
import "./Mentorprofile.css";
import { Link } from "react-router-dom";
const MentorProfile = () => {
  return (
    <div>
      <section className="banner__lms">
        <div className="container">
          <div className="caption-content-lms text-center">
            <h2>Thông tin mentor</h2>
            <p
              style={{
                color: "white",
              }}
            >
              <Link to="/" className="link">
                Trang chủ
              </Link>
              <span> &gt; </span> Thông tin Mentor
            </p>
          </div>
        </div>
      </section>

      {/* Page chính */}
      <section className="content-info-mentor">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="mentor-info">
                <div className="mentor-img">
                  <img
                    src="/assets/images/avatar-mentor-1.jpg"
                    alt="hinh anh mentor"
                  />
                </div>
                <div className="mentor-details">
                  <h4>Mentor Cường</h4>
                  <p
                    style={{
                      lineHeight: "45px",
                      color: "grey",
                    }}
                  >
                    Mentor
                  </p>
                  <ul className="social-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                  <ul className="contact-info" style={{lineHeight: '25px', marginBottom: '1.5rem'}}>
                    <li>
                      <img
                        src="/assets/images/icon-gmail.png"
                        className="icon-gmail"
                        alt="icon-gmail"
                      />
                      <span>dominhquan@gmail.com</span>
                    </li>
                    <li>
                      <img
                        src="/assets/images/icon-phone.png"
                        className="icon-gmail"
                        alt="icon-gmail"
                      />
                      <span style={{ marginRight: '23px' }}>0946005077</span>
                    </li>
                  </ul>
                  <div className="contact-btn">
                    <a href="#" className="btn btn-primary-custom">
                      Liên hệ
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="about-mentor">
                <h3>Giới thiệu</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh.
                </p>
              </div>
              <div className="courses">
                <h3 className="mb-1">Khoá học tiêu biểu</h3>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <div className="card card-course-custom position-relative w-100">
                      <div className="price-cost">1.200.000 đ</div>
                      <img
                        src="/assets/images/reactjs-banner.png"
                        className="card-img-top"
                        alt="hinh-anh-front-end-banner"
                      />
                      <div className="card-body position-relative">
                        <img
                          src="/assets/images/avatar-mentor-2.jpg"
                          className="avatar-mentor"
                          alt="avatar-mentor"
                        />
                        <h5 className="card-title d-flex align-items-center">
                          {/* <a href="./course-detail.html" id="name-course">ReactJS Basic</a> */}
                          <p id="name-course">ReactJS Basic</p>
                          <img
                            src="/assets/images/icon-title-course.png"
                            className="icon-title-course"
                            alt="icon-title-course"
                          />
                        </h5>
                        <p className="sub-title">Mentor Cường</p>
                        <p className="description-detail">
                          Khóa học Lập trình ReactJS - JS Framework hướng dẫn
                          học viên làm chủ ReactJS và sử dụng ReactJS trong các
                          ứng dụng thực tế. Thông qua kiến thức của khóa học
                          này, học viên hoàn toàn có thể tự tìm hiểu các
                          Javascript Framework khác như Angular, VueJS, NextJS,
                          NuxtJS
                        </p>
                        <div className="testi-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-half-o" />
                        </div>
                        <div className="feedback-time">
                          <span className="time me-2">
                            <img
                              src="assets\images\clock-time.png"
                              className="icon-time"
                              alt="hinh-anh-front-end-icontime"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-clock me-1" /> 20hr
                          </span>
                          <span className="time me-2">
                            <img
                              src="assets\images\user.png"
                              className="icon-user"
                              alt="hinh-anh-front-end-iconuser"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-user me-1" /> 106 học viên
                          </span>
                          <span className="mark">
                            <img
                              src="assets\images\check-mark.png"
                              className="icon-V"
                              alt="hinh-anh-front-end-iconV"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-V me-1" /> 26 Slot/cour
                          </span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center"></div>
                        <div id="btnShow">
                          <a
                            id="linkSign"
                            href="#"
                            className="btn btn-primary-custom p-3"
                          >
                            Đăng ký
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <div className="card card-course-custom position-relative w-100">
                      <div className="price-cost">1.200.000 đ</div>
                      <img
                        src="/assets/images/reactjs-banner.png"
                        className="card-img-top"
                        alt="hinh-anh-front-end-banner"
                      />
                      <div className="card-body position-relative">
                        <img
                          src="/assets/images/avatar-mentor-2.jpg"
                          className="avatar-mentor"
                          alt="avatar-mentor"
                        />
                        <h5 className="card-title d-flex align-items-center">
                          <p id="name-course">ReactJS Basic</p>
                          <img
                            src="/assets/images/icon-title-course.png"
                            className="icon-title-course"
                            alt="icon-title-course"
                          />
                        </h5>
                        <p className="sub-title">Mentor Cường</p>
                        <p className="description-detail">
                          Khóa học Lập trình ReactJS - JS Framework hướng dẫn
                          học viên làm chủ ReactJS và sử dụng ReactJS trong các
                          ứng dụng thực tế. Thông qua kiến thức của khóa học
                          này, học viên hoàn toàn có thể tự tìm hiểu các
                          Javascript Framework khác như Angular, VueJS, NextJS,
                          NuxtJS
                        </p>
                        <div className="testi-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-half-o" />
                        </div>
                        <div className="feedback-time">
                          <span className="time me-2">
                            <img
                              src="assets\images\clock-time.png"
                              className="icon-time"
                              alt="hinh-anh-front-end-icontime"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-clock me-1" /> 20hr
                          </span>
                          <span className="time me-2">
                            <img
                              src="assets\images\user.png"
                              className="icon-user"
                              alt="hinh-anh-front-end-iconuser"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-user me-1" /> 106 học viên
                          </span>
                          <span className="mark">
                            <img
                              src="assets\images\check-mark.png"
                              className="icon-V"
                              alt="hinh-anh-front-end-iconV"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-V me-1" />
                            26 Slot/cour
                          </span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center"></div>
                        <div id="btnShow">
                          <a
                            id="linkSign"
                            href="#"
                            className="btn btn-primary-custom p-3"
                          >
                            Đăng ký
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <div className="card card-course-custom position-relative w-100">
                      <div className="price-cost">1.200.000 đ</div>
                      <img
                        src="/assets/images/reactjs-banner.png"
                        className="card-img-top"
                        alt="hinh-anh-front-end-banner"
                      />
                      <div className="card-body position-relative">
                        <img
                          src="/assets/images/avatar-mentor-2.jpg"
                          className="avatar-mentor"
                          alt="avatar-mentor"
                        />
                        <h5 className="card-title d-flex align-items-center">
                          {/* <a href="./course-detail.html" id="name-course">ReactJS Basic</a> */}
                          <p id="name-course">ReactJS Basic</p>
                          <img
                            src="/assets/images/icon-title-course.png"
                            className="icon-title-course"
                            alt="icon-title-course"
                          />
                        </h5>
                        <p className="sub-title">Mentor Cường</p>
                        <p className="description-detail">
                          Khóa học Lập trình ReactJS - JS Framework hướng dẫn
                          học viên làm chủ ReactJS và sử dụng ReactJS trong các
                          ứng dụng thực tế. Thông qua kiến thức của khóa học
                          này, học viên hoàn toàn có thể tự tìm hiểu các
                          Javascript Framework khác như Angular, VueJS, NextJS,
                          NuxtJS
                        </p>
                        <div className="testi-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-half-o" />
                        </div>
                        <div className="feedback-time">
                          <span className="time me-2">
                            <img
                              src="assets\images\clock-time.png"
                              className="icon-time"
                              alt="hinh-anh-front-end-icontime"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-clock me-1" /> 20hr
                          </span>
                          <span className="time me-2">
                            <img
                              src="assets\images\user.png"
                              className="icon-user"
                              alt="hinh-anh-front-end-iconuser"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-user me-1" /> 106 học viên
                          </span>
                          <span className="mark">
                            <img
                              src="assets\images\check-mark.png"
                              className="icon-V"
                              alt="hinh-anh-front-end-iconV"
                              style={{ display: "inline-block" }}
                            />
                            <i className="cl-icon-V me-1" />
                            26 Slot/cour
                          </span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center"></div>
                        <div id="btnShow">
                          <a
                            id="linkSign"
                            href="#"
                            className="btn btn-primary-custom p-3"
                          >
                            Đăng ký
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Render course representative */}
              {/* Experience */}
              <div className="experience mt-3">
                <h3 className="text-uppercase fs-3 fw-bold">Kinh nghiệm thực tế</h3>
                <p>
                  Tôi có kinh nghiệm 10 năm với vai trò là một seniot web
                  developer (2010 - Hiện tại) tại CodeMex. Ngoài ra, tôi còn là
                  mentor của trung tâm lập trình WebCode trong hơn 5 năm (2005
                  -2010).
                </p>
              </div>
              <div className="row mentor-profile-counter mt-3 ">
                <div className="col-lg-6">
                  <div className="counter-single text-center mb-3 border p-4 bg-light rounded-pill">
                    <div className="counter-number pt-2">
                      <h2>
                        <span>20</span>+
                      </h2>
                    </div>
                    <div className="fs-5 fst-italic">
                      <p>Khoá học</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="counter-single text-center mb-3 border p-4 bg-light rounded-pill">
                    <div className="counter-number pt-2">
                      <h2>
                        <span>10,000</span>+
                      </h2>
                    </div>
                    <div className="fs-5 fst-italic">
                      <p>Học viên</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorProfile;
