import { useEffect } from "react";
import Page from "../components/ui/page";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import { LinkIDS } from "../components/navigation/utils/consts";
import Footer from "../components/footer/footer.organism";
import { Landing } from "../components/landing/landing.organism";

const LandingPage = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  useEffect(() => {
    setIsActive(LinkIDS.HOME);
  }, []);

  return (
    <Page>
      <Landing />
      <Footer />
    </Page>
  );
};

export default LandingPage;
