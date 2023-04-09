import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Box, Container, Grid, GridItem, Link, List, ListItem, Text, VStack } from '@chakra-ui/react';
import { FaCalendarAlt } from "react-icons/fa";
const Page = (props) => {

    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])

    return (
        <Box>
            <Box pt={'72px'} >
                <Text textAlign={'center'} py={'36'} bg={'blackAlpha.900'} color={'white'} fontSize={['4xl', '5xl', '7xl']} fontWeight={'semibold'} >
                    {props.pageTitle}
                </Text>
            </Box>
            <Container maxW={'container.xl'} >
                <Box py={'14'} fontSize={'xl'} >

                    <Text fontSize={['3xl', '5xl']} fontWeight={'semibold'} > {props.heading} </Text>

                    {props.paragraphs.map((paragraph, index) => (
                        <Text my={'4'} key={index} >{paragraph}</Text>
                    ))}

                </Box>

            </Container>
            <Box bg={'gray.200'} >
                <Container maxW={'container.lg'} py='16' px={'6'} >
                    <Box textAlign={'center'} mb={'10'} >
                        <Text color={'purple.500'} >Key points before subscription</Text>
                        <Text fontWeight={'semibold'} fontSize={['3xl', '5xl']} color={'purple.500'} >We make it easy</Text>
                    </Box>

                    <Grid gap={'6'} >

                        <GridItem m={'0 auto'} >
                            <Text fontSize={'4xl'} color={'purple.600'} ml={'4'} mb={'6'} fontWeight={'semibold'} textAlign={'start'} >
                                {/* {props.listheading1}  */}
                                Features
                            </Text>

                            <List display={'grid'} gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']} gap={'4'} >
                                {/* {props.listitems.map((list, index) => (
                                    <ListItem ml={'4'} key={index} my={'3'} fontSize={'lg'} listStyleType={'disc'} >
                                        {list}
                                    </ListItem>
                                ))} */}



                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'} > All calls are with SL and target. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'} > We will send you 3-4 tips everyday. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'} > We send both Entry and Exit message. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'} > Calls are sent through SMS or Whats App. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'} > All calls are given during market hours only. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'} > Maximum of 2-3 open positions at any given time. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'} > We track all open positions and advise accordingly. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'} > Calls will reach you on time always. WhatsApp Msg may take 6 to 10 seconds </ListItem>
                            </List>
                        </GridItem>

                        <GridItem m={'0 auto'} >
                            <Text fontSize={'4xl'} ml={'4'} color={'purple.600'} mb={'6'} fontWeight={'semibold'} textAlign={'start'} >
                                {/* {props.listheading2} */}
                                Benifits
                            </Text>

                            <List display={'grid'} gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']} gap={'4'} >
                                {/* {props.listitems2.map((list, index) => (
                                    <ListItem ml={'4'} key={index} my={'3'} fontSize={'lg'} listStyleType={'disc'} >
                                        {list}
                                    </ListItem>
                                ))} */}


                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'}> Get trading plans especially designed for your needs. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'}> Get 24×7 dedicated customer support. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'}> Advice from experts only. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'}> Finally, huge profits and peace of mind. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'}> Client satisfaction is our main moto. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'}> Technically strong advise. </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'}> Tips Via Whatsapp </ListItem>
                                <ListItem m={'4'} my={'3'} fontSize={'lg'} listStyleType={'disc'}> Tips via Personally Call </ListItem>

                            </List>
                        </GridItem>
                    </Grid>

                </Container>
            </Box>
            <Box my={'10'} >
                <Container maxW={'container.lg'}>

                    <Text fontWeight={'semibold'} fontSize={'4xl'} mb={'6'} mt={'10'} textAlign={'center'} color={'purple.500'}  >
                        CALLS FORMAT
                    </Text>
                    <Grid gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']} textAlign={'justify'} gap={'6'} >
                        <GridItem bgColor={'white'} p={'4'} py={'6'} _hover={{ boxShadow: '1px 1px 1px 2px #805ad5' }} borderRadius={'md'} boxShadow={'md'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'} color={'purple.500'} >Buy Format!</Text>
                            <Text fontSize={'xl'} fontWeight={'semibold'} mb={'2'} >{props.pageTitle} {' '} Services Update :  </Text>
                            <Box color={'gray.600'} textAlign={'justify'} >
                                <Text mb={'2'} >Buy XXXXXX @ xxxxx, 200 qty for intraday, with stop loss of xxxx and with 1st target of xxxx and 2nd target of xxxx.</Text>
                                <Text mb={'2'} >Time HH:HH AM</Text>
                                <Link color={'purple.500'} href="https://jackpotscall.com">www.jackpotscall.com</Link>
                            </Box>
                        </GridItem>
                        <GridItem bgColor={'white'} p={'4'} py={'6'} _hover={{ boxShadow: '1px 1px 1px 2px #805ad5' }} borderRadius={'md'} boxShadow={'md'} >
                            <Text fontSize={'xl'} fontWeight={'semibold'} color={'purple.500'}>Sell Format!</Text>
                            <Text fontSize={'xl'} fontWeight={'semibold'} mb={'2'} >{props.pageTitle} {' '} Services Update :  </Text>
                            <Box color={'gray.600'} textAlign={'justify'} >
                                <Text mb={'2'} >Sell XXXXXX @ xxxxx, 200 qty for intraday, with stop loss of xxxx and with 1st target of xxxx and 2nd target of xxxx.</Text>
                                <Text mb={'2'} >Time HH:HH AM</Text>
                                <Link color={'purple.500'} href="https://jackpotscall.com">www.jackpotscall.com</Link>
                            </Box>
                        </GridItem>
                        <GridItem bgColor={'white'} p={'4'} py={'6'} _hover={{ boxShadow: '1px 1px 1px 2px #805ad5' }} borderRadius={'md'} boxShadow={'md'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'} color={'purple.500'}>1st Target Booking Format!</Text>
                            <Text fontSize={'xl'} fontWeight={'semibold'} mb={'2'} >{props.pageTitle} {' '} Services Update :  </Text>
                            <Box color={'gray.600'} textAlign={'justify'} >
                                <Text mb={'2'} >1st Target Traders can Book Profit in xxxxx @ xxxxx, we will update you soon for 2nd target.</Text>
                                <Text mb={'2'} >Time HH:HH AM</Text>
                                <Link color={'purple.500'} href="https://jackpotscall.com">www.jackpotscall.com</Link>
                            </Box>
                        </GridItem>
                        <GridItem bgColor={'white'} p={'4'} py={'6'} _hover={{ boxShadow: '1px 1px 1px 2px #805ad5' }} borderRadius={'md'} boxShadow={'md'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'} color={'purple.500'} >2nd Target Booking Format!</Text>
                            <Text fontSize={'xl'} fontWeight={'semibold'} mb={'2'} >{props.pageTitle} {' '} Services Update :  </Text>
                            <Box color={'gray.600'} textAlign={'justify'} >
                                <Text mb={'2'} >Final or 2nd Target traders can book complete profit in xxxxx @ xxxx.</Text>
                                <Text mb={'2'} >Time HH:HH AM</Text>
                                <Link color={'purple.500'} href="https://jackpotscall.com">www.jackpotscall.com</Link>
                            </Box>
                        </GridItem>
                        <GridItem bgColor={'white'} p={'4'} py={'6'} _hover={{ boxShadow: '1px 1px 1px 2px #805ad5' }} borderRadius={'md'} boxShadow={'md'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'} color={'purple.500'} >Exit Position Format!</Text>
                            <Text fontSize={'xl'} fontWeight={'semibold'} mb={'2'} >{props.pageTitle} {' '} Services Update :  </Text>
                            <Box color={'gray.600'} textAlign={'justify'} >
                                <Text mb={'2'} >All Traders need to exit your position at in xxxxx @ xxxx in Loss or Cost Level.</Text>
                                <Text mb={'2'} >Time HH:HH AM</Text>
                                <Link color={'purple.500'} href="https://jackpotscall.com">www.jackpotscall.com</Link>
                            </Box>
                        </GridItem>
                    </Grid>
                </Container>

            </Box>

            <Box py={'16'} bgColor={'gray.100'} >
                <Container maxW={'container.lg'} >
                    <Box textAlign={'center'} mb={'10'} >
                        <Text color={'purple.500'} >PRICING</Text>
                        <Text fontWeight={'semibold'} fontSize={['3xl', '5xl']} color={'purple.500'} >Pick a plan that fits your needs</Text>
                    </Box>

                    <Grid gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(4,1fr)']} gap={'5'} >
                        <VStack textAlign={'center'} bg={'white'} py={'6'} px={'4'} borderRadius={'lg'} shadow={'lgF'} _hover={{ shadow: 'xl', cursor: 'pointer' }}  >
                            <Text fontSize={'4xl'} color={'purple.500'} >
                                <FaCalendarAlt />
                            </Text>
                            <Text fontSize={'3xl'} fontWeight={'semibold'} color={'gray.400'} >Monthly</Text>
                            <Text fontSize={'3xl'} fontWeight={'semibold'} color={'whatsapp.500'} >INR {' '} {props.monthylyPrice} </Text>
                            <Text color={'gray.500'} >Per Month</Text>
                        </VStack>
                        <VStack _hover={{ shadow: 'xl', cursor: 'pointer' }} textAlign={'center'} bg={'white'} py={'6'} px={'4'} borderRadius={'lg'} shadow={'lgF'} >
                            <Text fontSize={'4xl'} color={'purple.500'} >
                                <FaCalendarAlt />
                            </Text>

                            <Text fontSize={'3xl'} fontWeight={'semibold'} color={'gray.400'} >Quarterly</Text>
                            <Text fontSize={'3xl'} fontWeight={'semibold'} color={'whatsapp.500'} >INR {' '} {props.quarterlyPrice} </Text>
                            <Text color={'gray.500'} >Quarterly</Text>
                        </VStack>
                        <VStack _hover={{ shadow: 'xl', cursor: 'pointer' }} textAlign={'center'} bg={'white'} py={'6'} px={'4'} borderRadius={'lg'} shadow={'lgF'} >
                            <Text fontSize={'4xl'} color={'purple.500'} >
                                <FaCalendarAlt />
                            </Text>
                            <Text fontSize={'3xl'} fontWeight={'semibold'} color={'gray.400'} >Half Yearly</Text>
                            <Text fontSize={'3xl'} fontWeight={'semibold'} color={'whatsapp.500'} >INR {' '} {props.halfYearlyPrice} </Text>
                            <Text color={'gray.500'} >Half Yearly</Text>
                        </VStack>
                        <VStack _hover={{ shadow: 'xl', cursor: 'pointer' }} textAlign={'center'} bg={'white'} py={'6'} px={'4'} borderRadius={'lg'} shadow={'lgF'} >
                            <Text fontSize={'4xl'} color={'purple.500'} >
                                <FaCalendarAlt />
                            </Text>
                            <Text fontSize={'3xl'} fontWeight={'semibold'} color={'gray.400'} >Yearly</Text>
                            <Text fontSize={'3xl'} fontWeight={'semibold'} color={'whatsapp.500'} >INR {' '} {props.yearlyPrice} </Text>
                            <Text color={'gray.500'} >Yearly</Text>
                        </VStack>

                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

Page.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string),
    listitems: PropTypes.arrayOf(PropTypes.string),
    listitems2: PropTypes.arrayOf(PropTypes.string),
};

Page.defaultProps = {
    listitems: [''],
    listitems2: [''],
    yearlyPrice: '75,000',
    halfYearlyPrice: '50,000',
    quarterlyPrice: '30,000',
    monthylyPrice: '12,000'
}
export default Page;

