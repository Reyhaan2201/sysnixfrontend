import React, { useState } from "react";
import "./Support.css";
// import { useNavigate } from "react-router-dom";
import plc from "./plc.png"
import network from "./network.png";
import sensor from "./sensor.png";
import hmi from "./hmi.ppm";

function Support() {
  // const navigate= useNavigate()
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Software Downloads":
        return (
          <div>
          <section className="content-section">
            <h1 className="section-title" style={{textAlign: "center",textTransform: "uppercase",fontWeight: "400"}}>Software Downloads Content</h1>
            <p className="section-text" style={{fontSize: "18px",margin: "10px"}}>
              Welcome to our software downloads section, where you can access the latest software packages designed to enhance your industrial automation experience. Our software offerings are meticulously crafted to optimize efficiency, streamline processes, and ensure seamless integration with your existing systems.
            </p>
          </section>
          <section className="content-section">
            <h2 className="subsection-title" style={{fontWeight: "400"}}>Available Software:</h2>
            <ul className="subsection-list">
              <li style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}> <span style={{color: "#ef1923",fontWeight: "600"}}> Control Software:</span> Our control software solutions are tailored to meet the diverse needs of industrial automation. From advanced PLC (Programmable Logic Controller) programming to intuitive HMI (Human-Machine Interface) design, our control software empowers you to take full control of your manufacturing processes.</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}>    Monitoring and SCADA Software: </span>
            Gain real-time insights into your operations with our monitoring and SCADA (Supervisory Control and Data Acquisition) software. Monitor equipment performance, track production metrics, and respond to anomalies swiftly to maximize productivity and minimize downtime.</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}>     Communication Protocols and Drivers:</span>
              Seamlessly connect your industrial devices and systems with our comprehensive collection of communication protocols and drivers. Ensure interoperability between different components and facilitate data exchange across your automation ecosystem.</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}>    Firmware Updates: </span>
            Stay up-to-date with the latest firmware releases for your hardware components. Our firmware updates bring performance enhancements, bug fixes, and new features to ensure your automation infrastructure operates at peak efficiency.</li>
            </ul>
          </section>
          <section className="content-section">
            <h2 className="subsection-title" style={{fontWeight: "400"}}>System Requirements:</h2>
            <ol className="subsection-list" style={{fontSize: "18px",margin: "10px",color: "grey"}}>
              <li style={{listStyle: "-moz-initial",fontSize: "16px",margin: "10px"}}>Compatible operating systems: Windows, Linux, etc.</li>
              <li  style={{listStyle: "-moz-initial",fontSize: "16px",margin: "10px"}}>Sufficient disk space for installation</li>
              <li  style={{listStyle: "-moz-initial",fontSize: "16px",margin: "10px"}}>Adequate RAM and CPU resources</li>
              <li  style={{listStyle: "-moz-initial",fontSize: "16px",margin: "10px"}}>Additional software dependencies, if any</li>
            </ol>
          </section>
          <section className="content-section">
            <h2 className="subsection-title" style={{fontWeight: "400"}}>Download Instructions:</h2>
            <p className="section-text" style={{fontSize: "18px",margin: "10px",color: "grey"}}>
              To download our software, simply click on the respective download link below. Follow the on-screen instructions to complete the download and installation process. If you encounter any issues or require assistance, please don't hesitate to contact our support team.
            </p>
          </section>
          <section className="content-section">
            <h2 className="subsection-title" style={{fontWeight: "400"}}>Feedback and Support:</h2>
            <p className="section-text" style={{fontSize: "18px",margin: "10px",color: "grey"}}>
              We value your feedback and are committed to providing exceptional support throughout your automation journey. If you have any questions, suggestions, or feedback regarding our software offerings, please don't hesitate to reach out to our dedicated support team. Thank you for choosing Sysnix automation for your industrial automation needs. We look forward to empowering your business with our cutting-edge software solutions.
            </p>
          </section>
        </div>
        );
      case "Manuals":
        return (
          <div className="support">
            <section className="content-section">
            <h1 className="section-title" style={{textAlign: "center",textTransform: "uppercase",fontWeight: "400"}}>Manuals</h1>
            <p className="section-text" style={{fontSize: "18px",margin: "10px"}}>
            Welcome to our manuals section, where you can find comprehensive documentation to help you understand, configure, and operate our industrial automation products. Our manuals cover a wide range of topics, from installation and setup instructions to troubleshooting guides and advanced programming techniques.
            </p>
          </section>
          <section className="content-section">
            <h2 className="subsection-title" style={{fontWeight: "400"}}>Available Manuals:</h2>
            <ul className="subsection-list">
              <li style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}> <span style={{color: "#ef1923",fontWeight: "600"}}> Product Installation Guide: </span> This manual provides step-by-step instructions for installing and configuring our industrial automation products. Whether you're setting up a new PLC, HMI, or SCADA system, our installation guide will help you get up and running quickly and efficiently.</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}> User Manual: </span>
              Our user manual offers detailed information on operating our automation products. Learn how to navigate the user interface, configure settings, and perform common tasks with ease. The user manual also includes tips and best practices for maximizing the performance of our products.

</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}>Programming Guide: </span>
              If you're a developer or system integrator, our programming guide is an invaluable resource. Discover advanced programming techniques, learn how to create custom functions and algorithms, and explore tips for optimizing code performance.</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}>    Troubleshooting Handbook:  </span>
              In the event of technical issues or malfunctions, our troubleshooting handbook is your go-to resource. Follow step-by-step instructions to diagnose and resolve common problems, and learn how to perform maintenance tasks to keep your automation system running smoothly.</li>
            </ul>
          </section>
          <section className="content-section">
            <h2 className="subsection-title" style={{fontWeight: "400"}}>Additional Resources:</h2>
            <ul className="subsection-list">
              <li style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}> <span style={{color: "#404040",fontWeight: "600"}}> FAQs </span>Visit our Frequently Asked Questions (FAQs) page to find answers to common queries about our products and solutions.</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#404040",fontWeight: "600"}}>Technical Support:</span>
              If you require further assistance or encounter issues not covered in our manuals, our dedicated technical support team is here to help. Contact us via phone, email, or live chat for prompt assistance.

            </li>
           
           
            </ul>
          </section>
          <section className="content-section">
            <p className="section-text" style={{fontSize: "18px",margin: "10px",color: "grey"}}>
            Thank you for choosing Sysnix Automation for your industrial automation needs. We're committed to providing you with the resources and support you need to succeed in your automation projects.
            </p>
          </section>
          </div>
        );
      case "Cable Diagram":
        return (
          <div>
            <section className="content-section">
            <h1 className="section-title" style={{textAlign: "center",textTransform: "uppercase",fontWeight: "400"}}>Cable Diagram</h1>
            <p className="section-text" style={{fontSize: "18px",margin: "10px"}}>
            Welcome to our cable diagrams section, where you can access detailed wiring diagrams and schematics for connecting industrial automation components. Our cable diagrams provide essential guidance for ensuring proper connectivity, wiring integrity, and system functionality.
            </p>
          </section>
          <section className="content-section">
  <h2 className="subsection-title" style={{ fontWeight: "400" }}>Available Cable Diagrams: </h2>
  <ul className="subsection-list">
    <li style={{ fontSize: "16px", color: "grey", margin: "20px 5px", lineHeight: "20px" }}>
      <img src={plc} alt="Product Installation Guide" className="list-image" />
      <div>
        <span style={{ color: "#ef1923", fontWeight: "600" }}>Product Installation Guide:</span>
        This manual provides step-by-step instructions for installing and configuring our industrial automation products. Whether you're setting up a new PLC, HMI, or SCADA system, our installation guide will help you get up and running quickly and efficiently.
      </div>
    </li>
    <li style={{ fontSize: "16px", color: "grey", margin: "20px 5px", lineHeight: "20px" }}>
      <img src={hmi} alt="Product Installation Guide" className="list-image" />
      <div>
        <span style={{ color: "#ef1923", fontWeight: "600" }}>HMI Connection Schematics: </span>
        Our HMI (Human-Machine Interface) connection schematics offer detailed illustrations of the wiring connections between HMIs and PLCs, as well as other peripheral devices such as sensors, switches, and motors. Use these diagrams to ensure seamless communication and interaction between your HMI and control devices.
      </div>
    </li>
    <li style={{ fontSize: "16px", color: "grey", margin: "20px 5px", lineHeight: "20px" }}>
      <img src={sensor} alt="Product Installation Guide" className="list-image" />
      <div>
        <span style={{ color: "#ef1923", fontWeight: "600" }}>Sensor and Actuator Wiring Guides: </span>
        For precise control and monitoring of industrial processes, proper wiring of sensors and actuators is crucial. Our wiring guides provide clear instructions and diagrams for connecting sensors, actuators, and other field devices to your automation system, enabling accurate data acquisition and control.
      </div>
    </li>
    <li style={{ fontSize: "16px", color: "grey", margin: "20px 5px", lineHeight: "20px" }}>
      <img src={network} alt="Product Installation Guide" className="list-image" />
      <div>
        <span style={{ color: "#ef1923", fontWeight: "600" }}>Network Wiring Diagrams:</span>
        In today's interconnected automation environments, networking plays a vital role in enabling communication between devices and systems. Our network wiring diagrams outline the cabling requirements and configurations for various industrial communication protocols, such as Ethernet/IP, Modbus TCP, and Profibus.
      </div>
    </li>
   
  </ul>
</section>

          </div>
        );
      case "Tutorials":
        return (
          <div>
            <section className="content-section">
            <h1 className="section-title" style={{textAlign: "center",textTransform: "uppercase",fontWeight: "400"}}>Tutorials</h1>
            <p className="section-text" style={{fontSize: "18px",margin: "10px"}}>
            Welcome to our tutorials section, where you can find a wealth of educational resources to help you master various aspects of industrial automation. Our tutorials cover a wide range of topics, from basic concepts to advanced techniques, designed to empower both beginners and experienced professionals in the field of automation.
            </p>
          </section>
          <section className="content-section">
            <h2 className="subsection-title" style={{fontWeight: "400"}}>Available Manuals:</h2>
            <ul className="subsection-list">
              <li style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}> <span style={{color: "#ef1923",fontWeight: "600"}}> Introduction to PLC Programming: </span> Dive into the fundamentals of PLC (Programmable Logic Controller) programming with our comprehensive tutorial series. Learn about ladder logic, input/output modules, timers, counters, and other essential concepts to kickstart your journey in industrial automation.

</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}>HMI Design Best Practices:</span>
              Explore our tutorials on HMI (Human-Machine Interface) design to learn how to create intuitive and user-friendly interfaces for controlling and monitoring industrial processes. Discover tips for layout design, color selection, alarm management, and more to enhance user experience and productivity.

</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}>SCADA System Configuration: </span>
              Master the art of configuring SCADA (Supervisory Control and Data Acquisition) systems with our step-by-step tutorials. Learn how to create tags, set up data logging, design graphical displays, and implement alarming and trending features to build powerful SCADA applications.</li>
              <li  style={{listStyle: "outside",fontSize: "16px",color: "grey",margin: "20px 5px",lineHeight:"20px"}}>
              <span style={{color: "#ef1923",fontWeight: "600"}}>    Industrial Networking Basics:  </span>
              Get acquainted with the fundamentals of industrial networking through our tutorials on Ethernet, Modbus, Profibus, and other communication protocols. Learn about network architecture, device addressing, data exchange methods, and security considerations to ensure reliable and secure communication in your automation environment.</li>
            </ul>
          </section>
          </div>
        );
      default:
        return (
          <div>
            <h1>No Content Selected</h1>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="wrapper clearfix">
        <section className="under-development-section">
          <div className="development">
            <ul className="unstyled list-hover-slide">
              <li className="hover-btn" onClick={() => handleItemClick("Software Downloads")}>Software Downloads</li>
              <li className="hover-btn" onClick={() => handleItemClick("Manuals")}>Manuals</li>
              <li className="hover-btn" onClick={() => handleItemClick("Cable Diagram")}>Cable Diagram</li>
              <li className="hover-btn" onClick={() => handleItemClick("Tutorials")}>Tutorials</li>
            </ul>
          </div>
          <div className="under-develop">
            {renderContent()}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Support;
