import {
  Flex,
  Text,
  Image,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  IconButton,
} from "@chakra-ui/react";
import { CartItemProps } from "../utils/types";
import { useContext, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE_SMALL, MAX_TICKET_NUMBER } from "../../../lib/consts";

import { CartContext } from "../core/cart.context";

const CartItem = ({
  title,
  amount,
  price,
  img,
  id,
  maxPerCustomer = MAX_TICKET_NUMBER,
}: CartItemProps) => {
  const [itemAmount, setItemAmount] = useState<number>(amount);
  const cart = useContext(CartContext);

  const handleChange = (e: any) => {
    setItemAmount(e);
    cart.modifiyQuantity(id, Number(e));
  };

  return (
    <Flex
      w={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      id={id}
    >
      <Flex>
        <Image
          borderRadius={"lg"}
          w={"48"}
          h={"32"}
          src={img}
          alt={title}
          objectFit={"cover"}
        />
      </Flex>
      <Flex
        w={"100%"}
        h={"100%"}
        p={4}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <Flex justifyContent={"space-between"}>
          <Text>{title}</Text>
          <IconButton
            outline={"none"}
            _hover={{ borderColor: "transparent" }}
            onClick={() => cart.deleteFromCart(id)}
            justifyItems={"center"}
            alignItems={"center"}
            aria-label={"Remove Item"}
            variant={"ghost"}
          >
            <FontAwesomeIcon
              color={"white"}
              fontSize={ICONS_SIZE_SMALL}
              icon={faTrash}
            />
          </IconButton>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Flex w={"80px"} mr={2}>
              <NumberInput
                value={Number(itemAmount)}
                onChange={(e) => handleChange(e)}
                min={1}
                max={maxPerCustomer}
                step={1}
              >
                <NumberInputField readOnly />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={"white"} />
                  <NumberDecrementStepper bg={"white"} />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Text>x {price}$</Text>
          </Flex>
          <Text>{(price * itemAmount).toFixed(2)}$</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
