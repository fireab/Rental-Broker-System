import React from 'react';
import {Flex,Box,Icon,Image,chakra} from '@chakra-ui/react';
import { MdHeadset,MdLocationOn,MdEmail } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";


const AboutPage = () => {
    return (
        <div className='mx-auto'>
            <div className='bg-black p-20'>
                <div className=' from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-center text-5xl lg:text-7xl font-bold pt-20 '>
                <h1 className=' '>WELCOME TO</h1>
                <h1 className=' '>RBS</h1>
                </div>

            </div>
            <div className='relative'>
                {/*overlay */}
                <div className='lg:p-20 text-justify absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                    <h1 className='px-4 animate-pulse text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Advertise with us</h1>
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
                <div className='p-5 text-center'>
                <p>
                RBS is all about you - Our aim is to empower every person in the country to independently connect with owners and rentees online.RBS is widely known as Ethiopias no. 1 online classifieds platform - and there’s a reason behind that. We care about you, Want to rent your first car? We’re here for you. Want to rent a home for your family? We’re here for you, we promise to get it done.
                </p> 
                <p className='pt-2 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-xl'>Founded in 2023 and headquartered in Adama.
                 </p>
                
                <p className='pt-2'>
                Our mission to create economic opportunities so people have better lives has taken us so much further.
                </p>
                </div>
            </div>
            <h1 className='text-center text-4xl font-semibold pt-2'>Who are we</h1>
            <div className='lg:flex'>
            
            <Flex
p={5}
 alignItems="center"
 justifyContent="center"
 
>
  <Box
    w="min"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    rounded="lg"
    overflow="hidden"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      objectPosition="center"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      alt="avatar"
    />

    <Flex alignItems="center" px={6} py={3} bg="gray.900">
      <Icon as={MdHeadset} h={6} w={6} color="white" />

      <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
        Focusing
      </chakra.h1>
    </Flex>

    <Box py={4} px={6}>
      <chakra.h1
        fontSize="xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Patterson johnson
      </chakra.h1>

      <chakra.p
        py={2}
        color="gray.700"
        _dark={{
          color: "gray.400",
        }}
      >
        Full Stack maker & UI / UX Designer , love hip hop music Author of
        Building UI.
      </chakra.p>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          Choc UI
        </chakra.h1>
      </Flex>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdLocationOn} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          California
        </chakra.h1>
      </Flex>
      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdEmail} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          patterson@example.com
        </chakra.h1>
      </Flex>
    </Box>
  </Box>
</Flex>
<Flex
p={1}
 alignItems="center"
 justifyContent="center"
>
  <Box
    w="min"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    rounded="lg"
    overflow="hidden"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      objectPosition="center"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      alt="avatar"
    />

    <Flex alignItems="center" px={6} py={3} bg="gray.900">
      <Icon as={MdHeadset} h={6} w={6} color="white" />

      <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
        Focusing
      </chakra.h1>
    </Flex>

    <Box py={4} px={6}>
      <chakra.h1
        fontSize="xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Patterson johnson
      </chakra.h1>

      <chakra.p
        py={2}
        color="gray.700"
        _dark={{
          color: "gray.400",
        }}
      >
        Full Stack maker & UI / UX Designer , love hip hop music Author of
        Building UI.
      </chakra.p>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          Choc UI
        </chakra.h1>
      </Flex>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdLocationOn} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          California
        </chakra.h1>
      </Flex>
      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdEmail} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          patterson@example.com
        </chakra.h1>
      </Flex>
    </Box>
  </Box>
</Flex>
<Flex
p={1}
 alignItems="center"
 justifyContent="center"
>
  <Box
    w="min"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    rounded="lg"
    overflow="hidden"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      objectPosition="center"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      alt="avatar"
    />

    <Flex alignItems="center" px={6} py={3} bg="gray.900">
      <Icon as={MdHeadset} h={6} w={6} color="white" />

      <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
        Focusing
      </chakra.h1>
    </Flex>

    <Box py={4} px={6}>
      <chakra.h1
        fontSize="xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Patterson johnson
      </chakra.h1>

      <chakra.p
        py={2}
        color="gray.700"
        _dark={{
          color: "gray.400",
        }}
      >
        Full Stack maker & UI / UX Designer , love hip hop music Author of
        Building UI.
      </chakra.p>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          Choc UI
        </chakra.h1>
      </Flex>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdLocationOn} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          California
        </chakra.h1>
      </Flex>
      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdEmail} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          patterson@example.com
        </chakra.h1>
      </Flex>
    </Box>
  </Box>
</Flex>
<Flex
p={1}
 alignItems="center"
 justifyContent="center"
>
  <Box
    w="min"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    rounded="lg"
    overflow="hidden"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      objectPosition="center"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      alt="avatar"
    />

    <Flex alignItems="center" px={6} py={3} bg="gray.900">
      <Icon as={MdHeadset} h={6} w={6} color="white" />

      <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
        Focusing
      </chakra.h1>
    </Flex>

    <Box py={4} px={6}>
      <chakra.h1
        fontSize="xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Patterson johnson
      </chakra.h1>

      <chakra.p
        py={2}
        color="gray.700"
        _dark={{
          color: "gray.400",
        }}
      >
        Full Stack maker & UI / UX Designer , love hip hop music Author of
        Building UI.
      </chakra.p>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          Choc UI
        </chakra.h1>
      </Flex>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdLocationOn} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          California
        </chakra.h1>
      </Flex>
      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdEmail} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          patterson@example.com
        </chakra.h1>
      </Flex>
    </Box>
  </Box>
</Flex>
<Flex
p={1}
 alignItems="center"
 justifyContent="center"
>
  <Box
    w="min"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    rounded="lg"
    overflow="hidden"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      objectPosition="center"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      alt="avatar"
    />

    <Flex alignItems="center" px={6} py={3} bg="gray.900">
      <Icon as={MdHeadset} h={6} w={6} color="white" />

      <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
        Focusing
      </chakra.h1>
    </Flex>

    <Box py={4} px={6}>
      <chakra.h1
        fontSize="xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Patterson johnson
      </chakra.h1>

      <chakra.p
        py={2}
        color="gray.700"
        _dark={{
          color: "gray.400",
        }}
      >
        Full Stack maker & UI / UX Designer , love hip hop music Author of
        Building UI.
      </chakra.p>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          Choc UI
        </chakra.h1>
      </Flex>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdLocationOn} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          California
        </chakra.h1>
      </Flex>
      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdEmail} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          patterson@example.com
        </chakra.h1>
      </Flex>
    </Box>
  </Box>
</Flex>


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
