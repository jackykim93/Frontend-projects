import useFavorite from '@/hooks/useFavorite';
import { UserType } from '@prisma/client';
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps{
    productId: string;
    currentUser?: UserType | null;
}

const HeartButton = ({
    productId,
    currentUser
}: HeartButtonProps) => {

    const { hasFavorite, toggleFavorite } = useFavorite({
        productId,
        currentUser
    })

  return (
    <div 
        onClick={toggleFavorite}
        className='relative transition cursor-pointer hover:opacity-80'>
        <AiOutlineHeart 
            size={28}
            className='absolute fill-white -top-[2px] -right-[2px]'
        />
        <AiFillHeart
            size={24}
            className={hasFavorite ?'fill-rose-500' : 'fill-neutral-500/70'}
        />
    </div>
  )
}

export default HeartButton