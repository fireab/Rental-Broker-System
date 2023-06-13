import { Box, Button, chakra, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Stack, StackDivider, Text, useColorModeValue, VisuallyHidden, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import {  Badge, Divider } from '@chakra-ui/react';
import { useRentalPosts } from "../../hooks/rentalPost";


const PropertyDetailPage = () => {
	const [isSavedPost, setIsSavePost] = useState(false);
	const { rentalsPosts, saveRentalPost, isLoading, error } = useRentalPosts();
	const handleSavePost = () => {
		setIsSavePost(!isSavedPost);
		saveRentalPost("1231")
	};
	
	return (
		<Container maxW={"7xl"} className="p-2 m-4 z-10 w-full md:!w-2/3 overflow-auto ">
			<div className="flex flex-col">
				<div className="flex justify-between items-center p-2">
					<div className="flex flex-col">
						<span className="text-lg font-bold">Dilamo Wondimu</span>
						<div className="flex space-x-4">
							<span className="text-sm font-light">4.2</span>
							<span className="text-sm font-light">Addis Ababa, Bole</span>
							<span className="text-sm font-light">dilamo</span>
						</div>
					</div>
					<div onClick={handleSavePost} className="p-2 cursor-pointer">
						<BsBookmarkFill className={`${isSavedPost ? "text-red-600" : "text-black/70"}  transition-all duration-150 ease-in-out font-bold  text-lg`} size={25} />
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-evenly space-x-4 w-full h-[50vh] ">
					<div className="md:w-1/2 w-full flex-1 ">
						{/* <Image  rounded={"md"} alt={"product image"} src={"https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"} fit={"cover"} align={"center"} w={"100%"} h={{ base: "100%", sm: "400px", lg: "500px" }} /> */}
						<Box rounded={"lg"}  className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" />
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
							Product Title
						</Heading>
						<Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} fontSize={"2xl"}>
							300 birr / month
						</Text>
					</Box>

					<Stack spacing={{ base: 4, sm: 6 }} direction={"column"} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}>
						<VStack spacing={{ base: 4, sm: 6 }}>
							<Text color={useColorModeValue("gray.500", "gray.400")} fontSize={"2xl"} fontWeight={"300"}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
							</Text>
							<Text fontSize={"lg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.</Text>
						</VStack>
						<Box>
							<Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("yellow.500", "yellow.300")} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
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
						</Box>
						<Box>
							<Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("yellow.500", "yellow.300")} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
								Product Details
							</Text>

							<List spacing={2}>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Between lugs:
									</Text>{" "}
									20 mm
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Bracelet:
									</Text>{" "}
									leather strap
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Case:
									</Text>{" "}
									Steel
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Case diameter:
									</Text>{" "}
									42 mm
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Dial color:
									</Text>{" "}
									Black
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Crystal:
									</Text>{" "}
									Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment inside
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Water resistance:
									</Text>{" "}
									5 bar (50 metres / 167 feet){" "}
								</ListItem>
							</List>
						</Box>
					</Stack>

					<Button
						rounded={"none"}
						w={"full"}
						mt={8}
						size={"lg"}
						py={"7"}
						bg={useColorModeValue("gray.900", "gray.50")}
						color={useColorModeValue("white", "gray.900")}
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
      color={useColorModeValue('gray.900', 'gray.400')}
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
        borderColor={useColorModeValue('gray.200', 'gray.600')}
      />
    }>
    <VStack spacing={{ base: 4, sm: 6 }}>
      <Text
        color={useColorModeValue('gray.500', 'gray.400')}
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
        color={useColorModeValue('yellow.500', 'yellow.300')}
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
        color={useColorModeValue('yellow.500', 'yellow.300')}
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
    bg={useColorModeValue('gray.900', 'gray.50')}
    color={useColorModeValue('white', 'gray.900')}
    textTransform={'uppercase'}
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
