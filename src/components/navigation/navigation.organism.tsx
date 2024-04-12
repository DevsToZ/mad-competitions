import { Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import NavLink from "./atoms/navLink";
import { NavLinkProps } from "./utils/types";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "./utils/navigation.recoil";
import { LinkIDS, Links } from "./utils/consts";
import { useNavigate } from "react-router-dom";
import Logo from "../ui/logo";
import NavContainer from "./atoms/navContainer";
import NavIcon from "./atoms/navIcon";
import MobileNav from "./molecules/mobileNav";
import Cart from "../cart/cart.organism";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isActive, setIsActive] = useRecoilState(currentActivePageAtom);
  const navigate = useNavigate();
  const [isTablet] = useMediaQuery("(min-width: 950px)", { ssr: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavContainer>
      <Flex alignItems={"center"} gap={6}>
        <Logo
          width={!isTablet ? 36 : 56}
          height={!isTablet ? 12 : 16}
          onClick={() => {
            navigate(Links[LinkIDS.HOME].to);
            setIsActive(LinkIDS.HOME);
          }}
          marginRight={4}
        />
        {isTablet && (
          <Flex>
            {Links.map((link: NavLinkProps, index: number) => (
              <NavLink
                to={link.to}
                label={link.label}
                hasBorderRight={index < Links.length - 1}
                key={`${link.label}-${index}`}
                onClick={() => setIsActive(index)}
                isActive={isActive === index}
              />
            ))}
          </Flex>
        )}
      </Flex>

      {!isTablet && <MobileNav isOpen={isOpen} onClose={onClose} />}

      <Flex justifyContent={"flex-end"} gap={4}>
        {!isTablet && (
          <NavIcon ariaLabel={"Open Menu"} onClick={onOpen} icon={faBars} />
        )}
        <Cart />
      </Flex>
    </NavContainer>
  );
};

export default Navigation;
