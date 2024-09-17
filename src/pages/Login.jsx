import './login.css';

const Login = () => {
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
                    <span> > </span>
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
                        display : 'flex',
                        flexDirection : 'column',
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
                            marginBottom:'1rem',
                            textAlign : 'center'
                        }}
                    >Đăng nhập</h1>
                    <span
                        style={{
                            maxWidth: '200px',
                            overflowWrap: 'break-word',
                            fontSize: '15px',
                            display: 'block',
                            color : 'red',
                        }}
                    >Sai email. Vui lòng nhập lại</span> <br />
                    <input type="text" style={{ marginBottom : '1rem'}} placeholder='Email' className='form-control'/>
                    <span
                        style={{
                            marginBottom:'.5rem',
                        }}
                    >Nhập mật khẩu:</span>
                    <input type="password" style={{marginBottom: '.5rem'}} placeholder='Mật khẩu' className='form-control'/>
                    <div style={{
                            display: 'flex',
                            justifyContent : 'space-between',
                            marginBottom : '1rem',
                    }}>
                        <div>
                            <input type="checkbox" id='signed' />
                            <label for="singed">Remember me</label>
                        </div>
                        <a style={{ color : '#f0932b'}} href="#">Forgot Password?</a>
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
                            border : 'none'
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
                            marginBottom: '1rem'
                        }}
                    > <i>icon</i> Đăng nhập bằng tài khoản google</button>
                    <p style={{
                        textAlign: 'center',
                        marginBottom:'1rem'
                    }}>Bạn chưa có tài khoản? <a style={{color : '#f0932b'}} href="#">Đăng ký ngay</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
