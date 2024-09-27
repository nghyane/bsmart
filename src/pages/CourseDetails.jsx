import React from 'react';

const CourseDetails = () => {
  return (
    <div>

      <section className="banner__aboutus">
        <div className="container">
          <div className="caption-content text-center">
            <h1 className="title-banner2" >Front End Basic</h1>
            <p>
              <a href="/">Trang Chủ</a>
              <span> &gt; </span>
              <a href="/courses">Khoá học</a>
              <span> &gt; </span>
              Front End Basic
            </p>
          </div>
        </div>
      </section>
      <section className="course-single-area course-single-area-course-detail">
        <div className="container">
          <div className="row row-reverse-custom">
            <div className="col-lg-8 ">
              <div className="course-single-content">
                
                {/* revert col */}
                <div className="container-revert-list-class-on-top">
                  <div className="course-single-meta d-flex align-items-center">
                    <div className="author d-flex align-items-center">
                      <img
                        src="/assets/images/avatar-mentor-1.jpg"
                        alt="hinh anh mentor"
                      />
                      <span>bởi <strong >Mentor Cường</strong></span>
                      
                    </div>
                    <div className="course-rating d-flex align-items-center">
                      <div className="testi-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span>(8 Ratings)</span>
                    </div>
                  </div>
                  <div className="row mt-4 mb-4 course-detail-mobile-cate">
                    <div className="d-flex align-items-center">
                      <div className="col-lg-4 col-md-4 col-sm-4 me-2">
                        {/* Lĩnh vực */}
                        <div className="course-detail-cate-fe">
                          <p>Lĩnh vực:</p>
                          <a href="" className="course-detail-cate-fe-link">
                            Front End
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 me-2">
                        {/* Hình thức học */}
                        <div className="course-detail-cate-online">
                          <p>Hình thức học: </p>
                          <a href="" className="course-detail-cate-fe-link">
                            Online
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        {/* Cập độ */}
                        <div className="course-detail-cate-rate">
                          <p>Cấp độ: Trung bình</p>
                          <img
                            src="/assets/images/icon-title-course.png"
                            className="icon-level-cate"
                            alt="img-level"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-descriptions">
                    <div className="info course-descriptions-inner">
                      <p>
                        Số lượng học viên đăng ký: <span>50</span>
                      </p>
                      <p>
                        Số lượng lớp đang mở: <span>1</span>
                      </p>
                      <p>
                        Ngày khai giảng lớp học mới: <span>12/01/2023</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  {/* Description course */}
                  <div className="course-descriptions">
                    <h3 className="text-lotrinh-1">Miêu tả khoá học</h3>
                    <p>
                      Khóa học Frontend là quy trình sử dụng các ngôn ngữ HTML, CSS,
                      JavaScript để thiết kế, xây dựng giao diện cho trang web hoặc
                      ứng dụng web, giúp người dùng có thể xem và tương tác trực
                      tiếp trên đó. Mục tiêu của việc thiết kế trang web là giúp
                      người dùng dễ dàng sử dụng khi mở trang web.
                    </p>
                  </div>
                  <div className="lotrinh">
                    <h3 className="text-lotrinh-1">Lộ trình khóa học</h3>
                    <div className="ltkh">
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                      .ltkh {\n                        position: relative;\n                        border: 1px solid #ccc;\n                        padding: 10px;\n                        border-radius: 4px;\n                      }\n                    "
                        }}
                      />
                      <h2 className="text-ltkh-1">SQL for Tester - SQL4T</h2>
                      <br />

                      <div className="render-ckeditor">Render from ckeditor</div>
                      {/* End render from ckeditor */}
                    </div>
                  </div>
                  <br />
                  <br />
                  {/* List class info */}
                  <div className="container-list-class-info">
                    <h1 className="title-class-info">Danh sách lớp học</h1>
                    <div className="list-class-info mb-4">
                      <div className="container">
                        <div className="d-flex gap-3 ">
                       
                          {/* Render info class */}
                          <div
                            className="item-info-class"
                            style={{ borderRight: "1px solid #ccc" }}
                          >
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Thời gian: </p>
                              <p className="item-detail-val">7:00-9:00</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Dự kiến mở lớp: </p>
                              <p className="item-detail-val">12/01/2023</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">
                                Số học sinh đã đăng ký:{" "}
                              </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Lịch học: </p>
                              <p className="item-detail-val">Thứ 2, 6</p>
                            </div>
                            {/* Input */}
                            <input
                              type="text"
                              id="input-id-class"
                              placeholder="..."
                              className="form-control w-75 mt-1 mb-2"
                            />
                            {/* Button */}
                            <div className="list-class-info-item-btn">
                              <button className="option-info-class-btn">
                                Chọn lớp
                              </button>
                              <button className="option-info-class-btn-del">
                                Hủy chọn
                              </button>
                            </div>
                          </div>
                           
                          <div
                            className="item-info-class"
                            style={{ borderRight: "1px solid #ccc" }}
                          >
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Thời gian: </p>
                              <p className="item-detail-val">7:00-9:00</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Dự kiến mở lớp: </p>
                              <p className="item-detail-val">12/01/2023</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">
                                Số học sinh đã đăng ký:{" "}
                              </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Lịch học: </p>
                              <p className="item-detail-val">Thứ 2, 6</p>
                            </div>
                            {/* Input */}
                            <input
                              type="text"
                              id="input-id-class"
                              placeholder="..."
                              className="form-control w-75 mt-1 mb-2"
                            />
                            {/* Button */}
                            <div className="list-class-info-item-btn">
                              <button className="option-info-class-btn">
                                Chọn lớp
                              </button>
                              <button className="option-info-class-btn-del">
                                Hủy chọn
                              </button>
                            </div>
                          </div>
                          <div
                            className="item-info-class"
                            style={{ borderRight: "1px solid #ccc" }}
                          >
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Thời gian: </p>
                              <p className="item-detail-val">7:00-9:00</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Dự kiến mở lớp: </p>
                              <p className="item-detail-val">12/01/2023</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">
                                Số học sinh đã đăng ký:{" "}
                              </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Lịch học: </p>
                              <p className="item-detail-val">Thứ 2, 6</p>
                            </div>
                            {/* Input */}
                            <input
                              type="text"
                              id="input-id-class"
                              placeholder="..."
                              className="form-control w-75 mt-1 mb-2"
                            />
                            {/* Button */}
                            <div className="list-class-info-item-btn">
                              <button className="option-info-class-btn">
                                Chọn lớp
                              </button>
                              <button className="option-info-class-btn-del">
                                Hủy chọn
                              </button>
                            </div>
                          </div>
                          <div
                            className="item-info-class"
                            style={{ borderRight: "1px solid #ccc" }}
                          >
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Thời gian: </p>
                              <p className="item-detail-val">7:00-9:00</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Dự kiến mở lớp: </p>
                              <p className="item-detail-val">12/01/2023</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">
                                Số học sinh đã đăng ký:{" "}
                              </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Lịch học: </p>
                              <p className="item-detail-val">Thứ 2, 6</p>
                            </div>
                            {/* Input */}
                            <input
                              type="text"
                              id="input-id-class"
                              placeholder="..."
                              className="form-control w-75 mt-1 mb-2"
                            />
                            {/* Button */}
                            <div className="list-class-info-item-btn">
                              <button className="option-info-class-btn">
                                Chọn lớp
                              </button>
                              <button className="option-info-class-btn-del">
                                Hủy chọn
                              </button>
                            </div>
                          </div>
                          <div
                            className="item-info-class"
                            style={{ borderRight: "1px solid #ccc" }}
                          >
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Thời gian: </p>
                              <p className="item-detail-val">7:00-9:00</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Dự kiến mở lớp: </p>
                              <p className="item-detail-val">12/01/2023</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">
                                Số học sinh đã đăng ký:{" "}
                              </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Lịch học: </p>
                              <p className="item-detail-val">Thứ 2, 6</p>
                            </div>
                            {/* Input */}
                            <input
                              type="text"
                              id="input-id-class"
                              placeholder="..."
                              className="form-control w-75 mt-1 mb-2"
                            />
                            {/* Button */}
                            <div className="list-class-info-item-btn">
                              <button className="option-info-class-btn">
                                Chọn lớp
                              </button>
                              <button className="option-info-class-btn-del">
                                Hủy chọn
                              </button>
                            </div>
                          </div>
                          <div
                            className="item-info-class"
                            style={{ borderRight: "1px solid #ccc" }}
                          >
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Thời gian: </p>
                              <p className="item-detail-val">7:00-9:00</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Dự kiến mở lớp: </p>
                              <p className="item-detail-val">12/01/2023</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Số buổi học: </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">
                                Số học sinh đã đăng ký:{" "}
                              </p>
                              <p className="item-detail-val">12</p>
                            </div>
                            <div className="list-class-info-item-detail">
                              <p className="item-detail-label">Lịch học: </p>
                              <p className="item-detail-val">Thứ 2, 6</p>
                            </div>
                            {/* Input */}
                            <input
                              type="text"
                              id="input-id-class"
                              placeholder="..."
                              className="form-control w-75 mt-1 mb-2"
                            />
                            {/* Button */}
                            <div className="list-class-info-item-btn">
                              <button className="option-info-class-btn">
                                Chọn lớp
                              </button>
                              <button className="option-info-class-btn-del">
                                Hủy chọn
                              </button>
                            </div>
                          </div>
                        </div>
                    
                        {/* Render info class */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* revert col */}
                {/* Evaluate course */}
                <div className="course-review">
                  <h3>Đánh giá khoá học</h3>
                  <div className="review-content-inner">
                    <div className="review-ratings">
                      <h2>5.0</h2>
                      <span>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <p>8 ratings</p>
                    </div>
                    <div className="rating-bar">
                      <div className="rating-star">5</div>
                      <div className="rating-progress">
                        <span className="rating-progress-value" />
                      </div>
                      <div className="review-text">2 ratings</div>
                    </div>
                    <div className="rating-bar">
                      <div className="rating-star">4</div>
                      <div className="rating-progress" />
                      <div className="review-text">0 ratings</div>
                    </div>
                    <div className="rating-bar">
                      <div className="rating-star">3</div>
                      <div className="rating-progress" />
                      <div className="review-text">0 ratings</div>
                    </div>
                    <div className="rating-bar">
                      <div className="rating-star">2</div>
                      <div className="rating-progress" />
                      <div className="review-text">0 ratings</div>
                    </div>
                    <div className="rating-bar">
                      <div className="rating-star">1</div>
                      <div className="rating-progress" />
                      <div className="review-text">0 ratings</div>
                    </div>
                  </div>
                </div>
                {/* Feed back */}
                <div className="course-feedback">
                  <h3>Nhận xét</h3>
                  <div className="course-feedback-inner">
                    <div className="feedback-item">
                      <div className="feedback-heading">
                        <div className="member-avatar">
                          <img
                            src="/assets/images/avatar-mentor-2.jpg"
                            alt="hinh anh member"
                          />
                        </div>
                        <div className="member-info">
                          <p>Nikola</p>
                          <div className="d-flex align-items-center">
                            <div className="testi-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p className="ms-2">1 tháng trước</p>
                          </div>
                        </div>
                      </div>
                      <p className="feedback-content">
                        After 1st section I just want to comment that program code
                        in some parts are old and should be changed to new versions.
                        It should be more examples before project section.
                      </p>
                    </div>
                    <div className="feedback-item">
                      <div className="feedback-heading">
                        <div className="member-avatar">
                          <img
                            src="/assets/images/avatar-mentor-3.jpg"
                            alt="hinh anh member"
                          />
                        </div>
                        <div className="member-info">
                          <p>Nikola</p>
                          <div className="d-flex align-items-center">
                            <div className="testi-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p className="ms-2">1 tháng trước</p>
                          </div>
                        </div>
                      </div>
                      <p className="feedback-content">
                        After 1st section I just want to comment that program code
                        in some parts are old and should be changed to new versions.
                        It should be more examples before project section.
                      </p>
                    </div>
                    <div className="feedback-item">
                      <div className="feedback-heading">
                        <div className="member-avatar">
                          <img
                            src="/assets/images/avatar-mentor-3.jpg"
                            alt="hinh anh member"
                          />
                        </div>
                        <div className="member-info">
                          <p>Nikola</p>
                          <div className="d-flex align-items-center">
                            <div className="testi-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p className="ms-2">1 tháng trước</p>
                          </div>
                        </div>
                      </div>
                      <p className="feedback-content">
                        After 1st section I just want to comment that program code
                        in some parts are old and should be changed to new versions.
                        It should be more examples before project section.
                      </p>
                    </div>
                    <div className="feedback-item">
                      <div className="feedback-heading">
                        <div className="member-avatar">
                          <img
                            src="/assets/images/avatar-mentor-3.jpg"
                            alt="hinh anh member"
                          />
                        </div>
                        <div className="member-info">
                          <p>Nikola</p>
                          <div className="d-flex align-items-center">
                            <div className="testi-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p className="ms-2">1 tháng trước</p>
                          </div>
                        </div>
                      </div>
                      <p className="feedback-content">
                        After 1st section I just want to comment that program code
                        in some parts are old and should be changed to new versions.
                        It should be more examples before project section.
                      </p>
                    </div>
                    <div className="feedback-item">
                      <div className="feedback-heading">
                        <div className="member-avatar">
                          <img
                            src="/assets/images/avatar-mentor-3.jpg"
                            alt="hinh anh member"
                          />
                        </div>
                        <div className="member-info">
                          <p>Nikola</p>
                          <div className="d-flex align-items-center">
                            <div className="testi-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p className="ms-2">1 tháng trước</p>
                          </div>
                        </div>
                      </div>
                      <p className="feedback-content">
                        After 1st section I just want to comment that program code
                        in some parts are old and should be changed to new versions.
                        It should be more examples before project section.
                      </p>
                    </div>
                    <div className="feedback-item">
                      <div className="feedback-heading">
                        <div className="member-avatar">
                          <img
                            src="/assets/images/avatar-mentor-3.jpg"
                            alt="hinh anh member"
                          />
                        </div>
                        <div className="member-info">
                          <p>Nikola</p>
                          <div className="d-flex align-items-center">
                            <div className="testi-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p className="ms-2">1 tháng trước</p>
                          </div>
                        </div>
                      </div>
                      <p className="feedback-content">
                        After 1st section I just want to comment that program code
                        in some parts are old and should be changed to new versions.
                        It should be more examples before project section.
                      </p>
                    </div>
                  </div>
                  {/* Show more */}
                  <div className="feedback-showmore">
                    <button
                      className="btn btn-outline-secondary-custom"
                      id="btn-show-more"
                    >
                      Xem thêm
                    </button>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4 all-class">
              <div className="course-sidebar scroll-fix-on-top">
                <div className="course-banner">
                  <img src="/assets/images/front-end-course.png" />
                </div>
                <div className="mt-3 text-center">
                  <div className="course-price">
                    <span>1,200,000 VND</span>
                  </div>
                  <br />
                  <br />

                  <div className="d-flex align-items-center">
                    <label htmlFor="" className="course-detail-id-class">
                      Id class:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control w-75 ms-2 flex-grow-1"
                      placeholder="Id class..."
                      id="id-class-optioned"
                    />
                  </div>
                  {/* Link giới thiệu */}
                  <div className="container-link-copy">
                    <div style={{ marginTop: 16 }}>
                      <h1 id="enroll-btn" href="#" className="link-lbl">
                        Link Giới Thiệu:{" "}
                      </h1>
                    </div>
                    <div className="copy-link">
                      <input
                        type="text"
                        className="copy-link-input"
                        defaultValue="@ViewBag.ReferLink"
                        readOnly=""
                      />
                      <button type="button" className="copy-link-button">
                        <span className="material-icons btn-copy-link">Copy</span>
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="course-enroll-btn mt-3">
                    <a id="enroll-btn" href="#">
                      Đăng ký khoá học
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses-section courses-section-course-detail pt-2">
        <div className="container">
          <div className="courses-content col-lg-9 col-md-7">
            <h2 className="section-heading text-start fs-2">Khoá học tiêu biểu</h2>
            <div className="main-courses-list mt-3">
                  <div className="row" id="render-course-list">
                    <div className="col-lg-4 mb-3">
                      <div className="card card-course-custom position-relative">
                        <div className="price-cost">1.200.000 đ</div>
                        <img
                          src="assets/images/reactjs-banner.png"
                          className="card-img-top"
                          alt="hinh-anh-front-end-banner"
                        />
                        <div className="card-body position-relative">
                          <img
                            src="assets/images/avatar-mentor-2.jpg"
                            className="avatar-mentor"
                            alt="avatar-mentor"
                          />
                          {/* Icon lv */}
                          <div className="d-flex flex-column position-relative">
                            <div className="icon-lv-title-right">
                              <img
                                src="assets/images/icon-title-course.png"
                                className="icon-title-course"
                                alt="icon-title-course"
                              />
                            </div>
                            {/* Title course */}
                            <a
                              href="./course-detail.html"
                              className="card-title"
                              id="name-course"
                            >
                              ReactJS Basics{" "}
                            </a>
                          </div>
                          <p className="sub-title">Mentor Cường</p>
                          <p className="description">
                            Khóa học Lập trình ReactJS - JS Framework hướng dẫn học
                            viên làm chủ ReactJS và sử dụng ReactJS trong các ứng dụng
                            thực tế. Thông qua kiến thức của khóa học này, học viên
                            hoàn toàn có thể tự tìm hiểu các Javascript Framework khác
                            như Angular, VueJS, NextJS, NuxtJS
                          </p>
                          <div className="testi-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                          </div>
                          <div className="feedback-time">
                            <span className="time">
                              <img
                                src="assets\images\clock-time.png"
                                className="icon-time"
                                alt="hinh-anh-front-end-icontime"
                                style={{ display: "inline-block" }}
                              />
                              <i className="cl-icon-clock me-1" />
                              20hr
                            </span>
                            <span className="time">
                              <img
                                src="assets\images\user.png"
                                className="icon-user"
                                alt="hinh-anh-front-end-iconuser"
                                style={{ display: "inline-block" }}
                              />
                              <i className="cl-icon-user me-1" />
                              106 học viên
                            </span>
                            <span className="mark">
                              <img
                                src="assets\images\check-mark.png"
                                className="icon-V"
                                alt="hinh-anh-front-end-iconV"
                                style={{ display: "inline-block", marginRight: 4 }}
                              />
                              <i className="cl-icon-V" />
                              26 Slot/cour
                            </span>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between align-items-center"></div>
                          <div id="btnShow">
                            <a
                              id="linkSign"
                              href="/course/:courseId"
                              className="btn btn-primary-custom p-3"
                            >
                              Xem chi tiết
                            </a>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <div className="card card-course-custom position-relative">
                        <div className="price-cost">1.200.000 đ</div>
                        <img
                          src="assets/images/reactjs-banner.png"
                          className="card-img-top"
                          alt="hinh-anh-front-end-banner"
                        />
                        <div className="card-body position-relative">
                          <img
                            src="assets/images/avatar-mentor-2.jpg"
                            className="avatar-mentor"
                            alt="avatar-mentor"
                          />
                          {/* Icon lv */}
                          <div className="d-flex flex-column position-relative">
                            <div className="icon-lv-title-right">
                              <img
                                src="assets/images/icon-title-course.png"
                                className="icon-title-course"
                                alt="icon-title-course"
                              />
                            </div>
                            {/* Title course */}
                            <a
                              href="./course-detail.html"
                              className="card-title"
                              id="name-course"
                            >
                              NodeJS Basics{" "}
                            </a>
                          </div>
                          <p className="sub-title">Mentor Cường</p>
                          <p className="description">
                            Khóa học Lập trình ReactJS - JS Framework hướng dẫn học
                            viên làm chủ ReactJS và sử dụng ReactJS trong các ứng dụng
                            thực tế. Thông qua kiến thức của khóa học này, học viên
                            hoàn toàn có thể tự tìm hiểu các Javascript Framework khác
                            như Angular, VueJS, NextJS, NuxtJS
                          </p>
                          <div className="testi-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                          </div>
                          <div className="feedback-time">
                            <span className="time">
                              <img
                                src="assets\images\clock-time.png"
                                className="icon-time"
                                alt="hinh-anh-front-end-icontime"
                                style={{ display: "inline-block" }}
                              />
                              <i className="cl-icon-clock me-1" />
                              20hr
                            </span>
                            <span className="time">
                              <img
                                src="assets\images\user.png"
                                className="icon-user"
                                alt="hinh-anh-front-end-iconuser"
                                style={{ display: "inline-block" }}
                              />
                              <i className="cl-icon-user me-1" />
                              106 học viên
                            </span>
                            <span className="mark">
                              <img
                                src="assets\images\check-mark.png"
                                className="icon-V"
                                alt="hinh-anh-front-end-iconV"
                                style={{ display: "inline-block", marginRight: 4 }}
                              />
                              <i className="cl-icon-V" />
                              26 Slot/cour
                            </span>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between align-items-center"></div>
                          <div id="btnShow">
                            <a
                              id="linkSign"
                              href="/course/:courseId"
                              className="btn btn-primary-custom p-3"
                            >
                              Xem chi tiết
                            </a>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <div className="card card-course-custom position-relative">
                        <div className="price-cost">1.200.000 đ</div>
                        <img
                          src="assets/images/reactjs-banner.png"
                          className="card-img-top"
                          alt="hinh-anh-front-end-banner"
                        />
                        <div className="card-body position-relative">
                          <img
                            src="assets/images/avatar-mentor-2.jpg"
                            className="avatar-mentor"
                            alt="avatar-mentor"
                          />
                          {/* Icon lv */}
                          <div className="d-flex flex-column position-relative">
                            <div className="icon-lv-title-right">
                              <img
                                src="assets/images/icon-title-course.png"
                                className="icon-title-course"
                                alt="icon-title-course"
                              />
                            </div>
                            {/* Title course */}
                            <a
                              href="./course-detail.html"
                              className="card-title"
                              id="name-course"
                            >
                              HTML/ CSS Basics{" "}
                            </a>
                          </div>
                          <p className="sub-title">Mentor Cường</p>
                          <p className="description">
                            Khóa học Lập trình ReactJS - JS Framework hướng dẫn học
                            viên làm chủ ReactJS và sử dụng ReactJS trong các ứng dụng
                            thực tế. Thông qua kiến thức của khóa học này, học viên
                            hoàn toàn có thể tự tìm hiểu các Javascript Framework khác
                            như Angular, VueJS, NextJS, NuxtJS
                          </p>
                          <div className="testi-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                          </div>
                          <div className="feedback-time">
                            <span className="time">
                              <img
                                src="assets\images\clock-time.png"
                                className="icon-time"
                                alt="hinh-anh-front-end-icontime"
                                style={{ display: "inline-block" }}
                              />
                              <i className="cl-icon-clock me-1" /> 20hr
                            </span>
                            <span className="time">
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
                                style={{ display: "inline-block", marginRight: 4 }}
                              />
                              <i className="cl-icon-V" /> 26 Slot/cour
                            </span>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between align-items-center"></div>
                          <div id="btnShow">
                            <a
                              id="linkSign"
                              href="/course/:courseId"
                              className="btn btn-primary-custom p-3"
                            >
                              Xem chi tiết
                            </a>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default CourseDetails;
