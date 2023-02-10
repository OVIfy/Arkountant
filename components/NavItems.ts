import {IoHomeOutline } from 'react-icons/io5'
import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

type navItem = {
    text : string,
    icon? : any
}

const navItemsArray : Array<navItem> = [
    {
        text : 'Dashboard',
        icon : IoHomeOutline
    },
    {
        text : 'Sales',
        icon : IoHomeOutline
    },
    {
        text : 'Expenses',
        icon : IoHomeOutline
    },
    {
        text : 'Products',
        icon : IoHomeOutline
    },
    {
        text : 'Stock',
        icon : IoHomeOutline
    },
    {
        text : 'Profit and loss',
        icon : IoHomeOutline
    },
    {
        text : 'Notification',
        icon : IoHomeOutline
    },
    {
        text : 'Messages',
        icon : IoHomeOutline
    },
]

export default navItemsArray