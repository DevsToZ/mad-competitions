import { IconButton, useMediaQuery } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE } from "../../../lib/consts";

interface NavIconProps {
  ariaLabel: string;
  onClick: () => void;
  icon: any;
}

const NavIcon = ({ ariaLabel, onClick, icon }: NavIconProps) => {
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  return (
    <IconButton
      aria-label={ariaLabel}
      colorScheme="blackAlpha"
      outline={"none"}
      borderRadius={"50%"}
      w={isTablet ? 16 : 8}
      h={isTablet ? 16 : 8}
      _hover={{ borderColor: isTablet ? "green.400" : "transparent" }}
      onClick={onClick}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <FontAwesomeIcon
        color={"white"}
        fontSize={isTablet ? ICONS_SIZE : ICONS_SIZE * 0.75}
        icon={icon}
      />
    </IconButton>
  );
};

export default NavIcon;
