'use client';

import Button from "@/components/UI & Layout/Form/Button";
import Input from "@/components/UI & Layout/Form/Input";
import Image from "next/image";
import Slider from "react-slick";

const LoginPage = () => {
    const settings = {
        dots: false,
        arrow: false,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-tl from-primary-dark via-primary to-primary-light flex items-center">
        {/* <div className="w-[30%] h-full shrink-0 flex items-center justify-center z-50">
            <div className="glass w-[80%] rounded-xl p-[20px] flex flex-col items-center">
                <div className="relative overflow-hidden h-[60px] aspect-square">
                <Image alt="loading" src='/images/logo.png' fill quality={100} className="object-contain w-full h-full"/>
                </div>

                <h1 className="text-white text-xl font-semibold">
                    Admin Oturumu
                </h1>

                <div className="flex flex-col gap-[20px] py-[20px] w-full">
                    <Input
                        placeholder='Email'
                    />
                    <Input
                        placeholder='Şifre'
                    />
                </div>

                <Button
                    title='Giriş Yap'
                    wfull
                />
            </div>
        </div> */}

        <div className="w-full h-screen overflow-hidden relative">
            <div className="w-full h-full absolute shrink-0 flex items-center justify-center z-50">
            <div className="glass-auth w-[30%] rounded-2xl p-[25px] flex flex-col items-center">
                <div className="relative overflow-hidden h-[80px] aspect-square">
                <Image alt="loading" src='/images/logo.png' fill quality={100} className="object-contain w-full h-full"/>
                </div>

                <h1 className="text-white text-xl font-semibold mb-[10px]">
                    Admin Oturumu
                </h1>

                <div className="flex flex-col gap-[20px] py-[20px] w-full">
                    <Input
                        placeholder='Email'
                    />
                    <Input
                        placeholder='Şifre'
                    />
                </div>

                <Button
                    title='Giriş Yap'
                    wfull
                    mt="10"
                />
            </div>
            </div>
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