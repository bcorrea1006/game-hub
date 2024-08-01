import React from 'react'; // React imports first
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; // 3rd party imports next
import App from './App'; // Our own imports last
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
