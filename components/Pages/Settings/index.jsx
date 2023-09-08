'use client'

import Button from "@/components/UI & Layout/Form/Button"
import Input from "@/components/UI & Layout/Form/Input"
import Loading from "@/components/UI & Layout/Loading"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const SettingsPage = () => {
    const [data, setData] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [iban, setIban] = useState()
    const [bank, setBank] = useState()
    const [name, setName] = useState()

    useEffect(() => {
      const getData = async () => {
        try {
            const token = sessionStorage.getItem('adminToken');
            const res = await axios.get(`${process.env.REQUEST}admin/getSettings`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            setData(res?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
      }
      getData()
    }, [])
    
    const handleUpdate = async () => {
        try {
            const token = sessionStorage.getItem('adminToken');
            const form = {email, password, bank, iban, phone, name}
            const res = await axios.post(`${process.env.REQUEST}admin/updateSettings?id=${data[0]?._id}`, form, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
        })
        toast.success(res?.data?.message, {position: 'bottom-right'})
        } catch (error) {
            toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
    }
    
    if(!data) {
        return <Loading/>
    }

  return (
   <div className="flex flex-col gap-[20px]">
        <h1 className="text-[18px] font-semibold text-white">
            Ayarlar
        </h1>
    <div className="grid grid-cols-2 gap-[20px]">
    <label htmlFor="" className="flex flex-col gap-[10px] text-[14px] text-white font-semibold">
        İsim Soyisim
        <Input
            placeholder={data[0]?.name}
            onChange={(e) => setName(e.target.value)}
        />
    </label>
    <label htmlFor="" className="flex flex-col gap-[10px] text-[14px] text-white font-semibold">
        Email
        <Input
            placeholder={data[0]?.email}
            onChange={(e) => setEmail(e.target.value)}
        />
    </label>
    <label htmlFor="" className="flex flex-col gap-[10px] text-[14px] text-white font-semibold">
        Şifre
        <Input
            placeholder='******'
            onChange={(e) => setPassword(e.target.value)}
        />
    </label>
    <label htmlFor="" className="flex flex-col gap-[10px] text-[14px] text-white font-semibold">
        Telefon
        <Input
            placeholder={data[0]?.phone}
            onChange={(e) => setPhone(e.target.value)}
        />
    </label>
    <label htmlFor="" className="flex flex-col gap-[10px] text-[14px] text-white font-semibold">
        İban
        <Input
            placeholder={data[0]?.iban}
            onChange={(e) => setIban(e.target.value)}
        />
    </label>
    <label htmlFor="" className="flex flex-col gap-[10px] text-[14px] text-white font-semibold">
        Banka
        <Input
            placeholder={data[0]?.bank}
            onChange={(e) => setBank(e.target.value)}
        />
    </label>
    </div>

    <Button
        title='Güncelle'
        onClick={() => handleUpdate()}
    />
   </div>
  )
}

export default SettingsPage