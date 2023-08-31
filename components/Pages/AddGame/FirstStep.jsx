'use client';

import Button from "@/components/UI & Layout/Form/Button";
import Info from "./Info";
import dynamic from "next/dynamic";
import SimilarsGame from "./SimilarsGame";
import { useState } from "react";
import PreOrderDate from "./PreOrderDate";
import CreateGameModal from "@/components/modals/CreateGameModal";
import axios from "axios";
import { toast } from "react-hot-toast";
const Editor = dynamic(() => import('./Editor'), { 
    ssr: false 
  });
  
const FirstStep = ({
    step,
    setStep,
    setModal,
    modal,
    setSeo
}) => {
    const [name, setName] = useState()
    const [developer, setDeveloper] = useState()
    const [youtubeLink, setYoutubeLink] = useState()
    const [stok, setStok] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    const [platform, setPlatform] = useState()
    const [desc, setDesc] = useState()
    const [similarGames, setSimilarGames] = useState([])
    const [minimumSystemRequirements, setMinimumSystemRequirements] = useState({
        operatingSystem: '',
        processor: '',
        memory: '',
        graphicsCard: '',
        network: '',
        disk: ''
    })
    const [recommendedSystemRequirements, setRecommendedSystemRequirements] = useState({
        operatingSystem: '',
        processor: '',
        memory: '',
        graphicsCard: '',
        network: '',
        disk: ''
    })

    const [isChecked, setIsChecked] = useState(false);
    const [preOrderDate, setPreOrderDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [releaseDate, setReleaseDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [loading, setLoading] = useState(false)

    const handleSelect = (ranges) => {
        setPreOrderDate([ranges.selection]);
    };
    const handleReleaseDate = (ranges) => {
        setReleaseDate([ranges.selection]);
    };
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const handleSimilarGames = (e) => {
        const item = e.target.value;
      
        if (e.target.checked) {
        setSimilarGames([...similarGames, item]);
        } else {
        setSimilarGames(similarGames.filter((selectedItem) => selectedItem !== item));
        }
      };

      const form = {
        name, 
        developer, 
        releaseDate: releaseDate[0]?.endDate, 
        stok, 
        price, 
        category, 
        desc,
        platform, 
        similarGames, 
        minimumSystemRequirements, 
        recommendedSystemRequirements, 
        preOrderDate: isChecked ? preOrderDate[0]?.endDate : undefined,
        youtubeLink
      }

      const handleCreateGame = async() => {
        try {
            setLoading(true)
            if(name && developer && releaseDate && stok && price && category && desc,platform && minimumSystemRequirements && recommendedSystemRequirements) {
                const token = sessionStorage.getItem('adminToken');
            const res = await axios.post(`${process.env.REQUEST}game/create`,form, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            toast.success(res?.data?.message, {position: 'bottom-right'})
            setSeo(res?.data?.data?.seo)
            setLoading(false)
            setModal(false)
            setStep(3)
            } else {
                setLoading(false)
                toast.error('Zorunlu Alanları Doldurun.', {position: 'bottom-right'})
            }
        } catch (error) {
            setLoading(false)
            toast.error(error?.response?.data?.message.split(':')[1]|| error?.response?.data?.message, {position: 'bottom-right'})
        }
      };
  return (
    <div className="flex flex-col gap-[30px]">
        {step === 0 &&<>
        <Info 
            setName={setName}
            setDeveloper={setDeveloper}
            setYoutubeLink={setYoutubeLink}
            setStok={setStok}
            setCategory={setCategory}
            setPlatform={setPlatform}
            category={category}
            platform={platform}
            setPrice={setPrice}
            name={name}
            developer={developer}
            stok={stok}
            price={price}
            youtubeLink={youtubeLink}

        />
        <Editor
            setData={setDesc}
            data={desc}
        />
        </>}

        {step === 1 && <PreOrderDate
            isChecked={isChecked}
            handleSelect={handleSelect}
            selectedRange={preOrderDate}
            handleCheckboxChange={handleCheckboxChange}
            setMinimumSystemRequirements={setMinimumSystemRequirements}
            setRecommendedSystemRequirements={setRecommendedSystemRequirements}
            minimumSystemRequirements={minimumSystemRequirements}
            recommendedSystemRequirements={recommendedSystemRequirements}
            handleReleaseDate={handleReleaseDate}
            releaseDate={releaseDate}
        />}

        {step === 2 && <SimilarsGame
            handleSimilarGames={handleSimilarGames}
            similarGames={similarGames}
        />}

        {step === 2 &&
        <div className="flex justify-end gap-[10px]">
        <Button
          mt="0"
          title='Geri'
          onClick={() => setStep(step-1)}
        />

        <Button
          mt="0"
          title='Oluştur'
          onClick={() => setModal(true)}
        />
        </div>}

        <CreateGameModal
            setModal={setModal}
            modal={modal}
            disabled={loading}
            handleCreateGame={handleCreateGame}
          />
    </div>
  )
}

export default FirstStep