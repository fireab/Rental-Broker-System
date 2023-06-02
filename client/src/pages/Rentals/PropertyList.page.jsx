import React from 'react';

const PropertyListPage = () => {
    return (
        <div>
        <Heading as="h1" mb="10">
            ADs List 
        </Heading>

        <Heading as="h1" mb="10">
            Chakra UI Airbnb
        </Heading>
            <Grid className='p-4' gap={6} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>

            
            </Grid>
        </div>
    );
}

export default PropertyListPage;
