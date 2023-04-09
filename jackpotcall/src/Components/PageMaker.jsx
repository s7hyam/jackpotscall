import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types';

export default function PageMaker(props) {
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
                        <Text my={'4'} key={index} color={'gray.600'} fontSize={'16px'} >{paragraph}</Text>
                    ))}

                </Box>

            </Container>
        </Box>
    )
}

PageMaker.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string),
};

PageMaker.defaultProps = {
}