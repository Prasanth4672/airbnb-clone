'use client';

interface AvatarProps{
  src?:string | null | undefined;
};

import Image from 'next/image';

const Avatar:React.FC<AvatarProps>=({src})=> {
    const avatar = src || '/images/placeholder.jpg' 
  return (
    <Image 
    className='rounded-full'
    src={avatar} 
    alt={'Avatar'}
    height={30}
    width={30}
    />
  )
}


export default Avatar;