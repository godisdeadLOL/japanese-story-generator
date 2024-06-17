// import { render } from 'preact'
import { render } from 'preact'

import App from '@/app'
import theme from '@/theme'

import { ChakraProvider } from '@chakra-ui/react'

render(
    <>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </>,
    document.getElementById('app')
)
