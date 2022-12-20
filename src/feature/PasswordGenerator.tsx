import React from 'react';
import { Box, Flex, Center, Heading } from '@chakra-ui/react';
import PasswordHeading from './PasswordHeading';
import PasswordBody from './PasswordBody';

export default function PasswordGenerator() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgColor={'black'}
      color={'white'}
      flexDirection={'column'}
      minW="40rem"
    >
      <Heading as="h3" size="lg">
        Password Generator
      </Heading>
      <Box mt="1rem">
        <PasswordHeading />
      </Box>
      <PasswordBody />
    </Flex>
  );
}
