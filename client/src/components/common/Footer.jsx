import React from 'react';
import { BrandFacebook } from 'tabler-icons-react';
import { BrandTwitter } from 'tabler-icons-react';
import { BrandInstagram } from 'tabler-icons-react';
import { BrandTelegram } from 'tabler-icons-react';

const Footer = () => {
    return (
       <footer className='bg-gray-900 text-white z-10'>

        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>

            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                <span className='text-teal-400'>Free</span> Until payment integrated
            </h1>

            <div className='font-semibold'>
                signup
            </div>

        </div>
       
        <div className='p-10 bg-gray-800 text-gray-200'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div className='mb-5'>
                        <h4 className='text-2xl pb-4'>Company</h4>
                        <p className='text-gray-500'>
                        RGB <br/>
                        Adama,Ethiopia <br/><br/>
                        <strong>Phone:</strong>+2511234567 <br />
                        <strong>Email:</strong>rgb@gmail.com
                        </p>
                    </div>
                    <div className='mb-5'>
                        <h4 className='pb-4'>Quick Links</h4>
                        <ul className='text-gray-500'>
                            <li className='pb-4'><a href="#" className='hover:text-yellow-300'>Home</a> </li>
                            <li className='pb-4'><a href="#" className='hover:text-yellow-300'>Services</a> </li>
                            <li className='pb-4'><a href="#" className='hover:text-yellow-300'>Terms of Services</a> </li>
                            <li className='pb-4'><a href="#" className='hover:text-yellow-300'>Privacy Policy</a> </li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4 className='pb-4'>Quick Links</h4>
                        <ul className='text-gray-500'>
                            <li className='pb-4'><a href="#" className='hover:text-[#2b6cb0]'>About us</a> </li>
                            <li className='pb-4'><a href="#" className='hover:text-[#2b6cb0]'>Developers</a> </li>
                            <li className='pb-4'><a href="#" className='hover:text-[#2b6cb0]'>Customer Care</a> </li>
                            <li className='pb-4'><a href="#" className='hover:text-[#2b6cb0]'>Testimonals</a> </li>
                        </ul>
                    </div>
                    <div className='mb-5 text-xl text-white'>
                        <h4 className='pb-4 pl-12'>Follow us</h4>
                        <div className='flex text-2xl text-center'>
                        <a href="#" className='w-10 h-10 rounded-full bg-[#2b6cb0] hover:bg-[#1e4b7b] mx-1 pt-1 flex justify-center items-center'>
                            <BrandFacebook size={30} strokeWidth={1} color={'white'} /></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-[#2b6cb0] hover:bg-[#1e4b7b] mx-1 pt-1 flex justify-center items-center'>
                            <BrandTwitter size={30} strokeWidth={1} color={'white'} /></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-[#2b6cb0] hover:bg-[#1e4b7b] mx-1 pt-1 flex justify-center items-center'>
                            <BrandInstagram size={30} strokeWidth={1} color={'white'} /></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-[#2b6cb0] hover:bg-[#1e4b7b] mx-1 pt-1 flex justify-center items-center'>
                            <BrandTelegram size={30} strokeWidth={1} color={'white'} /></a>
                        </div>
                    </div>

                </div>

            </div>


        </div>
        <div className='w-full bg-gray-900 text-gray-500 px-10'>
            <div className='text-center'>
                <div>Copyright <strong><span>RGB</span></strong>. All Rights Reserved
                </div>

            </div>


        </div>

       </footer>
    );
}

export default Footer;
