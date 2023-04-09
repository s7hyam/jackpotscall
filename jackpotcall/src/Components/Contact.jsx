import React, { useEffect } from 'react'
import { Box, Button, Container, FormControl, Grid, GridItem, HStack, Input, Link, Text, Textarea, VStack } from '@chakra-ui/react'
import { FaTelegram } from 'react-icons/fa'

export default function Contact() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Box pt={'72px'}  >

            <Box bgColor={'blackAlpha.900'} py={'36'} >
                <Text color={'white'} textAlign={'center'} fontSize={['3xl', '5xl']} fontWeight={'semibold'} >CONTACT </Text>
            </Box>
            <Container maxW={'container.xl'} py={'16'}>

                <Grid gridTemplateColumns={['1fr', '', 'repeat(2,1fr)']} >
                    <GridItem p={'4'}>
                        <Text color={'purple.500'} mb={'4'} >CONTACT</Text>
                        <Text fontSize={['3xl', '5xl']} fontWeight={'semibold'} >
                            How can we help your Trading to grow ?
                        </Text>
                        <Text fontSize={'xl'} >
                            We gives best and most accurate tips to trade.
                        </Text>
                    </GridItem>
                    <GridItem p={'4'}>
                        <form action="https://formsubmit.co/support@jackpotscall.com" method="POST">

                            <FormControl >
                                <HStack flexDirection={['column', 'row']} gap={'3'} my={'4'} >
                                    <Input name='Name' color={'gray.600'} bgColor={'gray.200'} borderRadius={'0'} type={'text'} placeholder={'Name'} required />
                                    <Input ml={'0px !important'} name='Number' color={'gray.600'} bgColor={'gray.200'} borderRadius={'0'} type={'tel'} placeholder={'Number'} required />
                                </HStack>
                                <HStack my={'4'} >
                                    <Input name='Email' color={'gray.600'} bgColor={'gray.200'} borderRadius={'0'} type={'email'} placeholder={'E-mail'} required />
                                </HStack>
                                <HStack my={'4'} >
                                    <Textarea name='Message' color={'gray.600'} bgColor={'gray.200'} borderRadius={'0'} width={'full'} rows={'5'} placeholder={'Your message'} required />
                                </HStack>
                                <Button type='submit' width={'full'} bgColor={'purple.500'} color={'white'} _hover={{ color: 'white', background: 'purple.500' }} > <button type='submit'> SEND A MESSAGE </button></Button>
                            </FormControl>
                        </form>
                    </GridItem>
                </Grid>

                <Grid gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']} my={'16'} px={'4'} >
                    <GridItem textAlign={'center'} my={'6'}>
                        <Text fontSize={'xl'} fontWeight={'semibold'} mb={'4'} >
                            Call Us
                        </Text>
                        <Text fontWeight={'bold'} fontSize={['3xl', '4xl']} color={'purple.500'}>
                            +91 87440-55072
                        </Text>
                    </GridItem>

                    <GridItem textAlign={'center'} my={'6'} >
                        <Text fontSize={'xl'} fontWeight={'semibold'} mb={'4'} >
                            Mail Us
                        </Text>
                        <Text fontWeight={'semibold'} fontSize={'xl'} >
                            support@jackpotscall.com
                        </Text>
                        <Text>Monday - Friday </Text>
                        <Text>
                            9 AM - 5 PM
                        </Text>
                    </GridItem>
                    <VStack textAlign={'center'} my={'6'}>
                        <Text fontWeight={'semibold'} fontSize={'xl'} mb={'4'} >Join Us on Telegram</Text>
                        <Link target={'_blank'} href='https://t.me/Jackpotipscalls' _hover={{ color: 'twitter.500' }} fontSize={'4xl'} ><FaTelegram /></Link>
                    </VStack>
                </Grid>
            </Container>
        </Box>
    )
}
