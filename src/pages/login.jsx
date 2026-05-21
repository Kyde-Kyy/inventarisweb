import {
    Box, Button, Card, CardBody, CardHeader, CardRoot, CardTitle, Center, Image, Input, Text
} from "@chakra-ui/react";
import '../css/login.css'
import Logo from "../assets/icons/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "../components/ui/toaster";
import { TampilPesan } from "../components/ui/services";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const username = localStorage.getItem("usernameLS");
        if (username) {
            navigate("/dashboard");
        }
    }, []);
    const handleLogin = async () => {
        const url = "http://localhost/inventarisweb/proseslogin.php";
        const body = {username: username, password:password};
        try {
            const response = await axios.post(url, body);
            if (response.data.STATUS === "BERHASIL") {
                localStorage.setItem("usernameLS", response.data.DATA[0]["username"]);
                localStorage.setItem("namaLS", response.data.DATA[0]["nama"]);
                TampilPesan("Info", "Selamat Datang");
                setTimeout(() => {

                    navigate("/dashboard");
                }, 2000);
            } else {
                navigate("/");
                TampilPesan("Info", "Username atau Password Salah");
            }
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <>
            <Box className="LoginBody">
                <Toaster />
                <CardRoot className="LoginCardRoot">
                    <CardHeader>
                        <CardTitle>
                            <Center>
                                <Image src={Logo} width="100px" />
                            </Center>
                            <Text>My Inventory</Text>
                        </CardTitle>
                    </CardHeader>
                    <CardBody className="LoginBodyCard">
                        <Input placeholder="Username" type="text" onChange={(e) => {setUsername(e.target.value)}}/>
                        <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Button className="ButtonLogin" onClick={() => {handleLogin()}}>
                            <Text>LOGIN</Text>
                        </Button>
                    </CardBody>
                </CardRoot>
            </Box>
        </>
    )
}

export default Login;