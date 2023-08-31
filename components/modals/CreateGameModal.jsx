'use client'

import Modal from "./Modal"


const CreateGameModal = ({
    modal, 
    setModal,
    handleCreateGame,
    disabled,
    update=false
}) => {
    const body = (
        <div className="w-auto text-white font-semibold">
            {update ? 'Oyun güncellemek üzeresiniz, gencelledikten sonra oyunla ilgili resimleri güncelleyebilirsiniz.' 
            :
            'Oyun oluşturmak üzeresiniz, oluşturduktan sonra oyunla ilgili resimleri yüklemeyi unutmayınız.'}
        </div>
    )
  return (
    <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title={update ? 'Oyunu Güncelle' : 'Oyun oluştur'}
        actionLabel={update ? 'Güncelle' : 'Oluştur'}
        onSubmit={() => handleCreateGame()}
        secondaryAction={() => setModal(false)}
        secondaryActionLabel='İptal Et'
        body={body}
        disabled={disabled}
        width='auto'
    />
  )
}

export default CreateGameModal