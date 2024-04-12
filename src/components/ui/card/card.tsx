import { Flex } from "@chakra-ui/react";
import { CARD_WIDTH } from "../../competitions/utils/consts";

interface CardProps {
  children: React.ReactNode;
  bg?: string;
  onClick?: () => void;
  centered?: boolean;
  id?: string;
  hover?: any;
  width?: string;
}

const Card = ({
  children,
  bg,
  onClick,
  centered,
  id,
  hover = { cursor: "pointer" },
  width = "450px",
}: CardProps) => {
  return (
    <Flex
      bg={bg}
      h={"750px"}
      flexDir={"column"}
      borderRadius={"md"}
      boxShadow={"5px 5px 15px 0px rgba(0,0,0,0.5)"}
      transition={"all 0.2s ease-in-out"}
      w={`${CARD_WIDTH}`}
      _hover={hover}
      justifyContent={centered ? "center" : "space-between"}
      onClick={onClick ? onClick : () => {}}
      id={id}
      position={"relative"}
      width={width}
    >
      {children}
    </Flex>
  );
};

export default Card;
