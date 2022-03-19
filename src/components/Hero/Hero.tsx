import Head from 'next/head';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    VStack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

export default function Hero() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Container maxW={'full'} backgroundColor={"#4CAF50"}>
                <VStack
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={700}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        fontFamily={"Poppins"}
                        lineHeight={'110%'}>
                        <Text color={'white'}>
                            OAKLAND OPPORTUNITIES
                        </Text>
                    </Heading>
                    <Box maxW={"50%"}>
                        <Text fontWeight={"light"} fontFamily={"Poppins"} color={'white'}>
                            TEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTTEST TEXTAAAAAAAAAAAAAAA
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </>
    );
}
