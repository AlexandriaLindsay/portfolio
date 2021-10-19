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
import Folder from '../../assets/images/folder.svg';
import GitHub from '../../assets/images/github.svg';
import LinkedIn from '../../assets/images/linkedin.svg';
import { ContactUs } from '../elements/ContactUs';


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
        const whitecardContent = document.querySelector('.whitecard-content');
        const chickenChefContent = document.querySelector('.chicken-chef-content');

        psoneContent.classList.toggle("active");
        whitecardContent.classList.remove("active");
        chickenChefContent.classList.remove("active");
        setActive(!isActive);
    };

    const toggleWhiteCardClass = () => {
        const psoneContent = document.querySelector('.psone-content');
        const whitecardContent = document.querySelector('.whitecard-content');
        const chickenChefContent = document.querySelector('.chicken-chef-content');

        whitecardContent.classList.toggle("active");
        psoneContent.classList.remove("active");
        chickenChefContent.classList.remove("active");
        setActive(!isActive);
    };

    const toggleChickenChefClass = () => {
        const psoneContent = document.querySelector('.psone-content');
        const whitecardContent = document.querySelector('.whitecard-content');
        const chickenChefContent = document.querySelector('.chicken-chef-content');
        
        chickenChefContent.classList.toggle("active");
        psoneContent.classList.remove("active");
        whitecardContent.classList.remove("active");
        setActive(!isActive);
    };

     
    return (
        <>
            <LayoutDefault>
                <Section className="width-1500 hero">
                    <div className="hero-content">
                        <p className="code typing">Howdy! My name is</p>
                        <div className="text-contain">
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
                <h2 className="mobile">01. ABOUT<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>

                    <div className="row">
                        <div className="column">
                            <h2 className="desktop">01. ABOUT<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>
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

                <Section id="experience" className="width-1000">
                    <div className="circle-cluster"><div className="circle"></div><div className="circle"></div><div className="circle"></div></div>
                    <h2>02. EXPERIENCE<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>
                    <div className="row">
                        <div className="column">
                            <button id="psone" onClick={togglePsoneClass}><h3>Print Studio One</h3><p>Steinbach, MB</p></button>
                            <div className="psone-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum velit non massa mattis, a eleifend augue gravida. Ut lobortis diam a viverra tempus. Fusce luctus tristique felis, vitae venenatis nisi aliquam a.</p>
                            </div>
                        </div>
                        <div className="column">
                            <button id="whitecard" onClick={toggleWhiteCardClass}><h3>Project White Card</h3><p>Winnipeg, MB</p></button>
                            <div className="whitecard-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum velit non massa mattis, a eleifend augue gravida. Ut lobortis diam a viverra tempus. Fusce luctus tristique felis, vitae venenatis nisi aliquam a.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    <div className="column">
                            <button id="chicken-chef" onClick={toggleChickenChefClass}><h3>Chicken Chef</h3><p>Lorette, MB</p></button>
                            <div className="chicken-chef-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum velit non massa mattis, a eleifend augue gravida. Ut lobortis diam a viverra tempus. Fusce luctus tristique felis, vitae venenatis nisi aliquam a.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="projects" className="width-1500">
                    <h2>03. KEY PROJECTS<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>
                    <div className="row">
                        <div className="column">
                            <a className="project" href="https://lexiesloosetea.ca/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Lexie's Loose Tea</h3>
                                <p>This project was to kickstart my very own tea business! Designed and developed a custom theme integrated with woocommerce.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="https://echo.staging.prufs.ca/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Spartan Gym &amp; Traing</h3>
                                <p>This was a side project I designed and built. Using React as the front-end and WordPress as a headless CMS. Paried with the Apollo Client and GraphQL API to query data.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="https://prairiesurfaces.ca/court-designer/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Praire Surfaces - Court Builder</h3>
                                <p>Developed website and a court builder interface that allows the user to create their court and submit the creation through the form. Use PHP to pass relavant data between pages.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="https://psone.ca" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Print Studio One</h3>
                                <p>About a year in working for PSOne, they wanted to refresh their site. This was a big project and I'm happy I got to take lead on the project!</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="column">
                        <a className="project" href="https://fortemicro.com/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Forte Micro</h3>
                                <p>This client loved our work so much that they reached out all the way from Florida! We built custom templates to allow ability to add sections to there pages.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                        <a className="project" href="https://heatmasterss.com/price-your-furnace-new/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Heatmastersss - Price Your Furnace Form Refresh</h3>
                                <p>While I didn't develop this site I had the great opportunity to build this awesome ajax/PHP form that contains a heafty amount of conditional logic to determine witch furnaces get display, in which order.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="#" target="_blank">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Company Name</h3>
                                <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Lorem ip sum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolo r sit amet, consectetur.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="#" target="_blank">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Company Name</h3>
                                <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Lorem ip sum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolo r sit amet, consectetur.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                    </div>
                </Section>

                <Section id="contact" className="width-1000">
                    <div className="circle-cluster"><div className="circle"></div><div className="circle"></div><div className="circle"></div></div>
                    <h2>04. CONNECT<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum  velit non massa mattis, a eleifend augue gravida. Ut lobortis diam a viverra  tempus. Fusce luctus tristique felis, vitae venenatis nisi aliquam a. tempus. Fusce  luctus tristique felis, vitae venenatis nisi aliquam a.</p>
                    <ContactUs/>
                    <div className="social">
                        <a href="#" target="_blank">
                            <img src={GitHub} alt="See Alex on GitHub" title="See Alex on GitHub" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={LinkedIn} alt="See Alex on LinkedIn" title="See Alex on LinkedIn" />
                        </a>
                    </div>
                </Section>
            </LayoutDefault>
            
        </>
    );
}

export default hot(Home);