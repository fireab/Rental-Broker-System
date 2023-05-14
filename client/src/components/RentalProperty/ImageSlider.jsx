import React, { useState } from 'react'
import { Box, Flex, IconButton, Icon } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import im1 from "../../assets/imgs/b.jpg";


const ImageSlider = ({ images }) => {
    const slides = [
        { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
        { src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
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
        <Box
            backgroundImage={`url(${slides[currentIndex].src})`}
            backgroundSize="cover"
            backgroundPosition="center"
            height="650px"
            maxWidth="1440px"
            margin="auto"
            py={8}
            px={4}
            
            rounded="2xl"
            position="relative"
        >
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
        </Box>
    )
}
        
export default ImageSlider;