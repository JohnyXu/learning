import React from 'react';
import PasswordGenerator from './feature/PasswordGenerator';
// 1. import `ChakraProvider` component
import { extendTheme, ChakraProvider, withDefaultColorScheme } from '@chakra-ui/react';
import { checkboxTheme } from './components/checkbox';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: ' #a4ffaf',
};

const theme = extendTheme({ colors, components: { Checkbox: checkboxTheme } });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <PasswordGenerator />
    </ChakraProvider>
  );
}

export default App;
