import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Calling the window function exposed in our customized script.js
    if (typeof (window as any).initPshmenaScript === 'function') {
      (window as any).initPshmenaScript();
    }
  }, []);

  return (
    <>
      {/* PRELOADER */}
      <div className="loader-wrapper">
          <div className="loader"></div>
      </div>
      
      {/* SIDEBAR OVERLAY */}
      <div className="sidebar-overlay"></div>

      {/* HEADER */}
      <header className="header-one header--sticky">
          <div className="header-top-area d-none d-xl-block">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
                          <p data-key="header_top_text_html" dangerouslySetInnerHTML={{__html: 'Are you ready to grow your business? <a href="#contact-footer">Contact Us <i class="fa-solid fa-arrow-right"></i></a>'}}></p>
                      </div>
                      <div className="col-lg-6">
                          <div className="top-right d-flex justify-content-center justify-content-lg-end align-items-center">
                              <div className="info-item" style={{ whiteSpace: "nowrap" }}><i className="fa-solid fa-envelope"></i><a href="mailto:alquraansami@yahoo.com">alquraansami@yahoo.com</a></div>
                              <div className="info-item" style={{ whiteSpace: "nowrap" }}><i className="fa-solid fa-phone-alt"></i><a href="tel:+962797239875"><span data-key="header_hotline">Hotline:</span> (+962)-797239875</a></div>
                              <div className="lang-switcher">
                                  <button data-lang="en" className="active">EN</button>
                                  <button data-lang="ar">AR</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="header-main">
              <div className="container">
                  <div className="row align-items-center flex-nowrap">
                      
                      {/* Col 1: Logo */}
                      <div className="col-auto me-auto">
                          <a className="navbar-brand" href="/">
                              <img className="logo-dark" src="logo2.png" alt="Professional Skills House Logo" />
                          </a>
                      </div>
          
                      {/* Col 2: Navigation & Actions */}
                      <div className="col-auto">
                          <div className="header-right-wrapper d-flex justify-content-end align-items-center">
                              
                              {/* Main Navigation Links */}
                              <div className="main-navigation d-none d-xl-block">
                                  <ul className="navbar-nav flex-row">
                                      <li className="nav-item"><a className="nav-link" href="#home" data-key="nav_home">Home</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#service" data-key="nav_service">Service</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#about" data-key="nav_about">About</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#project" data-key="nav_project">Project</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#contact-footer" data-key="nav_contact">Contact</a></li>
                                  </ul>
                              </div>
          
                              {/* Action Buttons */}
                              <div className="header-right-actions ms-xl-4">
                                  <a href="#contact-footer" className="rts-btn btn-dark d-none d-xl-block" data-key="nav_book_meeting">Book a Meeting</a>
                                  <button id="menu-btn" className="menu-btn"><i className="fa-solid fa-bars"></i></button>
                              </div>
          
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>

      {/* SIDEBAR / OFF-CANVAS MENU */}
      <div id="side-bar" className="side-bar">
          <button className="close-icon-menu"><i className="fa-solid fa-arrow-right"></i></button>
          <div className="inner-main">
              <a href="/" className="logo-sidebar">
                  <img src="logo2.png" alt="logo dark" />
              </a>
              <br /><br />

              {/* Sidebar Content for Mobile */}
              <div className="sidebar-content-mobile d-xl-none">
                  <ul className="sidebar-nav">
                      <li className="nav-item"><a className="nav-link" href="#home" data-key="nav_home">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="#service" data-key="nav_service">Service</a></li>
                      <li className="nav-item"><a className="nav-link" href="#about" data-key="nav_about">About</a></li>
                      <li className="nav-item"><a className="nav-link" href="#project" data-key="nav_project">Project</a></li>
                      <li className="nav-item"><a className="nav-link" href="#contact-footer" data-key="nav_contact">Contact</a></li>
                  </ul>
                  <div className="lang-switcher-mobile">
                      <button data-lang="en" className="active">EN</button>
                      <button data-lang="ar">AR</button>
                  </div>
              </div>
              
              {/* Sidebar Content for Desktop */}
              <div className="sidebar-content-desktop d-none d-xl-block">
                  <p className="sidebar-desc" data-key="sidebar_desc">Your partner in financial success and compliance.</p>
                  <div className="get-in-touch">
                      <h6 className="title" data-key="sidebar_get_in_touch">Get In Touch</h6>
                      <div className="single"><i className="fa-solid fa-phone-alt"></i> <a href="tel:+962797239875">(+962)-797239875</a></div>
                      <div className="single"><i className="fa-solid fa-envelope"></i> <a href="mailto:alquraansami@yahoo.com">alquraansami@yahoo.com</a></div>
                      <div className="single"><i className="fa-solid fa-globe"></i> <a href="http://www.pshmena.com">www.pshmena.com</a></div>
                      <div className="single"><i className="fa-solid fa-map-marker-alt"></i> <span data-key="sidebar_location">3rd Circle, Amman, Jordan</span></div>
                  </div>
                  <div className="social-wrapper-two">
                      <a href="https://www.facebook.com/share/1A35zspoeX/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="https://www.instagram.com/psh_mena?igsh=NHpweWY2bmI0dWt1&utm_source=qr" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/company/pshmena/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
              </div>
          </div>
      </div>

      {/* BANNER / HERO */}
      <section className="rts-banner-area" id="home">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-7">
                      <div className="banner-inner-content">
                          <h1 className="title" data-key="hero_title_html" dangerouslySetInnerHTML={{__html: '<span class="text-accent">Professional</span> <br> <span style="color: #1FBDC5;">Skills</span> <span class="text-accent">House</span>'}}></h1>
                          <p className="disc" data-key="hero_desc">Offering expert financial and tax consultations to support businesses in achieving their goals.</p>
                          <a href="#service" className="rts-btn btn-dark" data-key="hero_button">View Services</a>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="banner-right-image">
                          <img src="house1.jpg" alt="Business Consultant" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="rts-service-area rts-section-gap" id="service">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                      <div className="title-style-one">
                          <h2 className="title" data-key="service_main_title">EFFECTIVE SERVICES</h2>
                          <p className="disc section-intro-text" data-key="service_main_desc">
                              We believe in the power of collaboration and personalized solutions. By understanding our clients' unique needs and goals, we tailor our approach to deliver strategic insights, creative solutions.
                          </p>
                      </div>
                  </div>
              </div>

              <div className="row g-4 mt-5 justify-content-center">
                  {/* Service Card 1 */}
                  <div className="col-lg-4 col-md-6">
                      <div className="service-card">
                          <div className="card-image-wrapper">
                              <img className="card-image" src="Electronic billing6.jpg" alt="Team Leadership" />
                              <div className="card-icon">
                                  <img src="img/01.svg" alt="icon" />
                              </div>
                          </div>
                          <div className="card-content">
                              <h5 className="card-title" data-key="service1_title">Electronic billing</h5>
                              <a href="#" className="rts-btn btn-dark" data-bs-toggle="modal" data-bs-target="#serviceModal" 
                                 data-key-title="service1_modal_title"
                                 data-title="Electronic Invoicing Systems"
                                 data-icon-src="img/01.svg"
                                 data-key-details="service1_modal_details"
                                 data-details="This service involves issuing invoices...">Read More</a>
                          </div>
                      </div>
                  </div>
                  {/* Service Card 2 */}
                  <div className="col-lg-4 col-md-6">
                      <div className="service-card">
                          <div className="card-image-wrapper">
                               <img className="card-image" src="Tax Consultancy Services2.jpg" alt="People Cohesion" />
                               <div className="card-icon">
                                  <img src="img/02.svg" alt="icon" />
                               </div>
                          </div>
                          <div className="card-content">
                              <h5 className="card-title" data-key="service2_title">Tax Consultancy Services</h5>
                               <a href="#" className="rts-btn btn-dark" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                  data-key-title="service2_modal_title"
                                  data-title="Tax Consultancy Services"
                                  data-icon-src="img/02.svg"
                                  data-key-details="service2_modal_details"
                                  data-details="These include conducting detailed study...">Read More</a>
                          </div>
                      </div>
                  </div>
                  {/* Service Card 3 */}
                  <div className="col-lg-4 col-md-6">
                      <div className="service-card">
                          <div className="card-image-wrapper">
                               <img className="card-image" src="Financial & Accounting2.jpg" alt="Team Build Up" />
                               <div className="card-icon">
                                   <img src="img/03.svg" alt="icon" />
                               </div>
                          </div>
                          <div className="card-content">
                              <h5 className="card-title" data-key="service3_title">Financial & Accounting Consult.</h5>
                              <a href="#" className="rts-btn btn-dark" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                 data-key-title="service3_modal_title"
                                 data-title="Financial & Accounting Consultations"
                                 data-icon-src="img/03.svg"
                                 data-key-details="service3_modal_details"
                                 data-details="It mainly includes the following...">Read More</a>
                          </div>
                      </div>
                  </div>
                  {/* Service Card 4 */}
                  <div className="col-lg-4 col-md-6">
                      <div className="service-card">
                          <div className="card-image-wrapper">
                              <img className="card-image" src="Customs Consultations2.jpg" alt="Feasibility Studies" />
                              <div className="card-icon">
                                  <img src="img/04.svg" alt="icon" />
                              </div>
                          </div>
                          <div className="card-content">
                              <h5 className="card-title" data-key="service4_title">Customs Consultations</h5>
                              <a href="#" className="rts-btn btn-dark" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                 data-key-title="service4_modal_title"
                                 data-title="Customs Consultations"
                                 data-icon-src="img/04.svg"
                                 data-key-details="service4_modal_details"
                                 data-details="Our services include customs consultation...">Read More</a>
                          </div>
                      </div>
                  </div>
                  {/* Service Card 5 */}
                  <div className="col-lg-4 col-md-6">
                      <div className="service-card">
                          <div className="card-image-wrapper">
                               <img className="card-image" src="Registering companies1.webp" alt="Risk Management" />
                               <div className="card-icon">
                                  <img src="img/05.svg" alt="icon" />
                               </div>
                          </div>
                          <div className="card-content">
                              <h5 className="card-title" data-key="service5_title">Registering companies follow-up</h5>
                               <a href="#" className="rts-btn btn-dark" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                  data-key-title="service5_modal_title"
                                  data-title="Company Registration Follow-up"
                                  data-icon-src="img/05.svg"
                                  data-key-details="service5_modal_details"
                                  data-details="Follow-up on process for registering...">Read More</a>
                          </div>
                      </div>
                  </div>
                  {/* Service Card 6 */}
                  <div className="col-lg-4 col-md-6">
                      <div className="service-card">
                          <div className="card-image-wrapper">
                               <img className="card-image" src="Financial Training2.jpg" alt="Corporate Training" />
                               <div className="card-icon">
                                   <img src="img/06.svg" alt="icon" />
                               </div>
                          </div>
                          <div className="card-content">
                              <h5 className="card-title" data-key="service6_title">Corporate Financial Training</h5>
                              <a href="#" className="rts-btn btn-dark" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                 data-key-title="service6_modal_title"
                                 data-title="Corporate Financial Training"
                                 data-icon-src="img/06.svg"
                                 data-key-details="service6_modal_details"
                                 data-details="Training is the cornerstone...">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="rts-about-us-area rts-section-gap bg_light" id="about">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-10">
                      
                      <div className="title-style-one text-center">
                          <h2 className="title" data-key="about_main_title">PIONEERING FINANCIAL EXCELLENCE</h2>
                          <p className="disc section-intro-text" data-key="about_main_desc">
                              Guided by General Manager Sami Al Quraan, we are dedicated to achieving excellence in consultancy and training. We design and implement unique programs through a distinguished team of experts, ensuring our services fulfill the real demands of our customers and improve performance based on a deep understanding of the professional market.
                          </p>
                      </div>

                      <div className="row vision-mission-wrapper mt-5">
                          <div className="col-lg-6 mb-4 mb-lg-0">
                              <div className="vision-mission-box">
                                  <div className="box-header">
                                      <div className="box-icon"><i className="fa-solid fa-eye"></i></div>
                                      <h4 data-key="about_vision_title">Our Vision</h4>
                                  </div>
                                  <p data-key="about_vision_desc">To be the leader in achieving institutional financial excellence by assisting clients in their business development, helping them achieve their ambitions by providing the best scientific consultation and practical solutions.</p>
                              </div>
                          </div>
                          <div className="col-lg-6">
                               <div className="vision-mission-box">
                                  <div className="box-header">
                                      <div className="box-icon"><i className="fa-solid fa-bullseye"></i></div>
                                      <h4 data-key="about_mission_title">Our Mission</h4>
                                  </div>
                                  <p data-key="about_mission_desc">To organize well-designed conferences, training courses, and seminars that ensure the best means of transferring knowledge and expertise, aiming to achieve the best value for money and professional added value for our clients.</p>
                              </div>
                          </div>
                      </div>

                      <div className="counter-up-wrapper mt-5">
                          <div className="single-counter">
                              <h3 className="counter-title"><span className="odometer" data-count="858">0</span>+</h3>
                              <p className="counter-label" data-key="counter1_label">SUCCESSFUL PROJECTS</p>
                          </div>
                          <div className="single-counter">
                              <h3 className="counter-title"><span className="odometer" data-count="567">0</span>+</h3>
                              <p className="counter-label" data-key="counter2_label">SKILLED EXPERTS</p>
                          </div>
                          <div className="single-counter">
                              <h3 className="counter-title"><span className="odometer" data-count="28">0</span>K+</h3>
                              <p className="counter-label" data-key="counter3_label">HAPPY CLIENTS</p>
                          </div>
                      </div>

                      <div className="about-cta-area mt-5 text-center">
                           <p className="mb-4" data-key="about_cta_text">Ready to elevate your business? Let's talk about your goals.</p>
                           <a href="#contact-footer" className="rts-btn btn-dark" data-key="about_cta_button">Book a Meeting</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      {/* EXPERTISE SECTION */}
      <section className="our-expertise-area rts-section-gap">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="title-style-one text-center">
                          <h2 className="title" data-key="expertise_title_html" dangerouslySetInnerHTML={{__html: 'Professional Accounting, Tax AND Financial <br /> Strategies'}}></h2>
                      </div>
                  </div>
              </div>
              <div className="row mt-5 g-5">
                  <div className="col-lg-4 col-md-6">
                      <div className="expertise-item">
                          <div className="progress-circle">
                              <svg className="radial-progress" data-countervalue="80" viewBox="0 0 80 80">
                                  <circle className="bar-static" cx="40" cy="40" r="35"></circle>
                                  <circle className="bar--animated" cx="40" cy="40" r="35"></circle>
                                  <text className="countervalue" x="50%" y="57%" textAnchor="middle">0%</text>
                              </svg>
                          </div>
                          <div className="inner-content">
                              <h5 className="item-title" data-key="expertise1_title">Strategic Planning</h5>
                              <p className="item-disc" data-key="expertise1_desc">Developing tailored financial and tax plans to optimize business performance and compliance.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="expertise-item">
                          <div className="progress-circle">
                              <svg className="radial-progress" data-countervalue="90" viewBox="0 0 80 80">
                                  <circle className="bar-static" cx="40" cy="40" r="35"></circle>
                                  <circle className="bar--animated" cx="40" cy="40" r="35"></circle>
                                  <text className="countervalue" x="50%" y="57%" textAnchor="middle">0%</text>
                              </svg>
                          </div>
                          <div className="inner-content">
                              <h5 className="item-title" data-key="expertise2_title">Business Growth Strategies</h5>
                              <p className="item-disc" data-key="expertise2_desc">Providing expert guidance on investment, taxation, and accounting to drive sustainable growth</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="expertise-item">
                          <div className="expertise-item">
                              <div className="progress-circle">
                                  <svg className="radial-progress" data-countervalue="75" viewBox="0 0 80 80">
                                      <circle className="bar-static" cx="40" cy="40" r="35"></circle>
                                      <circle className="bar--animated" cx="40" cy="40" r="35"></circle>
                                      <text className="countervalue" x="50%" y="57%" textAnchor="middle">0%</text>
                                  </svg>
                              </div>
                              <div className="inner-content">
                                  <h5 className="item-title" data-key="expertise3_title">Active Work Strategies</h5>
                                  <p className="item-disc" data-key="expertise3_desc">Implementing practical financial and tax solutions for day-to-day business operations.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* TRUSTED CLIENTS SECTION */}
      <section className="trusted-clients-area rts-section-gap bg_light" id="clients">
          <div className="container">
              <div className="row align-items-center justify-content-center">
                  <div className="col-lg-10 text-center">
                      <div className="title-style-one">
                          <h2 className="title" data-key="clients_title">OUR TRUSTED CLIENTS</h2>
                          <p className="disc section-intro-text" data-key="clients_desc">
                              We are proud to have collaborated with a diverse range of leading companies, helping them achieve their financial and strategic goals.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="row mt-4">
                  <div className="col-12">
                      <div className="swiper-nav-wrapper">
                          <div className="swiper-nav-buttons">
                              <button className="client-swiper-button-prev"><i className="fa-solid fa-arrow-left"></i></button>
                              <button className="client-swiper-button-next"><i className="fa-solid fa-arrow-right"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row mt-5">
                  <div className="col-12">
                      <div className="swiper client-swiper">
                          <div className="swiper-wrapper">
                              {/* Logos here */}
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a1.png" alt="Client Logo 1" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a2.png" alt="Client Logo 2" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a3.jpg" alt="Client Logo 3" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a4.jpg" alt="Client Logo 4" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a5.jpg" alt="Client Logo 5" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a6.jpg" alt="Client Logo 6" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a7.jpg" alt="Client Logo 7" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a8.jpg" alt="Client Logo 8" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a9.jpg" alt="Client Logo 9" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a10.jpg" alt="Client Logo 10" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a11.jpg" alt="Client Logo 11" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a12.jpg" alt="Client Logo 12" /></div></div>
                              <div className="swiper-slide"><div className="client-logo-circle"><img src="a13.jpg" alt="Client Logo 13" /></div></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="rts-business-case-area rts-section-gap" id="project">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                       <div className="title-style-one">
                          <h2 className="title" data-key="project_title">OUR BUSINESS CASES</h2>
                          <p className="disc section-intro-text" data-key="project_desc">
                              Explore our portfolio of successful projects. Here's a glimpse into how we've helped our clients overcome challenges and achieve remarkable results.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="row mt-4">
                  <div className="col-12">
                      <div className="swiper-nav-wrapper">
                          <div className="swiper-nav-buttons">
                              <button className="project-swiper-button-prev"><i className="fa-solid fa-arrow-left"></i></button>
                              <button className="project-swiper-button-next"><i className="fa-solid fa-arrow-right"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row mt-5">
                  <div className="col-12">
                      <div className="swiper business-case-swiper">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <a href="#" className="case-study-card" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                     data-key-title="project1_modal_title"
                                     data-title="Workshop with Intaj Association"
                                     data-fa-icon-class="fa-solid fa-lightbulb"
                                     data-key-details="project1_modal_details"
                                     data-details="The workshop aims to support...">
                                      <img src="Intaj2.jpg" alt="Business Case 1" />
                                      <div className="case-study-overlay">
                                          <span className="category" data-key="project1_category">A workshop with the Intaj Association to support entrepreneurs</span>
                                          <h5 className="title" data-key="project1_card_title">A workshop with the Intaj Association to support entrepreneurs</h5>
                                          <div className="read-more-btn"><i className="fa-solid fa-arrow-right"></i></div>
                                      </div>
                                  </a>
                              </div>
                              <div className="swiper-slide">
                                  <a href="#" className="case-study-card" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                     data-key-title="project2_modal_title"
                                     data-title="Initiative with Amman Chamber of Commerce"
                                     data-fa-icon-class="fa-solid fa-handshake"
                                     data-key-details="project2_modal_details"
                                     data-details="One of the most important features...">
                                      <img src="Chamber3.jpg" alt="Business Case 2" />
                                      <div className="case-study-overlay">
                                          <span className="category" data-key="project2_category">Your tax consultation initiative is on us in cooperation with the Amman Chamber of Commerce</span>
                                          <h5 className="title" data-key="project2_card_title">Your tax consultation initiative is on us in cooperation with the Amman Chamber of Commerce</h5>
                                          <div className="read-more-btn"><i className="fa-solid fa-arrow-right"></i></div>
                                      </div>
                                  </a>
                              </div>
                              <div className="swiper-slide">
                                  <a href="#" className="case-study-card" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                     data-key-title="project3_modal_title"
                                     data-title="Support for Emerging Companies"
                                     data-fa-icon-class="fa-solid fa-rocket"
                                     data-key-details="project3_modal_details"
                                     data-details="One of the most important features...">
                                      <img src="Emerging2.jpg" alt="Business Case 3" />
                                      <div className="case-study-overlay">
                                          <span className="category" data-key="project3_category">Initiative to support emerging companies</span>
                                          <h5 className="title" data-key="project3_card_title">Initiative to support emerging companies</h5>
                                          <div className="read-more-btn"><i className="fa-solid fa-arrow-right"></i></div>
                                      </div>
                                  </a>
                              </div>
                               <div className="swiper-slide">
                                  <a href="#" className="case-study-card" data-bs-toggle="modal" data-bs-target="#serviceModal"
                                     data-key-title="project4_modal_title"
                                     data-title="Representing Companies and Institutions"
                                     data-fa-icon-class="fa-solid fa-globe"
                                     data-key-details="project4_modal_details"
                                     data-details="One of the goals of our company...">
                                      <img src="Representing1.jpg" alt="Business Case 4" />
                                      <div className="case-study-overlay">
                                          <span className="category" data-key="project4_category">Representing companies and institutions</span>
                                          <h5 className="title" data-key="project4_card_title"></h5>
                                          <div className="read-more-btn"><i className="fa-solid fa-arrow-right"></i></div>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <br /><br /><br />

      {/* FOOTER */}
      <footer className="site-footer" id="contact-footer">
          <div className="container py-5">
              <div className="row">
                  <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center text-lg-start">
                      <a href="#" className="footer-logo mb-4">
                          <img src="logo2.png" alt="Pshmena Logo" />
                      </a>
                      <p className="footer-description" data-key="footer_desc">Your partner in financial success and compliance.</p>
                      <div className="social-icons mt-4">
                          <a href="https://www.facebook.com/share/1A35zspoeX/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="https://www.linkedin.com/company/pshmena/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                          <a href="https://www.instagram.com/psh_mena?igsh=NHpweWY2bmI0dWt1&utm_source=qr" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 footer-quick-links">
                      <h5 className="footer-widget-title" data-key="footer_links_title">Quick Links</h5>
                      <div className="row">
                          <div className="col-6">
                              <ul className="footer-links">
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link1">Forum Support</span></a></li>
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link2">Help & FAQ</span></a></li>
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link3">Contact Us</span></a></li>
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link4">Pricing & Plans</span></a></li>
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link5">Cookie Policy</span></a></li>
                              </ul>
                          </div>
                          <div className="col-6">
                              <ul className="footer-links">
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link6">About Us</span></a></li>
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link7">My Account</span></a></li>
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link8">Our Company</span></a></li>
                                  <li><a href="#"><i className="fa-solid fa-arrow-right"></i> <span data-key="footer_link9">Service</span></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <h5 className="footer-widget-title" data-key="footer_contact_title">Contact Us</h5>
                      <ul className="footer-contact-info">
                          <li>
                              <div className="icon-box"><i className="fa-solid fa-phone-alt"></i></div>
                              <div className="info-text">
                                  <span className="info-title" data-key="footer_contact1_title">Call Us 24/7</span>
                                  <a href="tel:+962797239875">Mob. (+962)-797239875</a>
                              </div>
                          </li>
                          <li>
                              <div className="icon-box"><i className="fa-solid fa-envelope"></i></div>
                              <div className="info-text">
                                  <span className="info-title" data-key="footer_contact2_title">Work with us</span>
                                  <a href="mailto:alquraansami@yahoo.com">alquraansami@yahoo.com</a>
                              </div>
                          </li>
                          <li className="location-trigger" data-bs-toggle="modal" data-bs-target="#mapModal">
                              <div className="icon-box"><i className="fa-solid fa-map-marker-alt"></i></div>
                              <div className="info-text">
                                  <span className="info-title" data-key="footer_contact3_title">Our Location</span>
                                  <a href="#contact-footer" data-key="footer_contact3_location">3rd Circle, Amman, Jordan</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="copyright-bar">
              <div className="container d-flex justify-content-between align-items-center flex-wrap">
                  <p className="mb-0" data-key="footer_copyright">Pshmena - Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
                  <div className="copyright-links">
                      <a href="#" data-key="footer_privacy">Privacy Policy</a>
                      <a href="#" data-key="footer_terms">Terms & Condition</a>
                  </div>
              </div>
          </div>
      </footer>

      {/* SERVICE MODAL */}
      <div className="modal fade" id="serviceModal" tabIndex={-1} aria-labelledby="serviceModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  <div className="modal-body">
                      <div className="modal-icon-wrapper">
                          <img src="" alt="Service Icon" className="modal-service-img-icon" />
                          <i className=""></i>
                      </div>
                      <h5 className="modal-title" id="serviceModalLabel" data-key="modal_default_title">Service Details</h5>
                      <p className="modal-details"></p>
                      <a href="#contact-footer" className="rts-btn btn-accent" data-key="modal_get_quote">Get a Quote</a>
                  </div>
              </div>
          </div>
      </div>
      
      {/* MAP MODAL */}
      <div className="modal fade" id="mapModal" tabIndex={-1} aria-labelledby="mapModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="mapModalLabel" data-key="map_modal_title">Our Location</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <div className="map-responsive">
                          <iframe 
                              data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.18353334047!2d35.90919237529526!3d31.955917274017622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1005a419079%3A0x4cfbd70c99ba7fd7!2z2LTYsdmD2Kkg2KjZitiqINin2YTYrtio2LHYp9iqINin2YTZhdmH2YbZitmH!5e0!3m2!1sen!2sjo!4v1760294549966!5m2!1sen!2sjo" 
                              width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                          </iframe>
                      </div>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="rts-btn btn-light" data-bs-dismiss="modal" data-key="map_modal_close">Close</button>
                      <a href="https://maps.app.goo.gl/JKGH7zjH3QDzPLP26" target="_blank" rel="noreferrer" className="rts-btn btn-dark" data-key="map_modal_directions">Get Directions</a>
                  </div>
              </div>
          </div>
      </div>

      {/* PROGRESS WRAP (BACK TO TOP BUTTON) */}
      <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
          </svg>
      </div>
    </>
  )
}

export default App
