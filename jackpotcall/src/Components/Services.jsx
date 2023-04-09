import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import ServiceCard from './ServiceCard';

import EQMarket from '../assets/eqtmarkt.svg'
import StockFuture from '../assets/stock-futures.svg'
import BankniftyFuture from '../assets/banknifty-future.svg'
import BankniftyOption from '../assets/banknifty-option.svg'
import BankoptionTgt from '../assets/bankoption-tgt.svg'
import ComodityMarket from '../assets/comodity-market.svg'
import Crypto from '../assets/crypto.svg'
import HniServices from '../assets/hni-services.svg'
import NiftyFuture from '../assets/nifty-future.svg'
import NiftyOption from '../assets/nifty-option.svg'
import NiftyTgt from '../assets/nifty-tgt.svg'
import StockOptions from '../assets/stock-options.svg'

const Services = () => {
    return (
        <Container id='services' maxW={'container.xl'} p={['6', '', '14']} >

            <Box textAlign={'center'} >
                <Text color={'purple.500'} fontSize={'6xl'} mb={'8'} fontWeight={'semibold'} >Services</Text>
                <Text fontSize={['2xl', '5xl']} my={'8'} maxW={'container.md'} fontWeight={'semibold'} margin={'0 auto'} lineHeight={['34px', '', '44px']} >
                    Maximizing profits in the real trading account-through our expert advise
                </Text>
                <Text fontSize={['xl', '3xl']} my={'10'} >
                    The best Stock Advisory Firm You Can Count On!
                </Text>
            </Box>

            <Grid gridTemplateColumns={['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']} gap={'6'} >
                <GridItem>
                    <ServiceCard src={EQMarket} bgc={'white'} title={'Equity Market'} to={'/equity-market'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={StockFuture} bgc={'white'} title={'Stock Futures'} to={'/stock-futures'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={StockOptions} bgc={'white'} title={'Stock Options'} to={'/stock-options'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={NiftyFuture} bgc={'white'} title={'Nifty Futures'} to={'/nifty-futures'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={NiftyOption} bgc={'white'} title={'Nifty Options'} to={'/nifty-options'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={HniServices} bgc={'white'} title={'HNI Services'} to={'hni-services'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={BankniftyFuture} bgc={'white'} title={'Banknifty Futures'} to={'/banknifty-futures'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={BankniftyOption} bgc={'white'} title={'Banknifty Options'} to={'/banknifty-options'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={ComodityMarket} bgc={'white'} title={'Comodity Market'} to={'/comodity-market'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={BankoptionTgt} bgc={'white'} title={'Bank Option Single TGT'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={NiftyTgt} bgc={'white'} title={'Nifty Option Single TGT'} />
                </GridItem>
                <GridItem>
                    <ServiceCard src={Crypto} bgc={'white'} title={'Crypto-Currency'} />
                </GridItem>
            </Grid>

        </Container>
    );
}

export default Services;
