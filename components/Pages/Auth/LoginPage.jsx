'use client';

import Image from "next/image";
import Slider from "react-slick";

const LoginPage = () => {
    const settings = {
        dots: false,
        arrow: false,
        fade: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
      };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-tl from-primary-dark via-primary to-primary-light flex items-center">
        <div className="w-[30%] h-full shrink-0">

        </div>

        <div className="w-full h-screen overflow-hidden">
        <Slider {...settings}>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/duel.png' fill quality={100} className="object-cover w-full h-full object-left"/>
            </div>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/gta.jpg' fill quality={100} className="object-cover w-full h-full object-left"/>
            </div>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/auth.png' fill quality={100} className="object-cover w-full h-full object-left"/>
            </div>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/deneme.jpg' fill quality={100} className="object-cover w-full h-full object-left"/>
            </div>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/cod.jpg' fill quality={100} className="object-cover w-full h-full object-left"/>
            </div>
        </Slider> 
        </div>
    </div>
  )
}

export default LoginPage