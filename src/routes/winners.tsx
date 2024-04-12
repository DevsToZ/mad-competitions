import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LinkIDS } from "../components/navigation/utils/consts";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import Page from "../components/ui/page";
import Header from "../components/ui/header";
import Footer from "../components/footer/footer.organism";
import Winners from "../components/winners/winners.organism";
import ReactGA from "react-ga4";

const WinnersPage = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  useEffect(() => {
    setIsActive(LinkIDS.WINNERS);
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <Page>
      <Header title="Winners" />
      <Winners />
      <Footer />
    </Page>
  );
};

export default WinnersPage;
