import Page from "../components/ui/page";
import CompetitionDetails from "../components/competitions/competitionsDetails.organism";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const CompetitionDetailsPage = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <>
      <Page>
        <CompetitionDetails />
      </Page>
    </>
  );
};

export default CompetitionDetailsPage;
