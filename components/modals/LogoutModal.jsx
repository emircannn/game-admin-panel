'use client';

import { useContext } from 'react';
import Modal from './Modal'
import useLogoutModal from '@/hooks/useLogout';
import { AuthContext } from '@/context/authContext';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LogoutConfirmModal = () => {

    const logoutModal = useLogoutModal()
    const {setAuth} = useContext(AuthContext)
    const {push} = useRouter()

    const handleLogOut = () => {
        logoutModal.onClose()
        sessionStorage.removeItem('adminToken')
        setAuth(null)
        toast.success('Çıkış yapıldı.', {position: 'bottom-right'})
        push('/oturum')
    };

    const body = (
        <div className='min-w-[400px] flex flex-col gap-[10px]'>
            <p className='text-white text-[14px] font-semibold text-center'>
                Çıkış yapmak istediğinize emin misiniz?
            </p>
        </div>
    )

  return (
    <Modal
        isOpen={logoutModal.isOpen}
        onClose={logoutModal.onClose}
        width='auto'
        title='Çıkış Yap'
        actionLabel='Onayla'
        secondaryActionLabel='İptal Et'
        secondaryAction={() => logoutModal.onClose()}
        onSubmit={() => handleLogOut()}
        body={body}
    />
  )
}

export default LogoutConfirmModal