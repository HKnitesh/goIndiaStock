'use client'
import * as Avatar from '@radix-ui/react-avatar';

export default function Profile({ className }) {
    return (
        <>
            <Avatar.Root className={`rounded-full ${className}`}>
                <Avatar.Image
                    className='w-8 h-8'
                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687656149/Avatar_ei1qyq.png'
                    alt='avatar img'
                />

                <Avatar.Fallback className=' font-semibold text-black text-base absolute top-3 left-3 font-inter' >AV</Avatar.Fallback>
            </Avatar.Root>
        </>
    );
}