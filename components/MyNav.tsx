import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Stack,
    HStack,
    VStack,
    Text,
    Avatar,
    Icon
} from '@chakra-ui/react'
import MyNavItem from './MyNavItem'
import React from 'react'
import {IoHomeOutline } from 'react-icons/io5'
import navItemsArray from './NavItems'


export default function MyNav(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            Open
        </Button>
        <Drawer
            isOpen={true}
            placement='left'
            onClose={onClose}
            variant={'permanent'}

        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <>
                    <Avatar name='Kola Tioluwani' src='https://bit.ly/sage-adebayo' />
                    <Text fontSize={'16px'}>O.Victor</Text>
                    <Text fontSize={'14px'} fontWeight={'400'}>Admin</Text>
                </>
            </DrawerHeader>

            <DrawerBody>
                <Stack>
                    {navItemsArray.map((navItem)=> <MyNavItem sx={{padding:'8px'}} text={navItem.text} icon={<Icon as={navItem.icon} boxSize={5}/>}/>)}
                </Stack>
            </DrawerBody>

            <DrawerFooter>
              
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}