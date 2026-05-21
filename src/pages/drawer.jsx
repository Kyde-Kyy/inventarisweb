import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const MyDrawer = () => {
    const [open, setOpen] = useState();

    return (
        <Drawer.Root placement="start" open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Drawer.Trigger asChild>
                <Button variant="outline" size="sm">
                    <BiMenu />
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>
                                Drawer Title
                            </Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt facere error facilis. Doloremque enim saepe rem quae expedita dolore.</p>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

export default MyDrawer