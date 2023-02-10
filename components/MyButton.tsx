import { Button, ButtonGroup } from '@chakra-ui/react'
import { JSX } from '@babel/types';
import React from 'react';

type Props = {
    children: string,
    variant? : 'solid' | 'outline' | 'ghost' | 'link'
    w?: string | number
}; 

export function MyButton({children, variant, w} : Props){
    return(
        <Button w={w || '100%'} variant={variant}>{children}</Button>
    )
}