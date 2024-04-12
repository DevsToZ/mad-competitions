import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Links } from "../utils/consts";
import { NavLinkProps } from "../utils/types";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../utils/navigation.recoil";
import NavLink from "../atoms/navLink";

interface MobileNavProps {
  isOpen: boolean;
  onClose: (params?: any) => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [isActive, setIsActive] = useRecoilState(currentActivePageAtom);

  return (
    <Drawer
      blockScrollOnMount={false}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent
        color={"white"}
        background={"gray.900"}
        borderColor={"green.400"}
      >
        <DrawerCloseButton
          background={"black"}
          colorScheme="blackAlpha"
          _hover={{ borderColor: "green.400" }}
        />
        <DrawerHeader>Navigation</DrawerHeader>

        <DrawerBody>
          {Links.map((link: NavLinkProps, index: number) => (
            <NavLink
              to={link.to}
              label={link.label}
              key={`${link.label}-${index}`}
              onClick={() => setIsActive(index)}
              isActive={isActive === index}
            />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
