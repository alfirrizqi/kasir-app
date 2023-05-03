import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Register from './component/register';
import MainMenu from './pages/productPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/homePage" element={<Register/>}/>
        <Route path="/productPage" element={<MainMenu/>}/>
      </Routes>
    </Router>
     </ChakraProvider>
 
    
  
   
  );
}

export default App;
