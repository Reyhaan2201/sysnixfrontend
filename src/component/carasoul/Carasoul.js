import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carasoul.css"

function Carasoul() {

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


  return (
    <>
    <div className="site-container ">
  <div className="wrapper clearfix">
    {/* About Us  */}
    <section className="padding paddv-100 " style={{backgroundColor: "white"}}>
      <div className="container section-row">
        <div className="row">
          <div className="col-md-6">
            <h1 className="section-title">
              <span className="sub-title">Read What We Do</span>
              About Sysnix Automation
              <span className="linner" />
            </h1>
            <p className="section-desc">Sysnix Automation  is a leading Industrial Automation products and solution provider for various industry verticals. Established in 2010, The Company has been promoted by some highly experienced Professionals dedicated to provide total industrial automation solutions under one roof. It possesses not only the latest technologies but also the most knowledgeable and experience hands to offer most user friendly customized solutions.</p>
            <p>Sysnix Automation provides high quality on site services for industrial automation and the end users on a broad range of hardware &amp; software platforms and latest technologies. </p>
          </div>
          <div className="col-md-6">
            <div data-animation-name="fadeInRight" className="framed-images clearfix">
              <span className="frame-border">
                <span />
              </span>
              <img src="assets/img/about.jpg" alt="Framed Images" title="Framed Images" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End About Us */}
    {/* Call to Action */}
    <section className="padding paddv-40 dark-section">
      <div className="container section-row">
        <div className="row">
          <div className="col-md-12">
            <div className="dev-calltoaction" data-animation-name="fadeInDown">
              <p>We are committed of <span>delivering</span> the best services</p>
              <a className="dev-callbtn" href="/" >Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Call to action */}
    {/* Featured Projects */}
    <section className="padding paddv-100" data-background="assets/img/bg2.jpg">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="section-title light-title add-margin margt-50">
              <span className="sub-title">View our work</span>
              Our Services
              <span className="linner"></span>
            </h1>
            <p className="section-desc light-title">The company is in the field of Industrial automation providing complete range for the Electrical and Instrumentation Products and offering a one stop customized solution to customers in the fields of industrial automation.</p>
          </div>
          <div className="col-md-8">
            <OwlCarousel  className="featured-slider owl-carousel" center loop margin={10}  autoplay autoplayTimeout={3000} autoplayHoverPause={true} nav>
              <div className="fitem">
                <div className="thumb">
                  <img src="assets/img/plchmi.jpg" alt="featured alternative text" />
                </div>
                <div className="content">
                  <h2>PLC & HMI</h2>
                  <a href="/" >View Details</a>
                </div>
              </div>
              <div className="fitem">
                <div className="thumb">
                  <img src="assets/img/servo.jpg" alt="featured alternative text" />
                </div>
                <div className="content">
                  <h2>AC & Servo Drives</h2>
                  <a href="/" >View Details</a>
                </div>
              </div>
              <div className="fitem">
                <div className="thumb">
                  <img src="assets/img/scada.jpg" alt="featured alternative text" />
                </div>
                <div className="content">
                  <h2>SCADA & DCS System</h2>
                  <a href="/" >View Details</a>
                </div>
              </div>
              <div className="fitem">
                <div className="thumb">
                  <img src="assets/img/lsensor.jpg" alt="featured alternative text" />
                </div>
                <div className="content">
                  <h2>Sensors & Vision Camera</h2>
                  <a href="/" >View Details</a>
                </div>
              </div>
              <div className="fitem">
                <div className="thumb">
                  <img src="assets/img/lbarcode.jpg" alt="featured alternative text" />
                </div>
                <div className="content">
                  <h2>Barcode & RFID System</h2>
                  <a href="/" >View Details</a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
   {/* <Project/> */}
    {/* End Featured Projects */}
    {/* Video Player */}
    <section className="padding paddv-150 relative-section " style={{backgroundColor: "white"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="block-title">
              <span className="sub-title">OUR QUALITY POLICY</span>
              We never compromise with quality
              <span className="linner" />
            </h2>
            <p className="block-desc">We shall strive to build a long-term relationship with our customers based on mutual trust &amp; highest standards of behavior. We shall provide services to our customers, which meet or exceed their expectations. Taking into consideration all the little details and checked-tested thoroughly before deploying .Our team have given an edge over the peers making us expert, much valuable and time saver. With this there is no surprise that we are known for the quality and flexibility. </p>
            <a href="/"  className="devbtn">Read More</a>
          </div>
          <div className="col-md-6">
            <img alt="placeholder" src="assets/img/work1.jpg" />
          </div>
        </div>
      </div>
    </section>
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
    {/* End Video Player */}
  </div>
  <div className="dev-revslider">
    <div id="dev-fullwidthslider" className="rev_slider" data-version={5.0}>
      <ul> 
        <li data-transition="fade"> 
          {/* MAIN IMAGE */}
          <img src="assets/img/1.jpg" width={1920} height={600} alt='' />
          {/* LAYER NR. 1 */}
          <div className="tp-caption tp-resizme dev-underline-title" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['-95', '-95', '-95', '-95']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={500} style={{zIndex: 5, whiteSpace: 'nowrap'}}>INDUSTRIAL PRODUCTS</div>
          {/* LAYER NR. 2 */}
          <div className="tp-caption tp-resizme dev-large-title" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['0', '0', '0', '0']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000} style={{zIndex: 5, whiteSpace: 'nowrap'}}>
            Sensors,<span>Instrumentation</span> <br /> <span>and</span> Industrial Control Products.</div>
          {/* LAYER NR. 3 */}
          <a className="tp-caption tp-resizeme dev-capbtn" href="/"  target="_self" id="dev-fullwidthslider-layer-3" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['100', '100', '100', '100']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1500} style={{zIndex: 5, whiteSpace: 'nowrap'}}>Read more
          </a>
        </li>
        <li data-transition="fade"> 
          {/* MAIN IMAGE */}
          <img src="assets/img/2.jpg" alt="" width={1920} height={600} />
          {/* LAYER NR. 1 */}
          <div className="tp-caption tp-resizme dev-underline-title" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['-95', '-95', '-95', '-95']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={500} style={{zIndex: 5, whiteSpace: 'nowrap'}}>Industry 4.0 Projects</div>
          {/* LAYER NR. 2 */}
          <div className="tp-caption tp-resizme dev-large-title" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['0', '0', '0', '0']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000} style={{zIndex: 5, whiteSpace: 'nowrap'}}>
            <span>Industry</span> <br /> <span>Digitalization</span> Projects.</div>
          {/* LAYER NR. 3 */}
          <a className="tp-caption tp-resizeme dev-capbtn" href="/"  target="_self" id="dev-fullwidthslider-layer-3" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['100', '100', '100', '100']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1500} style={{zIndex: 5, whiteSpace: 'nowrap'}}>Read More 
          </a>
        </li>
        <li data-transition="fade"> 
          {/* MAIN IMAGE */}
          <img src="assets/img/3.jpg" alt="" width={1920} height={600} />
          {/* LAYER NR. 1 */}
          <div className="tp-caption tp-resizme dev-underline-title" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['-95', '-95', '-95', '-95']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={500} style={{zIndex: 5, whiteSpace: 'nowrap'}}>SCADA System</div>
          {/* LAYER NR. 2 */}
          <div className="tp-caption tp-resizme dev-large-title" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['0', '0', '0', '0']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000} style={{zIndex: 5, whiteSpace: 'nowrap'}}>
            Instrumentation <span>Controlling</span> <br /> <span>&amp; Data Logging</span> System.</div>
          {/* LAYER NR. 3 */}
          <a className="tp-caption tp-resizeme dev-capbtn" href="/"  target="_self" id="dev-fullwidthslider-layer-3" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['100', '100', '100', '100']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1500} style={{zIndex: 5, whiteSpace: 'nowrap'}}>Read More 
          </a>
        </li>
        <li data-transition="fade"> 
          {/* MAIN IMAGE */}
          <img src="assets/img/4.jpg" alt="" width={1920} height={600} />
          {/* LAYER NR. 1 */}
          <div className="tp-caption tp-resizme dev-underline-title" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['-95', '-95', '-95', '-95']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={500} style={{zIndex: 5, whiteSpace: 'nowrap'}}>Industrial Services</div>
          {/* LAYER NR. 2 */}
          <div className="tp-caption tp-resizme dev-large-title" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['0', '0', '0', '0']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000} style={{zIndex: 5, whiteSpace: 'nowrap'}}>
            Industrial <span>Instrumentation &amp; </span> <br /> <span>Controlling</span> Services.</div>
          {/* LAYER NR. 3 */}
          <a className="tp-caption tp-resizeme dev-capbtn" href="/"  target="_self" id="dev-fullwidthslider-layer-3" data-x="['center','center','center','center']" data-hoffset="['0', '0', '0', '0']" data-y="['center','center','center','center']" data-voffset="['100', '100', '100', '100']" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1500} style={{zIndex: 5, whiteSpace: 'nowrap'}}>Free Consultation 
          </a>
        </li>
      </ul> 
    </div>{/* END REVOLUTION SLIDER */}
  </div>
  </div>
</>

  )
}

export default Carasoul