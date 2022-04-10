// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useEffect, useState } from 'react';



// //class Home  {
// //extends React.Component
// const EmployeeHome = () => {
//     const { id, firstName, lastName } = sessionStorage;
//     const history = useHistory();


//     const logoutUser = () => {
//         sessionStorage.removeItem("id");
//         sessionStorage.removeItem("firstName");
//         sessionStorage.removeItem("lastName");
//         sessionStorage.removeItem("loginStatus");

//         history.push("/signin");
//         // const cancel = (e) => {
//         //     history.push("/list");
//         // }
//     };


//     // render() {

//     return (

//         <div>

//             <div id="topbar" class="fixed-top d-flex align-items-center ">
//                 <div class="container d-flex align-items-center justify-content-center justify-content-md-between">
//                     <div class="contact-info d-flex align-items-center">
//                         <i class="bi bi-envelope-fill"></i><a href="#"><span class="__cf_email__">DS Solutions</span></a>

//                     </div>
//                     <div class="cta d-none d-md-block">
//                         <a href="/empadded" class="scrollto">Apply For Leave</a>
//                     </div>
//                 </div>
//             </div>


//             <header id="header" class="fixed-top d-flex align-items-center ">
//                 <div class="container d-flex align-items-center justify-content-between">

//                     <h1 class="logo"><a href="#">DS Solutions</a></h1>


//                     <nav id="navbar" class="navbar">
//                         <ul>
//                             <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
//                             <li><a class="nav-link scrollto" href="#about">About</a></li>
//                             <li><a class="nav-link scrollto" href="#team">Team</a></li>
//                             <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
//                             <li><a class="nav-link scrollto" href="/signup">Sign Up</a></li>
//                             {/* <li><a class="nav-link scrollto" href="/signin">Log Out</a></li> */}
//                             <li><button
//                                 onClick={logoutUser}
//                                 className="dropdown-item"
//                             >
//                                 Logout
//                             </button></li>
//                             <div className="col">
//                                 <div className="float-end">
//                                     <div className="btn-group " role="group">
//                                         <button
//                                             id="btnGroupDrop1"
//                                             type="button"
//                                             className="btn btn-primary dropdown-toggle"
//                                             data-bs-toggle="dropdown"
//                                             aria-expanded="false"
//                                         >
//                                             Welcome {firstName}
//                                         </button>
//                                         <ul
//                                             className="dropdown-menu"
//                                             aria-labelledby="btnGroupDrop1"
//                                         >

//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </ul>
//                         <i class="bi bi-list mobile-nav-toggle"></i>
//                     </nav>

//                 </div>
//             </header>
//             <section id="hero" class="d-flex justify-cntent-center align-items-center">
//                 <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">


//                     <div class="carousel-item active">
//                         <div class="carousel-container">
//                             <h2 class="animate__animated animate__fadeInDown">Welcome to <span>DS Solutions</span></h2>
//                             <p class="animate__animated animate__fadeInUp">Where you find your solutions</p>
//                             <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
//                         </div>
//                     </div>




//                 </div>
//             </section>

//             <main id="main">


//                 <section id="icon-boxes" class="icon-boxes">
//                     <div class="container">

//                         <div class="row">
//                             <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
//                                 <div class="icon-box">
//                                     <div class="icon"><i class="bx bxl-dribbble"></i></div>
//                                     <h4 class="title"><a href="">Marketing</a></h4>
//                                     <p class="description">The Marketing Department plays a vital role in promoting the business and mission of an organization</p>
//                                 </div>
//                             </div>

//                             <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
//                                 <div class="icon-box">
//                                     <div class="icon"><i class="bx bx-file"></i></div>
//                                     <h4 class="title"><a href="">Finance</a></h4>
//                                     <p class="description">The objective of the finance department is to maintain flawless bookkeeping. This role also includes payroll management, and providing the right chart of accounts for managing MIS expectations of the management.</p>
//                                 </div>
//                             </div>

//                             <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
//                                 <div class="icon-box">
//                                     <div class="icon"><i class="bx bx-tachometer"></i></div>
//                                     <h4 class="title"><a href="">Human Resource</a></h4>
//                                     <p class="description">An HR department is tasked with maximizing employee productivity and protecting the company from any issues that may arise within the workforce.</p>
//                                 </div>
//                             </div>

//                             <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
//                                 <div class="icon-box">
//                                     <div class="icon"><i class="bx bx-layer"></i></div>
//                                     <h4 class="title"><a href="">Customer service</a></h4>
//                                     <p class="description">Customer service representatives help customers with complaints and questions, give customers information about products and services, take orders, and process returns</p>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 </section>
//                 <section id="about" class="about">
//                     <div class="container" data-aos="fade-up">

//                         <div class="section-title">
//                             <h2>About Us</h2>
//                             <p>DS Solutions is built on trust our clients have in us.
//                             The ultimate goal is to provide every client with
//                             that feeling. How do we do it? With a serious
//                             approach to work and with the orientation to
// results</p>
//                         </div>

//                         <div class="row content">
//                             <div class="col-lg-6">
//                                 <p>
//                                     It’s not easy to describe our team, so we’ll do it
//                                     with a single word. Focus. It’s our fundamental
//                                     guiding principle, and it’s enabling us to provide
//                                     the first class experience. Just try us!

//                     </p>
//                                 <ul>
//                                     <li><i class="ri-check-double-line"></i> 4.9 Reviews</li>
//                                     <li><i class="ri-check-double-line"></i> Clients
//  Worldwide</li>
//                                     <li><i class="ri-check-double-line"></i> Digital Services</li>
//                                 </ul>
//                             </div>
//                             <div class="col-lg-6 pt-4 pt-lg-0">
//                                 <p>
//                                     Just because everybody does something one
//                                     way, it doesn’t mean it’s the way to do it. That’s
//                                     why our slogan is: “Turning things around”. The
//                                     driving force behind our successful business
//                                     story is in the strive for providing better
//                                     results.

//                     </p>
//                                 <a href="#" class="btn-learn-more">Learn More</a>
//                             </div>
//                         </div>

//                     </div>
//                 </section>
//                 <section id="clients" class="clients">
//                     <div class="container" data-aos="zoom-in">



//                     </div>
//                 </section>

//                     p0
//                     <section id="team" class="team section-bg">
//                     <div class="container" data-aos="fade-up">

//                         <div class="section-title">
//                             <h2>Team</h2>
//                             <p>Talent wins games, but teamwork and intelligence win championships.</p>
//                             <p>Coming together is a beginning. Keeping together is progress. Working together is success.</p>
//                         </div>

//                         <div class="row">

//                             <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
//                                 <div class="member d-flex align-items-start">
//                                     {/* <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" /></div> */}
//                                     <div class="member-info">
//                                         <h4>Simi Vincent</h4>
//                                         {/* <span>Chief Executive Officer</span> */}
//                                         {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p> */}
//                                         <div class="social">
//                                             <a href=""><i class="ri-twitter-fill"></i></a>
//                                             <a href=""><i class="ri-facebook-fill"></i></a>
//                                             <a href=""><i class="ri-instagram-fill"></i></a>
//                                             <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
//                                 <div class="member d-flex align-items-start">
//                                     {/* <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" /></div> */}
//                                     <div class="member-info">
//                                         <h4>Darshana Shinde</h4>
//                                         {/* <span>Product Manager</span>
//                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p> */}
//                                         <div class="social">
//                                             <a href=""><i class="ri-twitter-fill"></i></a>
//                                             <a href=""><i class="ri-facebook-fill"></i></a>
//                                             <a href=""><i class="ri-instagram-fill"></i></a>
//                                             <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>



//                         </div>

//                     </div>
//                 </section>

//                 <section id="contact" class="contact">
//                     <div class="container" data-aos="fade-up">

//                         <div class="section-title">
//                             <h2>Contact Us</h2>
//                         </div>

//                         <div class="row mt-1 d-flex justify-content-end" data-aos="fade-right" data-aos-delay="100">

//                             <div class="col-lg-10">
//                                 <div class="info">
//                                     <div class="address">
//                                         <i class="bi bi-geo-alt"></i>
//                                         <h4>Location:</h4>
//                                         <p>DS Solutions Pune Maharashtra</p>
//                                     </div>

//                                     <div class="email">
//                                         <i class="bi bi-envelope"></i>
//                                         <h4>Email:</h4>
//                                         <p><a href="#" class="__cf_email__" >ds_solutions@gmail.com</a></p>
//                                     </div>

//                                     <div class="phone">
//                                         <i class="bi bi-phone"></i>
//                                         <h4>Call:</h4>
//                                         <p>+91 7378905458</p>
//                                     </div>

//                                 </div>

//                             </div>



//                         </div>

//                     </div>
//                 </section>

//             </main>
//             <footer id="footer">

//                 <div class="footer-top">
//                     <div class="container">
//                         <div class="row">

//                             <div class="col-lg-3 col-md-6 footer-links">
//                                 <h4>Useful Links</h4>
//                                 <ul>
//                                     <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
//                                     <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
//                                     {/* <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
//                                         <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
//                                         <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
//                                 </ul>
//                             </div>



//                             <div class="col-lg-3 col-md-6 footer-contact">
//                                 <h4>Contact Us</h4>
//                                 <p>
//                                     DS Solutions <br />
//                       Pune<br />
//                       India <br /><br />
//                                     <strong>Phone:</strong> +91 7378905458<br />
//                                     <strong>Email:</strong> <a href="#" class="__cf_email__" >ds_solutions@gmail.comF</a><br />
//                                 </p>

//                             </div>

//                             <div class="col-lg-3 col-md-6 footer-info">
//                                 <h3>About DS SOlutions</h3>
//                                 <p>A company where you will find all digital solutions for your problems.</p>
//                                 <div class="social-links mt-3">
//                                     <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
//                                     <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
//                                     <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
//                                     <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
//                                     <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 <div class="container">
//                     <div class="copyright">
//                         &copy; Copyright <strong><span>DS Solutions</span></strong>. All Rights Reserved
//               </div>
//                     <div class="credits">

//                         by <a href="https://therichpost.com/">DS Solutions</a>
//                     </div>
//                 </div>
//             </footer>

//             <div id="preloader"></div>
//             <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
//         </div>
//     )
// };
// //}
// export default EmployeeHome;

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
//import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
const EmployeeHome = () => {
    const { id, firstName, lastName } = sessionStorage;
    const history = useHistory();
    const logoutUser = () => {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("firstName");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("loginStatus");

        history.push("/signin");

    };


    return (
        <div className="App">
            <header>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand" target="_blank" href="#">
                            {/* <img class="img-fluid" src="https://via.placeholder.com/180x45" /> */}
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">

                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link p-3" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-3" href="#about-us">About us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-3" href="#features">Departments</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-3" href="#teams">Teams</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/empadded" class="nav-link p-3o">Apply for Leave</a>
                                </li>
                                {/* <li class="nav-item">
                                    <a href="/leave" class="nav-link p-3o">Get Employees Leave Details</a>
                                </li> */}
                                <li class="nav-item">
                                    <a href="/employeeperformance" class="nav-link p-3o">Performance List</a>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link active" href="#">Active</a> */}
                                    <a class="nav-link p-3o" href="/signin">Log Out</a>
                                </li>


                            </ul>
                            <div className="col">
                                <div className="btn-group " role="group">
                                    <button
                                        type="button"
                                        className="btn btn-primary "
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Welcome {firstName}
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="btnGroupDrop1"
                                    >

                                    </ul>
                                </div>
                            </div>





                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section>

                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div style={{ height: 700, width: 1000 }}>
                                {/* <img src="../../images/icon.jpeg" class="d-block w-100"  alt="..." /> */}

                                <img src="../../images/icon.jpeg" alt="..." style={{ height: 500, width: 1350 }} />
                            </div>
                            {/* <div class="carousel-item">
                                <a target="_blank" href="#"><img src="https://via.placeholder.com/1468x500" class="d-block w-100" alt="..." /></a>
                            </div>
                            <div class="carousel-item">
                                <a target="_blank" href="#"><img src="https://via.placeholder.com/1468x500" class="d-block w-100" alt="..." /></a>
                            </div> */}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <section id="about-us" class="py-5">
                    <div class="container">
                        <div class="text-center py-4">
                            <h1>About Us</h1>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <a target="_blank" href="#">
                                    <img src="../../images/GlenLakeVII_Exterior-4-250x250.jpg.crdownload" class="d-block img-fluid" alt="..." />
                                </a>
                            </div>
                            <div class="col-md-9">
                                <p class="lead text-muted">DS Solutions is built on trust our clients have in us.
                                The ultimate goal is to provide every client with
                                that feeling. How do we do it? With a serious
                                approach to work and with the orientation to
                                results. Just because everybody does something one
                                way, it doesn’t mean it’s the way to do it. That’s
                                why our slogan is: “Turning things around”. The
                                driving force behind our successful business
                                story is in the strive for providing better
                                 results.</p>
                                <p>
                                    {/* <a href="#" class="btn btn-primary my-2 me-2">More Details</a> */}
                                    <a href="#" class="btn btn-primary my-2">Contact Us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" class="py-5 bg-light">
                    <div class="container">
                        <div class="text-center py-4">
                            <h1>Departments</h1>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-4 mb-2">
                                <div class="box-part text-center">
                                    <i class="text-primary fas fa-heart fa-3x mb-3" aria-hidden="true"></i>
                                    <div class="title">
                                        <h4>HR</h4>
                                    </div>
                                    <div class="text mb-3">
                                        <span>An HR department is tasked with maximizing employee productivity and protecting the company from any issues that may arise within the workforce.</span>
                                    </div>
                                    <a class="btn btn-outline-primary" href="#">Learn More</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 mb-2">
                                <div class="box-part text-center">
                                    <i class="text-success fas fa-laptop fa-3x mb-3" aria-hidden="true"></i>
                                    <div class="title">
                                        <h4>Marketing</h4>
                                    </div>
                                    <div class="text mb-3">
                                        <span>The Marketing Department plays a vital role in promoting the business and mission of an organization.</span>
                                    </div>
                                    <a class="btn btn-outline-success" href="#">Learn More</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 mb-2">
                                <div class="box-part text-center">
                                    <i class="text-danger fas fa-box-open fa-3x mb-3" aria-hidden="true"></i>
                                    <div class="title">
                                        <h4>Customer Service</h4>
                                    </div>
                                    <div class="text mb-3">
                                        <span>Customer service representatives help customers with complaints and questions, give customers information about products and services, take orders, and process returns.</span>
                                    </div>
                                    <a class="btn btn-outline-danger" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="pricing" class="py-5">
                    <div class="container">
                        <div class="row text-center">
                            <div class="py-4">
                                <h1>Teams</h1>
                            </div>

                            <div class="col-sm-4 mb-2">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-light">
                                        <h4 class="my-0 font-weight-normal">Free</h4>
                                    </div>
                                    <div class="card-body bg-light">
                                        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                                        <ul class="list-unstyled mt-3 mb-4">
                                            <li>Simi Vincent</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" class="btn btn-block btn-outline-primary">Get started</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 mb-2">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-info text-light">
                                        <h4 class="my-0 font-weight-normal">Pro</h4>
                                    </div>
                                    <div class="card-body bg-info text-light">
                                        <h1 class="card-title pricing-card-title">$15 <small>/ mo</small></h1>
                                        <ul class="list-unstyled mt-3 mb-4">
                                            <li>20 users included</li>
                                            <li>10 GB of storage</li>
                                            <li>Priority email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" class="btn btn-block btn-light">Get started</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 mb-2">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-success text-light">
                                        <h4 class="my-0 font-weight-normal">Enterprise</h4>
                                    </div>
                                    <div class="card-body bg-success text-light">
                                        <h1 class="card-title pricing-card-title">$29 <small>/ mo</small></h1>
                                        <ul class="list-unstyled mt-3 mb-4">
                                            <li>30 users included</li>
                                            <li>15 GB of storage</li>
                                            <li>Phone and email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" class="btn btn-block btn-light">Get started</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}
                <section id="teams" class="team section-bg">
                         <div class="container" data-aos="fade-up">

                             <div class="section-title">
                                 <h2>Team</h2>
                                <p>Talent wins games, but teamwork and intelligence win championships.</p>
                                 <p>Coming together is a beginning. Keeping together is progress. Working together is success.</p>
                             </div>

                             <div class="row">

                              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                     <div class="member d-flex align-items-start">
                                         {/* <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" /></div> */}
                                         <div class="member-info">
                                             <h4>Simi Vincent</h4>
                                             {/* <span>Chief Executive Officer</span> */}
                                             {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p> */}
                                            <div class="social">
                                                 <a href=""><i class="ri-twitter-fill"></i></a>
                                                 <a href=""><i class="ri-facebook-fill"></i></a>
                                                 <a href=""><i class="ri-instagram-fill"></i></a>
                                                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                             </div>
                                        </div>
                                     </div>
                               </div>

                                <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                                     <div class="member d-flex align-items-start">
                                         {/* <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" /></div> */}
                                         <div class="member-info">
                                             <h4>Darshana Shinde</h4>
                                            {/* <span>Product Manager</span>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p> */}
                                             <div class="social">
                                                 <a href=""><i class="ri-twitter-fill"></i></a>
                                                 <a href=""><i class="ri-facebook-fill"></i></a>
                                                 <a href=""><i class="ri-instagram-fill"></i></a>
                                                 <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                            </div>
                                        </div>
                                     </div>
                                </div>



                             </div>

                       </div>
                    </section>
                    {/* <section id="contact" class="contact">
                         <div class="container" data-aos="fade-up">

                             <div class="section-title">
                                 <h2>Contact Us</h2>
                             </div>
                             <div class="row mt-1 d-flex justify-content-end" data-aos="fade-right" data-aos-delay="100">

                                 <div class="col-lg-10">
                                     <div class="info">
                                         <div class="address">
                                             <i class="bi bi-geo-alt"></i>
                                             <h4>Location:</h4>
                                             <p>DS Solutions Pune Maharashtra</p>
                                         </div>

                                         <div class="email">
                                             <i class="bi bi-envelope"></i>
                                             <h4>Email:</h4>
                                             <p><a href="#" class="__cf_email__" >ds_solutions@gmail.com</a></p>
                                         </div>

                                        <div class="phone">
                                             <i class="bi bi-phone"></i>
                                             <h4>Call:</h4>
                                             <p>+91 7378905458</p>
                                         </div>

                                     </div>

                                 </div>



                             </div>

                         </div>
                     </section> */}
                     {/* <section id="contact" class="contact">

                     </section> */}

                {/* <section id="testimonial" class="py-5 bg-light">
      <div class="container"> */}
                {/* <div class="text-center py-4">
              <h1>Testimonials</h1>
          </div>
         
                <div class="row">
                 
                    
                          <div class="col-md-4">
                              <div class="card mb-4 shadow-sm">
                                  <a href="#">
                                      <img class="img-fluid" src="https://via.placeholder.com/416x225" alt="" />
                                  </a>
                                  <div class="card-body">
                                      <div class="stars d-inline">
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star"></span>
                                      </div>
                                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-muted">By Jassa</small>
                                      </div>
                                  </div>
                              </div>
                          </div>
                         
                          <div class="col-md-4">
                              <div class="card mb-4 shadow-sm">
                                  <a href="#">
                                      <img class="img-fluid" src="https://via.placeholder.com/416x225" alt="" />
                                  </a>
                                  <div class="card-body">
                                      <div class="stars d-inline">
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star"></span>
                                      </div>
                                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-muted">By Jassa</small>
                                      </div>
                                  </div>
                              </div>
                          </div>
                       
                          <div class="col-md-4">
                              <div class="card mb-4 shadow-sm">
                                  <a href="#">
                                      <img class="img-fluid" src="https://via.placeholder.com/416x225" alt="" />
                                  </a>
                                  <div class="card-body">
                                      <div class="stars d-inline">
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star text-warning"></span>
                                          <span class="fas fa-star"></span>
                                      </div>
                                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-muted">By Jassa</small>
                                      </div>
                                  </div>
                              </div>
                          </div>
          </div>
      </div>
  </section> */}

            </main>
            <footer class="pt-4 pt-md-5 border-top">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md">
                            {/* <a href="#">
                  <img class="img-fluid" src="https://via.placeholder.com/250x65" />
              </a> */}
                        </div>
                        <div class="col-6 col-md">
                            <h5>Contact Us</h5>
                            {/* <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Cool stuff</a></li>
                                <li><a class="text-muted" href="#">Random feature</a></li>
                                <li><a class="text-muted" href="#">Team feature</a></li>
                                <li><a class="text-muted" href="#">Stuff for developers</a></li>
                                <li><a class="text-muted" href="#">Another one</a></li>
                                <li><a class="text-muted" href="#">Last time</a></li>
                            </ul> */}
                             <div class="col-lg-5">
                                     <div class="info">
                                         <div class="address">
                                             <i class="bi bi-geo-alt"></i>
                                             <h4>Location:</h4>
                                             <p>DS Solutions Pune Maharashtra</p>
                                         </div>

                                         <div class="email">
                                             <i class="bi bi-envelope"></i>
                                             <h4>Email:</h4>
                                             <p><a href="#" class="__cf_email__" >ds_solutions@gmail.com</a></p>
                                         </div>

                                        <div class="phone">
                                             <i class="bi bi-phone"></i>
                                             <h4>Call:</h4>
                                             <p>+91 7378905458</p>
                                         </div>

                                     </div>

                                 </div>
                           
                        </div>
                        
                        {/* <div class="col-6 col-md">
                            {/* <h5>Resources</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Resource</a></li>
                                <li><a class="text-muted" href="#">Resource name</a></li>
                                <li><a class="text-muted" href="#">Another resource</a></li>
                                <li><a class="text-muted" href="#">Final resource</a></li>
                            </ul> */}
                             {/* <div class="col-lg-10">
                                     <div class="info">
                                         <div class="address">
                                             <i class="bi bi-geo-alt"></i>
                                             <h4>Location:</h4>
                                             <p>DS Solutions Pune Maharashtra</p>
                                         </div>

                                         <div class="email">
                                             <i class="bi bi-envelope"></i>
                                             <h4>Email:</h4>
                                             <p><a href="#" class="__cf_email__" >ds_solutions@gmail.com</a></p>
                                         </div>

                                        <div class="phone">
                                             <i class="bi bi-phone"></i>
                                             <h4>Call:</h4>
                                             <p>+91 7378905458</p>
                                         </div>

                                     </div>

                                 </div>
                        </div> */} 
                        {/* <div class="col-6 col-md"> */}
                            {/* <h5>About</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Team</a></li>
                                <li><a class="text-muted" href="#">Locations</a></li>
                                <li><a class="text-muted" href="#">Privacy</a></li>
                                <li><a class="text-muted" href="#">Terms</a></li>
                            </ul> */}
                             {/* <div class="col-lg-10">
                                     <div class="info">
                                         <div class="address">
                                             <i class="bi bi-geo-alt"></i>
                                             <h4>Location:</h4>
                                             <p>DS Solutions Pune Maharashtra</p>
                                         </div>

                                         <div class="email">
                                             <i class="bi bi-envelope"></i>
                                             <h4>Email:</h4>
                                             <p><a href="#" class="__cf_email__" >ds_solutions@gmail.com</a></p>
                                         </div>

                                        <div class="phone">
                                             <i class="bi bi-phone"></i>
                                             <h4>Call:</h4>
                                             <p>+91 7378905458</p>
                                         </div>

                                     </div>

                                 </div> */}
                        </div>
                    </div>
                {/* </div> */}
                <div class="text-center py-4 bg-light mt-4">Copyright 2021 | All right reserved by DS Solutions</div>
            </footer>

        </div>
    );
}

export default EmployeeHome;