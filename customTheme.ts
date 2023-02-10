import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { Theme } from '@chakra-ui/react'
import Button from './components/chakraUiConfigStyles/ButtonConfigStyle'
import Input from './components/chakraUiConfigStyles/InputConfigStyle'
import Drawer from './components/chakraUiConfigStyles/NavConfigStyle'

const colors = {
    brand: {
        'darkgreen': '#0B962A',
        'lightgreen': '#E1FFBB',
        'red': '#FF0E0E'
    },
}

const config : ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({ 
    colors,
    config,
    components:{
        Button,
        Input,
        Drawer
    },
    styles:{
        global:{
            input:{
                color:'white',
                bg:'teal.500'
            },
        
        }
    }
})

export default theme