import { Flex, Text } from "@chakra-ui/react";
import {
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faGooglePay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE } from "../../../lib/consts";

const Payment = () => {
  const PAYMENT_ICONS_SIZE = ICONS_SIZE / 1.25;
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
      <Text fontSize={"lg"}>Payment</Text>
      <FontAwesomeIcon fontSize={PAYMENT_ICONS_SIZE} icon={faCcVisa} />
      <FontAwesomeIcon fontSize={PAYMENT_ICONS_SIZE} icon={faCcMastercard} />
      <FontAwesomeIcon fontSize={PAYMENT_ICONS_SIZE} icon={faCcPaypal} />
      <FontAwesomeIcon fontSize={PAYMENT_ICONS_SIZE} icon={faCcApplePay} />
      <FontAwesomeIcon fontSize={PAYMENT_ICONS_SIZE} icon={faGooglePay} />
    </Flex>
  );
};

export default Payment;
