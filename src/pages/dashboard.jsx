import {
  Box, Button, Card, CardBody, CardHeader, CardRoot, CardTitle, Center, Flex, Image, Input, Text
} from "@chakra-ui/react";
import MyDrawer from "./drawer";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useColorMode } from "../components/ui/color-mode";

const Dashboard = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState();
  const { toggleColorMode } = useColorMode();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    const usernameLS = localStorage.getItem("usernameLS");

    if (usernameLS == null) {
      navigate("/");
    } else {
      setNama(localStorage.getItem("namaLS"));
    }
  })

  return (
    <>
      <Box width="100dvw" height="100dvh" display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" justifyContent="space-between" padding="10px">
          <MyDrawer />
          <Box display="flex" flexDirection="row" alignItems="center" gapX="10px">
            <Text fontWeight="bold">My Inventory</Text>
            <Button variant="outline" onClick={toggleColorMode}>
              <CiSun/>
            </Button>
          </Box>
          <Button variant="outline" onClick={() => { handleLogOut(); }}>
            <BiLogOut />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;