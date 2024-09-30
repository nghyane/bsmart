import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogDetailPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, comment });
    // Handle form submission logic here
  };

  return (
    <div className="blog-detail-wrapper">
      {/* Header component can be imported here */}
      <section className="banner__blog-detail">
      <div className="container">
        <div className="row">
          {/* start heading */}
          <div className="col-lg-12">
            <div className="banner-content text-center">
              <h1>Learn Web Applications Development from Experts</h1>
              <p>
                <a href="index.html">Trang chủ</a> <span> &gt; </span>
                <a href="index.html">Blog</a> <span> &gt; </span>
                <a href="index.html">Lập trình</a> <span> &gt; </span>Tìm hiểu phát
                triển ứng dụng web từ các chuyên gia
              </p>
            </div>
          </div>
          {/* end heading */}
        </div>
      </div>
    </section>

      <section className="blog-area two">
        <div className="container">
          <div className="row">
            <div className="col-md-8 all-posts-wrap">
              <div className="blog-posts">
                <div className="blog-post-thumb">
                  <img
                    src="assets/images/blog-member.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="blog-posts-meta">
                  <ul className="no-list-style">
                    <li>
                      <i className="fa fa-user"></i>
                      <a href="#">bsmart</a>
                    </li>
                    <li>
                      <i className="fa fa-calendar"></i>
                      <a href="#">31/12/2023</a>
                    </li>
                    <li>
                      <i className="fa fa-tags"></i>
                      <a href="#">Lập trình & thiết kế website</a>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <h1>Ứng dụng web là gì ?</h1>
                  <p>
                    Ứng dụng web là phần mềm chạy trong trình duyệt web. Các
                    doanh nghiệp cần trao đổi thông tin và phân phối dịch vụ từ
                    xa. Họ sử dụng các ứng dụng web để kết nối với khách hàng
                    một cách an toàn và thuận tiện. Các tính năng phổ biến nhất
                    trên trang web như giỏ hàng, tìm kiếm và lọc sản phẩm, nhắn
                    tin tức thì và bảng tin trên mạng xã hội đều là các ứng dụng
                    web về mặt thiết kế. Nhờ ứng dụng web, bạn có thể truy cập
                    vào chức năng phức tạp mà không cần cài đặt hay cấu hình
                    phần mềm.
                  </p>
                  <h1>Lợi ích của ứng dụng web là gì ?</h1>
                  <p>
                    Các ứng dụng web mang lại một số lợi ích và với hầu hết các
                    doanh nghiệp lớn, ứng dụng web được tận dụng dưới dạng dịch
                    vụ cho người dùng. Dưới đây là một số lợi ích phổ biến nhất
                    liên quan tới ứng dụng web.
                  </p>
                  <div className="block-quote">
                    <i className="fa fa-quote-left"></i>
                    <p>
                      "Anh cho tôi thứ mà tôi thích, anh sẽ có thứ mà anh yêu
                      cầu".
                    </p>
                    <h6>– Adam Smith</h6>
                  </div>
                  <img
                    src="assets/images/blog-member.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                  <h1>Khả năng truy cập</h1>
                  <p>
                    Người dùng có thể truy cập ứng dụng web từ mọi trình duyệt
                    web và trên nhiều thiết bị cá nhân cũng như doanh nghiệp
                    khác nhau. Các đội ngũ ở những vị trí khác nhau có thể truy
                    cập tài liệu dùng chung, hệ thống quản lý nội dung và những
                    dịch vụ khác của doanh nghiệp thông qua ứng dụng web dựa
                    trên gói đăng ký.
                  </p>
                  <h1>Phát triển hiệu quả</h1>
                  <p>
                    Như đã trình bày chi tiết, quy trình phát triển ứng dụng web
                    khá đơn giản và hiệu quả về mặt chi phí đối với doanh
                    nghiệp. Các đội ngũ có quy mô nhỏ có thể thực hiện xong các
                    chu kỳ phát triển ngắn, biến các ứng dụng web trở thành
                    phương pháp hiệu quả và có chi phí phải chăng để xây dựng
                    chương trình máy tính. Ngoài ra, vì có cùng một phiên bản
                    hoạt động trên mọi trình duyệt và thiết bị hiện đại, bạn sẽ
                    không phải tạo một số bước lặp khác nhau cho nhiều nền tảng.
                  </p>
                  <h1>Tính đơn giản cho người dùng</h1>
                  <p>
                    Người dùng không cần tải xuống ứng dụng web nên họ có thể dễ
                    dàng truy cập, đồng thời người dùng cuối không cần bảo trì
                    cũng như không cần đến dung lượng ổ cứng. Các ứng dụng web
                    tự động nhận các bản cập nhật phần mềm và bảo mật, tức là
                    chúng luôn được cập nhật và rủi ro về xâm phạm bảo mật giảm
                    xuống.
                  </p>
                  <h1>Khả năng điều chỉnh quy mô</h1>
                  <p>
                    Các doanh nghiệp dùng ứng dụng web có thể thêm người dùng
                    khi cần mà không phải bổ sung cơ sở hạ tầng hoặc phần cứng
                    tốn kém. Ngoài ra, đại đa số dữ liệu của ứng dụng web được
                    lưu trữ trên đám mây, tức là doanh nghiệp của bạn sẽ không
                    phải đầu tư thêm dung lượng lưu trữ để chạy ứng dụng web.
                  </p>
                  <div className="entry-footer">
                    <div className="post-tags">
                      <span>Tags: </span>
                      <ul>
                        <li>
                          <Link to="/tag/thiet-ke">Thiết kế</Link>
                        </li>
                        <li>
                          <Link to="/tag/phat-trien">phát triển</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="comment-respond">
                    <h4>Để lại bình luận</h4>
                    <p>
                      Tất cả các trường được đánh dấu hoa thị (*) là bắt buộc
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Họ và tên *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email liên hệ *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Điện thoại liên hệ *"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                          ></textarea>
                          <label htmlFor="floatingTextarea">
                            Vui lòng để lại bình luận của bạn vào đây.
                          </label>
                        </div>
                      </div>
                      <div className="omexo-post-btn">
                        <a href="#">Đăng bình luận</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="blog-sidebar">
                <div className="search-form widget">
                  <form>
                    <input
                      type="text"
                      placeholder="Tìm kiếm bài viết..."
                      className="form-control"
                    />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className="latest-post widget">
                  <h4>Bài viết gần đây</h4>
                  <div className="recent-post-single">
                    <div className="recent-post-cont two">
                      <h6>
                        <a className="recent-news-title" href="#">
                          Tìm hiểu phát triển ứng dụng web từ các chuyên gia
                        </a>
                      </h6>
                      <p
                        className="recent-post-date mt-2"
                        style={{ fontSize: "0.7rem !important" }}
                      >
                        12/30/2023
                      </p>
                    </div>
                  </div>
                </div>

                <div className="menu-list widget">
                  <h4>Thể loại</h4>
                  <ul className="widget-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Kinh doanh
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Khoa học
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Giáo dục
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Thiết kế đồ họa
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Lập trình
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Thiết kế web
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="menu-list widget">
                  <h4>Dòng thời gian</h4>
                  <ul className="widget-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Tháng 5, 2023
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Tháng 6, 2023
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Tháng 7, 2023
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="menu-list widget">
                  <h4>Lưu trữ</h4>
                  <ul className="widget-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Đăng ký
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Đăng nhập
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> Entries feed
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right"></i> WordPress.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
