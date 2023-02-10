import { inputAnatomy } from '@chakra-ui/anatomy'
import { border, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { keyframes } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

// const elementAnimation = keyframes`
//     from{
//         transform:'initial';
//     }
// `

const Input = defineMultiStyleConfig({
    baseStyle:{
        field:{
            fontFamily: 'mono', // change the font family
            color: 'teal.500', // change the input text colo

            
        },
        element:{
            backgroundColor:'white',
            borderRadius:'50%',
            transform: 'scale(0.6) rotate(-30deg)',
            transition:'all 0.5s ease-in-out',

        }
    },

    variants:{
        outline:{
            field:{
                border: '2px solid',
                borderColor: 'brand.darkgreen',
                borderRadius: '8px',
                outline:'0',

                _hover:{
                    borderColor:'brand.lightgreen'
                },

                _focus:{
                    border: '3px solid',
                    borderColor:'brand.lightgreen',
                    outline:'0',
                    boxShadow:'none'
                }
            },
            element:{
                pointerEvents:'none',
                _peerHover:{
                    transform: 'scale(0.6) rotate(0deg)',
                    boxShadow:'1px 2px 3px grainsboro'
                },
                _peerFocus:{
                    transform: 'scale(0.6) rotate(0deg)',
                }
            }
        }
    },

    defaultProps:{
    }
})

export default Input