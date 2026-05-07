import {
    Box, Button, Card, CardBody, CardHeader, CardRoot, CardTitle, Center, Image, Input, Text
} from "@chakra-ui/react";
import '../css/login.css'

import Logo from "../assets/icons/logo.png";

const Login = () => {
    return (
        <>
            <Box className="LoginBody">
                <CardRoot className="LoginCardRoot">
                    <CardHeader>
                        <CardTitle>
                            <Center>
                                <Image src={Logo} width="100px"/>
                            </Center>
                            <Text>My Inventory</Text>
                        </CardTitle>
                    </CardHeader>
                    <CardBody className="LoginBodyCard">
                        <Input placeholder="Username" type="text" />
                        <Input placeholder="Password" type="password"/>
                        <Button className="ButtonLogin">
                            <Text>LOGIN</Text>
                        </Button>
                    </CardBody>
                </CardRoot>
            </Box>
        </>
    )
}

export default Login;