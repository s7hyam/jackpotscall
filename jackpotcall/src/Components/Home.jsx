import React, { useEffect } from 'react'
import { Box, Button, Container, Grid, GridItem, HStack, Image, Text, } from '@chakra-ui/react'
import Services from './Services'

import Recommandation from './Recommandation'
import Research from './Research'
import hero from '../assets/hero.svg'


function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='home'  >
            <div id='hero' ></div>
            <Container maxW={'container.xl'} p={'4'}  >
                <Grid templateColumns={['repeat(1fr)', '', 'repeat(2, 1fr)']} py={'24'}
                    alignItems={'center'} minH={'100vh'} px={'6'}>
                    <GridItem>
                        <Text >Stock Advisory</Text>
                        <HStack fontSize={['3xl', '6xl', '6xl']}  >
                            <Text>Technical  </Text>
                            <Text color={'purple.500'} diFsplay={'inline'} fontSize={['3xl', '6xl']} >Advise</Text>
                        </HStack>
                        <Text fontSize={['3xl', '6xl', '6xl']}>for Intraday Traders</Text>
                        <Button p={'6'} bg={'purple.500'} _hover={{ color: 'gray.200', backgroundColor: 'purple.600' }} color={'white'} variant={'solid'} mt={'6'} >
                            <a target={'_blank'} href="https://t.me/Jackpotipscalls"> Join Our Telegram</a>
                        </Button>
                    </GridItem>

                    <GridItem mt={['10', '10', '0']} >
                        <Image src={hero} maxH={'96'} margin={'0 auto'} />
                    </GridItem>
                </Grid>
            </Container>

            <Box bg={'gray.100'} >
                <Services />
            </Box>
            <Box bg={'purple.500'} p={'6'} >
                <Recommandation />
            </Box>
            <Box>
                <Research />
            </Box>


        </div>
    )
}

export default Home     