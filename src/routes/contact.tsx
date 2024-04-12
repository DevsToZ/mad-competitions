import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LinkIDS } from "../components/navigation/utils/consts";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import Page from "../components/ui/page";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Contact from "../components/contact/contact.organism";

const ContactPage = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  useEffect(() => {
    setIsActive(LinkIDS.CONTACT);
  }, []);
  return (
    <Page>
      <Header title="Contact" />
      <Contact />
      <Footer />
    </Page>
  );
};

export default ContactPage;
