import { ChakraProvider, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import theme from './config/theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack bg={"#18191A"} color={"#EEEEEE"} >
        <Header />
        <Outlet />
        <Footer />
      </VStack>
    </ChakraProvider>
      
  );
}

export default App;
