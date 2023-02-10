import { defineStyleConfig } from '@chakra-ui/react'
import { ComponentStyleConfig } from '@chakra-ui/react'

const Button : ComponentStyleConfig = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    width: '100%',
    textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'brand.darkgreen',
      color: 'brand.darkgreen',
      _hover:{
        backgroundColor:'brand.darkgreen',
        color:'white'
      },
    },
    solid: {
      bg: 'brand.darkgreen',
      color: 'white',
      _hover:{
        backgroundColor:'brand.lightgreen',
        color:'brand.darkgreen'
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})

export default Button