'use clinet';

import GameMedias from "./GameMedias";
import Info from "./Info";
import SelectBanner from "./SelectBanner";
import React, { useState, useEffect } from 'react';
import SimilarsGame from "./SimilarsGame";
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('./Editor'), { 
  ssr: false 
});



const AddGame = () => {

  const [coverImage, setCoverImage] = useState()
  const [coverImagePre, setCoverImagePre] = useState()

  const [bannerImage, setBannerImage] = useState()
  const [bannerImagePre, setBannerImagePre] = useState()

  const [photos, setPhotos] = useState()
  const [photosPre, setPhotosPre] = useState()

  return (
    <div className="flex flex-col gap-[30px] pb-[30px]">
      <SelectBanner
        setBannerImage={setBannerImage}
        setBannerImagePre={setBannerImagePre}
        setCoverImage={setCoverImage}
        setCoverImagePre={setCoverImagePre}
        bannerImagePre={bannerImagePre}
        coverImagePre={coverImagePre}
      />

      <Info/>

      <GameMedias
        photosPre={photosPre}
        setPhotos={setPhotos}
        setPhotosPre={setPhotosPre}
      />

      <Editor/>

      <SimilarsGame/>

    </div>
  )
}

export default AddGame