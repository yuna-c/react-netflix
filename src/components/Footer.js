import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="content-layout">
            <footer className="footer">
                <div className="info-map">
                    <p>질문이 있으신가요? 문의 전화:  
                       <a href="080-001-9587">080-001-9587</a>
                    </p> 
                </div>
                <div className="site-map">
                    <ul>
                        <li>
                            <Link to="">자주 묻는 질문</Link>
                        </li>
                        <li>
                            <Link to="">투자 정보(IR)</Link>
                        </li>
                        <li>
                            <Link to="">개인정보</Link>
                        </li>
                        <li>
                            <Link to="">속도 테스트</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="">고객 센터</Link>
                        </li>
                        <li>
                            <Link to="">입사 정보</Link>
                        </li>
                        <li>
                            <Link to="">쿠키 설정</Link>
                        </li>
                        <li>
                            <Link to="">법적 고지</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="">계정</Link>
                        </li>
                        <li>
                            <Link to="">넷플릭스 지원 디바이스</Link>
                        </li>
                        <li>
                            <Link to="">회사 정보</Link>
                        </li>
                        <li>
                            <Link to="">오직 넷플릭스에서</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="">미디어 센터</Link>
                        </li>
                        <li>
                            <Link to="">이용 약관</Link>
                        </li>
                        <li>
                            <Link to="">문의하기</Link>
                        </li>
                        <li>
                            <Link to=""></Link>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <div className="lang-area">
                        
                    </div>

                    <div className="txt-area">
                        <h6 className="txt">넷플릭스 대한민국</h6><br />
                        <h6 className="txt">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</h6><br />
                        <p>대표: 레지널드 숀 톰프슨</p>
                        <p>이메일 주소: korea@netflix.com</p>
                        <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
                        <p>사업자등록번호: 165-87-00119</p>
                        <p>클라우드 호스팅: Amazon Web Services Inc.</p>
                        <p>공정거래위원회 웹사이트</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
