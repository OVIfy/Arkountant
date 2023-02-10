import { drawerAnatomy } from '@chakra-ui/anatomy'
import { border, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { keyframes } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(drawerAnatomy.keys)

// const elementAnimation = keyframes`
//     from{
//         transform:'initial';
//     }
// `

const Drawer = defineMultiStyleConfig({
    baseStyle:{
        dialog:{
            backgroundColor:'pink',
        },

        header:{

        },

        body:{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center'
        },

        closeButton:{

        },

        dialogContainer:{
        },

        footer:{

        },

    },

    variants:{
        permanent:{
          dialog:{
            backgroundColor: 'brand.darkgreen',
            maxWidth:'200px',
            borderRadius:'0px 1000px 1000px 0px',
            padding:'0px',
            overflowX:'hidden'
          },

          header:{
            minHeight:'20%'
          },

          body:{
            padding:'0px',
            paddingLeft:'16px',
          },

          footer:{
            minHeight:'20%'
          }
        }
    },

    defaultProps:{
    }
})

export default Drawer