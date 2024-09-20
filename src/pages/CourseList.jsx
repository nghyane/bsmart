
import Collapsible from 'react-collapsible';


const CourseList = () => {
  return (
    <div>
      {/* Start courses */}
      <section className="banner__aboutus custom-background">
        <div className="container  " >
          <div className="caption-content text-center">
            <h2 className="title-banner2">Danh sách khóa học</h2>
            <p>
              <a href="/">
                <strong>Trang chủ</strong>
              </a>
              <span> &gt; </span>
              <strong>Khóa học</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="course-content-container course-content-container-page-course">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="course-sidebar">
                {/* Khoảng giá */}
                <div className="row mb-3">
                  <div className="col-lg-12 col-md-12 mb-2">
                    <p className="course-side-lbl-item">Khoảng giá: </p>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 mb-2 custom-price-item">
                    <input type="checkbox" /> <p>Tất cả</p>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 mb-2 custom-price-item">
                    <input type="checkbox" /> <p>Dưới 1.000.000 đ</p>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 mb-2 custom-price-item">
                    <input type="checkbox" /> <p>Dưới 2.000.000 đ</p>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 custom-price-item">
                    <input type="checkbox" /> <p>Dưới 3.000.000 đ</p>
                  </div>
                </div>
                {/* Hình thức học */}
                <div className="row mb-3">
                  <div className="col-lg-12 col-md-12 mb-1">
                    <p className="course-side-lbl-item">Hình thức học: </p>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 d-flex align-items-start flex-column">
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="form-check me-1" />{" "}
                      <p style={{ color: "gray", fontSize: "0.9rem" }}>Online</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="form-check me-1" />{" "}
                      <p style={{ color: "gray", fontSize: "0.9rem" }}>Offline</p>
                    </div>
                  </div>
                </div>
                {/* Level */}
                <div className="row mb-3">
                  <div className="col-lg-12 col-md-12 mb-1">
                    <p className="course-side-lbl-item">Trình độ: </p>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="form-check me-1" />
                      <p style={{ color: "gray", fontSize: "0.9rem" }}>Dễ</p>
                      <img
                        src="assets/images/icon-title-course.png"
                        className="icon-title-course"
                        alt="icon-title-course"
                        style={{ marginLeft: 50 }}
                      />
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "-10px" }}
                    >
                      <input type="checkbox" className="form-check me-1" />
                      <p style={{ color: "gray", fontSize: "0.9rem" }}>Trung bình</p>
                      <img
                        src="assets/images/icon-title-course-2.png"
                        className="icon-title-course"
                        alt="icon-title-course"
                      />
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "-10px" }}
                    >
                      <input type="checkbox" className="form-check me-1" />
                      <p style={{ color: "gray", fontSize: "0.9rem" }}>Khó</p>
                      <img
                        src="assets/images/icon-title-course-3.png"
                        className="icon-title-course"
                        alt="icon-title-course"
                        style={{ marginLeft: 44 }}
                      />
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "-10px" }}
                    >
                      <input type="checkbox" className="form-check me-1" />
                      <p style={{ color: "gray", fontSize: "0.9rem" }}>Cực khó</p>
                      <img
                        src="assets/images/icon-title-course-4.png"
                        className="icon-title-course"
                        alt="icon-title-course"
                        style={{ marginLeft: 16 }}
                      />
                    </div>
                  </div>
                </div>
                {/* Lĩnh vực */}
                <form action="#" method="post" className="category__course tag_r ">
                  <div className="d-flex align-items-center   ">
                    <i
                      className="fa fa-arrow-down icon-arrow-1 me-2"
                      style={{ display: "none" }}
                    />
                    <h3 className="me-2" onclick="showMore(`showLvMobile`)">
                      Lĩnh vực
                    </h3>
                    {/* <span class="openFilterCourse"
                ><i class="fa fa-arrow-down"></i
              ></span>
              <span class="closeFilterCourse"
                ><i class="fa fa-arrow-up" style="display: none"></i
              ></span> */}
                  </div>
                  {/* Show content */}
                  <div id="showLvMobile" className="  d-xs-none">
                    <div className="checkbox__course my-3  me-1">
                      <input id="idFontEnd" type="checkbox" />
                      <label htmlFor="idFontEnd">Front End</label>
                    </div>
                    <div className="checkbox__course my-3">
                        <input id="idBackEnd" type="checkbox" />
                        <label htmlFor="idBackEnd">Back End</label>
                      </div>
                    <Collapsible className='text-primary my-3' trigger="xem thêm">
                     
                      <div id="linhVuc">
                        <div className="checkbox__course my-3">
                          <input id="idDevops" type="checkbox" />
                          <label htmlFor="idDevops">Devops</label>
                        </div>
                        <div className="checkbox__course my-3">
                          <input id="idDatabase" type="checkbox" />
                          <label htmlFor="idDatabase">Database</label>
                        </div>
                      </div>
                    </Collapsible>

                  </div>
                </form>
                {/* Languages */}
                <form action="#" method="post" className="tag__course tag_r">
                  <div className="d-flex align-items-center">
                    <i
                      className="fa fa-arrow-down icon-arrow-2 me-2"
                      style={{ display: "none" }}
                    />
                    <h3 onclick="showMore(`showSubMobi`)">Ngôn ngữ</h3>
                  </div>
                  <div id="showSubMobi" className="tag__course d-xs-none">
                    <div>
                      <div className="checkbox__course my-3">
                        <input id="idLanguageC" type="checkbox" />
                        <label htmlFor="idLanguageC" >Ngôn ngữ C/C++</label>
                      </div>
                      <div className="checkbox__course my-3">
                        <input id="idJavascript" type="checkbox" />
                        <label htmlFor="idJavascript">Javascript</label>
                      </div>
                      <div className="checkbox__course my-3">
                        <input id="idDotNet" type="checkbox" />
                        <label htmlFor="idDotNet">.NET Core</label>
                      </div>
                      <div className="checkbox__course my-3">
                        <input id="idReactJS" type="checkbox" />
                        <label htmlFor="idReactJS">ReactJS</label>
                      </div>
                      <Collapsible className='text-primary my-3' trigger="xem thêm">
                     
                      <div id="subject">
                        <div className="checkbox__course my-3">
                          <input id="idTypescript" type="checkbox" />
                          <label htmlFor="idTypescript">Typescript</label>
                        </div>
                        <div className="checkbox__course my-3">
                          <input id="idNodeJS" type="checkbox" />
                          <label htmlFor="idNodeJS">NodeJS</label>
                        </div>
                        <div className="checkbox__course my-3">
                          <input id="idDatabase" type="checkbox" />
                          <label htmlFor="idDatabase">Database Sql</label>
                        </div>
                        <div className="checkbox__course my-3">
                          <input id="idMongoDB" type="checkbox" />
                          <label htmlFor="idMongoDB">Database MongoDB</label>
                        </div>
                      </div>
                    </Collapsible>
                   
                      {/* Show more ,`upIcon1`,`downIcon1`*/}
                      <div
                        id="showMore"
                        onclick="showMoreLocal(`subject`,`txtShowTitle1`, `upIcon1`, `downIcon1`)"
                      >
                        <a className="txtShow">
                          <span id="txtShowTitle1">Thu gọn</span>
                          <i
                            id="downIcon1"
                            style={{ display: "none" }}
                            className="fa fa-arrow-down"
                            aria-hidden="true"
                          />
                          <i
                            id="upIcon1"
                            style={{ display: "block" }}
                            className="fa fa-arrow-up"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
                {/* Hide */}
                <form
                  action="#"
                  method="post"
                  className="tag__form tag_r"
                  style={{ display: "none" }}
                >
                  <h3 onclick="showMore(`showHTMobi`)">Hình thức</h3>
                  <div id="showHTMobi" className="tag__course d-xs-none">
                    <div>
                      <div className="checkbox__course">
                        <input id="idOnline" type="checkbox" />
                        <label htmlFor="idOnline">Online</label>
                      </div>
                      <div className="checkbox__course">
                        <input id="idOffline" type="checkbox" />
                        <label htmlFor="idOffline">Offline</label>
                      </div>
                    </div>
                  </div>
                </form>
                <form
                  action="#"
                  method="post"
                  className="tag__location tag_r"
                  style={{ display: "none" }}
                >
                  <h3 onclick="showMore(`showLocalMobi`)">Khu vực</h3>
                  <div id="showLocalMobi" className="tag__course d-xs-none">
                    <div>
                      <div className="checkbox__course">
                        <input id="idQ1" type="checkbox" />
                        <label htmlFor="idQ1">Quận 1</label>
                      </div>
                      <div className="checkbox__course">
                        <input id="idQ2" type="checkbox" />
                        <label htmlFor="idQ2">Quận 2</label>
                      </div>
                      <div className="checkbox__course">
                        <input id="idQ3" type="checkbox" />
                        <label htmlFor="idQ3">Quận 3</label>
                      </div>
                      <div className="checkbox__course">
                        <input id="idQ4" type="checkbox" />
                        <label htmlFor="idQ4">Quận 4</label>
                      </div>
                      {/*  */}
                      <div id="local" style={{ display: "none" }}>
                        <div className="checkbox__course">
                          <input id="idQ5" type="checkbox" />
                          <label htmlFor="idQ5">Quận 5</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idQ6" type="checkbox" />
                          <label htmlFor="idQ6">Quận 6</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idQ7" type="checkbox" />
                          <label htmlFor="idQ7">Quận 7</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idQ8" type="checkbox" />
                          <label htmlFor="idQ8">Quận 8</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idQ9" type="checkbox" />
                          <label htmlFor="idQ9">Quận 9</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idQ10" type="checkbox" />
                          <label htmlFor="idQ10">Quận 10</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idQ11" type="checkbox" />
                          <label htmlFor="idQ11">Quận 11</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idQ12" type="checkbox" />
                          <label htmlFor="idQ12">Quận 12</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idThuDuc" type="checkbox" />
                          <label htmlFor="idThuDuc">Thủ Đức</label>
                        </div>
                        <div className="checkbox__course">
                          <input id="idBinhChanh" type="checkbox" />
                          <label htmlFor="idBinhChanh">Bình Chánh</label>
                        </div>
                      </div>
                      <div
                        id="showMore"
                        onclick="showMoreLocal(`local`,`txtShowTitle2`,`upIcon2`,`downIcon2`)"
                      >
                        <a className="txtShow">
                          <span id="txtShowTitle2">Xem thêm</span>
                          <i
                            id="downIcon2"
                            className="fa fa-arrow-down"
                            aria-hidden="true"
                          />
                          <i
                            id="upIcon2"
                            className="fa fa-arrow-up"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
                {/* Hide */}
                {/* Search */}
                {/* <form action="#" method="post" class="course-sidebar-search">
            <input id="input-search-course" type="text" placeholder="Tìm kiếm ..." class="form-control" />
            <button class="fa fa-search icon-search-btn-course"
              onclick="event.preventDefault(); handleSearchCourseBtn()"></button>
          </form> */}
                <button className="btn-search-course w-100">Tìm kiếm</button>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="courses-list-content">
                <div className="d-flex flex-row  justify-content-between">
                  <div className="d-flex counter-course gap-2">
                    <h5 className="fw-bold">0 </h5>
                    <p> Khoá học</p>
                  </div>
                  <form action="#" method="post">
                    <select className="form-select">
                      <option selected="">Sắp xếp khoá học</option>
                      <option value={1}>Khoá học mới nhất</option>
                      <option value={2}>Khoá học nhiều người học</option>
                      <option value={3}>Khoá học sắp bắt đầu</option>
                      <option value={3}>A - Z</option>
                      <option value={3}>Z - A</option>
                    </select>
                  </form>
                </div>
                {/* render course list */}
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
                              href="./course-detail.html"
                              className="btn btn-primary-custom p-3"
                            >
                              Xem chi tiết
                            </a>
                            <a
                              id="linkIntro"
                              href="#"
                              className="btn btn-outline-secondary-custom w-100 p-3"
                            >
                              Mã giới thiệu
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
                              href="./course-detail.html"
                              className="btn btn-primary-custom p-3"
                            >
                              Xem chi tiết
                            </a>
                            <a
                              id="linkIntro"
                              href="#"
                              className="btn btn-outline-secondary-custom w-100 p-3"
                            >
                              Mã giới thiệu
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
                              href="./course-detail.html"
                              className="btn btn-primary-custom p-3"
                            >
                              Xem chi tiết
                            </a>
                            <a
                              id="linkIntro"
                              href="#"
                              className="btn btn-outline-secondary-custom w-100 p-3"
                            >
                              Mã giới thiệu
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* render course list */}
                <div className="d-flex justify-content-center align-items-center pag-course-bottom">
                  <div className="course-pagination">
                    <ul>
                      <li>
                        <a href="#" className="active">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
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

export default CourseList;
