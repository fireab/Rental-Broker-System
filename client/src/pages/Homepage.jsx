import { Box, Button, chakra, Flex, GridItem, Icon, Image, Input, SimpleGrid, Stack, Text, VisuallyHidden } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const Homepage = () => {
	const slides = [
		{
			img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			description: "Get what you need, when you need it.",
		},
		{
			img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			description: "Renting made simple, just for you.",
		},
		{
			img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
			description: "Get what you need, when you need it.",
		},
		{
			img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			description: "Unleash your adventure with our rentals.",
		},
		{
			img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			description: "Experience more with our rental service.",
		},
	];
	const [currentSlide, setCurrentSlide] = useState(0);
	const slidesCount = slides.length;
	const carouselStyle = {
		transition: "all .5s",
		ml: `-${currentSlide * 100}%`,
	};
	const SLIDES_INTERVAL_TIME = 3000;
	const ANIMATION_DIRECTION = "right";
	useEffect(() => {
		const prevSlide = () => {
			setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
		};
		const nextSlide = () => {
			setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
		};
		const automatedSlide = setInterval(() => {
			ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
		}, SLIDES_INTERVAL_TIME);
		return () => clearInterval(automatedSlide);
	}, [slidesCount]);
	return (
		<>
			<div className="object-cover bg-cover bg-no-repeat bg-center">
				{}

				<Flex  bg="#edf3f8" _dark={{ bg: "#3e3e3e" }} p={0} alignItems="center" justifyContent="center">
					<Flex w="full" h="full"   overflow="hidden">
						<Flex pos="relative" className="!bg-blue-700 h-[60vh]" w="full" {...carouselStyle}>
							{slides.map((slide, sid) => (
								<Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
									<Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0" whiteSpace="nowrap" />
									<Image src={slide.img} alt="carousel image" boxSize="full" backgroundSize="cover" />
									<Stack p="8px 12px" pos="absolute" bottom="24px" textAlign="center" w="full" mb="8" color="white">
										<Text className="font-semibold text-7xl">{slide.description}</Text>
									</Stack>
								</Box>
							))}
						</Flex>
					</Flex>
				</Flex>

				<div className="">
					<Box px={8} py={24} mx="auto">
						<Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" textAlign={{ base: "left", md: "center" }}>
							<chakra.h1 mb={6} fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" lineHeight="none" letterSpacing={{ base: "normal", md: "tight" }} color="gray.900" _dark={{ color: "gray.100" }}>
								All your{" "}
								<Text display={{ base: "block", lg: "inline" }} w="full" bgClip="text" bgGradient="linear(to-r, green.400,purple.500)" fontWeight="extrabold">
									needs are just
								</Text>{" "}
								in one single place.
							</chakra.h1>
							<chakra.p px={{ base: 0, lg: 24 }} mb={6} fontSize={{ base: "lg", md: "xl" }} color="gray.600" _dark={{ color: "gray.300" }}>
								A rental system is a platform that allows customers to rent items for a specific period of time. and it is easy to use, secure, fast, best and provide a seamless rental experience for customers 24/7.
								<h1 className="text-2xl pt-2 text-black">Get what you need, when you need it.</h1>
							</chakra.p>
							<Stack direction={{ base: "column", sm: "row" }} mb={{ base: 4, md: 8 }} spacing={2} justifyContent={{ sm: "left", md: "center" }}>
								<GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
									<VisuallyHidden>Your Email</VisuallyHidden>
									<Input mt={0} size="lg" type="email" placeholder="Enter your email..." required />
								</GridItem>
								<Button as="a" colorScheme="gray" display="inline-flex" alignItems="center" justifyContent="center" w={{ base: "full", sm: "auto" }} mb={{ base: 2, sm: 0 }} size="lg" cursor="pointer">
									Get Started
									<Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
									</Icon>
								</Button>
							</Stack>
						</Box>
						<Box w={{ base: "full", md: 10 / 12 }} mx="auto" mt={20} textAlign="center"></Box>
					</Box>
				</div>

				<div>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
						<Flex bg="brand.400">
							<Image src="https://kmslh.com/wp-content/uploads/2021/05/shutterstock_1153862578-1-scaled.jpg" alt="3 women looking at a laptop" fit="cover" w="full" h={{ base: 64, md: "full" }} bg="gray.100" loading="lazy" opacity={1} />
						</Flex>
						<Flex direction="column" alignItems="start" justifyContent="center" px={{ base: 4, md: 8, lg: 20 }} py={24} zIndex={3}>
							<chakra.span color="brand.600" _dark={{ color: "gray.300" }} fontSize="lg" textTransform="uppercase" fontWeight="extrabold"></chakra.span>
							<chakra.h1 mb={4} fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="brand.600" _dark={{ color: "gray.300" }} lineHeight="shorter" textShadow="2px 0 currentcolor">
								We&apos;re here to help
							</chakra.h1>
							<chakra.p pr={{ base: 0, lg: 16 }} mb={4} fontSize="lg" color="brand.600" _dark={{ color: "gray.400" }} letterSpacing="wider">
								Get the best customer care and start getting personalized experiences at every stage of the customer journey.
								<br />
								Support is provided Mon - Fri, we aim to reply within 1 business day.
							</chakra.p>
							<Box display="inline-flex" rounded="md" shadow="md">
								<chakra.a mt={2} display="inline-flex" alignItems="center" justifyContent="center" px={5} py={3} border="solid transparent" fontWeight="bold" w="full" rounded="md" _light={{ color: "black" }} bg="brand.600" _dark={{ bg: "brand.500" }} _hover={{ bg: "brand.700", _dark: { bg: "brand.600" } }}>
									Visit the Help Centre
									<Icon as={FiExternalLink} ml={2} />
								</chakra.a>
							</Box>
						</Flex>
					</SimpleGrid>
				</div>
			</div>
		</>
	);
};
export default Homepage;
