import { Link } from 'react-router-dom';
import '../assets/login.css';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{
            position: 'relative',
        }}>
            <div className='loginbanner'>
            </div>
            <div className='loginbanner2'>
                <h1
                    style={{
                        fontSize: '60px',
                        lineHeight: '70px',
                        marginBottom: '25px',
                        color: '#ff630e',
                        fontWeight: '700',
                        marginTop: '7%'
                    }}
                >Đăng nhập</h1>
                <p style={{
                    color: 'white',

                }}>
                    <a style={{
                        color: 'white'
                    }} href="#">Trang chủ</a>
                    <span> &gt; </span>
                    <span>đăng nhập</span>
                </p>
            </div>
            <div
                style={{
                    padding: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#f5f5f5'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        width: '390px'
                    }}
                >
                    <h1
                        style={{
                            fontSize: '24px',
                            lineHeight: '34px',
                            color: '#0e0a38',
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textAlign: 'center'
                        }}
                    >Đăng nhập</h1>
                    <span
                        style={{
                            maxWidth: '200px',
                            overflowWrap: 'break-word',
                            fontSize: '15px',
                            display: 'block',
                            color: 'red',
                        }}
                    >Sai email. Vui lòng nhập lại</span> <br />
                    <input type="text" style={{ marginBottom: '1rem' }} placeholder='Email' className='form-control' />
                    <span
                        style={{
                            marginBottom: '.5rem',
                        }}
                    >Nhập mật khẩu:</span>
                    <div style={{ position: 'relative', marginBottom: '1rem' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            style={{ paddingRight: '40px' }}
                            placeholder='Xác nhận mật khẩu'
                            className='form-control'
                        />
                        <span
                            onClick={toggleShowPassword}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                                color: '#999'
                            }}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                    }}>
                        <div>
                            <input style={{ padding: '1px' }} type="checkbox" id='signed' />
                            <label for="singed">Remember me</label>
                        </div>
                        <a style={{ color: '#f0932b' }} href="#">Forgot Password?</a>
                    </div>
                    <button
                        style={{
                            backgroundColor: '#ff630e',
                            color: 'white',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            margin: '0 auto 10px',
                            width: '100%',
                            padding: '15px',
                            border: 'none'
                        }}
                    >ĐĂNG NHẬP</button>
                    <button
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '5px',
                            fontSize: '14px',
                            margin: '0 auto 10px',
                            width: '100%',
                            padding: '15px',
                            marginBottom: '1rem',
                            display: 'flex',  // Giúp căn icon và text theo chiều ngang
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #ddd' // Thêm border để button đẹp hơn
                        }}
                    >
                        <i className="fab fa-google" style={{ marginRight: '10px' }}></i>
                        Đăng nhập bằng tài khoản Google
                    </button>

                    <p style={{
                        textAlign: 'center',
                        marginBottom: '1rem'
                    }}>Bạn chưa có tài khoản? <Link style={{ color: '#f0932b' }} to="/register">Đăng ký ngay</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
