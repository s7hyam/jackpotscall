import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)


// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   ReactDOM.createRoot(rootElement).hydrate(
//     <React.StrictMode>
//       <ChakraProvider >
//         <App />
//       </ChakraProvider>
//     </React.StrictMode>

//     , rootElement);
// } else {
//   ReactDOM.createRoot(rootElement).render(<React.StrictMode>
//     <ChakraProvider >
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
//     , rootElement);
// }