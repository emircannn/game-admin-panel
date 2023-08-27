'use client';

import Button from "@/components/UI & Layout/Form/Button";
import Input from "@/components/UI & Layout/Form/Input";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
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

      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [loading, setLoading] = useState(false)
      const {setAuth} = useContext(AuthContext)
      const {push} = useRouter()

      const handleLogin = async() => {
        setLoading(true)
        try {
            if(email && password) {
                const res = await axios.post(`${process.env.REQUEST}admin/login`, {email, password})
                toast.success(res.data.message, {position: 'bottom-right'})
                sessionStorage.setItem('adminToken', res.data.token)
                setLoading(false)
                setAuth(true)
                push('/')
            }else {
                toast.error('Gerekli alanları doldurun.', {position: 'bottom-right'})
                setLoading(false)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message.split(':')[1], {position: 'bottom-right'})
            setLoading(false)
        }
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
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder='Şifre'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button
                    title='Giriş Yap'
                    wfull
                    mt="10"
                    disabled={loading}
                    onClick={() => handleLogin()}
                />
            </div>
            </div>
        <Slider {...settings}>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/duel.png' fill quality={100} priority className="object-cover w-full h-full object-left"/>
            </div>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/gta.jpg' fill quality={100} priority className="object-cover w-full h-full object-left"/>
            </div>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/auth.png' fill quality={100} priority className="object-cover w-full h-full object-left"/>
            </div>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/deneme.jpg' fill quality={100} priority className="object-cover w-full h-full object-left"/>
            </div>
            <div className="w-full h-screen relative">
            <Image alt="loading" src='/images/cod.jpg' fill quality={100} priority className="object-cover w-full h-full object-left"/>
            </div>
        </Slider> 
        </div>
    </div>
  )
}

export default LoginPage