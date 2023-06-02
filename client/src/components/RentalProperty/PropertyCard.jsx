import React, {useState} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Center, Spacer, Square, Grid, Box, Heading, Image, Flex, Icon, IconButton, Text, Button, Stack} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import styled from "styled-components";
import { BsBookmarkHeart,BsBookmark, BsBookmarkFill } from 'react-icons/bs';


const img = styled(Image)`
	border: none;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.06);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	}
`;

export default function PropertyCard() {

    const slides = [
        { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
        { src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
        { src: 'https://images.unsplash.com/photo-1665678272951-f4ca1e7a8fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=343&q=80'},
        { src: "../../assets/imgs/b.jpg"}
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
    const isSlider = currentIndex === 0
    const newIndex = isSlider ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
    const isSlider = currentIndex === slides.length - 1
    const newIndex = isSlider ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
    }

    const [isFav, setIsFav] = useState(false);

    const handleFav = () => {
        setIsFav(!isFav);
    };
    
  return (
    <div>
    
        <Grid className='p-4' gap={6} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>       
            <Card padding={0} margin={0} bg='none' border='transparent' objectFit='cover'
                    overflow='hidden' shadow='md'>
                
                <Image className="rounded-t-md h-full transition-all duration-1000 ease-in-out"
                    objectFit='cover'
                    overflow='hidden'
                    src={slides[currentIndex].src}
                    alt='Chakra UI'
                    borderTopRadius='md'
                    maxHeight="235px"
                    minHeight="230px"
                    maxWidth="400px"
                    width="100%"
                    transitionDuration='1s'
                   
                />
                <Flex position="absolute" top="50%" left="5"  transform="translateY(-50%)" alignItems="center">
                    <IconButton
                        aria-label="Previous Slide"
                        icon={<ChevronLeftIcon />}
                        size="lg"
                        onClick={prevSlide}
                        mr={2}
                        borderRadius='full'
                        padding={0}
                        bg='none' 
                        
                    />
                </Flex>
                <Flex position="absolute" top="50%" right="5" transform="translateY(-50%)" alignItems="center">
                    <IconButton
                        aria-label="Next Slide"
                        icon={<ChevronRightIcon/>}
                        size="lg"
                        onClick={nextSlide}
                        ml={2}
                        borderRadius='full'
                        padding={0}
                        bg='none' 
                    />
                </Flex>
                <CardBody padding={3}>
                        <Stack spacing="0">
                <Flex justifyContent="space-between">
                
                
                </Flex>
            </Stack>
                    <Flex alignItems='center' >
                            <Heading size='md' color={'gray.700'} >'name'</Heading>
                            <Spacer  />
                            <StarIcon 
                            color='gray.700'
                            />
                            <Text padding='2'>'rating4.38'</Text>
                    </Flex>
                    <Box color={'gray.500'}>
                        <Text >Product by,</Text>
                        <Text>additiona info</Text>
                    </Box>
                </CardBody>       
                
               <CardFooter alignItems={'center'} justifyContent={'space-between'} padding={3}>
                    <Button size={'sm'}>See detail</Button>
                    <Flex alignItems={'center'}>
                        <Text pr={4} color={'gray.700'} right={'5%'}>$100</Text>
                        <Icon as={BsBookmarkFill}
                        outline={'black'}
                        onClick={handleFav}
                        variant='outline'
                        color={isFav ? 'red.500' : 'gray.300'} 
                        />
                    </Flex>
                </CardFooter>
            </Card>            
        </Grid>
    </div>
  )
}
