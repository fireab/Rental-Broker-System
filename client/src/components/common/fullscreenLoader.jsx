import { Box, CircularProgress, Container } from '@chakra-ui/react';
import React from 'react';

const FullscreenLoader = () => {
    return (
        <Container sx={{ height: '95vh' }}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ height: '100%' }}
          >
            <CircularProgress />
          </Box>
        </Container>
      );
}

export default FullscreenLoader;
