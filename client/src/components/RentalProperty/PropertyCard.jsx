import React, {useState} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Grid, Box, Heading, Image, Flex, IconButton, Text, Button} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export default function PropertyCard() {

    const slides = [
        { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
        { src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
        { src: 'https://images.unsplash.com/photo-1665678272951-f4ca1e7a8fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=343&q=80'},
        { src: '../../assets/imgs/d.jpg'},
        { src: '../../assets/imgs/c.jpg'},
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
    
  return (
    <div>
        <Grid className='p-4' gap={6} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>       
            <Card padding={0} margin={0} bg='none' border='transparent'>
                <Image className="rounded-t-md h-full"
                    objectFit='cover'
                    overflow='clip'
                    src={slides[currentIndex].src}
                    alt='Chakra UI'
                    borderTopRadius='md'
                    height="100%"
                    maxWidth="400px"
                    width="100%"
                    transition="all 0.5s ease-in-out"
                />
                <Flex position="absolute" top="50%" left="5" transform="translateY(-50%)" alignItems="center">
        <IconButton
            aria-label="Previous Slide"
            icon={<ArrowLeftIcon />}
            size="lg"
            onClick={prevSlide}
            mr={2}
        />
        </Flex>
        <Flex position="absolute" top="50%" right="5" transform="translateY(-50%)" alignItems="center">
        <IconButton
            aria-label="Next Slide"
            icon={<ArrowRightIcon />}
            size="lg"
            onClick={nextSlide}
            ml={2}
        />
        </Flex>
                <CardBody>
                <CardHeader padding={0}>
                    <Flex spacing='1'>
                        <Flex flex='1' p={0} gap='2' alignItems='right' flexWrap='wrap'>
                            <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardHeader>       
               <CardFooter>
                    <Button colorScheme='gray'>View here</Button>
                </CardFooter>
                </CardBody>
            </Card>            
            <Card padding={0} bg='none'>
                <Image className="rounded-t-md"
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderTopRadius='md'
                />
                <CardBody padding={0}>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>       
                <CardFooter>
                    <Button size='sm' colorScheme='gray'>View here</Button>
                </CardFooter>
                </CardBody>
            </Card>
        </Grid>
    </div>
  )
}
