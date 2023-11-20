import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ico_fb from '../img/ico_fb.png';

function Login() {
    const [loading, setLoading] = useState(false);
    const onClick = () =>{
        setLoading(current => !current);
    }
    return (
        <>
            <div className="layout-container visual-container">
                <div className="content-layout">
                    <div className="login-area">
                        <h2 className="dep3-tit">로그인</h2>
                        <form>
                            <div className="form-input txt-center mb16">
                                <label htmlFor="email">
                                    <input type="text" id="email" className="input-login" placeholder="Email or phone number" maxLength="50" minLength="5" />
                                </label>
                            </div>
                            <div className="form-input txt-center mb16">
                                <label htmlFor="password">
                                    <input type="text" id="password" className="input-login" placeholder="Password" maxLength="50" minLength="5" />
                                </label>
                            </div>
                            <div>
                                <Link to="/detail">
                                    <button className="btn btn-login">로그인</button>
                                </Link>
                            </div>
                            <div className="form-area flex-area">
                                <label className="input-check color-gray" id="checkbox">
                                    <input type="checkbox" name="controlled"/>
                                    <span className="check"></span>Remember me
                                </label>
                                <Link to="" className="color-gray">Need help?</Link>
                            </div>
                            <div className="txt-area mt40">
                                <Link onClick={() => window.open('https://www.facebook.com/', '_self')} className="login-fb">
                                    <img src={ico_fb} alt="" className="ico-fb mr5"/>
                                    <span className="color-gray">Login with Facebook</span>
                                </Link>
                            </div>
                            <div className="txt-area mt16">
                                <p className="sing-txt fs16">
                                   New to Netflix?
                                   <Link to="" className="color-white">Sign up now.</Link> 
                                </p>
                                <div className="mt16">
                                    <span>This page is protected by Google reCAPTCHA to ensure 
                                        you're not a bot.
                                    </span>&nbsp;
                                    <span className="txt-underline" onClick={onClick}>{loading ? "read ress" : "read more" }</span>
                                    <div className="txt-area mt5">
                                        {loading ? 
                                            (
                                                <p>
                                                    The information collected by Google reCAPTCHA is subject to the Google 
                                                    &nbsp;<Link to="" className="txt-underline">Privacy Policy</Link> and &nbsp;<Link to="" className="txt-underline">Terms of Service</Link>, 
                                                    and is used for providing, maintaining, and improving the reCAPTCHA service and for 
                                                    general security purposes (it is not used for personalized advertising by Google).
                                                </p>
                                            )
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
