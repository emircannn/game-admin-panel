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

export const getGames = async (setGameData,setTotalPages, page, sort, category, platform, stok, name) => {
    try {
        const token = sessionStorage.getItem('adminToken');
        let queryParams = ''; // Boş bir sorgu parametreleri dizesi oluşturun

        // Sadece tanımlı parametreleri sorgu parametrelerine ekleyin
        if (page) queryParams += `page=${page}`;
        if (sort) queryParams += `${queryParams ? '&' : ''}sort=${sort}`;
        if (category) queryParams += `${queryParams ? '&' : ''}category=${category}`;
        if (platform) queryParams += `${queryParams ? '&' : ''}platform=${platform}`;
        if (stok) queryParams += `${queryParams ? '&' : ''}stok=${stok}`;
        if (name) queryParams += `${queryParams ? '&' : ''}name=${name}`;
        const res = await axios.get(`${process.env.REQUEST}admin/allGames?${queryParams}`, 
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setGameData(res?.data?.data)
        setTotalPages(res?.data?.totalPages)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

export const getDiscountedGames = async (setData, setTotalPages, page) => {
    try {
        const token = sessionStorage.getItem('adminToken');
        let queryParams = '';
        if (page) queryParams += `?page=${page}`;
        const res = await axios.get(`${process.env.REQUEST}admin/discountedGames${queryParams}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
        setTotalPages(res?.data?.totalPages)
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

export const getUsers = async (setData,page, setTotalPages) => {
    try {
        let queryParams = '';
        if (page) queryParams += `?page=${page}`;
        const token = sessionStorage.getItem('adminToken');
        const res = await axios.get(`${process.env.REQUEST}user/getAll${queryParams}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
        setTotalPages(res?.data?.totalPages)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }
export const getOrders = async (setData,page, setTotalPages) => {
    try {
        let queryParams = '';
        if (page) queryParams += `?page=${page}`;
        const token = sessionStorage.getItem('adminToken');
        const res = await axios.get(`${process.env.REQUEST}order/getAll${queryParams}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
        setTotalPages(res?.data?.totalPages)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }
export const getCarts = async (setData,page, setTotalPages) => {
    try {
        let queryParams = '';
        if (page) queryParams += `?page=${page}`;
        const token = sessionStorage.getItem('adminToken');
        const res = await axios.get(`${process.env.REQUEST}cart/getAll${queryParams}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
        setTotalPages(res?.data?.totalPages)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

export const getFirstBanner = async (setData, setId) => {
    try {
        const res = await axios.get(`${process.env.REQUEST}admin/getFirstBanner`)
        setData(res?.data?.data.firstBanner)
        setId ? setId(res?.data?.data?._id) : null
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }
export const getSecondBanner = async (setData, setId) => {
    try {
        const res = await axios.get(`${process.env.REQUEST}admin/getSecondBanner`)
        setData(res?.data?.data.secondBanner)
        setId ? setId(res?.data?.data?._id) : null
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

  export const getReviews = async (setData,page,limit,setTotalPages) => {
    try {
        let queryParams = ''; 
        if (page) queryParams += `page=${page}`;
        if (limit) queryParams += `${queryParams ? '&' : ''}limit=${limit}`;
        const res = await axios.get(`${process.env.REQUEST}review/getAll?${queryParams}`)
        setData(res?.data?.data)
        setTotalPages && setTotalPages(res?.data?.totalPages)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const getChats = async (setData,page,filter,setTotalPages) => {
    try {
        let queryParams = ''; 
        if (page) queryParams += `page=${page}`;
        if (filter) queryParams += `${queryParams ? '&' : ''}filter=${filter}`;
        const token = sessionStorage.getItem('adminToken');
        const res = await axios.get(`${process.env.REQUEST}chat/getAll?${queryParams}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
        setTotalPages(res?.data?.totalPages)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
