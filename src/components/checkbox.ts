import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: 'mono', // change the font family of the label
  },
  control: {
    borderRadius: 0, // change the border radius of the control
  },
  icon: {
    size: 'lg',
    color: 'black',
    bg: 'primary',
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
