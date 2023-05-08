import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import register from './pages/register';
import MainMenu from './pages/productPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/register" element={<register/>}/>
        <Route path="/productPage" element={<MainMenu/>}/>
      </Routes>
    </Router>
     </ChakraProvider>
 
    
  
   
  );
}

export default App;
