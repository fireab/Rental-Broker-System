import { Avatar, Box, Button, chakra, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Stack, StackDivider, Text, useColorModeValue, VisuallyHidden, VStack } from "@chakra-ui/react";
import { Badge, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

import { useRentalPosts } from "../../hooks/rentalPost";
import { fetchRentalPost } from "../../services/rental.api";
import capitalize from "../../utils/Capitalize";

const PropertyDetailPage = () => {
	const { postId } = useParams();
	const queryClient = useQueryClient();

	const {
		data: rentalPost,
		isLoading: isPostLoading,
		error: postError,
	} = useQuery(["post", postId], () => fetchRentalPost(postId), {
		onSuccess: (data) => {
			queryClient.invalidateQueries(["posts", data.id]);
		},
	});
	const { saveRentalPost } = useRentalPosts();

	const [isSavedPost, setIsSavePost] = useState(false);
	if (isPostLoading) {
		return <div>Loading...</div>;
	}

	const author = rentalPost?.author;
	// console.log(post);

	const handleSavePost = (e) => {
		e.stopPropagation();
		saveRentalPost(rentalPost.id);
		setIsSavePost(!isSavedPost);
	};

	console.log(rentalPost);

	return (
		<Container maxW={"7xl"} className="p-2 m-4 z-10 w-full md:!w-2/3 overflow-auto ">
			<div className="flex flex-col">
				<div className="flex justify-between items-center p-2">
					<div className="flex cursor-pointer justify-center items-center space-x-4">
						<Avatar name="Dan Abrahmov" aria-label="User menu" src="https://bit.ly/dan-abramov" />
						<div className="flex flex-col">
							<span className="text-lg font-bold">{author.username}</span>
							<div className="flex space-x-4">
								<span className="text-sm font-light">4.2</span>
								<span className="text-sm font-light">{`${author.address[0].region}, ${author.address[0].city}`}</span>
								<span className="text-sm font-light">dilamo</span>
							</div>
						</div>
					</div>
					<div className="flex space-x-2">
						<Button className="!bg-blue-700 text-white">
							<div className="flex space-x-2 items-center">
								<BiUserPlus size={22} />
								<span>Follow</span>
							</div>
						</Button>
						<div onClick={handleSavePost} className="p-2 cursor-pointer">
							<BsBookmarkFill className={`${rentalPost.savedBy.length > 0 ? "text-red-600" : "text-black/70"}  transition-all duration-150 ease-in-out font-bold  text-lg`} size={25} />
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-evenly space-x-4 w-full h-[50vh] ">
					<div className="md:w-1/2 w-full flex-1 ">
						{/* <Image  rounded={"md"} alt={"product image"} src={"https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"} fit={"cover"} align={"center"} w={"100%"} h={{ base: "100%", sm: "400px", lg: "500px" }} /> */}
						<Box rounded={"lg"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
					</div>
					<div className="md:w-1/2 w-full flex">
						<div className="md:grid md:grid-cols-3 md:grid-rown-3 w-full gap-4 hidden">
							<Box rounded={"lg"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
							<Box rounded={"lg"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
							<Box rounded={"lg"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
							<Box rounded={"lg"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
							<Box rounded={"lg"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
							<Box rounded={"lg"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
							<Box rounded={"lg"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
						</div>
					</div>
				</div>
				<Stack w={"full"} spacing={{ base: 6, md: 10 }}>
					<Box as={"header"}>
						<Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
							{rentalPost.propertyTitle}
						</Heading>
				
								<Text color={"gray.900"} fontWeight={300} fontSize={"2xl"}>
									{`${rentalPost.propertyPrice[rentalPost.propertyPrice.length-1].price} birr / ${rentalPost.propertyPrice[rentalPost.propertyPrice.length-1].priceType.toLowerCase()}`}
								</Text>
							
					
					</Box>

					<Stack spacing={{ base: 4, sm: 6 }} direction={"column"} divider={<StackDivider borderColor={"gray.200"} />}>
						<VStack spacing={{ base: 4, sm: 6 }}>
							<Text color={"gray.500"} fontSize={"2xl"} fontWeight={"300"}>
								{rentalPost.propertyDescription}
							</Text>
							{/* <Text fontSize={"lg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.</Text> */}
						</VStack>
						{/* <Box>
							<Text fontSize={{ base: "16px", lg: "18px" }} color={"yellow.500"} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
								Features
							</Text>

							<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
								<List spacing={2}>
									<ListItem>Chronograph</ListItem>
									<ListItem>Master Chronometer Certified</ListItem> <ListItem>Tachymeter</ListItem>
								</List>
								<List spacing={2}>
									<ListItem>Anti‑magnetic</ListItem>
									<ListItem>Chronometer</ListItem>
									<ListItem>Small seconds</ListItem>
								</List>
							</SimpleGrid>
						</Box> */}
						<Box>
							<Text fontSize={{ base: "16px", lg: "18px" }} color={"yellow.500"} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
								Product Details
							</Text>

							<List spacing={2}>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Avalibliity:
									</Text>{" "}
									{!rentalPost.isAvailable ? (
										<Badge fontWeight={"bold"} fontSize={"x-small"} p={1} px={2} bg={"green.500"} textColor={"white"} rounded={"full"}>
											Available
										</Badge>
									) : (
										<Badge fontWeight={"bold"} fontSize={"x-small"} p={1} px={2} bg={"red.500"} textColor={"white"} rounded={"full"}>
											Not Available
										</Badge>
									)}
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Property Name:
									</Text>{" "}
									<span>{rentalPost.propertyTitle}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Type:
									</Text>{" "}
									<span>{rentalPost.propertyType}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Quantity:
									</Text>{" "}
									<span>{rentalPost.propertyQuantity}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Address:
									</Text>{" "}
									<span>{`${rentalPost.propertyStreet} ${rentalPost.propertyRegion}, ${rentalPost.propertyCity}`}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Maximum Lease Length:
									</Text>{" "}
									<span>{`${rentalPost.maxLeaseLengthValue} ${rentalPost.maxLeaseLengthType}`}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Minimum Lease Length:
									</Text>{" "}
									<span>{`${rentalPost.minLeaseLengthValue} ${rentalPost.minLeaseLengthType}`}</span>
								</ListItem>
								<ListItem>
									<div className="flex space-x-2 items-start">
										<Text as={"span"} fontWeight={"bold"}>
											Price:
										</Text>
										<div className="flex flex-col">
											{rentalPost.propertyPrice.map((price, index) => {
												return <span key={index}>{`${price.price} birr / ${price.priceType.toLowerCase()}`}</span>;
											})}
										</div>
									</div>
								</ListItem>
								{rentalPost.propertyContact.map((contact, index) => {
									return (
										<ListItem key={index}>
											<Text as={"span"} fontWeight={"bold"}>
												{capitalize(contact.type)}:
											</Text>{" "}
											<span>{contact.value}</span>
										</ListItem>
									);
								})}
							</List>
						</Box>
					</Stack>

					<Button
						rounded={"none"}
						w={"full"}
						mt={8}
						size={"lg"}
						py={"7"}
						bg={"gray.900"}
						color={"white"}
						textTransform={"uppercase"}
						_hover={{
							transform: "translateY(2px)",
							boxShadow: "lg",
						}}
					>
						Message
					</Button>

					{/* <Stack direction="row" alignItems="center" justifyContent={"center"}>
					<MdLocalShipping />
					<Text></Text>
				</Stack> */}
				</Stack>
			</div>
		</Container>
	);
};

export default PropertyDetailPage;

{
	/* <div className="w-1/2 h-[50vh] bg-red-500">
					<div className="grid grid-cols-3 grid-rown-3 gap-4 bg-blue-700">
					<Image rounded={"2xl"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />

            <Box rounded={"2xl"} overflow={"clip"} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
						<Box rounded={"2xl"} overflow={"clip"} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
						<Box rounded={"2xl"} overflow={"clip"} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
						<Box rounded={"2xl"} overflow={"clip"} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" /> 
					</div>
				</div> 
      */
}
{
	/* <SimpleGrid
columns={{ base: 1, lg: 2 }}
spacing={{ base: 8, md: 10 }}
py={{ base: 18, md: 24 }}>
<Flex>
  <Image
    rounded={'md'}
    alt={'product image'}
    src={
      'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
    }
    fit={'cover'}
    align={'center'}
    w={'100%'}
    h={{ base: '100%', sm: '400px', lg: '500px' }}
  />
</Flex>
<Stack spacing={{ base: 6, md: 10 }}>
  <Box as={'header'}>
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
      Automatic Watch
    </Heading>
    <Text
      color={'gray.900'}
      fontWeight={300}
      fontSize={'2xl'}>
      $350.00 USD
    </Text>
  </Box>

  <Stack
    spacing={{ base: 4, sm: 6 }}
    direction={'column'}
    divider={
      <StackDivider
        borderColor={'gray.200'}
      />
    }>
    <VStack spacing={{ base: 4, sm: 6 }}>
      <Text
        color={'gray.500'}
        fontSize={'2xl'}
        fontWeight={'300'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore
      </Text>
      <Text fontSize={'lg'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        aliquid amet at delectus doloribus dolorum expedita hic, ipsum
        maxime modi nam officiis porro, quae, quisquam quos
        reprehenderit velit? Natus, totam.
      </Text>
    </VStack>
    <Box>
      <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={'yellow.500'}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Features
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <List spacing={2}>
          <ListItem>Chronograph</ListItem>
          <ListItem>Master Chronometer Certified</ListItem>{' '}
          <ListItem>Tachymeter</ListItem>
        </List>
        <List spacing={2}>
          <ListItem>Anti‑magnetic</ListItem>
          <ListItem>Chronometer</ListItem>
          <ListItem>Small seconds</ListItem>
        </List>
      </SimpleGrid>
    </Box>
    <Box>
      <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={'yellow.500'}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Product Details
      </Text>

      <List spacing={2}>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Between lugs:
          </Text>{' '}
          20 mm
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Bracelet:
          </Text>{' '}
          leather strap
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Case:
          </Text>{' '}
          Steel
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Case diameter:
          </Text>{' '}
          42 mm
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Dial color:
          </Text>{' '}
          Black
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Crystal:
          </Text>{' '}
          Domed, scratch‑resistant sapphire crystal with anti‑reflective
          treatment inside
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Water resistance:
          </Text>{' '}
          5 bar (50 metres / 167 feet){' '}
        </ListItem>
      </List>
    </Box>
  </Stack>

  <Button
    rounded={'none'}
    w={'full'}
    mt={8}
    size={'lg'}
    py={'7'}
    bg={'gray.900'}
    color={'white'0    textTransform={'uppercase'}
    _hover={{
      transform: 'translateY(2px)',
      boxShadow: 'lg',
    }}>
    Add to cart
  </Button>

  <Stack direction="row" alignItems="center" justifyContent={'center'}>
    <MdLocalShipping />
    <Text>2-3 business days delivery</Text>
  </Stack>
</Stack>
</SimpleGrid> */
}
