import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Theme } from '@chakra-ui/theme'
import theme from '@/customTheme'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp