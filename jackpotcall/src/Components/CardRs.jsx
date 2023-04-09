import { Image, Text, VStack } from '@chakra-ui/react';

const CardRs = (props) => {
    return (
        <VStack alignItems={'center'} justifyContent={'center'} bg={props.bgc} p={'4'} pt={'8'} borderRadius={'md'} >
            <Image src={props.src} maxHeight={'84px'} mb={'4'} />
            <Text fontSize={'2xl'} fontWeight={'semibold'} pb={'2'} >{props.title}</Text>
            <Text textAlign={'center'} pb={'4'} >{props.para}</Text>

        </VStack >
    );
}

export default CardRs;
