import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from "react";
import '../../assets/css/App.css';
import LayoutDefault from '../layout/Layout';
import Image from '../elements/Image'
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import DoubleCol from '../layout/DoubleCol';
import "animate.css"
import Alex from '../../assets/images/alex-leaning-on-a-plane.jpg';


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

    const [isActive, setActive] = useState(false);
    
    const togglePsoneClass = () => {
        const psoneContent = document.querySelector('.psone-content');
        psoneContent.classList.toggle("active");
        setActive(!isActive);
    };

     
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

                <Section id="about" className="width-1500">
                    <div className="row">
                        <div className="column">
                            <h2>01. ABOUT<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>
                            <p>Lorem ipsum dolorsitamet,consectetura dipiscingelit. Duisfermentumvelitnonmassamattis,aeleifendauguegravida.Utlobortisdiamaviverratempus.Fusceluctustristiquefelis,vitaevenenatisnisialiquama.Phasellussitametmollisquam,acommodoarcu.Crassitametlectusdui.Namnullajusto,fringillaquisantenec,blandit ultricesex.In venenatismagnaleo,nectinciduntliberoornaresed.</p>
                            <p>Lorem ipsum dolorsitamet,consecteturad ipiscingelit. Duisfermentumvelitnonmassamattis,aeleifendauguegravida.Utlobortisdiamaviverratempus.Fusceluctustristiquefelis,vitaevenenatisnisialiquama.Phasellussitametmollisquam,acommodoarcu.Crassitametlectusdui.Namnullajusto,fringillaquisantenec,blandit ultricesex.In venenatismagnaleo,nectinciduntliberoornaresed.</p>
                        </div>
                        <div className="column">
                            <div className="box">
                                <div className="circle-cluster"><div className="circle"></div><div className="circle"></div><div className="circle"></div></div>
                                <img src={Alex} alt="Alex Leaning on a Plane" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="experience" className="width-800">
                    <h2>01. EXPERIENCE<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>
                    <div className="row">
                        <div className="column">
                            <button className={ isActive ? 'active' : '' } id="psone" onClick={togglePsoneClass}><h3>Print Studio One</h3><p>Steinbach, MB</p></button>
                            <div className="psone-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum velit non massa mattis, a eleifend augue gravida. Ut lobortis diam a viverra tempus. Fusce luctus tristique felis, vitae venenatis nisi aliquam a.</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </LayoutDefault>
            
        </>
    );
}

export default hot(Home);