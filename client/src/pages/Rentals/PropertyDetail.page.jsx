import React from 'react';
import { Box, Image, Text, Stack, Badge, Divider } from '@chakra-ui/react';


const PropertyDetailPage = () => {
    return (
        <div p={4}>
        <Image src="https://placekitten.com/400/300" alt="Post" />
        <Stack spacing={4} mt={4}>
            <Text fontSize="2xl" fontWeight="bold">
            Beautiful Airbnb Listing
            </Text>
            <Text fontSize="lg">Description of the listing goes here...</Text>
            <Badge variant="outline" colorScheme="teal">
            Entire Apartment
            </Badge>
            <Divider />
            {/* Additional post details */}
        </Stack>
    </div>

    );
}

export default PropertyDetailPage;
