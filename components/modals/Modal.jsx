'use client';

import React, { useState, useEffect, useCallback } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {AiOutlineClose} from 'react-icons/ai'
import Button from '../UI & Layout/Form/Button';


const Modal = ({
    isOpen = true,
    onClose,
    onSubmit,
    title,
    body,
    width ='900px',
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
}) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
      setShowModal(isOpen);
    }, [isOpen])
    
    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if(disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit])

    const handleSecondaryAction = useCallback(() => {
        if(disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [disabled, secondaryAction])

    if(!isOpen){
        return null;
    }

  return (
    <>
        <div
        className='
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            inset-0
            fixed
            z-[999]
            outline-none
            focus:outline-none
            bg-primary-dark/70
        '>
            <div
            style={{width}}
                className='
                relative
                my-6
                mx-auto
                h-full
                lg:h-auto
                md:h-auto
                '>
                    {/* Content */}
                    <div className={`
                    translate
                    duration-300
                    h-full
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}>
                        <OutsideClickHandler onOutsideClick={handleClose}>
                        <div className='
                        translate
                        border-0
                        rounded-xl
                        neon-blue
                        relative
                        flex
                        flex-col
                        w-full
                        bg-primary-lighter
                        outline-none
                        focus:outline-none'>

                        <div className='
                            flex 
                            items-center
                            p-6
                            rounded-t
                            justify-center
                            relative
                            border-b
                            border-secondary
                            '>
                                <button 
                                onClick={handleClose}
                                className='
                                p-1
                                border-0
                                hover:opacity-70
                                transition
                                absolute
                                right-9
                                text-secondary
                                '>
                                    <AiOutlineClose size={18}/>
                                </button>

                                <div 
                                className='text-lg font-semibold text-white'>
                                    {title}
                                </div>
                            </div>

                            <div className='relative p-6 flex-auto'>
                                {body}
                            </div>

                            {/* Footer */}
                            <div className='flex flex-col gap-2 pb-6 px-6'>
                                <div className='
                                 flex
                                 flex-row
                                 items-center
                                 gap-4
                                 w-full
                                '>
                                    {
                                        secondaryAction &&
                                        <Button
                                        outline
                                        disabled={disabled}
                                        title={secondaryActionLabel}
                                        onClick={handleSecondaryAction}
                                        height='55px'
                                        wfull
                                    />
                                    }
                                    {actionLabel && 
                                        <Button
                                        disabled={disabled}
                                        title={actionLabel}
                                        onClick={handleSubmit}
                                        height='55px'
                                        wfull
                                    />
                                    }
                                </div>
                                {footer}
                            </div>

                        </div>
                        </OutsideClickHandler>
                </div>
        </div>
        </div>
    </>
  )
}

export default Modal