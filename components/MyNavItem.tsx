import { Text, Icon, Stack, IconProps } from "@chakra-ui/react"
import React from 'react'

type Prop = {
    text : string,
    icon? : React.ReactNode,
    sx? : object
}

export default function MyNavItem({text, icon, sx}: Prop){
    return(
            <Stack sx={{...sx, backgroundColor:'white'}} direction={'row'} align='center'>
                {icon && icon}
                <Text>{text}</Text>
            </Stack>
    )
}