import { createBrowserRouter } from "react-router-dom";
import CompetitionsPage from "./competitions";
import ContactPage from "./contact";
import ErrorPage from "./error-page";
import LandingPage from "./landing";
import LoginPage from "./login";
import WinnersPage from "./winners";
import { PagesURL } from "./consts";
import CompetitionDetailsPage from "./competitionDetails";
import { TOSPage } from "./tos";
import { CookiesPage } from "./cookies";
import { PrivacyPolicyPage } from "./privacy";
import { PaymentSuccessPage } from "./payment-success";
import { ParticipantsPage } from "./participants";
import { TOUPage } from "./tou";

export const router = createBrowserRouter([
  {
    path: PagesURL.LANDING,
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.COMPETITIONS,
    element: <CompetitionsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.COMPETITION_DETAILS,
    element: <CompetitionDetailsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.WINNERS,
    element: <WinnersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.CONTACT,
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.LOGIN,
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.TOS,
    element: <TOSPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.TOU,
    element: <TOUPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.COOKIES,
    element: <CookiesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.PRIVACY,
    element: <PrivacyPolicyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.PAYMENT_SUCCESS,
    element: <PaymentSuccessPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.PARTICIPANTS,
    element: <ParticipantsPage />,
    errorElement: <ErrorPage />,
  },
]);
