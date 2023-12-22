import "./banner.scss"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//Banner image is not included in github source code
import BannerImage from "../../../assets/img/banner.svg"
import BannerImage1 from "../../../assets/img/banner.svg"

const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // thời gian chuyển đổi giữa các slide (3 giây)
    };
  
    return (
      <Slider className="banner" {...settings}>
        <div className="bn">
          <img src={BannerImage} alt="Banner 1" />
        </div>
        <div className="bn">
          <img src={BannerImage1} alt="Banner 2" />
        </div>
      </Slider>
    );
  };
  
  export default Banner;

//import BannerImage2 from "../../../assets/img/banner2.jpg"
// <a href=""><img src={BannerImage2} alt="Banner image 2"/></a>