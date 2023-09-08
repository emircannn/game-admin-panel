'use client'

import Avatar from '@/components/UI & Layout/Avatar'
import Loading from '@/components/UI & Layout/Loading'
import { useParams } from 'next/navigation'
import Message from './Message'
import SendMessage from './SendMessage'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AiFillCloseCircle } from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useSocket } from '@/utils/socket'
import * as WS from '@/utils/socket'

const ChatPage = () => {
    useEffect(() => {
      WS.connectWebSocket()
    }, [])
    
    const param = useParams()
    const [photo, setPhoto] = useState()
    const [photoPre, setPhotoPre] = useState()
    const [content, setContent] = useState()
    const [data, setData] = useState()
    const socket = useSocket(); 
    const [messages, setMessages] = useState([])
    const ref = useRef();

    const element = document?.getElementById('last');
    useEffect(() => {
        element?.scrollIntoView({ behavior: 'smooth' });
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [element, messages])

    useEffect(() => {
        if(param.id) {
            const getData = async() => {
                try {
                    const token = sessionStorage.getItem('adminToken')
                    const res = await axios.get(`${process.env.REQUEST}chat/getAdminMessage?username=${param.id}`,{
                        headers: {
                        Authorization: `Bearer ${token}`
                        }
                        })
                        setData(res?.data?.data)
                } catch (error) {
                    toast.error(error?.response?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
                }
            }
            getData()
        }
    }, [param.id])

    useEffect(() => {
        if(data) {
          setMessages(data?.messages)
        }
      }, [data])
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('adminToken')
        if(data) {
            if(photo) {
                try {
                    const formData = new FormData()
                    formData.append('media', photo)
                    formData.append('chat', data?.chat?._id)
                    formData.append('content', content)
                    await axios.post(`${process.env.REQUEST}chat/adminMessage`,formData,{
                        headers: {
                        Authorization: `Bearer ${token}`
                        }
                        })
                    setPhoto()
                    setPhotoPre()
                    setContent()
                } catch (error) {
                    toast.error(error?.response?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
                }
            } else {
                try {
                    await axios.post(`${process.env.REQUEST}chat/adminMessage`,{content, chat: data?.chat?._id},{
                        headers: {
                        Authorization: `Bearer ${token}`
                        }
                        })
                        setContent('')
                } catch (error) {
                    toast.error(error?.response?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
                }
            }
        } else {
            toast.error('Destek talebi için oturum açın', {position: 'bottom-right'})
        }
    }

    useEffect(() => {
        if (!socket) return;

        socket.on('sendMessage', (_data) => {
            if(data?.chat._id === _data.chat) {
                setMessages((prev) => [...prev, _data.message])
                if(_data.message.isAdminMessage === false) {
                    const audio = new Audio('/sounds/sound2.mp3');
                    audio.play();
                }
            }
        })
    
    return () => {
        socket.off('sendMessage')
    }
    }, [socket, data])

    if (!data) {
        return <Loading/>
    }
  return (
    <div className=' w-full h-full overflow-y-auto flex flex-col'>
        <div className='w-full h-[8%] bg-primary-lighter flex items-center gap-[10px] p-[5px] neon-blue'>
            <Avatar
                width='40'
                height='40'
                iconHeight='25'
                iconWidth='25'
                src={data?.chat?.image ? data.chat?.image : '/images/user.jpg'}
            />

            <span className='text-white font-semibold'>{data?.chat?.name + ' - ' + data?.chat?.username}</span>
        </div>
        <div 
        className='w-full h-[77%] flex flex-col overflow-y-auto gap-[15px] p-[20px]'>
            {messages?.map((message, i) => (
                <Message
                    key={i}
                    admin={message.isAdminMessage}
                    content={message.content}
                    media={message.media}
                    timestamp={message.timestamp}
                />
            ))}
            <div id='last' ref={ref} className='py-[2px] w-full' />
        </div>
        <div className='w-full h-[15%] relative'>
           {photo &&
           <div className="absolute w-full h-[75px] bg-secondary/50 bottom-[100%] z-50 flex items-center justify-between p-[10px]">
                <div className='w-[50px] aspect-square border border-secondary rounded-xl relative overflow-hidden'>
                    <Image alt='' src={photoPre} fill quality={100} className='object-cover'/>
                </div>

                <button onClick={() => {setPhoto(), setPhotoPre()}}>
                <AiFillCloseCircle size={25} className='text-white hover:text-secondary duration-300'/>
                </button>
            </div>}
            <SendMessage
                setPhotoPre={setPhotoPre}
                photoPre={photoPre}
                setPhoto={setPhoto}
                setContent={setContent}
                content={content}
                handleSubmit={handleSubmit}
            />
        </div>
    </div>
  )
}

export default ChatPage