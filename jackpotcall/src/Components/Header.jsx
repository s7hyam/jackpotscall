import React, { useRef } from 'react'
import {
    Drawer,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    useDisclosure,
    VStack,
    Box,
    HStack,
    Container,
    Text,
    List,
} from '@chakra-ui/react'
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../Styles/header.css'
import { HashLink } from 'react-router-hash-link'


export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()


    return (
        <Box bgColor={'purple.500'} pos={'fixed'} w={'100%'} zIndex={'10'} p={'4'} >
            <Container maxW={'container.xl'} >
                <HStack justifyContent={'space-between'} top={'0'} w={'100%'} >

                    <Box display={['block', 'block', 'block', 'none']} >
                        <Button variant={'unstayled'} fontWeight={'bold'} fontSize={'2xl'} color={'white'} >
                            <Link to="/">JACKPOTSCALL</Link>
                        </Button>
                    </Box>  


                    <Box className='navbar' bgColor={'purple.500'} display={['none', '', '', 'flex']} >
                        <Button variant={'unstayled'} fontWeight={'bold'} fontSize={'2xl'} color={'white'} >
                            <Link to="/">JACKPOTSCALL</Link>
                        </Button>


                        <List className='navbar-nav' >
                            <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.100' }} color={'white'} fontSize={'18'}>
                                <HashLink fontWeight={'semibold'} to={'/#hero'}>Home</HashLink>
                            </Button>
                            <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.100' }} color={'white'} fontSize={'18'} p='0'>
                                <HashLink id='showServicesBox' pos={'relative'} fontWeight={'semibold'} to={'/#services'}>
                                    Services

                                    <Box id='showServices' pos={'absolute'} top={'7'} left={'-10'} zIndex={'10'} borderBottomRadius={'lg'} borderTopRadius={'lg'} bg={'gray.200'} display={'none'} p={'6'} >
                                        <VStack alignItems={'start'} >
                                            <Link to='/equity-market'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Equity Market </Text></Link>
                                            <Link to='/stock-futures'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Stock Futures </Text></Link>
                                            <Link to='/stock-options'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Stock Options </Text></Link>
                                            <Link to='/nifty-futures'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Nifty Futures </Text></Link>
                                            <Link to='/nifty-options'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Nifty Options </Text></Link>
                                            <Link to='/banknifty-futures'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Banknifty Futures </Text></Link>
                                            <Link to='/banknifty-options'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Banknifty Options </Text></Link>
                                            <Link to='/comodity-market'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Comodity Market </Text></Link>
                                            <Link to='/hni-services'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > HNI Services </Text></Link>
                                        </VStack>
                                    </Box>

                                </HashLink>
                            </Button>
                            <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.100' }} color={'white'} fontSize={'18'}>
                                <Link fontWeight={'semibold'} to={'/about'}>About Us</Link>
                            </Button>
                            <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.100' }} color={'white'} fontSize={'18'}>
                                <HashLink fontWeight={'semibold'} to={'/#whyus'}>Why Us</HashLink>
                            </Button>
                            <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.100' }} color={'white'} fontSize={'18'}>
                                <Link fontWeight={'semibold'} to={'/contact'}>Contact Us</Link>
                            </Button>
                            <Button variant={'outline'} mx={'4'} _hover={{ color: 'whatsapp.400', background: 'white' }} color={'white'} fontSize={'18'} >
                                <a href='https://t.me/Jackpotipscalls' target={'_blank'} >Join Telegram</a> </Button>

                        </List>
                    </Box>

                    <Button ref={btnRef} onClick={onOpen} variant={'unstyled'} fontSize={'24'} color={'white'} display={['block', '', '', 'none']} >
                        <AiOutlineBars />
                    </Button>


                    <Drawer placement='left' isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
                        <DrawerOverlay />
                        <DrawerContent p={'4'} >
                            <DrawerHeader textAlign={'start'} pl={'0'}  >
                                <Button variant={'unstayled'} fontWeight={'bold'} fontSize={'24'} color={'purple.500'} onClick={onClose}>
                                    <Link to="/">JACKPOTSCALL</Link>
                                </Button>
                            </DrawerHeader>
                            <VStack alignItems={'flex-start'} >
                                <VStack color={'purple.400'} >
                                    <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.700' }} color={'purple.500'} fontSize={'18'} onClick={onClose}>
                                        <HashLink fontWeight={'semibold'} to={'/#hero'}>
                                            Home
                                        </HashLink>
                                    </Button>
                                    <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.700' }} color={'purple.500'} fontSize={'18'} p='0' onClick={onClose}>
                                        <HashLink id='showServicesBox' pos={'relative'} fontWeight={'semibold'} to={'/#services'}> Services

                                            <Box id='showServices' pos={'absolute'} zIndex={'10'} top={'7'} left={'-10'} borderBottomRadius={'lg'} borderTopRadius={'lg'} bg={'gray.200'} display={'none'} p={'6'} >
                                                <VStack alignItems={'start'}  >
                                                    <Link to='/equity-market'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Equity Market </Text></Link>
                                                    <Link to='/stock-futures'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Stock Futures </Text></Link>
                                                    <Link to='/stock-options'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Stock Options </Text></Link>
                                                    <Link to='/nifty-futures'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Nifty Futures </Text></Link>
                                                    <Link to='/nifty-options'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Nifty Options </Text></Link>
                                                    <Link to='/banknifty-futures'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Banknifty Futures </Text></Link>
                                                    <Link to='/banknifty-options'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Banknifty Options </Text></Link>
                                                    <Link to='/comodity-market'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > Comodity Market </Text></Link>
                                                    <Link to='/hni-services'> <Text _hover={{ 'color': 'purple.400' }} color={'gray.800'} > HNI Services </Text></Link>
                                                </VStack>
                                            </Box>

                                        </HashLink>
                                    </Button>
                                    <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.700' }} color={'purple.500'} fontSize={'18'} onClick={onClose}>
                                        <Link fontWeight={'semibold'} to={'/about'}>About Us</Link>
                                    </Button>
                                    <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.700' }} color={'purple.500'} fontSize={'18'} onClick={onClose}>
                                        <HashLink fontWeight={'semibold'} to='/#whyus'  >Why Us</HashLink>
                                    </Button>
                                    <Button variant={'unstyled'} mx={'4'} _hover={{ color: 'gray.700' }} color={'purple.500'} fontSize={'18'} onClick={onClose}>
                                        <Link fontWeight={'semibold'} to={'/contact'}>Contact Us</Link>
                                    </Button>
                                    <Button variant={'outline'} mx={'4'} _hover={{ color: 'whatsapp.400', background: 'white' }} color={'purple.500'} fontSize={'18'} >
                                        <a href='https://t.me/Jackpotipscalls' target={'_blank'} >Join Telegram</a>
                                    </Button>
                                </VStack>
                            </VStack>
                        </DrawerContent>
                    </Drawer>
                </HStack>
            </Container>
        </Box >

    )
}
