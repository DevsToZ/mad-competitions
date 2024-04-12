import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LinkIDS } from "../components/navigation/utils/consts";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import Page from "../components/ui/page";
import Competitions from "../components/competitions/competitions.organism";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import ReactGA from "react-ga4";

const CompetitionsPage = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  useEffect(() => {
    setIsActive(LinkIDS.COMPETITIONS);
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <Page>
      <Header title="Competitions" />
      <Competitions />
      <Footer />
    </Page>
  );
};

export default CompetitionsPage;
