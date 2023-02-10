import Head from 'next/head'
import { MyButton } from '@/components/MyButton'
import {BsPersonFill, BsFillLockFill} from 'react-icons/bs'
import { Button, useColorModeValue, useColorMode, Icon, useDisclosure } from '@chakra-ui/react'
import MyNav from '@/components/MyNav'
import MyInput from '@/components/MyInput'

function HomePage() {
    const value = useColorModeValue('light', 'dark')
    const {colorMode, toggleColorMode} = useColorMode()

    return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <div>Welcome to Next.js!</div>
      <Button>{value}</Button>
      <Button variant='solid'>sign up</Button>
      <MyInput placeholder='Username' leftaddon={BsPersonFill} />
      <MyInput placeholder='Password' leftaddon={BsFillLockFill} type='password'/>

      <MyNav />
    </>
    )

  }
  
  export default HomePage