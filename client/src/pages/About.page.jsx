import React from 'react';

const AboutPage = () => {
    return (
        <div className='mx-auto'>
            <div className='bg-black p-20'>
                <div className='text-white text-center text-5xl lg:text-7xl font-bold pt-20 '>
                <h1 className=' '>WELCOME TO</h1>
                <h1 className=' '>RBS</h1>
                </div>

            </div>
            <div className='relative'>
                {/*overlay */}
                <div className='lg:p-20 text-justify absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Advertise with us</h1>
                    <p className=' w-80 lg:w-1/2 p-5 text-md'>Advertise your product and services on Ethiopia's largest online classifieds by simply posting your ad or registering your business with us.</p>
                </div>
                <img className='w-full max-h-[500px] object-cover ' src="https://media.istockphoto.com/id/173593551/photo/key-exchange.jpg?s=612x612&w=0&k=20&c=E9mdapcq8_g3cfmGijC7ir-fOHDImyH5xGgr1MTsAps=" />

            </div>
            <div>
                <h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>
                    About Us
                </h1>
                <p className='p-2 text-center font-semibold sm:text-md md:text-xl lg:text-2xl'>
                RBS is Ethiopia's largest trusted online classifieds platform that conveniently connects owners and rentees.
                </p>
                <p>
                Quikr is all about you - Our aim is to empower every person in the country to independently connect with buyers and sellers online. Brainchild of Pranay Chulet, Quikr is widely known as India’s no. 1 online classifieds platform - and there’s a reason behind that. We care about you - and the transactions that bring you closer to your dreams. Want to buy your first car? We’re here for you. Want to sell commercial property to buy a home for your family? We’re here for you. Whatever job you’ve got, we promise to get it done.
                </p> 
                <p className='pt-2 text-blue-900'>Founded in 2008 and headquartered in Bangalore, Quikr has left a memorable footprint in over 1000 cities. And we continue to work towards building the future of trading and e-commerce.
                 </p>
                
                <p className='pt-2'>
                Our mission to create economic opportunities so people have better lives has taken us so much further. As a result, we’ve become the world’s work marketplace where every day businesses of all sizes and independent talent from around the globe meet here to accomplish incredible things.
                </p>
            </div>
            {/*overlay */}
            <div className='relative'>
            <div className='lg:p-20 text-justify absolute w-full h-full text-gray-200 max-h-[500px] bg-black/80 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Advertise with us</h1>
                    <p className='w-80 lg:w-1/2 p-5'>Advertise your product and services on Ethiopia's largest online classifieds by simply posting your ad or registering your business with us.</p>
                </div>
                <img className='w-full max-h-[400px] object-cover ' src="https://media.istockphoto.com/id/1075710106/photo/call-center-employee-isolated-on-a-gray-background.jpg?s=612x612&w=0&k=20&c=QjHtn3eoMKMG-uQKmLsUUk_Vf1lkDwg34eDjb5b72vs=" />
            </div>
            <div>
                <h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>What Do We Do</h1>
                <p>
                We love to unlock value for our customers. Every single month, hundreds of millions of people use our platforms to easily, safely, and conveniently find their perfect home, buy or sell a car, find a great job, sell things they no longer need, or strike a great deal on something they need. And we help thousands of entrepreneurs and businesses find their customers too. 

 

                We also unlock value within our company. We invest in ourselves and each other to reach our full potential. We avoid bureaucracy and empower our teams to innovate. Our commitment to inclusion ensures we listen to a diverse range of voices when making decisions. And, we combine the spirit and agility of a startup with our global scale and the backing of Prosus, one of the largest consumer internet groups in the world.

 

                Last but not least, we unlock value for our stakeholders. We are proud of the positive contribution we make to our planet, by enabling more conscious consumption and helping the world make the most of its limited resources through more efficient trade. 
                </p>
            </div>
        </div>
      )
}

export default AboutPage;
