import React from 'react';

import {
  Button,
  Box,
  Flex,
  Heading,
  CheckboxGroup,
  Checkbox,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function PasswordBody() {
  const options = [
    { id: 1, label: 'Include Uppercase Letters' },
    { id: 2, label: 'Include Lowercase Letters' },
    { id: 3, label: 'Include Numbers' },
    { id: 4, label: 'Include Symbols' },
  ];

  return (
    <Box bgColor={'#24232c'} padding={'10px 12px'} mt="1rem" minW="30rem">
      <Flex flexDirection={'row'} justifyContent="space-between" alignItems={'center'}>
        <Text>Character Length</Text>
        <Heading size="lg" color="primary">
          12
        </Heading>
      </Flex>

      <Slider mt="0.5rem" aria-label="slider-ex-2" defaultValue={0}>
        <SliderTrack>
          <SliderFilledTrack bg="primary" />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Flex mt="0.5rem" flexDirection={'column'}>
        {options.map((item) => {
          return (
            <Flex key={item.id} mt="0.5rem" flexDirection={'row'}>
              <Checkbox defaultChecked>{item.label}</Checkbox>
            </Flex>
          );
        })}
      </Flex>
      <Box mt="0.5rem" bgColor={'#18171F'} border="2px solid #18171F" p="0.5rem">
        <Flex justifyContent={'space-between'} alignItems="center">
          <Text>Strength</Text>
          <Flex>
            <Text>Medium</Text>
            <Flex ml="5px">
              <Box
                width="10px"
                height="30px"
                mr="0.5rem"
                bgColor="red"
                border="2px solid red"
              ></Box>
              <Box
                width="10px"
                height="30px"
                mr="0.5rem"
                bgColor="red"
                border="2px solid red"
              ></Box>
              <Box
                width="10px"
                height="30px"
                mr="0.5rem"
                bgColor="red"
                border="2px solid red"
              ></Box>
              <Box
                width="10px"
                height="30px"
                mr="0.5rem"
                bgColor="red"
                border="2px solid red"
              ></Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Button bgColor="primary" mt="1rem" width="100%">
        <Text>Generate</Text>
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
}
