import React from 'react';
import { Box, Flex, Center } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

export default function PasswordHeading() {
  return (
    <Flex
      border={'1px solid gray'}
      flexDirection="row"
      justifyContent="space-between"
      bgColor={'#24232c'}
      padding={'10px 12px'}
      minW="30rem"
    >
      <h4>Password Heading</h4>
      <CopyIcon color="primary" fontSize={'lg'} />
    </Flex>
  );
}
