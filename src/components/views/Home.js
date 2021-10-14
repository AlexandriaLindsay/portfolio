import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from "react";
import '../../assets/css/App.css';
import LayoutDefault from '../layout/Layout';
import Image from '../elements/Image'
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import DoubleCol from '../layout/DoubleCol';
import "animate.css"


document.title ="Alexandria Lindsay — Full-Stack Developer"; 
document.getElementsByTagName("META")[2].content="Hi there! My name is Alexandria Lindsay and I'm a Full-Stack Web Developer. Stop in and check out my portfolio";


const Home = ({
  
}) => {

    // const [scroll, setScroll] = useState(false);
    //     useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         let target = document.querySelector('.header');
    //         setScroll(window.scrollY > target.offsetTop);
    //     });
    // }, []);
     
     
    return (
        <>
            <LayoutDefault>
                <Section className="width-1500 hero">
                    <div className="hero-content">
                        <p className="code typing">Howdy! My name is</p>
                        <div className="text-contain">s
                            <h1 className="animate__animated animate__fadeInUp animate__delay-2s">Alexandria Lindsay.<br />I'm a Full-Stack Developer</h1>
                            <p className="animate__animated animate__fadeInUp animate__delay-3s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum velit non massa mattis, a eleifend augue gravida. Ut lobortis diam a viverra tempus. Fusce luctus tristique felis, vitae venenatis nisi aliquam a.</p>
                            <a className="animate__animated animate__fadeInUp animate__delay-3s custom-btn" href="#">Check Out My Resume!</a>
                        </div>
                    </div>
                    <div className="shapes">
                            <div className="axis">
                                <div className="collection">
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collection">
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collection">
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collection">
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collection">
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                    <div className="cube">
                                        <div className="scale">
                                            <div className="side"></div>
                                            <div className="side"></div>
                                            <div className="side"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Section>
            </LayoutDefault>
            
        </>
    );
}

export default hot(Home);