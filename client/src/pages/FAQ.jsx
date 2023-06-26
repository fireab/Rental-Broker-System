import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator,Button, ButtonGroup, Accordion,AccordionItem,AccordionButton,Box,AccordionIcon,AccordionPanel } from '@chakra-ui/react';
import { BrandFacebook, BrandInstagram, BrandLinkedin, BrandTwitter, CurrentLocation, Mail, PhoneCall, Settings, Login, Star,BadgeAd,Send,StatusChange } from "tabler-icons-react";

export default function FAQ() {
  return (
    <div className="mt-16 bg-gray-900 text-white">
      <div>
      <Tabs position="relative" variant="unstyled">
    <TabList justifyContent={"center"}>
      <Tab>Faq</Tab>
      <Tab>Contact</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <div>
            <div className="text-center pt-10">
                <p className="text-xl">WELCOME TO RBS APP SUPPORT</p>
                <h1 className="text-8xl font-semibold">How can we help?</h1>
            </div>
            <div className="p-5 text-center space-y-8">
                <div className="grid grid-cols-3 gap-5">
                
                   <Button className="py-16" colorScheme='blue' size='lg'>
                   <Login size={48} strokeWidth={1} color={'white'}/> <span className="font-light lg:text-3xl">User Login</span></Button>
                   <Button className="py-16" colorScheme='blue' size='lg'>
                   <Settings size={48} strokeWidth={1} color={'white'}/> <span className="font-light lg:text-3xl">Settings Option</span></Button>
                   <Button className="py-16" colorScheme='blue' size='lg'>
                   <Star size={48} strokeWidth={1} color={'white'}/> <span className="font-light lg:text-3xl">User Ratings</span></Button>
                   <Button className="py-16" colorScheme='blue' size='lg'>
                   <BadgeAd size={48} strokeWidth={1} color={'white'}/> <span className="font-light lg:text-3xl">Ads Posting</span></Button>
                   <Button className="py-16" colorScheme='blue' size='lg'>
                   <Send size={48} strokeWidth={1} color={'white'}/> <span className="font-light lg:text-3xl">Messaging</span></Button>
                   <Button className="py-16" colorScheme='blue' size='lg'>
                   <StatusChange size={48} strokeWidth={1} color={'white'}/> <span className="font-light lg:text-3xl">Edit profile</span></Button>
                </div>
            </div>
            <div>
                <h1 className="text-6xl font-semibold lg:pl-32 lg:pt-6 pb-10">Most Popular Questions</h1>
                <div className="">
                <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How do I enable or disable payment gateway?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        What happens if I clear the hosting server cache?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How do I enable or disable payment gateway?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        What happens if I clear the hosting server cache?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How do I enable or disable payment gateway?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        What happens if I clear the hosting server cache?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  
</Accordion>
                </div>
            </div>
        </div>
      </TabPanel>
      <TabPanel>
      <div className="flex shadow-xl justify-center items-center text-white">
					<div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-gray-800 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg">
						<div className="flex flex-col space-y-8 justify-between">
							<div>
								<h1 className="font-bold text-4xl tracking-wide">contact us</h1>
								<p className="pt-2 text-cyan-100 text-sm">id consectetu aliquam! Autem ratione deserunt dignissimos illo, adipisci ullam.</p>
							</div>
							<div className="flex flex-col space-y-6">
								<div className="inline-flex space-x-2 items-center">
									<PhoneCall size={30} strokeWidth={2} color={"cyan"} />
									<span>+(251) 912 3456</span>
								</div>
								<div className="inline-flex space-x-2 items-center">
									<Mail size={30} strokeWidth={2} color={"cyan"} />
									<span>RBS@gmail98.com</span>
								</div>
								<div className="inline-flex space-x-2 items-center">
									<CurrentLocation size={30} strokeWidth={2} color={"cyan"} />
									<span>Adama, Ethiopia</span>
								</div>
							</div>
							<div className="flex space-x-5 text-lg">
								<a href="">
									<BrandFacebook size={30} strokeWidth={1} color={"cyan"} />
								</a>
								<a href="">
									<BrandLinkedin size={30} strokeWidth={1} color={"cyan"} />
								</a>
								<a href="">
									<BrandInstagram size={30} strokeWidth={1} color={"cyan"} />
								</a>
								<a href="">
									<BrandTwitter size={30} strokeWidth={1} color={"cyan"} />
								</a>
							</div>
						</div>
						<div className="relative ">
							<div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
								<form action="flex flex-col space-y-4">
									<div>
										<label htmlFor="" className="text-sm">
											Your name
										</label>
										<input type="text" placeholder="your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300" />
									</div>
									<div>
										<label htmlFor="" className="text-sm">
											email address
										</label>
										<input type="email" placeholder="email address" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300" />
									</div>
									<div>
										<label htmlFor="" className="text-sm">
											message
										</label>
										<textarea placeholder="message" rows={4} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"></textarea>
									</div>
									<button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>
								</form>
							</div>
						</div>
					</div>
				</div>
      </TabPanel>
    </TabPanels>
  </Tabs>
      </div>
    </div>
  );
}
