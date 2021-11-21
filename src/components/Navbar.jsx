import React from "react";
import {Flex, Link} from '@chakra-ui/react'

export const Navbar = () => (
    <Flex bgColor="gray.700" width="100%" height="40px" alignItems="center" justifyContent="center">
        <nav>
            <Link href="#" ml={2}>Inicio</Link>
            <Link href="#" ml={2}>Favoritos</Link>
        </nav>
    </Flex>
);