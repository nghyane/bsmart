import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

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
          to="/register"
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
      <div className='advantages-page' style={{marginBottom: '60px'}}>
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
    </div>
  );
};

export default Home;