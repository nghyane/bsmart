import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Tìm hiểu phát triển ứng dụng web từ các chuyên gia',
      date: '12/30/2023',
      category: 'Lập trình & thiết kế web',
      image: 'assets/images/blog-member.jpg',
      excerpt: 'Điều quan trọng là phải có một dịch vụ khách hàng tốt, một nhà cung cấp dịch vụ khách hàng. Hendrerit của Hạm đội Xe tải trẻ em không có thùng. Trong trừ khi hoặc, xe tải hoặc, protein đó, bất động sản hoặc, trừ khi. Nhưng giá cả, ligula sollicitudin laoreet viverra, tra tấn các thành viên libero leo, eget nhạt nhẽo bây giờ tra tấn eu nibh. Không mềm. Cứ như vậy. điện thoại thông minh Nhưng nhu cầu, trước khi và vulutate volutpat, eros pede [...]',
    },
    {
      id: 2,
      title: 'Tìm hiểu phát triển ứng dụng web từ các chuyên gia',
      date: '12/30/2023',
      category: 'Lập trình & thiết kế web',
      image: 'assets/images/blog-member.jpg',
      excerpt: 'Điều quan trọng là phải có một dịch vụ khách hàng tốt, một nhà cung cấp dịch vụ khách hàng. Hendrerit của Hạm đội Xe tải trẻ em không có thùng. Trong trừ khi hoặc, xe tải hoặc, protein đó, bất động sản hoặc, trừ khi. Nhưng giá cả, ligula sollicitudin laoreet viverra, tra tấn các thành viên libero leo, eget nhạt nhẽo bây giờ tra tấn eu nibh. Không mềm. Cứ như vậy. điện thoại thông minh Nhưng nhu cầu, trước khi và vulutate volutpat, eros pede [...]',
    },
  ];

  return (
    <div className="wrapper blog-wrapper">
      <header className="header-main">
        {/* Add header content here */}
      </header>

      <section className="blog-area two">
        <div className="container">
          <div className="row">
            <div className="col-md-8 all-posts-wrap col-sm-12">
              <div className="blog-posts">
                {blogPosts.map(post => (
                  <div key={post.id} className="blog-posts">
                    <div className="blog-post-thumb">
                      <img src={post.image} alt="image" className="img-fluid" />
                    </div>
                    <div className="blog-posts-meta mt-3">
                      <ul>
                        <li><i className="fa fa-user"></i><a href="#">BSmart</a></li>
                        <li><i className="fa fa-calendar"></i><a href="#">{post.date}</a></li>
                        <li><i className="fa fa-tags"></i><a href="#">{post.category}</a></li>
                      </ul>
                    </div>
                    <h3>
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <div className="entry-content">
                      <p>{post.excerpt}</p>
                      <div>
                      <Link to="/blog-detail" className="btn btn-primary-custom p-2">Đọc thêm</Link>

                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
                <div className="blog-pagination text-center">
                  <ul>
                    <li><a href="#" className="active">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li>
                      <a href="#"><i className="fa fa-angle-right"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="blog-sidebar">
                <div className="search-form widget">
                  <form>
                    <input
                      type="text"
                      placeholder="Tìm kiếm bài viết..."
                      className="form-control"
                    />
                    <button type="submit"><i className="fa fa-search"></i></button>
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
                      <p className="recent-post-date mt-2" style={{ fontSize: '0.7rem !important' }}>12/30/2023</p>
                    </div>
                  </div>
                </div>

                <div className="menu-list widget">
                  <h4>Thể loại</h4>
                  <ul className="widget-list">
                    <li>
                      <a href="#"><i className="fa fa-angle-right"></i> Kinh doanh</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-angle-right"></i> Khoa học</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-angle-right"></i> Giáo dục</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-angle-right"></i> Thiết kế đồ họa</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-angle-right"></i> Lập trình</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-angle-right"></i> Thiết kế web</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default BlogPage;
