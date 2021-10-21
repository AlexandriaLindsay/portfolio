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
            <a className="skip-link screen-reader-text" href="#content">Skip to Content</a>
            <LayoutDefault>
                <Section className="width-1500 hero">
                    <div className="hero-content">
                        <p className="code typing">Howdy! My name is</p>
                        <div className="text-contain">
                            <h1 className="animate__animated animate__fadeInUp animate__delay-2s">Alexandria Lindsay.<br />I'm a Full-Stack Developer</h1>
                            <p className="animate__animated animate__fadeInUp animate__delay-3s">I specialize in developing (and occasionally designing) experiences for the web. Currently I'm focusing on building top performing web applications.</p>
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
                            <p>Hi there! My name is Alexandria and I have a strong passion for creating things that live on the web. My interest in web development started back in 2013 when I found a free course online that was teaching HTML and CSS for free. Once I created my first project I was so amazed that I could see my vision come to life. In that moment I knew it was a passion of mine to make other people's visions come to life.</p>
                            <p>A few years later I began to dabble in game development, app development, etc. Only to discover that my true passion lies in web. Fast forward to today, and I've had the privilege to work at an <a href="https://psone.ca" target="_blank" rel="noopener noreferrer">amazing marketing company</a> where I'm currently a lead developer. My main focus most days is building high-end web experiences, learning new technologies, devlopment efficiency &amp; productivity, and our overall web process.</p>
                            <p>I also have a strong desire to learn new languages and methods that can improve my work. Here are a few I've been working with recently.</p>
                            <ul>
                                <li>React</li>
                                <li>JavaScript (ES6)</li>
                                <li>GraphQL</li>
                                <li>Timber &amp; TWIG</li>
                                <li>WordPress</li>
                                <li>Drupal</li>
                            </ul>
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
                                <p>I develop high-quality websites from front-end to back-end. Maintain and update over 200+ sites. Manage DNS records (launching sites and creating email accounts). Manage our GitHub organization and repositories to ensure code is up to standards. Work heavily with Designers and Project Managers. Provide insight to team members when facing challenging projects. Research &amp; implement new SEO strategies for new Google algorithms. Created Google analytics reports and tag manager accounts for all sites. I also interviewed and tested multiple candidates for a Junior Web Developer position.</p>
                            </div>
                        </div>
                        <div className="column">
                            <button id="whitecard" onClick={toggleWhiteCardClass}><h3>Project White Card</h3><p>Winnipeg, MB</p></button>
                            <div className="whitecard-content">
                                <p>I interned at Project WhiteCard on two occasions. One was for video game development where the majority of my time was spent being mentoured from others and bug testing applications. The second, was right after I graduated from school and I had a great opportunity to learn real world experiences, write proposols, and by the end I had designed and developed a site there.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    <div className="column">
                            <button id="chicken-chef" onClick={toggleChickenChefClass}><h3>Chicken Chef</h3><p>Lorette, MB</p></button>
                            <div className="chicken-chef-content">
                                <p>So before I kickstarted my career into web, I actually use to be a waitress and I am ever so grateful that my boss gave me the opportunity to work on a website for the company. This was <a href="https://chickencheflorette.ca/" target="_blank" rel="noopener noreferrer">my very first site</a> I built in the real world as a freelancer. It's fun to look back at this and think about how far I've come.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="projects" className="width-1500">
                    <h2>03. KEY PROJECTS<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>
                    <p>I've chosen to list only a few projects as I've worked on over 100+ sites. Feel free to <a href="#contact">connect</a> with me if you want to hear about more work I've done!</p>
                    <div className="row">
                        <div className="column">
                            <a className="project" href="https://echo.staging.prufs.ca/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Spartan Gym</h3>
                                <p>This is a side project I designed and built for fun! Using React as the front-end and WordPress as a headless CMS. Paried with the Apollo Client and GraphQL API to query data.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="https://prairiesurfaces.ca/court-designer/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Court Builder Interface</h3>
                                <p>Developed website and a court builder interface that allows the user to create a custom court and submit the creation through the form. Used PHP to pass relavant data between pages.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="https://psone.ca" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Print Studio One</h3>
                                <p>About a year in working for PSOne, they wanted to refresh their site. This was a big project and I'm honoured to be the developer that took lead on this!</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>

                        <div className="column">
                            <a className="project" href="https://hoghearth.com/mats-vs-lamps/#cal-sec" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Energy Savings Calculator</h3>
                                <p>Developed a calucator that outputs the breakdown on annual crate and full barn energy savings. Technologies used were jQuery, HTML, and LESS</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="column">
                        <a className="project" href="https://fortemicro.com/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Forte Micro</h3>
                                <p>This client loved our work so much that they reached out all the way from Florida! We built custom templates to give the client the ability to add new pages with ease.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                        <a className="project" href="https://heatmasterss.com/price-your-furnace-new/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Custom AJAX / PHP Form</h3>
                                <p>While I didn't develop this site I had a great opportunity to build this awesome AJAX/PHP form that contains a heafty amount of conditional logic to determine witch furnaces get display, in which order.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="https://goldkey21.com/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>CREA Data / MLS Feed</h3>
                                <p>With the aid of RealtyPress we developed this site while creating cron jobs to instruct the server to pull listings every hour.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                        <div className="column">
                            <a className="project" href="https://greattastesmb.ca/" target="_blank" rel="noreferrer noopener">
                                <img src={Folder} alt="Folder Icon" />
                                <h3>Great Tastes MB</h3>
                                <p>Aside from developing the website, we imported over 500+ recipes from their old site to a new one. Built as a custom Timber theme using TWIG as a templating engine for PHP.</p>
                                <button className="custom-btn">View</button>
                            </a>
                        </div>
                    </div>
                </Section>

                <Section id="contact" className="width-1000">
                    <div className="circle-cluster"><div className="circle"></div><div className="circle"></div><div className="circle"></div></div>
                    <h2>04. CONNECT<span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></h2>
                    <p>If you are interested in other projects I've worked on, have any questions or simply just want to say hi, my inbox is always open!</p>
                    <ContactUs/>
                    <div className="social">
                        <a href="https://github.com/AlexandriaLindsay?tab=repositories" target="_blank">
                            <img src={GitHub} alt="See Alex on GitHub" title="See Alex on GitHub" />
                        </a>
                    </div>
                </Section>
            </LayoutDefault>
            
        </>
    );
}

export default hot(Home);