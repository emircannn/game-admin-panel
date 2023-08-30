'use client'

import Modal from "./Modal"


const CreateGameModal = ({
    modal, 
    setModal,
    handleCreateGame
}) => {
    const body = (
        <div className="w-auto text-white font-semibold">
            Oyun oluşturmak üzeresiniz, oluşturduktan sonra oyunla ilgili resimleri yüklemeyi unutmayınız.
        </div>
    )
  return (
    <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title='Oyun oluştur'
        actionLabel='Oluştur'
        onSubmit={() => handleCreateGame()}
        secondaryAction={() => setModal(false)}
        secondaryActionLabel='İptal Et'
        body={body}
        width='auto'
    />
  )
}

export default CreateGameModal