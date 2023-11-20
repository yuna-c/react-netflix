import React from 'react';
import { Link } from "react-router-dom";
import ico_logo from '../img/ico_logo.png';

function Header() {
    return (
        <div className="wide-layout header-layout">
            <header className="header">
                <nav className="nav float-area">
                    <h1 className="logo-area fl">
                         <Link to="/">
                             <img src={ico_logo} alt="logo" />
                         </Link>
                    </h1>

                    <div className="gnb fr">
                        <div>
                            <select className="select" name="" id="">
                                <option value="">한국어</option>
                                <option value="">영어</option>
                            </select>
                        </div>
                        
                        <div>
                            <Link to="/login" className="btn btn-red">로그인</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}


export default Header;
