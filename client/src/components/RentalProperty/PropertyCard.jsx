import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Grid, Heading, Icon, IconButton, Image, Spacer, Square, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt, BiSave } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill, BsBookmarkHeart, BsFillStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

import img from "../../assets/imgs/house.jpg";
import { useRentalPosts } from "../../hooks/rentalPost";
import { userApi } from "../../redux/api/userApi";

// const img = styled(Image)`
// 	border: none;
// 	transition: all 0.3s ease-in-out;

// 	&:hover {
// 		transform: scale(1.06);
// 		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
// 	}
// `;

const PropertyCard = ({ preview, ...post }) => {
	const { rentalsPosts, saveRentalPost, isLoading, error } = useRentalPosts();
	const navigate = useNavigate();
	const settings = {
		// dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		// autoplay: true,
		speed: 500,
		// autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};



	const [slider, setSlider] = useState(0);
	const [isSliderButtonVisible, setSliderButtonVisible] = useState(false);
	const [isSavedPost, setIsSavePost] = useState(post.savedBy.length > 0);
	const [isSaveHover, setIsSaveHover] = useState(false);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const side = useBreakpointValue({ base: "10%", md: "10px" });
	const images = post.propertyImages.map((image) => ({ image: image, postId: image.postsId, id: image.id }));
	// console.log(post.propertyImages);
	// console.log(images);
	// const cards = [
	// 	{
	// 		title: "Design Projects 1",
	// 		text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
	// 		image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
	// 	},
	// 	{
	// 		title: "Design Projects 2",
	// 		text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
	// 		image: "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
	// 	},
	// 	{
	// 		title: "Design Projects 3",
	// 		text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
	// 		image: "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
	// 	},
	// 	{
	// 		image: img,
	// 	},
	// ];
	const handleSliderHover = () => {
		setSliderButtonVisible(true);
	};

	const handleSliderLeave = () => {
		setSliderButtonVisible(false);
	};

	const handleSaveHover = () => {
		setIsSaveHover(!isSaveHover);
	};

	const handleSaveLeave = () => {
		setIsSaveHover(!isSaveHover);
	};

	const handleSavePost = (e) => {
		e.stopPropagation();
		saveRentalPost(post.postId);
		setIsSavePost(!isSavedPost);
	};

	// const user = userApi.endpoints.user.useQueryState(null, {
	// 	selectFromResult: ({ data }) => data,
	// });

	return (
		<>
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

			<Card
				onClick={() => {
					navigate(`/rentals/${post.postId}`);
				}}
				rounded={"2xl"}
				backgroundColor={"whiteAlpha.500"}
				className=" !shadow-xs"
				p={0}
			>
				<CardBody p={0}>
					<div className="!relative" onMouseEnter={handleSliderHover} onMouseLeave={handleSliderLeave}>
						{/* Left Icon */}
						{images.length > 0 && (
							<Box visibility={isSliderButtonVisible ? "visible" : "hidden"} className="hidden md:block" transition={"all .2s ease-in-out"}>
								<IconButton
									size={"sm"}
									aria-label="left-arrow"
									className="!bg-white/70 hover:!bg-white/90 "
									borderRadius="full"
									position="absolute"
									left={side}
									top={"50%"}
									transform={"translate(0%, -50%)"}
									zIndex={2}
									onClick={(e) => {
										e.stopPropagation();
										slider?.slickPrev();
									}}
								>
									<ChevronLeftIcon />
								</IconButton>
								{/* Right Icon */}
								<IconButton
									size={"sm"}
									aria-label="right-arrow"
									className="!bg-white/70 hover:!bg-white/90"
									borderRadius="full"
									position="absolute"
									right={side}
									top={"50%"}
									transform={"translate(0%, -50%)"}
									zIndex={2}
									onClick={(e) => {
										e.stopPropagation();
										slider?.slickNext();
									}}
								>
									<ChevronRightIcon />
								</IconButton>
							</Box>
						)}
						{!preview && (
							<div onMouseEnter={handleSaveHover} onMouseLeave={handleSaveLeave} onClick={handleSavePost} className="p-2 absolute  right-2 cursor-pointer top-2 z-[2]">
								<BsBookmarkFill className={`${isSavedPost ? "text-red-600" : "text-black/70"}  transition-all duration-150 ease-in-out font-bold  text-lg`} size={isSaveHover ? 22 : 20} />
							</div>
						)}
						{/* Slider */}
						<div className="w-full">
							<Slider {...settings} ref={(slider) => setSlider(slider)}>
								{images.length == 0 ? (
									<Box rounded={"2xl"} overflow={"clip"} className={`${preview ? "h-60" : "h-40"}`} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={`url(http://192.168.8.113:3032/api/posts/images/noimage.jpg)`} />
								) : (
									images.map((image, index) => {
										return <Box rounded={"2xl"} overflow={"clip"} className={`${preview ? "h-60" : "h-40"}`} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} key={index} backgroundImage={`url(http://192.168.8.113:3032/api/posts/images/${image.image.image})`} />;
									})
								)}
							</Slider>
						</div>
					</div>
					<div className="p-2">
						<div className="flex flex-col">
							<div className="flex items-center font-medium text-sm justify-between">
								{/* [Address] */}
								{/* <span>Addis Ababa, Bole</span> */}
								<span>{`${post.propertyRegion}, ${post.propertyCity}`}</span>
								{/* [rating] */}
								<div className="flex justify-center space-x-1 ">
									<span className="">
										<BsFillStarFill className="text-yellow-400" />
									</span>
									<span className={`${preview ? "font-lg text-sm" : "font-medium text-xs"}`}>{preview ? 5.0 : 4.6}</span>
								</div>
							</div>
							{/* [product title] */}
							<span className={`${preview ? "font-lg text-sm" : "font-medium text-xs"} text-blue-900`}>{post.propertyTitle}</span>
							{/* [product type] */}
							<span className={`${preview ? "text-sm" : "text-xs"} text-gray-600`}>{post.propertyType}</span>
							{/* [property price] */}
							<span className={`${preview ? "text-sm" : "text-xs"} text-gray-900`}>{`${post.propertyPrice[0].price} / ${post.propertyPrice[0].priceType}`}</span>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default PropertyCard;
{
	/* <Box key={index} height={"6xl"} position="relative" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${card.image})`}>
									<Container size="container.lg" height="600px" position="relative">
										<Stack spacing={6} w={"full"} maxW={"lg"} position="absolute" top="50%" transform="translate(0, -50%)">
											<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>{card.title}</Heading>
											<Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
												{card.text}
											</Text>
										</Stack>
									</Container>
								</Box> */
}
// import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
// import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Grid, Heading, Icon, IconButton, Image, Spacer, Square, Stack, Text } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { BsBookmark, BsBookmarkFill, BsBookmarkHeart } from "react-icons/bs";
// import styled from "styled-components";

// export default function PropertyCard() {
// 	const slides = [{ src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" }, { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" }, { src: "https://images.unsplash.com/photo-1665678272951-f4ca1e7a8fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=343&q=80" }];
// 	const [currentIndex, setCurrentIndex] = useState(0);

// 	const prevSlide = () => {
// 		const isSlider = currentIndex === 0;
// 		const newIndex = isSlider ? slides.length - 1 : currentIndex - 1;
// 		setCurrentIndex(newIndex);
// 	};

// 	const nextSlide = () => {
// 		const isSlider = currentIndex === slides.length - 1;
// 		const newIndex = isSlider ? 0 : currentIndex + 1;
// 		setCurrentIndex(newIndex);
// 	};

// 	const goToSlide = (slideIndex) => {
// 		setCurrentIndex(slideIndex);
// 	};

// 	const [isBookmarked, setIsBookmarked] = useState(false);

// 	const handleBookmarked = () => {
// 		setIsBookmarked(!isBookmarked);
// 	};

// 	return (
// 		<div>
// 			<Grid className="p-4" gap={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
// 				<Card padding={0} margin={0} bg="none" border="transparent" objectFit="cover" overflow="hidden" shadow="md">
// 					<Image className="rounded-t-md h-full transition-all duration-1000 ease-in-out" objectFit="cover" overflow="hidden" src={slides[currentIndex].src} alt="Chakra UI" borderTopRadius="md" maxHeight="235px" minHeight="230px" maxWidth="400px" width="100%" transitionDuration="1s" />
// 					<Flex position="absolute" top="50%" left="5" transform="translateY(-50%)" alignItems="center">
// 						<IconButton aria-label="Previous Slide" icon={<ChevronLeftIcon />} size="lg" onClick={prevSlide} mr={2} borderRadius="full" padding={0} bg="none" />
// 					</Flex>
// 					<Flex position="absolute" top="50%" right="5" transform="translateY(-50%)" alignItems="center">
// 						<IconButton aria-label="Next Slide" icon={<ChevronRightIcon />} size="lg" onClick={nextSlide} ml={2} borderRadius="full" padding={0} bg="none" />
// 					</Flex>
// 					<CardBody padding={3}>
// 						<Stack spacing="0">
// 							<Flex justifyContent="space-between"></Flex>
// 						</Stack>
// 						<Flex alignItems="center">
// 							<Heading size="md" color={"gray.700"}>
// 								name
// 							</Heading>
// 							<Spacer />
// 							<StarIcon color="gray.700" />
// 							<Text padding="2">rating 4.38</Text>
// 						</Flex>
// 						<Box color={"gray.500"}>
// 							<Text>Product by,</Text>
// 							<Text>additiona info</Text>
// 						</Box>
// 					</CardBody>

// 					<CardFooter alignItems={"center"} justifyContent={"space-between"} padding={3}>
// 						<Button size={"sm"}>See detail</Button>
// 						<Flex alignItems={"center"}>
// 							<Text pr={4} color={"gray.700"} right={"5%"}>
// 								$100
// 							</Text>
// 							<Icon as={BsBookmarkFill} outline={"black"} onClick={handleBookmarked} variant="outline" color={isBookmarked ? "red.500" : "gray.300"} />
// 						</Flex>
// 					</CardFooter>
// 				</Card>
// 			</Grid>
// 		</div>
// 	);
// }
