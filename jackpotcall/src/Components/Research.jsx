import { Box, Container, Grid, GridItem, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import CardRs from './CardRs';

import { AiFillAlipayCircle, AiFillDashboard, AiFillHdd, AiOutlineSlack } from 'react-icons/ai'

import Crypto from '../assets/crypto.svg'
import HniServices from '../assets/hni-services.svg'
import NiftyFuture from '../assets/nifty-future.svg'
import NiftyOption from '../assets/nifty-option.svg'


const Research = () => {
    return (
        <Box>

            <Container maxW={'container.lg'} p={'10'} >
                <div id='whyus' ></div>
                <Box textAlign={'center'} >
                    <Text color={'purple.500'} mb={'6'} fontSize={['lg', '', 'xl']} >WHY JACKPOTSCALL?</Text>
                    <Text color={'purple.500'} fontSize={['3xl', '', '6xl']} >
                        We make it easy
                    </Text>
                </Box>


                <Grid gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(4,1fr)']} gap={'5'} >
                    <GridItem>
                        <CardRs src={Crypto} title={'24X7 Support'} para={'We are working round the clock, any of our client can reach us anytime 24x7.'} />
                    </GridItem>
                    <GridItem>
                        <CardRs src={HniServices} title={'1 Week Demo'} para={'We give 1 week demo to judge our accuracy , then only you can proceed for the services.'} />
                    </GridItem>
                    <GridItem>
                        <CardRs src={NiftyOption} title={'Payment Options'} para={'We have all payments option i;e CARDS, UPI, NETBANKING'} />
                    </GridItem>
                    <GridItem>
                        <CardRs src={NiftyFuture} title={'Track Records'} para={'We give 1 week demo to judge our accuracy , then only you can proceed for the services.'} />
                    </GridItem>
                </Grid>
            </Container>

            <Box px={'6'} py={'16'} bgColor={'gray.200'}  >
                <Container maxW={'container.lg'} >

                    <Text fontSize={['3xl', '', '5xl']} textAlign={'center'} mb={'10'} >How We Works?</Text>

                    <Grid gap={'5'} gridTemplateColumns={['1fr', 'repeat(3,1fr)']} textAlign={'center'} >
                        <GridItem >
                            <Tag fontSize={'7xl'} bg={'none'}  >
                                <AiFillAlipayCircle />
                            </Tag>
                            <Text fontSize={'2xl'} mt={'2'} >Get Demo</Text>
                        </GridItem>
                        <GridItem>
                            <Tag fontSize={'7xl'} bg={'none'}  >
                                <AiFillAlipayCircle />
                            </Tag>

                            <Text fontSize={'2xl'} mt={'2'} >Observe Yourself</Text>
                        </GridItem>
                        <GridItem>
                            <Tag fontSize={'7xl'} bg={'none'}  >
                                <AiFillAlipayCircle />
                            </Tag>

                            <Text fontSize={'2xl'} mt={'2'} >Be Paid Member</Text>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
        </Box>

    );
}

export default Research;
