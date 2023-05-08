import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import register from './pages/register';
import HomePage from './pages/homePage';
import MainMenu from './pages/productPage';
import Insert from './component/category'

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/category" element={<Insert/>}/>
        <Route path="/productPage" element={<MainMenu/>}/>
      </Routes>
    </Router>
     </ChakraProvider>
 
    
  
   
  );
}

export default App;
