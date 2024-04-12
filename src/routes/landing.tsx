import { useEffect } from "react";
import Page from "../components/ui/page";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import { LinkIDS } from "../components/navigation/utils/consts";
import Footer from "../components/footer/footer.organism";
import { Landing } from "../components/landing/landing.organism";
import ReactGA from "react-ga4";

const LandingPage = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  useEffect(() => {
    setIsActive(LinkIDS.HOME);
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <Page>
      <Landing />
      <Footer />
    </Page>
  );
};

export default LandingPage;
