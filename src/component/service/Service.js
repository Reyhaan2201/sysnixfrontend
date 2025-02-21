import React from 'react'
import { Link } from 'react-router-dom';


function Service() {
  return (
    <div>
  {/* Page Title */}
  <div className="page-title" data-background="assets/img/plc_services.jpg" data-mode="none">
    <div className="container">
      <div className="dev-breadcrumb">
        <ul className="clearfix">
          <li><a  href="/" >Home</a></li>
          <li><a className="none-link" href="./our-services.html">Our Services</a></li>
        </ul>
      </div>
      <div className="page-meta">
        <h2 style={{color: "rgb(239, 25, 35)"}}>Our Services</h2>
        <p style={{color: "rgb(239, 25, 30)"}}>With over many years of experience in Industrial Automation Company we've <br /> built well known name in Automation.</p>
      </div>
    </div>
  </div>
  {/* End Page Title */}
  {/* Wrapper of page */}
  <div className="wrapper clearfix">
    <section className="padding paddv-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/service/plchmi.png" alt="" />
              </div>
              <h2>PLC &amp; HMI</h2>
              <p>We provides the better programming and installation services in vary types of plc like STL, FBD with Siemens, Schneider, Allen Bradly, ABB, Mitsubishi, Delta, Omron, Fuji, GE, Fanuc, Honywelletc etc.Our engineers are well trainned for programming in all types of PLCs and HMIs </p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/scada.jpg" alt="" />
              </div>
              <h2>SCADA &amp; DCS</h2>
              <p>Our company provides various types service On SCADA &amp; DCS of Siemens PCS7, Wincc, Rockwell Factory Talk Studio, Schneider Vijeo Citect, Intouch, as well as developed Web Based, Windows Application, Mobile App SCADA System in Dot Net, Java, python with Various Industrial Protocol like ModbusRTU, ModbusTCP/IP, Profibus, Profinetetc.We are professional for it and we give our best. </p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/vfds.jpg" alt="" />
              </div>
              <h2>Drives</h2>
              <p>As we know automation industry growing rapidly because the demand of the technology sectors like PHARMA, AUTOMOBILES, FOOD &amp; BEVERAGE etc. Drives plays the main role in these industries. Our professional engineers can easily install and repair any type of drives.</p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/ems.jpg" alt="" />
              </div>
              <h2>Energy Management System</h2>
              <p>In today’s Industrial Era, industries account for the major consumption of electrical energy. It is essential for the industries to optimize the usage &amp; also to keep cost under control. It has become a necessity for the industries to use less energy for the same level of activity &amp; also to monitor &amp; control it; EMS is the answer to these problems.
                EMS is a solution that puts the customer / user in control of their energy consumption through continuous monitoring of the energy.EMS is capable to collect, store &amp; analyze the collected data from different remote monitoring devices to manage electrical cost associated with the electrical systems. 
                That's why our compony focousing more on this and provides better EMS software.</p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/software.jpg" alt="" />
              </div>
              <h2>Industrial Software Development</h2>
              <p>Our company provides differrents types of Industrial software developmet services like website developments, mobile application developments etc. Our engineers are too professional, they can easily carry out the task. We always give our best.</p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/vfdrepairing.jpg" alt="" />
              </div>
              <h2>Repairing</h2>
              <p>Repairing is not an easy task, but our company cary out any task easily, we can repair variour types of products like PLCs, DRIVES, HMIs etc. </p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/lbarcode.jpg" alt="" />
              </div>
              <h2>Barcode &amp; RFID Traceability System</h2>
              <p>Sysnix Automation is the best company in the Rudarpur(U.S NAGAR), that provides the best Barcode &amp; RFID Traceability system. Maily every sectors need this kind of development to reduce or minimize the hurdles in the industry,traceability is the best method to sort out the issues. 
                we alredy done our projects in many comapnay. Our technoligy is the best, because we laways give our best. </p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/wireless.jpg" alt="" />
              </div>
              <h2>Wireless Communication System</h2>
              <p>Wireless based industrial automation is a prime concern in our day-to-day life. The approach to  Wireless Network for Industrial Applications standardized nowadays. The system is fully controlled by the Personal Computer through Visual Basics GUI (Graphical User Interface).The GUI is developed based on application by the Sysnix Automation.</p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/vision.jpg" alt="" />
              </div>
              <h2>Machine Vision</h2>
              <p>In this new ERA of technology Sysnix Automation provides the better environment of software for machine vision that is too valuable for Industry. Machine vision tools are used for inspection in multiple ways, from part selection and assembly verification to final inspection and tracking. 
                Complex applications are often prone to error with the human eye. Machine vision systems significantly eliminate risk of misassembled products. 
                Machine Vision systems can improve speed and reduce scrap rate while scaling down the amount of labor needed to run equipment this all leads to lower production costs.Machine vision brings additional safety and operational benefits by reducing human involvement in a manufacturing process. Moreover, it prevents human contamination and protects human workers from hazardous environments.</p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/robots.jpg" alt="" />
              </div>
              <h2>Industrial Robotics</h2>
              <p>We deal in new and refurbished robots from ABB, Fanuc, Kuka and other major robot brands we also deal in Industrial Robots ,Robot Spare Parts, Home Robot and robot service and repairing. </p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/cnc.jpg" alt="" />
              </div>
              <h2>CNC, VMC &amp; HMC</h2>
              <p>Sysnix Automation provides various type of service like- Troubleshooting, programming, Re-wiring and new panel installation for CNC, VMC panel</p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/control_panel.jpg" alt="" />
              </div>
              <h2>Industrial Control Panels</h2>
              <p>Sysnix Automation also assembled the Industrial Panels as reccommended by the user. we always remind about the quality of the product, that's why we used rugged Plc panel for that. The quality and finishing of the panel too good. we have vareity of size of the Plc panels.</p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/lt_panels.jpg" alt="" />
              </div>
              <h2>Industrial LT Panels</h2>
              <p>Its really amazing that Sysnix Automation assembled Plc Panels as well as Industrial LT Panles also.Our Panel quality is too high. we always asssembeled the unique product for the customer. Our engineers can work on any application. Thats the postive point for Sysnix Automation. </p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/spm_machine.jpg" alt="" />
              </div>
              <h2>SPM Machines</h2>
              <p>SPM, Special Purpose Machines is a high productivity machine, with specially designed tooling and fixture, dedicated for mass producing the same component day in and day out. A judicious combination of limit switches, sensors, logic controls, automatic job clamping etc is the essence of a SPM.Various types of machines are developed by Sysnix Automation as reccommended by the users end. </p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <div className="thumb">
                <img src="assets/img/conveyor.jpg" alt="" />
              </div>
              <h2>Conveyors</h2>
              <p>Its really good news for the users that they can get more and more services at one stop, that is Sysnix Automation, the hosue of Industrial services. our team also developed Conveyors as reccommended by the user end. We proide mannual as well as panel based conveyors.</p>
              <Link to="/" className="read-more">Continue Reading</Link>
            </div>
          </div>
        </div>
        {/*	<div class="row">
						<div class="col-md-12">
							<nav aria-label="Page navigation">
							<ul class="pagination">
							   <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a></li>
							   <li class="page-item active"><a class="page-link" href="#">1</a></li>
							   <li class="page-item"><a class="page-link" href="#">2</a></li>
							   <li class="page-item"><a class="page-link" href="#">3</a></li>
							   <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>
							</ul>
							</nav>
						</div>
					</div> */}
      </div>
    </section>
  </div>
  {/* End Wrapper of page */}
</div>

  )
}

export default Service;