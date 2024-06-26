import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Box,
  Button
} from '@chakra-ui/react';
import { FiMessageSquare, FiUsers, FiMail, FiSmile, FiBriefcase } from 'react-icons/fi';
import { useState, useRef } from "react";

export default function NavItem({ icon, title, active, navSize, mr, onClick }) { // Ensure onClick is listed here
  const features = [
    { title: 'Message Privately', description: 'End-to-end encryption and privacy controls.', icon: FiMessageSquare },
    { title: 'Stay Connected', description: 'Message and call for free* around the world.', icon: FiMail },
    { title: 'Build Community', description: 'Group conversations made simple.', icon: FiUsers },
    { title: 'Express Yourself', description: 'Say it with stickers, voice, GIFs and more.', icon: FiSmile },
    { title: 'WhatsApp Business', description: 'Reach your customers from anywhere.', icon: FiBriefcase }
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Flex
      mt={30}
      flexDir="row"
      w="100%"
      alignItems="flex-start"
      mr={mr}
    >
      <Menu placement="bottom-end" isLazy isOpen={menuOpen} onOpen={handleMenuToggle} onClose={() => setMenuOpen(false)}>
        <Link
          backgroundColor={active ? "#AEC8CA" : "transparent"}
          p={3}
          borderRadius={15}
          _hover={{ textDecor: 'none', backgroundColor: "#D1B3FF" }}
          w={navSize === "large" && "100%"}
        >
          <MenuButton
            w="100%"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _hover={{ outline: 'none' }}
            onClick={onClick} // Attach onClick to MenuButton
            
            
          >
            <Flex
              _hover={{ outline: 'none', boxShadow: 'none' }}
              _focus={{ outline: 'none', boxShadow: 'none' }}
            >
              <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
              <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList
          py={0}
          border="none"
          boxShadow="xl"
          minW="100%"
          maxW="100vw"
        >
          <SimpleGrid columns={5} spacing={3}>
            {features.map((feature, index) => (
              <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2">
                <Icon as={feature.icon} w={10} h={10} p={2} color="green.500" />
                <Text fontWeight="bold" p={2}>{feature.title}</Text>
                <Text fontSize="sm" px={2} pb={2}>{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </MenuList>
      </Menu>

      
    </Flex>
  );
}
