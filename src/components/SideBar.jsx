import { Flex} from "@chakra-ui/react";
import { useState, useRef} from "react";
import {FiHome, FiCalendar, FiSettings } from "react-icons/fi"
import NavItem from "./NavItem";
import { useOutsideClick } from "@chakra-ui/react";


const SideBar=({className})=>{
    const sidebarRef = useRef(null);
    const [navSize, changeNavSize]= useState("large");
    const [dropSize, changedropSize]= useState("100px");
    const [isAnimating, setIsAnimating] = useState(false);

    const [currentDropdown, setCurrentDropdown] = useState(null);

    const changeDrop = (targetDropdown) => {
        setIsAnimating(true);
        if (currentDropdown === targetDropdown) {
            // If the same button is pressed again, toggle the dropdown
            changedropSize("100px");
            setCurrentDropdown(null); // Resetting the current dropdown state
        } else if (currentDropdown && currentDropdown !== targetDropdown) {
            // If a different dropdown button is pressed
            changedropSize("100px"); // First, close the current dropdown
            setTimeout(() => {
                // Immediately open the new dropdown
                changedropSize("230px");
                setCurrentDropdown(targetDropdown);
            }, 10); // Small delay to allow the DOM to update
        } else {
            // No dropdown is open, or the open dropdown is being closed
            changedropSize("230px");
            setCurrentDropdown(targetDropdown);
        }
    };
    
    
    useOutsideClick({
        ref: sidebarRef,
        handler: () => {
            if (dropSize === "230px") {  // Only attempt to close if the dropdown is open
                setIsAnimating(true);  // Initiate closing animation
                setTimeout(() => {
                    changedropSize("100px");
                    setCurrentDropdown(null);
                    setIsAnimating(false);  // End animation state after dropdown is closed
                }, 10);  // Small delay to ensure state update is registered
            }
        }
    });
    
    
    

    return(
        
        <>
        <Flex ref={sidebarRef} className={className} boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.3)"  w={"100%"} h={ dropSize} flexDir={"row"} justifyContent={"space-between"} maxW="100vw" transition="height 0.3s ease" overflowX={'hidden'}overflowY={isAnimating ? "hidden" : "hidden"} backgroundColor={"#DDA0DD"}>
        
         <Flex
        flex={1}
                p="0%"
                flexDir="row"
                alignItems={"flex-start"}
                as="nav"
                mt={0}
                ml={5}
                
            >
         
                
                <NavItem flexGrow={1} navSize={navSize} icon={FiHome } title="Features" mr={36} onClick={()=>changeDrop("features")} />
                <NavItem flexGrow={1} navSize={navSize} icon={FiCalendar} title="Calendar" mr={36} onClick={()=>changeDrop("calendar")}/>
                <NavItem icon={FiHome} title="Dashboard" active={false} navSize="large" mr={36} />
      <NavItem icon={FiCalendar} title="Calendar" active={false} navSize="large" mr={36}  />
      <NavItem icon={FiSettings} title="Settings" active={false} navSize="large" mr={30} />
     {/*  <NavItem navSize={navSize} icon={FiSettings} title="Settings" mr={36}/>
         */}
        </Flex> 

        <Flex p={"0%"} flexDir={"row"} w={"100%"} alignItems={"flex-start"} mb={45} >

        {/* <Divider display={navSize=="small"?"none": "flex"}/>
        <Flex mt={30} alignItems="center" mr={36}>
                <Avatar size="md" src="https://www.hatchwise.com/wp-content/uploads/2022/12/image-8.png.webp" />
                <Flex flexDir="column" ml={5} display={navSize === "small" ? "none" : "block"}>
                    <Heading as="h3" size="sm">Ishmaam</Heading>
                    <Text color="gray">Admin</Text>
                </Flex>
            </Flex> */}

        </Flex>

       </Flex>


        </>
    )
}

export default SideBar;