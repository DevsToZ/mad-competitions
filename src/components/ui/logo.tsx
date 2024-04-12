import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

interface LogoWithoutLinkProps {
  order?: number;
  width?: number;
  height?: number;
  onClick?: () => void;
  marginRight?: number;
}

const Logo = ({
  order,
  width,
  height,
  onClick,
  marginRight,
}: LogoWithoutLinkProps) => {
  return (
    <Image
      onClick={onClick ? onClick : () => {}}
      cursor={onClick ? "pointer" : "default"}
      order={order}
      w={width}
      h={height}
      src={logo}
      alt="logo"
      mr={marginRight ? marginRight : ""}
      aspectRatio={3.33}
    />
  );
};

export default Logo;
