import { Button, Divider, Flex, Text, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../core/cart.context";
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "../utils/cart.recoil";
import { Checkout } from "../core/cart.service";
import useAxios from "../../../lib/axios/useAxios";
import { displayToast } from "../../ui/toast";
import ReactGA from "react-ga4";

const CartSummary = () => {
  const cart = useContext(CartContext);
  const [cartItems] = useRecoilState(cartItemsAtom);
  const [totalCost, setTotalCost] = useState<any>(0);
  const [totalTickets, setTotalTickets] = useState<any>(0);
  const toast = useToast();

  const { data, error, loadData } = useAxios({
    fetchFn: Checkout,
    paramsOfFetch: {},
  });

  useEffect(() => {
    setTotalCost(cart.getTotalCost());
    setTotalTickets(cart.getTotalTickets());
  }, [cart]);

  const handleCheckout = () => {
    ReactGA.event({
      category: "User",
      action: `Clicked on checkout`,
    });
    const itms = cartItems.map((item) => {
      return {
        competitionId: item.id,
        quantity: item.amount,
      };
    });
    const cartObj = {
      items: itms,
      currency: "GBP",
    };
    loadData({ body: cartObj });
  };

  useEffect(() => {
    if (data) {
      location.href = data;
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      displayToast({
        id: "cartError",
        type: "error",
        text: "There was a problem with your checkout. Please try again.",
        toast,
      });
    }
  }, [error]);

  return (
    <>
      <Flex
        h={"15vh"}
        alignItems={"center"}
        fontSize={"xl"}
        flexDir={"column"}
        gap={4}
      >
        <Divider />

        <Flex
          justifyContent={"space-between"}
          w={"100%"}
          h={"100%"}
          flexDir={"column"}
        >
          <Flex gap={8}>
            <Text w={"50%"}>Subtotal:</Text>
            {/* @ts-ignore */}
            <Text w={"50%"}>{`${totalCost.toFixed(2)}`}£</Text>
          </Flex>
          <Flex gap={8}>
            <Text w={"50%"}>Total tickets: </Text>
            <Text w={"50%"}>{`${totalTickets}`}</Text>
          </Flex>
          <Button
            variant={"solid"}
            color={"black"}
            mt={4}
            _hover={{ borderColor: "white" }}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CartSummary;
