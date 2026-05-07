import {
    Box, Button, Card, CardBody, CardHeader, CardRoot, CardTitle, Center, Image, Input, Text
} from "@chakra-ui/react";
import '../css/login.css'

// import Logo from "../assets/icons/logo.png";

const Login = () => {
    return (
        <>
            <Box class="Body">
                <CardRoot>
                    <CardHeader>
                        <CardTitle>
                            <Center>
                                <Image/>
                            </Center>
                            <Text>My Inventory</Text>
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Input/>
                        <Input/>
                        <Button>
                            <Text></Text>
                        </Button>
                    </CardBody>
                </CardRoot>
            </Box>
        </>
    )
}

export default Login;