import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-main position-relative">
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            {/* Start header social */}
            <div className="header-top-social text-left">
              <ul className="list-icons-header">
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCxuIkuRJkam2Ii3xPehiirw"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-play" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/amazingtech74/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
            {/* End header social */}
            {/* Start header contact info */}
            <div className="header-contact-info">
              <ul>
                <li className="me-4">
                  <img
                    src="/assets/images/icon-gmail.png"
                    className="icon-gmail-header"
                    alt="icon-gmail"
                  />
                  admin@bsmart.edu.vn
                </li>
                <li>
                  <img
                    src="/assets/images/icon-phone.png"
                    className="icon-gmail-header"
                    alt="icon-gmail"
                  />
                  028 9999 79 39
                </li>
              </ul>
            </div>
            {/* End header contact info */}
            {/* Start header search */}
            <div className="header-course-search w-75 d-flex justify-content-center wrapper-search">
              {/* sup-autocom-search */}
              <form action="#" method="post" className="w-75">
                <input
                  type="text"
                  placeholder="Tìm kiếm khoá học"
                  className="form-control w-100 search-course"
                  id="search-course-inp"
                />
              </form>
              <span>
                <i className="fa fa-search" />
              </span>
            </div>
            {/* End header search */}
            <div className="header-log-reg d-flex justify-content-end">
              <ul style={{ display: "flex", gap: "3px" }}>
                <li>
                  <Link to="/login" id="loginFormOpen">
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <small>|</small>
                </li>
                <li>
                  <Link to="/register">Đăng ký</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Sup search */}
      <div className="sup-autocom-search">
        <div className="autocom-box-search" style={{ display: "none" }}></div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-bottom-wrapper">
            <Link to="/">
              <img
                src="/assets/images/icon-logo.png"
                className="icon-logo"
                alt="icon-logo"
              />
            </Link>

            <nav className="navbar navbar-expand-lg">
              <a href="./index.html"></a>
              <div className="container-fluid">
                <a href="./index.html"></a>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <a href="./index.html"></a>
                    <li>
                      <Link to="/" className="nav-link nav-link-custom active">
                        Trang Chủ
                      </Link>
                    </li>
                    <li>
                      <Link to="/aboutus" className="nav-link nav-link-custom">
                        Về Chúng Tôi
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses" className="nav-link nav-link-custom">
                        Khóa học
                      </Link>
                      <div className="sub-nav">
                        <div className="content-sub-nav d-flex justify-content-between">
                          <div>
                            <Link to="/courses">Front End</Link>
                            <ul>
                              <li>
                                <a href="#">
                                  <span>+</span> Front End Basic
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span>+</span> ReactJS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span>+</span> VueJS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span>+</span> Angular
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <Link to="courses.html">Back End</Link>
                            <ul>
                              <li>
                                <a href="#">
                                  <span>+</span> NodeJS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span>+</span> .NET Core MVC
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span>+</span> .NET Core API
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <Link to="/courses">Devops</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="/view-mentor-profile"
                        className="nav-link nav-link-custom"
                      >
                        Giảng viên
                      </Link>
                    </li>
                    <li>
                      <Link to="/lms" className="nav-link nav-link-custom">
                        Nền tảng LMS
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="nav-link nav-link-custom">
                        Blog
                      </Link>

                      <ul className="sub-menu">
                        <li>
                          <a href="./Blog">Sự kiện</a>
                        </li>
                        <li>
                          <a href="./Blog">Khuyến mãi</a>
                        </li>

                        <li>
                          <a href="./Blog">Hoạt động</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="header-cart">
              <a href="#">
                <img
                  src="/assets/images/icon-shopping-cart.jpg"
                  className="icon-shopping-cart"
                  alt="icon-shopping-cart"
                />
                <span className="cart-total-number">0</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Header mobile */}
      <div className="header-mobile">
        <div className="container">
          <div className="header-mobile-content">
            <div className="header-mobile-logo">
              <Link to="/">
                <span className="site-logo">
                  <img
                    src="/assets/images/icon-logo-mobile.png"
                    className="icon-logo-mobile"
                    alt="icon-logo"
                  />
                </span>
              </Link>
            </div>
            {/* Cart */}
            <div className="header-mobile-menu-hambuger" id="activeMenu">
              <i className="fa fa-bars" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
