import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav id='Navbar' className='w-full fixed top-0 py-4 flex justify-between bg-white shadow-md  px-[130px] z-50'>
        <div className='flex items-center gap-32'>
            <Image src="/assets/Logo.png" alt='logo' width={200} height={100}/>
            <ul className='flex gap-8'>
                <a href="/#Home" className='font-roboto font-medium text-sm text-[#138F2E] text-opacity-50 hover:text-opacity-100 transition-opacity duration-100'>Home</a>
                <a href="/#Features" className='font-roboto font-medium text-sm text-[#138F2E] text-opacity-50 hover:text-opacity-100 transition-opacity duration-100'>Features</a>
                <a href="/#AboutUs" className='font-roboto font-medium text-sm text-[#138F2E] text-opacity-50 hover:text-opacity-100 transition-opacity duration-100'>Abous Us</a>
                <a href="/#Contact" className='font-roboto font-medium text-sm text-[#138F2E] text-opacity-50 hover:text-opacity-100 transition-opacity duration-100'>Contact</a>
            </ul>
        </div>
        <div className='flex justify-end items-center'>
            <a href="/dashboard" className='px-9 border-2 py-2 rounded-lg border-[#138F2E] bg-[#138F2E] text-white font-roboto font-bold text-sm hover:bg-white hover:text-[#138F2E] transition-colors duration-50'>Dashboard</a>
        </div>
    </nav>
  )
}

export default Navbar