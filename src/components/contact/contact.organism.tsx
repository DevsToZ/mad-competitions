import { Flex, useMediaQuery } from "@chakra-ui/react";
import ContactForm from "./molecules/contactForm";
import ContactDetails from "./molecules/contactDetails";
import { MetaTags } from "../ui/meta-tags";
import { PagesURL } from "../../routes/consts";

const Contact = () => {
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  return (
    <>
      <MetaTags
        title="Contact Us"
        primary_description="Contact us for any queries or feedback."
        secondary_description="We are always happy to help!"
        url={PagesURL.CONTACT}
      />
      <Flex
        width={!isTablet ? "90%" : "100%"}
        maxWidth={"900px"}
        margin={"0 auto"}
        h={"100%"}
        minH={"55vh"}
        my={8}
        justifyContent={"center"}
        alignItems={"flex-start"}
        bg={"gray.900"}
        borderRadius={"md"}
        flexDir={!isTablet ? "column" : "row"}
        minW={"340px"}
      >
        <ContactForm order={!isTablet ? 2 : 1} />
        <ContactDetails order={!isTablet ? 1 : 2} />
      </Flex>
    </>
  );
};

export default Contact;
