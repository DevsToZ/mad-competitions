import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavIcon from "../navigation/atoms/navIcon";
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "./utils/cart.recoil";
import CartItem from "./molecules/cartItem";
import { CartItemProps } from "./utils/types";
import CartSummary from "./molecules/cartSummary";

const Cart = () => {
  const [cartItems] = useRecoilState(cartItemsAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavIcon ariaLabel={"Open Cart"} onClick={onOpen} icon={faShoppingCart} />
      <Drawer
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent
          color={"white"}
          background={"gray.900"}
          borderColor={"green.400"}
        >
          <DrawerCloseButton
            background={"black"}
            color={"white"}
            colorScheme="blackAlpha"
            p={4}
            _hover={{ borderColor: "green.400" }}
          />
          <DrawerHeader>Shopping Cart ({cartItems.length} items)</DrawerHeader>
          <DrawerBody
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-between"}
            mb={8}
          >
            <Flex
              flexDir={"column"}
              gap={8}
              overflowY={"auto"}
              width={"100%"}
              pb={4}
            >
              {cartItems.length > 0 ? (
                cartItems.map((item: CartItemProps) => (
                  <CartItem key={item.id} {...item} />
                ))
              ) : (
                <Text fontSize={"lg"}>Cart is empty</Text>
              )}
            </Flex>
            <CartSummary />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
