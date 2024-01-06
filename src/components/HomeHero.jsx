import Image from 'next/image'
import React from 'react'

const HomeHero = () => {
  return (
    <div id='Home' className='w-full min-h-screen pt-20 flex items-center px-[130px]'>
        <div className='w-1/2 flex flex-col justify-center items-center px-24 text-center gap-10 pb-20'>
            <div className='flex flex-col gap-2'>
                <p className='font-roboto font-bold text-4xl cursor-default text-[#333333]'>Smart Irrigation System</p>
                <p className='font-roboto text-sm font-extralight cursor-default'>Smart Irrigation System adalah sebuah sistem yang menggabungkan<br/>teknologi IoT untuk memantau dan mengontrol irigasi secara otomatis,<br/>meningkatkan efisiensi penggunaan air dalam pertanian dengan presisi<br/>yang belum pernah terjadi sebelumnya.</p>
            </div>
            <a href="/dashboard" className='font-roboto font-extrabold border-2 border-[#138F2E] rounded-lg py-1 px-20 bg-[#138F2E] text-white hover:bg-white hover:text-[#138F2E] transition-colors duration-75'>Dashboard</a>
        </div>
        <div className='flex justify-center items-center w-1/2 pb-20'>
            <Image src={'/assets/Group4.png'} alt='' width={400} height={100}/>
        </div>
    </div>
)
}

export default HomeHero