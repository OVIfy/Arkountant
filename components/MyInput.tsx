import React from 'react'
import { As, Button, Input, InputGroup, InputLeftAddon, InputLeftElement, Icon } from '@chakra-ui/react'

type Props = {
    placeholder? : string,
    leftaddon? : As,
    variant? : string,
    type? : string
}
 
export default function MyInput({placeholder, leftaddon, type} : Props){
    return (
        <>
            <InputGroup>
                <Input type={type} data-peer placeholder={placeholder}/>
                <InputLeftElement children={<Icon as={leftaddon}/>} />
            </InputGroup>
        </>
    )
}