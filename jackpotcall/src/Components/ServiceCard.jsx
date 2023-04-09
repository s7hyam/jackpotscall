import { Image, Text, VStack } from '@chakra-ui/react';
import { AiOutlineRightCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import '../Styles/ServiceCard.css'

const ServiceCard = (props) => {
    return (
        <VStack alignItems={'center'} justifyContent={'center'} bg={props.bgc} p={'4'} pt={'8'} borderRadius={'md'} border={'1px solid gray'} boxShadow={'2px 2px purple'} >
            <Image src={props.src} maxHeight={'28'} mb={'4'} />
            <Text fontSize={'3xl'} fontWeight={'semibold'} pb={'8'} textAlign={'center'} >{props.title}</Text>
            <Link to={props.to}  > <span className='learn-more-btn' >
                READ MORE
                <span>
                    <AiOutlineRightCircle />
                </span>
            </span>
            </Link>
        </VStack >
    );
}

export default ServiceCard;
