import { Link } from "react-router-dom";
import '../assets/register.css';
import { useState } from "react";

const Register = () => {

    const [activeRole, setActiveRole] = useState('student');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);


    const handleRoleChange = (role) => {
        setActiveRole(role);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    return (
        <div style={{
            position: 'relative',
            marginBottom: '70px',
        }} >
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
                >Đăng ký</h1>
                <p style={{
                    color: 'white',

                }}>
                    <a style={{
                        color: 'white'
                    }} href="#">Trang chủ</a>
                    <span> &gt; </span>
                    <span>đăng ký</span>
                </p>
            </div>

            <div
                style={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white'
                }}
            >
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button 
                            className={`btn-re ${activeRole === 'student' ? 'active-login' : ''}`}
                            onClick={() => handleRoleChange('student')}
                        >
                            HỌC VIÊN
                        </button>
                        <button 
                            className={`btn-re ${activeRole === 'mentor' ? 'active-login' : ''}`}
                            onClick={() => handleRoleChange('mentor')}
                        >
                            MENTER
                        </button>
                    </div>

                </div>
                <div
                    style={{
                        margin: '0 auto',
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '10px',
                        width: '650px',
                        boxShadow : '0 0 30px rgba(51, 51, 51, 0.1)'
                    }}
                >

                    <div>
                        <label style={{ marginBottom: '.5rem', opacity: '0.5' }}>Họ và tên</label>
                        <input type="text" style={{ marginBottom: '1rem' }} placeholder='Họ và tên' className='form-control' />
                        <label style={{ marginBottom: '.5rem', opacity: '0.5' }}>Tên đăng nhập</label>
                        <input type="text" style={{ marginBottom: '1rem' }} placeholder='Tên đăng nhập' className='form-control' />
                        <label style={{ marginBottom: '.5rem', opacity: '0.5' }}>E-Mail</label>
                        <input type="text" style={{ marginBottom: '1rem' }} placeholder='E-Mail' className='form-control' />
                        <label style={{ marginBottom: '.5rem', opacity: '0.5' }}>Số điện thoại</label>
                        <input type="text" style={{ marginBottom: '1rem' }} placeholder='Số điện thoại' className='form-control' />
                        <label style={{ marginBottom: '.5rem', opacity: '0.5' }}>Nhập mật khẩu</label>
                        <div style={{ position: 'relative', marginBottom: '1rem' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                style={{ paddingRight: '40px' }} 
                                placeholder='Nhập mật khẩu'
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
                        <label style={{ marginBottom: '.5rem', opacity: '0.5' }}>Xác nhận mật khẩu</label>
                        <div style={{ position: 'relative', marginBottom: '1rem' }}>
                            <input
                                type={showPassword2 ? 'text' : 'password'}
                                style={{ paddingRight: '40px' }} 
                                placeholder='Xác nhận mật khẩu'
                                className='form-control'
                            />
                            <span
                                onClick={toggleShowPassword2}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    color: '#999'
                                }}
                            >
                                {showPassword2 ? '🙈' : '👁️'}
                            </span>
                        </div>
                        {activeRole === 'mentor' && (
                            <>
                                <label style={{ marginBottom: '.5rem', opacity: '0.5' }}>Giới thiệu bản thân</label>
                                <textarea rows={5} style={{ width: '98%', marginBottom: '1.5rem' }} name="" id=""></textarea>
                            </>
                        )}
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
                        >ĐĂNG KÝ</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
