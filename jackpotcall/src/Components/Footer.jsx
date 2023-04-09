import React from 'react';
import { border, Box, Button, color, Container, FormControl, Grid, GridItem, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillPhone, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'
import { FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Box backgroundColor={'blackAlpha.900'} color={'white'} pt={'16'} px={'6'} >
                <Container maxW={'container.lg'} >
                    <Grid gridTemplateColumns={'repeat(2,1fr)'} display={['none', '', 'grid']} py={'8'} >
                        <Text fontSize={'4xl'} >Subscribe to our Newsletter</Text>
                        <form action="https://formsubmit.co/support@jackpotscall.com" method="POST">

                            <FormControl bg={'white'} display={'flex'} borderRadius={'3'} color={'gray.500'} boxSizing={'border-box'} >
                                <Input
                                    h={'full'}
                                    type={'email'}
                                    placeholder={'Your email'}
                                    outline={'0'}
                                    border={'0'}
                                    _focus={{ border: '0', outline: '0' }}
                                    focusBorderColor={'transparent'}
                                    py={'3'}
                                    name={'NewsletterEmail'}
                                />
                                <Button bgColor={'white'} h={'full'} py={'3'} color={'purple.400'} type={'submit'} _hover={{ bgColor: 'purple.400', color: 'white' }} borderRadius={'0'} ><button type='submit'> Subscribe</button></Button>
                            </FormControl>
                        </form>
                    </Grid>

                    <Grid gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(4,1fr)']} gap={'6'} py={'10'}  >
                        <GridItem pr={['0', '', '10']}>
                            <Text fontSize={['2xl', '4xl']} fontWeight={'bold'} >
                                JACKPOTSCALL
                            </Text>
                            <HStack my={'3'} _hover={{ 'color': 'purple.400' }}>
                                <AiFillPhone /> <Text>8744055072</Text>
                            </HStack>
                            <HStack my={'3'} _hover={{ 'color': 'purple.400' }} >
                                <AiFillMail /> <Text>support@jackpotscall.com</Text>
                            </HStack>
                            <HStack my={'3'} _hover={{ 'color': 'purple.400' }} >
                                <IoLocationSharp /> <Text>Huda Colony Sector 46 Gurugram 122018
                                </Text>
                            </HStack>
                        </GridItem>


                        <GridItem maxW={'full'}>
                            <Text fontSize={'xl'} mb={'8'} fontWeight={'semibold'}  >
                                Services
                            </Text>
                            <VStack alignItems={'start'} maxW={'full'} >
                                <Link to='/equity-market'> <Text _hover={{ 'color': 'purple.400' }}  > Equity Market </Text></Link>
                                <Link to='/stock-futures'> <Text _hover={{ 'color': 'purple.400' }}  > Stock Futures </Text></Link>
                                <Link to='/stock-options'> <Text _hover={{ 'color': 'purple.400' }}  > Stock Options </Text></Link>
                                <Link to='/nifty-futures'> <Text _hover={{ 'color': 'purple.400' }}  > Nifty Futures </Text></Link>
                                <Link to='/nifty-options'> <Text _hover={{ 'color': 'purple.400' }}  > Nifty Options </Text></Link>
                                <Link to='/banknifty-futures'> <Text _hover={{ 'color': 'purple.400' }}  > Banknifty Futures </Text></Link>
                                <Link to='/banknifty-options'> <Text _hover={{ 'color': 'purple.400' }}  > Banknifty Options </Text></Link>
                                <Link to='/comodity-market'> <Text _hover={{ 'color': 'purple.400' }}  > Comodity Market </Text></Link>
                                <Link to='/hni-services'> <Text _hover={{ 'color': 'purple.400' }}  > HNI Services </Text></Link>
                            </VStack>
                        </GridItem>
                        <GridItem maxW={'full'}>
                            <Text fontSize={'xl'} mb={'8'} fontWeight={'semibold'} >
                                Imp Links
                            </Text>
                            <VStack alignItems={'start'} maxW={'full'} >
                                <Link to='/about' > <Text _hover={{ 'color': 'purple.400' }} > About Us </Text> </Link>
                                <Link to='/contact' > <Text _hover={{ 'color': 'purple.400' }} > Contact US </Text> </Link>
                                <a href='https://www.nseindia.com/' > <Text _hover={{ 'color': 'purple.400' }} > NSE India </Text> </a>
                                <a href='https://www.bseindia.com/' > <Text _hover={{ 'color': 'purple.400' }} > BSE India </Text> </a>
                                <Link to='/tos' > <Text _hover={{ 'color': 'purple.400' }} > Terms and Condition </Text> </Link>
                                <Link to='/disclaimer' > <Text _hover={{ 'color': 'purple.400' }} > Disclaimer </Text> </Link>
                                <Link to='/privacy-policy' > <Text _hover={{ 'color': 'purple.400' }} > Privacy Policy </Text> </Link>
                                <Link to='/cancellation-refund' > <Text _hover={{ 'color': 'purple.400' }} > Cancellation & Refund </Text> </Link>
                                <Link to='/shipping' > <Text _hover={{ 'color': 'purple.400' }} > Shipping & Delivery </Text> </Link>
                            </VStack>
                        </GridItem>
                        <GridItem maxW={'full'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'} mb={'8'} >
                                Follow US
                            </Text>

                            <HStack maxW={'full'} >
                                <Text fontSize={'24'} _hover={{ color: 'red.500' }} ><a target={'_blank'} href="https://www.youtube.com/@jackpotcall8812">  <AiFillYoutube /></a> </Text>
                                <Text fontSize={'24'} _hover={{ color: 'facebook.500' }} ><a target={'_blank'} href="https://www.facebook.com/people/Jackpot-Calls/100083100054145/">  <AiFillFacebook /> </a> </Text>
                                <Text fontSize={'24'} _hover={{ color: 'pink.400' }} ><a target={'_blank'} href="https://www.instagram.com/jackpot.calls/?igshid=YmMyMTA2M2Y%3D"> <AiFillInstagram />  </a></Text>
                                <Text fontSize={'24'} _hover={{ color: 'linkedin.500' }} ><a target={'_blank'} href="https://facebook.com/s7hyam">  <FaTelegram /> </a></Text>
                            </HStack>
                        </GridItem>
                    </Grid>

                    <Box py={'4'} >
                        <Text>©2023 JACKPOTSCALL. All rights reserved</Text>
                    </Box>
                </Container>
            </Box>
        </footer >
    );
}

export default Footer;
