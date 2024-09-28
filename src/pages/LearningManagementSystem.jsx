import { Link } from "react-router-dom";
import "./lms.css";
import { RiFileChart2Fill } from "react-icons/ri";
const LearningManagementSystem = () => {
  return (
    <div>
      <section className="banner__lms">
        <div className="container">
          <div className="caption-content-lms text-center">
            <h2>Nền tảng Lms</h2>
            <p
              style={{
                color: "white",
              }}
            >
              <Link to="/" className="link">
                Trang chủ
              </Link>
              <span> &gt; </span> Nền tảng LMS
            </p>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="section2">
        <div className="container">
          <div className="row">
            <div className="introduction">
              <h3 className="titles2">LMS là gì?</h3>
              <div className="col-md-12 mt-4">
                <div className="employ__box">
                  <img src="/assets/images/banner.jpg" alt="hinh anh" />
                </div>
              </div>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "21px",
                  textAlign: "justify",
                  fontWeight: "500",
                  lineHeight: "30px",
                }}
              >
                Hệ thống LMS (Learning Management System) là hệ thống quản lý
                học tập trực tuyến, phân phối, cung cấp toàn bộ các tài liệu,
                khóa học và video có liên quan đến chương trình đào tạo. Hệ
                thống được thiết kế giúp người quản lý dễ dàng tiếp cận và làm
                việc. Ngoài cung cấp nội dung, LMS cũng có thể xử lý những việc
                như đăng ký các khóa học, quản trị khoá học và phân tích các kỹ
                năng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section class="advantages advantages-lms">
        <div class="container">
          <h3 class="section-heading section-heading-lms text-center title-heading-lms">
            Các tính năng của LMS
          </h3>
          <div class="row">
            <div class="col-md-3 col-xs-12 col-sm-12">
              <div class="service-card service-card-lms">
                <div class="d-flex align-items-center service-card-item-lms pt-2 pb-2 mb-3">
                  <div class="service-card-icon me-2">
                    <i class="fa-solid fa-fire-burner"></i>
                  </div>
                  <h4 class="service-card-title">Quản lý bài học</h4>
                </div>
                <div class="service-card-content">
                  Việc tự tạo ra một khóa học <br/>E–learning của chính bạn giờ đây
                  sẽ dễ dàng hơn bao hết. Chúng tôi hỗ trợ video (Mp4, v.v.),
                  PDF, Html và các tệp khác.
                </div>
              </div>
            </div>
            <div class="col-md-3 col-xs-12 col-sm-12">
              <div class="service-card service-card-lms">
                <div class="d-flex align-items-center service-card-item-lms pt-2 pb-2 mb-3">
                  <div class="service-card-icon me-2">
                    <i class="fa fa-bookmark"></i>
                  </div>
                  <h4 class="service-card-title">Tính năng thư viện</h4>
                </div>
                <div class="service-card-content">
                  Hỗ trợ và góp phần nâng cao trải nghiệm học tập của người
                  dùng, giúp việc tổng hợp và tìm kiếm tài liệu đào tạo trở nên
                  dễ dàng.
                </div>
              </div>
            </div>
            <div class="col-md-3 col-xs-12 col-sm-12">
              <div class="service-card service-card-lms">
                <div class="d-flex align-items-center service-card-item-lms pt-2 pb-2 mb-3">
                  <div class="service-card-icon me-2">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </div>
                  <h4 class="service-card-title">Kiểm tra online</h4>
                </div>
                <div class="service-card-content">
                  Kiểm soát chất lượng đào tạo trực tuyến thông qua kiểm tra
                  trực tuyến. Hỗ trợ đa dạng hình thức câu hỏi. Tự động hóa quy
                  trình chấm điểm.
                </div>
              </div>
            </div>

            <div class="col-md-3 col-xs-12 col-sm-12">
              <div class="service-card service-card-lms">
                <div class="d-flex align-items-center service-card-item-lms pt-2 pb-2 mb-3">
                  <div class="service-card-icon me-2">
                    <i class="fa fa-book"></i>
                  </div>
                  <h4 class="service-card-title">
                    Kiểm soát quá trình học tập của học viên
                  </h4>
                </div>
                <div class="service-card-content">
                  Hệ thống quản lý học tập trực tuyến giúp giảng viên có thể
                  đánh giá năng lực của học viên qua từng giai đoạn cụ thể.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section class="section4 section-lms">
        <div class="container">
          <div class="row">
            <div class="col-md-12 func">
              <h3 className="title4">Lợi ích học tập trên nền tảng lms</h3>
              <h4 class="section-lms-func-title">Đối với học viên</h4>
            </div>
            <div class="col-md-6 mb-3">
              <div class="box-bStudent box-bStudent-lms">
                <h3>Nâng cao chất lượng khóa học</h3>
                <div class="col-md-12 mt-2 box-bStudent-lms-item">
                  <div class="employ__box">
                    <img
                      class="employ_box_img"
                      src="assets\images\NÂNG CAO CHẤT LƯỢNG KHÓA HỌC.jpg"
                      alt="hinh anh"
                    />
                  </div>
                </div>
                <p>
                  Hệ thống có chức năng kiểm duyệt, điểm danh và có thể quan sát
                  học viên ra vào lớp học trực tuyến ở thời gian cụ thể. Ngoài
                  ra còn các các bài tập và quiz để kiểm tra kiến thức của học
                  viên. Thông qua đó biết được thái độ học tập của học viên để
                  có cơ sở đánh giá.
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="box-bStudent box-bStudent-lms">
                <h3>Quản lý thời gian hiệu quả</h3>
                <div class="col-md-12 mt-2 box-bStudent-lms-item">
                  <div class="employ__box">
                    <img
                      class="employ_box_img"
                      src="assets\images\QUẢN LÝ THỜI GIAN HIỆU QUẢ.jpg"
                      alt="hinh anh"
                    />
                  </div>
                </div>
                <p>
                  Học trực tuyến luôn là giải pháp tối ưu cho những ai ưa chuộng
                  việc sử dụng thời gian hiệu quả. Bạn có thể quản lý tốt thời
                  học tập và các hoạt động khác một cách chủ động và nhanh
                  chóng, chỉ cần có internet và thiết bị kết nối mạng là có thể
                  học. Do đó, bài toán thời gian và khoảng cách địa lý được giải
                  quyết một cách hiệu quả.
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="box-bStudent box-bStudent-lms">
                <h3>Thoải mái không gian học tập</h3>
                <div class="col-md-12 mt-2 box-bStudent-lms-item">
                  <div class="employ__box">
                    <img
                      class="employ_box_img"
                      src="assets\images\THOẢI MÁI KHÔNG GIAN HỌC TẬP.jpg"
                      alt="hinh anh"
                    />
                  </div>
                </div>
                <p>
                  Tâm lý ngại ngùng của cá nhân ít nhiều cũng ảnh hưởng đến việc
                  tiếp thu kiến thức với phương thức học truyền thống. Nhưng với
                  hệ thống LMS, bạn chủ động tất cả vị trí như phòng riêng, quán
                  cafe, sân vườn,…. Chỉ cần có internet, việc lựa chọn không
                  gian học tập thoải mái do bạn chọn lựa.
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="box-bStudent box-bStudent-lms">
                <h3>Cập nhật nhanh chóng chi tiết từng khóa học</h3>
                <div class="col-md-12 mt-2 box-bStudent-lms-item">
                  <div class="employ__box">
                    <img
                      class="employ_box_img"
                      src="assets\images\CẬP NHẬT NHANH CHÓNG CHI TIẾT TỪNG KHÓA HỌC.jpg"
                      alt="hinh anh"
                    />
                  </div>
                </div>
                <p>
                  Học viên có thể linh hoạt, nhanh chóng cập nhập nội dung chi
                  tiết của các khoá học khi giáo viên vừa upload. Ngoài ra, học
                  viên còn nắm bắt được những thông tin vừa thay đổi và được
                  thông báo ngay lập tức trong tài khoản cá nhân của mình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section class="section5 section-lms">
        <div class="container">
          <div class="row">
            <div class="col-md-12 func section-lms-inner">
              <h4 class="section-lms-func-title">Đối với Giảng viên</h4>
            </div>
            <div class="col-md-6 mb-3">
              <div class="box-bStudent box-bStudent-lms">
                <h3>Tương tác với học viên</h3>
                <div class="col-md-12 mt-2 box-bStudent-lms-item">
                  <div class="employ__box">
                    <img
                      class="employ_box_img"
                      src="assets\images\TƯƠNG TÁC VỚI HỌC VIÊN.jpg"
                      alt="hinh anh"
                    />
                  </div>
                </div>
                <p>
                  LMS còn giúp tất cả học viên có thể tương tác với giảng viên
                  xuyên suốt tiến độ bài giảng. Khác với việc học tập truyền
                  thống, nền tảng trực tuyến giúp giảng viên có thể ghi lại
                  những câu hỏi, thắc mắc từ phía học viên cũng như trao đổi kịp
                  thời, linh hoạt trong mọi thời gian (24/7).
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="box-bStudent box-bStudent-lms">
                <h3>Cá nhân hóa cho từng học viên</h3>
                <div class="col-md-12 mt-2 box-bStudent-lms-item">
                  <div class="employ__box">
                    <img
                      class="employ_box_img"
                      src="assets\images\CÁ NHÂN HÓA CHO TỪNG HỌC VIÊN.jpg"
                      alt="hinh anh"
                    />
                  </div>
                </div>
                <p>
                  Hướng đến môi trường học tập số hoá, quá trình học tập của học
                  viên được đảm bảo. Chương trình học tập của mỗi học viên được
                  ghi nhận cụ thể và chi tiết. Hệ thống LMS còn tạo môi trường
                  tương tác giữa người học với người học, hay với giảng viên đơn
                  giản, nhanh chóng và liên tục.
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="box-bStudent box-bStudent-lms">
                <h3>Đánh giá học viên dễ dàng</h3>
                <div class="col-md-12 mt-2 box-bStudent-lms-item">
                  <div class="employ__box">
                    <img
                      class="employ_box_img"
                      src="assets\images\ĐÁNH GIÁ HỌC VIÊN DỄ DÀNG.jpg"
                      alt="hinh anh"
                    />
                  </div>
                </div>
                <p>
                  Học viên có thể tham gia thi online để kiểm tra mức độ hiểu
                  bài. Hệ thống sẽ chấm điểm và gửi kết quả cho học viên. Ngoài
                  ra, hệ thống cũng giúp giảng viên tăng độ hấp dẫn của khóa học
                  thông qua hình thức tích lũy điểm lên level,…
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="box-bStudent box-bStudent-lms">
                <h3>Cập nhật nhanh chóng chi tiết từng khóa học</h3>
                <div class="col-md-12 mt-2 box-bStudent-lms-item">
                  <div class="employ__box">
                    <img
                      class="employ_box_img"
                      src="assets\images\CẬP NHẬT NHANH CHÓNG CHI TIẾT TỪNG KHÓA HỌC.jpg"
                      alt="hinh anh"
                    />
                  </div>
                </div>
                <p>
                  Hệ thống sẽ tự động chấm điểm giúp tiết kiệm thời gian. Nếu có
                  những thông báo công việc hoặc lịch học đột xuất, thay vì gửi
                  từng mail đến các học viên, hệ thống LMS sẽ giúp giảng viên
                  thực hiện điều đó.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section className="courses-section courses-section-mobile-home-page courses-section-desk">
  <div className="container" style={{maxWidth: '1320px'}}>
    <div className="courses-content">
      <h2 className="section-heading section-heading-course-title text-center text-dark mt-4">
        Khoá học tiêu biểu
      </h2>
      <div className="owl-carousel owl-theme">
        <div className="item ">
          <div className="card course-card">
            <div
              className="banner-course"
              style={{
                backgroundImage: "url(/assets/images/devops-course-banner.png)"
              }}
            >
              <div className="logo-course">
                <img
                  src="/assets/images/avatar-mentor-1.jpg"
                  alt="Logo devops"
                />
              </div>
            </div>
            <div className="card-body pt-5">
              <h5 className="card-title">Khoá học Devops</h5>
              <p className="sub-title">Mentor Cường</p>
              <p className="description">
                Với 15 buổi học, kết hợp giữa lý thuyết và những bài thực hành
                thực tiễn, học viên học tại BSmart sẽ có cơ hội tiếp cận xu
                hướng làm việc mới, hiện đại hơn, có khả năng sử dụng các công
                cụ hỗ trợ cho những teams đã, đang và sẽ triển khai theo mô hình
                DevOps. Khóa học DevOps on AWS của BSmart được thiết kế dựa trên
                việc tổng hợp những kinh nghiệm và kỹ năng thực tiễn trong quá
                trình làm dự án thực tế, đồng thời cập nhật và tổng hợp từ nhiều
                nguồn khác nhau, từ đó giúp học viên có cái nhìn bao quát và rõ
                nhất về DevOps.
              </p>
              <div className="testi-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <button className="btn-invite-course mt-2">Tham gia</button>
            </div>
          </div>
        </div>
        <div className="item d-flex">
          <div className="card course-card">
            <div
              className="banner-course"
              style={{
                backgroundImage: "url(/assets/images/front-end-course.png)"
              }}
            >
              <div className="logo-course">
                <img
                  src="/assets/images/avatar-mentor-2.jpg"
                  alt="Logo devops"
                />
              </div>
            </div>
            <div className="card-body pt-5">
              <h5 className="card-title">Khoá học Front End</h5>
              <p className="sub-title">Mentor Long</p>
              <p className="description">
                Khóa học Frontend là quy trình sử dụng các ngôn ngữ HTML, CSS,
                JavaScript để thiết kế, xây dựng giao diện cho trang web hoặc
                ứng dụng web, giúp người dùng có thể xem và tương tác trực tiếp
                trên đó. Mục tiêu của việc thiết kế trang web là giúp người dùng
                dễ dàng sử dụng khi mở trang web.
              </p>
              <div className="testi-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <button className="btn-invite-course mt-2">Tham gia</button>
            </div>
          </div>
        </div>
        <div className="item d-flex">
          <div className="card course-card">
            <div
              className="banner-course"
              style={{
                backgroundImage: "url(/assets/images/net-course-banner.jpg)"
              }}
            >
              <div className="logo-course">
                <img
                  src="/assets/images/avatar-mentor-3.jpg"
                  alt="Logo devops"
                />
              </div>
            </div>
            <div className="card-body pt-5">
              <h5 className="card-title">Khoá học .NET Basic</h5>
              <p className="sub-title">Mentor Phúc</p>
              <p className="description">
                Khóa học lập trình asp.net dành cho các bạn sinh viên khoa CNTT
                các trường Trung cấp - Cao đẳng - Đại học . Và tất cả các đối
                tượng yêu thích, đam mê và mong muốn trở thành lập trình viên
                công nghệ .NET
              </p>
              <div className="testi-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <button className="btn-invite-course mt-2">Tham gia</button>
            </div>
          </div>
        </div>
        <div className="item d-flex">
          <div className="card course-card">
            <div
              className="banner-course"
              style={{
                backgroundImage: "url(/assets/images/net-mvc-course.png)"
              }}
            >
              <div className="logo-course">
                <img
                  src="/assets/images/avatar-mentor-1.jpg"
                  alt="Logo devops"
                />
              </div>
            </div>
            <div className="card-body pt-5">
              <h5 className="card-title">Khoá học .NET MVC</h5>
              <p className="sub-title">Mentor Cường</p>
              <p className="description">
                Khóa học này là khóa học thứ 3 của các bạn giúp các bạn có cái
                nhìn tổng quan và các bước để xây dựng một dự án thực tế sử dụng
                ASP.NET MVC. Khóa học này mình xây dựng không theo một giáo
                trình nào mà đi thẳng vào thực tế dự án.
              </p>
              <div className="testi-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <button className="btn-invite-course mt-2">Tham gia</button>
            </div>
          </div>
        </div>
        <div className="item d-flex">
          <div className="card course-card">
            <div
              className="banner-course"
              style={{
                backgroundImage: "url(/assets/images/net-api-course.jpg)"
              }}
            >
              <div className="logo-course">
                <img
                  src="/assets/images/avatar-mentor-2.jpg"
                  alt="Logo devops"
                />
              </div>
            </div>
            <div className="card-body pt-5">
              <h5 className="card-title">Khoá học .NET API</h5>
              <p className="sub-title">Mentor Long</p>
              <p className="description">
                Khoá học này thiết kế theo phương pháp mới xây dựng một REST API
                chuẩn REST từng bước sau đó refactoring code theo Design
                Pattern.
              </p>
              <div className="testi-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <button className="btn-invite-course mt-2">Tham gia</button>
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

export default LearningManagementSystem;
