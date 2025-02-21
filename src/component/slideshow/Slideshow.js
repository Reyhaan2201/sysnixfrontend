import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.css";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };

  const slides = [
    {
      imgSrc: 'assets/img/1.jpg',
      underlineTitle: 'INDUSTRIAL PRODUCTS',
      largeTitle: 'Sensors,<span>Instrumentation</span> <br> <span>and</span> Industrial Control Products.',
      buttonText: 'Read more',
      buttonLink: '#',
    },
    {
      imgSrc: 'assets/img/2.jpg',
      underlineTitle: 'Industry 4.0 Projects',
      largeTitle: '<span>Industry</span> <br> <span>Digitalization</span> Projects.',
      buttonText: 'Read more',
      buttonLink: '#',
    },
    {
      imgSrc: 'assets/img/3.jpg',
      underlineTitle: 'SCADA System',
      largeTitle: 'Instrumentation <span>Controlling</span> <br> <span>& Data Logging</span> System.',
      buttonText: 'Read more',
      buttonLink: '#',
    },
    {
      imgSrc: 'assets/img/4.jpg',
      underlineTitle: 'Industrial Services',
      largeTitle: 'Industrial <span>Instrumentation & </span> <br> <span>Controlling</span> Services.',
      buttonText: 'Free Consultation',
      buttonLink: '#',
    },
  ];

  return (
    <div className="dev-revslider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.imgSrc} alt="" width="1920" height="450" />
            <div className="tp-caption tp-resizme dev-underline-title"
              style={{ zIndex: 5, whiteSpace: 'nowrap', position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              {slide.underlineTitle}
            </div>
            <div className="tp-caption tp-resizme dev-large-title"
              style={{ zIndex: 5, whiteSpace: 'nowrap', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              dangerouslySetInnerHTML={{ __html: slide.largeTitle }}>
            </div>
            <a className="tp-caption tp-resizme dev-capbtn"
              href={slide.buttonLink}
              target="_self"
              style={{ zIndex: 5, whiteSpace: 'nowrap', position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              {slide.buttonText}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
