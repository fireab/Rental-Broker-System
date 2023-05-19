import React from 'react';
import { Mail, PhoneCall, CurrentLocation, BrandFacebook, BrandTwitter, BrandInstagram, BrandLinkedin } from 'tabler-icons-react';

const ContactUsPage = () => {
    return (
        <div className=''>
			<div className="bg-[url('https://cdn.sanity.io/images/za5m6yef/production/46152070cc2faf24d3f035d2ade2426da25a5361-960x600.jpg?rect=0,67,960,465&w=930&h=450&blur=50')] bg-cover bg-no-repeat bg-center h-screen">{/* This is homepage */}
			{/* <img className="h-screen w-screen" src="https://cdn.sanity.io/images/za5m6yef/production/46152070cc2faf24d3f035d2ade2426da25a5361-960x600.jpg?rect=0,67,960,465" alt="" /> */}
        
        
            
            <div className='flex w-full min-h-screen justify-center items-center text-white'>
                <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-gray-800 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg'>
                    <div className='flex flex-col space-y-8 justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>contact us</h1>
                            <p className='pt-2 text-cyan-100 text-sm'>id consectetu aliquam! Autem ratione deserunt dignissimos illo, adipisci ullam.</p>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <div className='inline-flex space-x-2 items-center'>
                            <PhoneCall size={30} strokeWidth={2} color={'cyan'} />
                            <span>+(251) 912 3456</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                            <Mail size={30} strokeWidth={2} color={'cyan'} />
                            <span>RBS@gmail98.com</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                            <CurrentLocation size={30} strokeWidth={2} color={'cyan'} />
                            <span>Adama, Ethiopia</span>
                            </div>
                        </div>
                        <div className='flex space-x-5 text-lg'>
                            <a href=""><BrandFacebook size={30} strokeWidth={1} color={'cyan'} /></a>
                            <a href=""><BrandLinkedin size={30} strokeWidth={1} color={'cyan'} /></a>
                            <a href=""><BrandInstagram size={30} strokeWidth={1} color={'cyan'} /></a>
                            <a href=""><BrandTwitter size={30} strokeWidth={1} color={'cyan'} /></a>

                        </div>
                    </div>
                    <div className='relative '>
                    
                        <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                            <form action="flex flex-col space-y-4">
                                <div>
                                    <label htmlFor="" className='text-sm'>Your name</label>
                                    <input type="text" placeholder='your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-sm'>email address</label>
                                    <input type="email" placeholder='email address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-sm'>message</label>
                                    <textarea placeholder='message' rows={4} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' >
                                    </textarea>
                               
                                </div>
                                <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            </div>
        
    </div>
    );
}

export default ContactUsPage;
