import React from 'react';
import { Button, Container, Grid, GridItem, Image, List, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Recmnd from '../assets/recmnd.png'

const Recommandation = () => {
    return (
        <Container maxW={'container.xl'} >
            <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2,1fr)']} alignItems={'center'} >
                <GridItem p={'6'} >
                    <Image src={Recmnd} maxH={'96'} maxW={'full'} />
                </GridItem>
                <GridItem color={'gray.100'} >
                    <Text fontSize={['3xl', '', '5xl']} lineHeight={'44px'} >
                        We gives recommendations for your intraday trading
                    </Text>
                    <Text my={'6'} fontSize={'xl'} >
                        We work to generate maximum profitable recommendations and give all types of services like Intraday or Positional.
                    </Text>

                    <List>
                        <ListItem ml={'4'} my={'3'} >With Proper Stop Loss & Targets</ListItem>
                        <ListItem ml={'4'} my={'3'} >with 80% Accuracy</ListItem>
                        <ListItem ml={'4'} my={'3'} >Daily 1 Recommendation in each segment</ListItem>
                        <ListItem ml={'4'} my={'3'} >Daily update our performance on the website.</ListItem>
                    </List>

                    <Button variant={'outline'} color={'whiie'} mt={'4'} _hover={{ color: 'purple.500', backgroundColor: 'white' }} >
                        <Link to={'/equity-market'} >   Our Services</Link>
                    </Button>
                </GridItem>
            </Grid>
        </Container>
    );
}

export default Recommandation;
