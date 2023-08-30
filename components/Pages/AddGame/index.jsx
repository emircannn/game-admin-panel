'use clinet';

import GameMedias from "./GameMedias";
import SelectBanner from "./SelectBanner";
import React, { useState } from 'react';
import StepHeader from "./StepHeader";
import Button from "@/components/UI & Layout/Form/Button";
import FirstStep from "./FirstStep";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";


const AddGame = () => {

  const [coverImagePre, setCoverImagePre] = useState()
  const [bannerImagePre, setBannerImagePre] = useState()
  const [photosPre, setPhotosPre] = useState()
  const [youtubeLink, setYoutubeLink] = useState()

  const [step, setStep] = useState(3)
  const [modal, setModal] = useState(false)
  const [seo, setSeo] = useState('fifa_23')

  const {push} = useRouter()

  const handleUploadImage = async() => {
    try {
        const formData = new FormData();
        formData.append('coverImage', coverImagePre)
        formData.append('bannerImage', bannerImagePre)
        formData.append('images', photosPre)
        const token = sessionStorage.getItem('adminToken');
        const res = await axios.post(`${process.env.REQUEST}game/uploadImage?seo=${seo}`,formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log(formData)
        toast.success(res?.data?.message, {position: 'bottom-right'})
      
        /* push('/oyunlar') */
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1]|| error?.response?.data?.message, {position: 'bottom-right'})
    }
  };

  return (
    <div className="flex flex-col gap-[30px] pb-[30px]">
      <StepHeader step={step}/>

      <FirstStep step={step} setStep={setStep} modal={modal} setModal={setModal} setSeo={setSeo}/>

      {step === 3 &&<>
      <SelectBanner
        setBannerImagePre={setBannerImagePre}
        setCoverImagePre={setCoverImagePre}
        bannerImagePre={bannerImagePre}
        coverImagePre={coverImagePre}
      />
      <GameMedias
        photosPre={photosPre}
        setPhotosPre={setPhotosPre}
        setYoutubeLink={setYoutubeLink}
        youtubeLink={youtubeLink}
      />
      </>}

      <div className="flex justify-end gap-[10px]">
        { step > 0 && step < 2 ? <Button
          mt="0"
          title='Geri'
          onClick={() => setStep(step-1)}
        /> : null}
        {step <= 1 && <Button
          mt="0"
          title='İleri'
          onClick={() => setStep(step+1)}
        />}

        
        {step === 3 && 
        <Button
          mt="0"
          title='Resimleri Yükle'
          onClick={() => handleUploadImage()}
        />}
      </div>
    </div>
  )
}

export default AddGame