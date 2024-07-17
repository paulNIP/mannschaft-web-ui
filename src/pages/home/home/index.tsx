import { createStyles } from 'antd-style';
import React from 'react';
import shape1 from "../../../assets/images/video/shape1.svg"
import shape2 from "../../../assets/images/video/shape2.svg"
import { Link } from "react-router-dom";


const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});





const Home: React.FC = () => {
  


  return (
    <div >

    <link rel="stylesheet" href={require("../../../assets/css/bootstrap.min.css")} />
    <link rel="stylesheet" href={require("../../../assets/css/LineIcons.3.0.css")} />
    <link rel="stylesheet" href={require("../../../assets/css/animate.css")} />
    <link rel="stylesheet" href={require("../../../assets/css/tiny-slider.css")} />
    <link rel="stylesheet" href={require("../../../assets/css/glightbox.min.css")} />
    <link rel="stylesheet" href={require("../../../assets/css/main.css")} />

    {/* <div className="preloader">
        <div className="preloader-inner">
            <div className="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div> */}

    <header className="header navbar-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="nav-inner">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src={require("../../../assets/images/logo/logo.png")} style={{width:'50px',height:'50px'}} alt="Logo"/>
                            </a>
                            <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a href="index.html" className="active" aria-label="Toggle navigation">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about-us.html" aria-label="Toggle navigation">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Pages</a>
                                        <ul className="sub-menu collapse" id="submenu-1-1">
                                            <li className="nav-item"><a href="about-us.html">About Us</a></li>
                                            <li className="nav-item"><a href="pricing.html">Our Pricing</a></li>
                                            <li className="nav-item"><a href="signin.html">Sign In</a></li>
                                            <li className="nav-item"><a href="signup.html">Sign Up</a></li>
                                            <li className="nav-item"><a href="reset-password.html">Reset Password</a></li>
                                            <li className="nav-item"><a href="mail-success.html">Mail Success</a></li>
                                            <li className="nav-item"><a href="404.html">404 Error</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                                        <ul className="sub-menu collapse" id="submenu-1-2">
                                            <li className="nav-item"><a href="blog-grid.html">Blog Grid</a>
                                            </li>
                                            <li className="nav-item"><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" aria-label="Toggle navigation">Contact</a>
                                    </li>
                                </ul>
                            </div> 
                            <div className="button home-btn">
                                {/* <a href="signup.html" className="btn">Try for free</a> */}
                                <Link to='/user/login' className="btn">Login</Link>
                            </div>
                        </nav>

                    </div>
                </div>
            </div> 
        </div> 
    </header>

    <section className="hero-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="hero-content">
                        <h4>Creative App Landing Page</h4>
                        <h1>Best app for your modern lifestyle</h1>
                        <p>Tomfoolery are you taking the piss cor blimey guvnor do one bleeding young delinquent.
                        </p>
                        <div className="button">
                            <a href="about-us.html" className="btn ">Try for free</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-12">
                    <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                        <img className="main-image" src="https://via.placeholder.com/700x1000" alt="#"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="freatures section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <div className="image wow fadeInLeft" data-wow-delay=".3s">
                        <img src="https://via.placeholder.com/665x790" alt="#"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content">
                        <h3 className="heading wow fadeInUp" data-wow-delay=".5s"><span>Core Features</span>Designed & built
                            by
                            the latest code
                            integration</h3>

                        <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                            <div className="f-icon">
                                <i className="lni lni-dashboard"></i>
                            </div>
                            <h4>Fast performance</h4>
                            <p>Get your blood tests delivered at
                                home collect a sample from the
                                news your blood tests</p>
                        </div>
                        
                        <div className="single-feature wow fadeInUp" data-wow-delay=".7s">
                            <div className="f-icon">
                                <i className="lni lni-pencil-alt"></i>
                            </div>
                            <h4>Prototyping</h4>
                            <p>Get your blood tests delivered at
                                home collect a sample from the
                                news your blood tests</p>
                        </div>
                       
                        <div className="single-feature wow fadeInUp" data-wow-delay="0.8s">
                            <div className="f-icon">
                                <i className="lni lni-vector"></i>
                            </div>
                            <h4>Vector Editing</h4>
                            <p>Get your blood tests delivered at
                                home collect a sample from the
                                news your blood tests</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <div className="services section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="wow zoomIn" data-wow-delay=".2s">What we offer</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Services</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                    <div className="single-service">
                        <div className="main-icon">
                            <i className="lni lni-grid-alt"></i>
                        </div>
                        <h4 className="text-title">Brand Identity Design</h4>
                        <p>Invest in Bitcoin on the regular or save with one of the highest interest rates on the
                            market.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                    <div className="single-service">
                        <div className="main-icon">
                            <i className="lni lni-keyword-research"></i>
                        </div>
                        <h4 className="text-title">Digital Marketing</h4>
                        <p>Invest in Bitcoin on the regular or save with one of the highest interest rates on the
                            market.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                    <div className="single-service">
                        <div className="main-icon">
                            <i className="lni lni-vector"></i>
                        </div>
                        <h4 className="text-title">Design and Development</h4>
                        <p>Invest in Bitcoin on the regular or save with one of the highest interest rates on the
                            market.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                    <div className="single-service">
                        <div className="main-icon">
                            <i className="lni lni-book"></i>
                        </div>
                        <h4 className="text-title">IT Consulting Service</h4>
                        <p>Invest in Bitcoin on the regular or save with one of the highest interest rates on the
                            market.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                    <div className="single-service">
                        <div className="main-icon">
                            <i className="lni lni-cloud-network"></i>
                        </div>
                        <h4 className="text-title">Cloud Computing</h4>
                        <p>Invest in Bitcoin on the regular or save with one of the highest interest rates on the
                            market.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                    <div className="single-service">
                        <div className="main-icon">
                            <i className="lni lni-display-alt"></i>
                        </div>
                        <h4 className="text-title">Graphics Design</h4>
                        <p>Invest in Bitcoin on the regular or save with one of the highest interest rates on the
                            market.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <section id="pricing" className="pricing-table section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="wow zoomIn" data-wow-delay=".2s">pricing</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Pricing & Plans</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">

                    <div className="single-table">

                        <div className="table-head">
                            <h4 className="title">Individual</h4>
                            <p className="sub-title">Powerful & Awesome Elements</p>
                            <div className="price">
                                <h2 className="amount"><span className="currency">$</span>19<span className="duration">/month</span>
                                </h2>
                            </div>
                        </div>
                        
                        <div className="table-content">

                            <ul className="table-list">
                                <li>Commercial License</li>
                                <li>100+ HTML UI Elements</li>
                                <li>01 Domain Support</li>
                                <li className="disable">6 Month Premium Support</li>
                                <li className="disable">Lifetime Updates</li>
                            </ul>

                        </div>

                        <div className="button">
                            <a href="javascript:void(0)" className="btn">Start free trial <i
                                    className="lni lni-arrow-right"></i></a>
                        </div>
                        <p className="no-card">No credit card required</p>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">

                    <div className="single-table middle">
                        <span className="popular">Most Popular</span>

                        <div className="table-head">
                            <h4 className="title">Exclusive</h4>
                            <p className="sub-title">Powerful & Awesome Elements</p>
                            <div className="price">
                                <h2 className="amount"><span className="currency">$</span>49<span className="duration">/month</span>
                                </h2>
                            </div>
                        </div>

                        <div className="table-content">

                            <ul className="table-list">
                                <li>Commercial License</li>
                                <li>100+ HTML UI Elements</li>
                                <li>01 Domain Support</li>
                                <li>6 Month Premium Support</li>
                                <li className="disable">Lifetime Updates</li>
                            </ul>

                        </div>

                        <div className="button">
                            <a href="javascript:void(0)" className="btn btn-alt">Start free trial <i
                                    className="lni lni-arrow-right"></i></a>
                        </div>
                        <p className="no-card">No credit card required</p>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".8s">
                    
                    <div className="single-table">
                        
                        <div className="table-head">
                            <h4 className="title">Premium</h4>
                            <p className="sub-title">Powerful & Awesome Elements</p>
                            <div className="price">
                                <h2 className="amount"><span className="currency">$</span>99<span className="duration">/month</span>
                                </h2>
                            </div>
                        </div>

                        <div className="table-content">

                            <ul className="table-list">
                                <li>Commercial License</li>
                                <li>100+ HTML UI Elements</li>
                                <li>01 Domain Support</li>
                                <li>6 Month Premium Support</li>
                                <li>Lifetime Updates</li>
                            </ul>

                        </div>

                        <div className="button">
                            <a href="javascript:void(0)" className="btn">Start free trial <i
                                    className="lni lni-arrow-right"></i></a>
                        </div>
                        <p className="no-card">No credit card required</p>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section className="intro-video-area section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="inner-content-head">
                        <div className="inner-content">
                            <img className="shape1" src={shape1} alt="#"/>
                            <img className="shape2" src={shape2} alt="#"/>
                            <div className="section-title">
                                <span className="wow zoomIn" data-wow-delay=".2s">Create your own experience</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Watch Our intro video</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of
                                    Lorem
                                    Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                            <div className="intro-video-play">
                                <div className="play-thumb wow zoomIn" data-wow-delay=".2s">
                                    <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                        className="glightbox video"><i className="lni lni-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="team section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="wow zoomIn" data-wow-delay=".2s">Expert Team</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Meet Our Team</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".3s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src="https://via.placeholder.com/400x400" alt="#"/>
                        </div>
                        <div className="content">
                            <h4>Deco Milan
                                <span>Founder</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                    
                    <div className="single-team">
                        <div className="team-image">
                            <img src="https://via.placeholder.com/400x400" alt="#"/>
                        </div>
                        <div className="content">
                            <h4>Liza Marko
                                <span>Developer</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".7s">
                    
                    <div className="single-team">
                        <div className="team-image">
                            <img src="https://via.placeholder.com/400x400" alt="#"/>
                        </div>
                        <div className="content">
                            <h4>John Smith
                                <span>Designer</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".9s">
                    
                    <div className="single-team">
                        <div className="team-image">
                            <img src="https://via.placeholder.com/400x400" alt="#"/>
                        </div>
                        <div className="content">
                            <h4>Amion Doe
                                <span>Co-Founder</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <section className="testimonials style2 section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="wow zoomIn" data-wow-delay=".2s">Customer Reviews</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Testimonials</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className="row testimonial-slider">
                <div className="col-lg-6 col-12 ">
                    
                    <div className="single-testimonial">
                        <div className="inner-content">
                            <div className="quote-icon">
                                <i className="lni lni-quotation"></i>
                            </div>
                            <div className="text">
                                <p>“A vast number of clients decide to create dedicated software is the
                                    online store. It is nothing but a website with a catalog of products and the
                                    possibility.”</p>
                            </div>
                            <div className="author">
                                <img src="https://via.placeholder.com/100x100" alt="#"/>
                                <h4 className="name">Somalia D Silva
                                    <span className="deg">Business Manager</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-12 ">
                    
                    <div className="single-testimonial">
                        <div className="inner-content">
                            <div className="quote-icon">
                                <i className="lni lni-quotation"></i>
                            </div>
                            <div className="text">
                                <p>“A vast number of clients decide to create dedicated software is the
                                    online store. It is nothing but a website with a catalog of products and the
                                    possibility.”</p>
                            </div>
                            <div className="author">
                                <img src="https://via.placeholder.com/100x100" alt="#"/>
                                <h4 className="name">David Warner
                                    <span className="deg">Web Developer</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-12 ">
                    
                    <div className="single-testimonial">
                        <div className="inner-content">
                            <div className="quote-icon">
                                <i className="lni lni-quotation"></i>
                            </div>
                            <div className="text">
                                <p>“A vast number of clients decide to create dedicated software is the
                                    online store. It is nothing but a website with a catalog of products and the
                                    possibility.”</p>
                            </div>
                            <div className="author">
                                <img src="https://via.placeholder.com/100x100" alt="#"/>
                                <h4 className="name">Jems Gilario
                                    <span className="deg">Graphics Designer</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-12 ">
                    
                    <div className="single-testimonial">
                        <div className="inner-content">
                            <div className="quote-icon">
                                <i className="lni lni-quotation"></i>
                            </div>
                            <div className="text">
                                <p>“A vast number of clients decide to create dedicated software is the
                                    online store. It is nothing but a website with a catalog of products and the
                                    possibility.”</p>
                            </div>
                            <div className="author">
                                <img src="https://via.placeholder.com/100x100" alt="#"/>
                                <h4 className="name">David Warner
                                    <span className="deg">Web Developer</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="col-lg-6 col-12 ">
                    
                    <div className="single-testimonial">
                        <div className="inner-content">
                            <div className="quote-icon">
                                <i className="lni lni-quotation"></i>
                            </div>
                            <div className="text">
                                <p>“A vast number of clients decide to create dedicated software is the
                                    online store. It is nothing but a website with a catalog of products and the
                                    possibility.”</p>
                            </div>
                            <div className="author">
                                <img src="https://via.placeholder.com/100x100" alt="#"/>
                                <h4 className="name">Jems Gilario
                                    <span className="deg">Graphics Designer</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <section className="blog-section section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="wow zoomIn" data-wow-delay=".2s">Blogs</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Latest News</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                    
                    <div className="single-blog-grid">
                        <div className="blog-img">
                            <a href="blog-single.html">
                                <img src="https://via.placeholder.com/500x310" alt="#"/>
                            </a>
                        </div>
                        <div className="blog-content">
                            <div className="meta-info">
                                <a className="date" href="javascript:void(0)"><i className="lni lni-timer"></i> 10 June 2023
                                </a>
                                <a className="author" href="javascript:void(0)"><i className="lni lni-user"></i> Anjelio Joly
                                </a>
                            </div>
                            <h4>
                                <a href="blog-single.html">Branding Involves Developing a Strategy to Creating.</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor
                                ividunt dolore.</p>
                            <div className="button">
                                <a href="blog-single.html" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                    
                    <div className="single-blog-grid">
                        <div className="blog-img">
                            <a href="blog-single.html">
                                <img src="https://via.placeholder.com/500x310" alt="#"/>
                            </a>
                        </div>
                        <div className="blog-content">
                            <div className="meta-info">
                                <a className="date" href="javascript:void(0)"><i className="lni lni-timer"></i> 5 Aug 2023
                                </a>
                                <a className="author" href="javascript:void(0)"><i className="lni lni-user"></i> Kumila ksusi
                                </a>
                            </div>
                            <h4>
                                <a href="blog-single.html">Design is a Plan or The Construction of an
                                    Object.</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor
                                ividunt dolore.</p>
                            <div className="button">
                                <a href="blog-single.html" className="btn">Read Blog</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".8s">
                    
                    <div className="single-blog-grid">
                        <div className="blog-img">
                            <a href="blog-single.html">
                                <img src="https://via.placeholder.com/500x310" alt="#"/>
                            </a>
                        </div>
                        <div className="blog-content">
                            <div className="meta-info">
                                <a className="date" href="javascript:void(0)"><i className="lni lni-timer"></i> 25 Dec 2023
                                </a>
                                <a className="author" href="javascript:void(0)"><i className="lni lni-user"></i> Alex Jendro
                                </a>
                            </div>
                            <h4>
                                <a href="blog-single.html">The Data-Driven Approach to Understanding.</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor
                                ividunt dolore.</p>
                            <div className="button">
                                <a href="blog-single.html" className="btn">Read Blog</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <section className="faq section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="wow zoomIn" data-wow-delay=".2s">Faq</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">frequently asked questions</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                            Ipsum available, but the majority have
                            suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    <span className="title">Can I cancel my subscription at anytime?</span><i
                                        className="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                                        amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu
                                        erat mattis lorem.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                                        amet ante nec vulputate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    <span className="title">Can I change my plan later on?</span><i
                                        className="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor
                                        brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                                    </p>
                                    <p>
                                        sunt alqua put a bird on it squid single-origin coffee nulla assumenda
                                        shoreditch et. Nihil anim ke ffiyeh helvetica, Spark beer labore wes anderson
                                        cred nesciunt sapiente ea proident.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    <span className="title">Will you renew my subscription automatically?</span><i
                                        className="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas expedita,
                                        repellendus est nemo cum quibusdam optio, voluptate hic a tempora facere, nihil
                                        non itaque alias similique quas quam odit consequatur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 xs-margin">
                    <div className="accordion" id="accordionExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading11">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                    <span className="title">How many sites can I install the widgets of this app
                                        to?</span><i className="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11"
                                data-bs-parent="#accordionExample2">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                                        amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu
                                        erat mattis lorem.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                                        amet ante nec vulputate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading22">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                                    <span className="title">Do you offer any discounts?</span><i className="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse22" className="accordion-collapse collapse" aria-labelledby="heading22"
                                data-bs-parent="#accordionExample2">
                                <div className="accordion-body">
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor
                                        brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                                    </p>
                                    <p>
                                        sunt alqua put a bird on it squid single-origin coffee nulla assumenda
                                        shoreditch et. Nihil anim ke ffiyeh helvetica, Spark beer labore wes anderson
                                        cred nesciunt sapiente ea proident.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading33">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse33" aria-expanded="false" aria-controls="collapse33">
                                    <span className="title">Do I get updates for the app?</span><i className="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse33" className="accordion-collapse collapse" aria-labelledby="heading33"
                                data-bs-parent="#accordionExample2">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas expedita,
                                        repellendus est nemo cum quibusdam optio, voluptate hic a tempora facere, nihil
                                        non itaque alias similique quas quam odit consequatur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="call-action">
        <div className="container">
            <div className="inner-content">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 col-12">
                        <div className="text">
                            <h2>Download Our App &
                                Start your free trial today.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="button">
                            <a href="pricing.html" className="btn"><i className="lni lni-apple"></i> App Store
                            </a>
                            <a href="about-us.html" className="btn btn-alt"><i className="lni lni-play-store"></i> Google
                                Play</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer section">
        
        <div className="footer-top">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            
                            <div className="single-footer f-about">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src={require("../../../assets/images/logo/logo.png")} alt="#"/>
                                    </a>
                                </div>
                                <p>Making the world a better place through constructing elegant hierarchies.</p>
                                <h4 className="social-title">Follow Us On:</h4>
                                <ul className="social">
                                    <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-instagram"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-pinterest"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-youtube"></i></a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            
                            <div className="single-footer f-link">
                                <h3>Solutions</h3>
                                <ul>
                                    <li><a href="javascript:void(0)">Marketing</a></li>
                                    <li><a href="javascript:void(0)">Analytics</a></li>
                                    <li><a href="javascript:void(0)">Commerce</a></li>
                                    <li><a href="javascript:void(0)">Insights</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            
                            <div className="single-footer f-link">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="javascript:void(0)">Pricing</a></li>
                                    <li><a href="javascript:void(0)">Documentation</a></li>
                                    <li><a href="javascript:void(0)">Guides</a></li>
                                    <li><a href="javascript:void(0)">API Status</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            
                            <div className="single-footer newsletter">
                                <h3>Subscribe</h3>
                                <p>Subscribe to our newsletter for the latest updates</p>
                                <form action="#" method="get" target="_blank" className="newsletter-form">
                                    <input name="EMAIL" placeholder="Email address" required="required" type="email"/>
                                    <div className="button">
                                        <button className="sub-btn"><i className="lni lni-envelope"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright-area">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-text">© {new Date().getFullYear()} Opolo Sync - All Rights Reserved</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-owner">Designed and Developed by <a href="https://opolostechnologies.com/"
                                    rel="nofollow" target="_blank">Opolos Technologies</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>

    <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
    </a>


    </div>
  );
};

export default Home;
