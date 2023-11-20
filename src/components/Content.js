import React from 'react';
import ico_pc from '../img/ico_pc.png';
import ico_mo from '../img/ico_mo.jpg';
import ico_device from '../img/ico_device.png';
import ico_keds from '../img/ico_keds.png';
import video_01 from '../img/video_01.m4v';
import video_02 from '../img/video_02.m4v';
import ToggleList from '../ToggleList';

function Content() {
    return (
        <>
            <div className="layout-container visual-container">
                <div className="content-layout">
                    <h2 className="dep1-tit txt-center">영화와 시리즈를<br />무제한으로
                        <small className="mg16">다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</small>
                    </h2>
                    <p className="tit txt-center mg16">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                    
                    <div className="form-input txt-center">
                        <label htmlFor="email">
                            <input className="input-text input-text-form" type="email" id="email" placeholder="이메일 주소" maxLength="50" minLength="5" />
                        </label>
                        <button className="btn btn-red btn-square">
                            <span className="relative">시작하기
                                <div className="arrow absolute">화살표</div>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="layout-container">
                <div className="content-layout">
                    <div className="flex-area">
                        <div className="tit-area">
                            <h3 className="dep2-tit">
                                TV로 즐기세요.
                                <small>
                                    스마트 TV, PlayStation, Xbox, Chromecast,<br /> 
                                    Apple TV, 블루레이 플레이어 등 다양한<br />
                                    디바이스에서 시청하세요.
                                </small>
                            </h3>
                        </div>
                        <div className="img-area">
                            <img src={ico_pc} alt="pc"/>
                            <div className="video-area video-type1">
                                <video autoPlay="autoplay" playsInline="playsinline" muted="muted" loop="loop">
                                    <source src={video_01} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout-container">
                <div className="content-layout">
                    <div className="flex-area">
                        <div className="img-area">
                            <img src={ico_mo} alt="mo"/>
                        </div>
                        <div className="tit-area">
                            <h3 className="dep2-tit">
                                즐겨 보는 콘텐츠를 <br />
                                저장해 오프라인으로<br />  
                                시청하세요.
                                <small>
                                    간편하게 저장하고 빈틈없이 즐겨보세요.
                                </small>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout-container">
                <div className="content-layout">
                    <div className="flex-area">
                        <div className="tit-area">
                            <h3 className="dep2-tit">
                                다양한 디바이스에서 <br /> 
                                시청하세요.
                                <small>
                                    각종 영화와 시리즈를 스마트폰, 태블릿, 노트북,<br />  
                                    TV에서 무제한으로 스트리밍하세요. 추가<br />  
                                    요금이 전혀 없습니다.
                                </small>
                            </h3>
                        </div>
                        <div className="img-area">
                            <img src={ico_device} alt="device"/>
                            <div className="video-area video-type2">
                                <video autoPlay="autoplay" playsInline="playsinline" muted="muted" loop="loop">
                                    <source src={video_02} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout-container">
                <div className="content-layout">
                    <div className="flex-area">
                        <div className="img-area">
                            <img src={ico_keds} alt="keds"/>
                        </div>
                        <div className="tit-area">
                            <h3 className="dep2-tit">
                               어린이 전용 프로필을<br />  
                               만들어 보세요.
                                <small>
                                    자기만의 공간에서 좋아하는 캐릭터와 즐기는<br />   
                                    신나는 모험. 자녀에게 이 특별한 경험을<br />   
                                    선물하세요. 넷플릭스 회원이라면 무료입니다.
                                </small>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="layout-container" >
                <div className="content-layout">
                    <div>
                        <h3 className="dep2-tit txt-center mb50">
                            자주 묻는 질문
                        </h3>

                        <ToggleList 
                            search_results={[ 
                                { id: 0, name:"넷플릭스란 무엇인가요?", text: "넷플릭스란 무엇인가요?", comment: "넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다." }, 
                                { id: 1, name:"넷플릭스 요금은 얼마인가요?", text: "넷플릭스 요금은 얼마인가요?", comment: "스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다." },
                                { id: 2, name:"어디에서 시청할 수 있나요?", text: "어디에서 시청할 수 있나요?", comment: "언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다. iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요." }, 
                                { id: 3, name:"멤버십을 해지하려면 어떻게 하나요?", text: "", comment: "넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요." },
                                { id: 4, name:"넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?", text: "", comment: "넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하세요." },
                                { id: 5, name:"아이들이 넷플릭스를 봐도 좋을까요?", text: "", comment: "멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다. 키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다." }
                            ]} 
                        />
                        <br /><br />

                        <p className="tit txt-center mg16 mt50">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                        <div className="form-input txt-center">
                            <label htmlFor="email">
                                <input className="input-text input-text-form" type="email" id="email" placeholder="이메일 주소" maxLength="50" minLength="5" />
                            </label>
                            <button className="btn btn-red btn-square">
                                <span className="relative">시작하기
                                    <div className="arrow absolute">화살표</div>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Content;