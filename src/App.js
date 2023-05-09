import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import register from './pages/register';
import MainMenu from './pages/productPage';
import Insert from './component/category';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/category" element={<Insert/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/productPage" element={<MainMenu/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
     </ChakraProvider>
 
    
  
   
  );
}

export default App;
