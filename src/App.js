import React from 'react';
import {
  ChakraProvider,

  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Register from './component/register';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Register />
    </ChakraProvider>
  );
}

export default App;
