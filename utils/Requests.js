import axios from "axios"
import { toast } from "react-hot-toast"

export const getCategory = async (setData) => {
    try {
        const res = await axios.get(`${process.env.REQUEST}category/getAll`)
        setData(res?.data?.data)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}

export const getGames = async (setGameData) => {
    try {
        const token = sessionStorage.getItem('adminToken');
        const res = await axios.get(`${process.env.REQUEST}admin/allGames`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setGameData(res?.data?.data)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

export const getDiscountedGames = async (setData) => {
    try {
        const token = sessionStorage.getItem('adminToken');
        const res = await axios.get(`${process.env.REQUEST}admin/discountedGames`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }