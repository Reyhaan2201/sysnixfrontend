import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function About() {
    const options = {
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
      };
    
      const clients = [
        'assets/client/1.png',
        'assets/client/2.png',
        'assets/client/3.png',
        'assets/client/4.jpg',
        'assets/client/5.png',
        'assets/client/6.png',
        'assets/client/7.jpg',
        'assets/client/8.png',
        'assets/client/9.png',
        'assets/client/10.png',
        'assets/client/11.png',
        'assets/client/12.png',
        'assets/client/13.png',
        'assets/client/14.png',
        'assets/client/15.png',
        'assets/client/16.png',
        'assets/client/17.jpg',
      ];
  return <>
     <div className="page-title" data-background="assets/img/banner_about.jpg" data-mode="none">
      <div className="container">
        <div className="dev-breadcrumb">
          <ul className="clearfix">
          <li><a href="/" >Home</a></li>
<li><a className="none-link" href="about.html">About Us</a></li>

          </ul>
        </div>
        <div className="page-meta">
          <h2 style={{color: "#ef1923"}}>About Us</h2>
          <p style={{color: "#f7f7f7"}}>With over 5 years of experience in Industrial Automation we've <br /> built well known name.</p>
        </div>
      </div>
    </div>
    {/* <!-- Wrapper of page --> */}
		<div class="wrapper clearfix">
            {/* Icon boxes */}
        <section className="padding paddv-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="dev-iconbox">
              <a href="/">
                <i className="fa fa-heartbeat" aria-hidden="true"></i>
              </a>
              <h2>
                <span>We Always do</span>
                Quality Work
              </h2>
              <p>
                We never compromise with quality. Our top class Software solutions make us one of the leading software development company in India. include cellular and molecular biology medical genetics, immunology. and psychology.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dev-iconbox">
              <a href="cubes.html">
                <i className="fa fa-cubes" aria-hidden="true"></i>
              </a>
              <h2>
                <span>On-Time</span>
                Delivery
              </h2>
              <p>
                We never fail the contract time bound of the projects. We are always committed to deliver your projects earlier of the dead line.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dev-iconbox">
              <a href="/">
                <i className="fa fa-area-chart" aria-hidden="true"></i>
              </a>
              <h2>
                <span>Reliable</span>
                Communication
              </h2>
              <p>
                We have excellent communication skilled support and sales team to give you proper support and guide to show the right direction and hassle free solutions for any issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Icon boxes end */}

    {/* about us */}
    <section className="padding paddv-100 light-section">
      <div className="container section-row">
        <div className="row">
          <div className="col-md-6">
            <h1 className="section-title">
              <span className="sub-title">Read What We Do</span>
              About Sysnix Automation
              <span className="linner"></span>
            </h1>
            <p className="section-desc">
              Sysnix Automation is a leading provider of innovative industrial automation solutions dedicated to helping business enhance efficiency,productivity, and safety in their operations With a commitment to excellence and a focus on cutting-edge technology, we empower industries across various sectors to thrive in today's competitive landscape.
            </p>
            <p style={{textAlign: "left"}}>
              At Sysnix Automation, we understand  the unique challenges faced by industrial enterprises. Our team of skilled engineers and automation specialists collaborators closely with clients to develop tailored solutions that address their specific needs and goals. From conceptualization to implementation and ongoing support,we are your trusted partner every step of the way. 
            </p>
            <ul className="feature-list">
              <li data-animation-name="fadeInLeft" data-animation-delay="1000" data-animation-duration="1000">
                <a href="/" >
                  <i className="fa fa-globe"></i>
                  <h2>
                    <span>Expanding</span>
                    Provider
                  </h2>
                </a>
              </li>
              <li data-animation-name="fadeInLeft" data-animation-delay="1500" data-animation-duration="1000">
                <a href="/" >
                  <i className="fa fa-certificate"></i>
                  <h2>
                    <span>Global</span>
                    Certified
                  </h2>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div data-animation-name="fadeInRight" className="framed-images clearfix">
              <span className="frame-border">
                <span></span>
              </span>
              <img src="assets/img/about.jpg" alt="Framed Images" title="Framed Images" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about us end */}

    {/* timeline */}
    <section className="padding paddv-100 light-section">
      <div className="container">
        <div className="dev-timeline animation-full">
          <div className="timeline-tree">
            <ul>
              <li className="active" data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Custom Automation Solutions</span>
                </a>
              </li>
              <li data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Control Systems Integration</span>
                </a>
              </li>
              <li data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Industrial IoT Solutions</span>
                </a>
              </li>
              <li data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Safety Systems and compliance</span>
                </a>
              </li>
              <li data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Training and Support</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="timeline-content">
            <div className="timeline-inner">
              <div className="timeline-item">
                <h2>Custom Automation Solutions</h2>
                <p>
               We design and deploy bespoke automatio systems that streamline manufacturing processes, optimize resource utlization, and improve  overall operational efficiency. Whether you require robotic integration, PLC programming, or SCADA systems,we have the expertise to deliver solutions thata exceed expectations.
                </p>
              </div>
              <div className="timeline-item">
                <h2>Control Systems Integration</h2>
                <p>
                  {/* Whatever you need in industrial automation field we can give you the exact solution for our innovative automation team. Sysnix Technologies is really proud of its highly qualified and technically skilled engineers, support & sales team. */}
                  Our experienced team specializes in integrating disparate control systems, enabling seamless communication and coordination across your facility. By consolidating your control infrastructure, we help you achieve greater control,visibilty, and reliability in your operation.
                </p>
              </div>
              <div className="timeline-item">
                <h2>Industrial IoT Solutions</h2>
                <p>
                  Leveraging the power of data analytics  and connectivity, we enable businesses to harness the ful potential of the industrial internet insights into equipment performance, predictive maintenance capabilities, and actionable intelligence for informed decision-making.
                </p>
              </div>
              <div className="timeline-item">
                <h2>Safety Systems abd compliance</h2>
                <p>
                                          Safety is paramount
                        in industrial environments, and we prioritize the
                        implementation of robust safety systems to protect
                        both personnel and assets. From safety instrumented
                        systems (SIS) to compliance with industry standards
                        and regulations, we ensure that your operations meet
                        the highest safety standards
                </p>
              </div>
              <div className="timeline-item">
                <h2>Training and Support</h2>
                <p>
                                We are committed to
                empowering our clients with the knowledge and
                skills needed to maximize the value of our solutions.
                Our comprehensive training programs cover system
                operation, maintenance, and troubleshooting,
                ensuring that your team is equipped to operate your
                automation systems with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* timeline end */}
    <section className="padding paddv-100 light-section">
      <div className="container section-row">
        <p className="section-desc">
        At Sysnix Automation, we are driven by a passion for
innovation and a dedication to customer satisfaction. Our
mission is to deliver transformative automation solutions
that drive growth, improve competitiveness, and pave the
way for a more sustainable future.
Contact us today to learn more about how we can help
elevate your industrial automation capabilities and propel
your business to new heights.
        </p>
      </div>

    </section>

    {/* team */}
    <section className="padding paddv-60 dark-section" style={{ backgroundColor: '#fff' }}>
      <div className="counters">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className="clients-slider owl-carousel" {...options}>
              {clients.map((client, index) => (
                <a href="/"  key={index} className="client">
                  <img src={client} alt={`client ${index + 1}`} height="60" width="90" />
                </a>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  </div>;
  </>
}

export default About;
