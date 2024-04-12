import { Flex, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";
import { Link } from "react-router-dom";
import { MetaTags } from "../components/ui/meta-tags";
import { PagesURL } from "./consts";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export const CookiesPage = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <Page>
      <Header title="Cookie Policy" />
      <MetaTags
        title="Cookies Policy"
        primary_description="We use cookies to improve your experience."
        secondary_description="Learn more about our cookie policy."
        url={PagesURL.COOKIES}
      />
      <Flex
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        flexDir={"column"}
        gap={8}
        minH={"53vh"}
        color={"white"}
        py={8}
        px={4}
      >
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Cookie Policy of Mad Competitions (
            <Link to={"/"}>
              <i>mcomps.co.uk</i>
            </Link>
            )
          </Text>
          <Text fontSize={"sm"}>
            This document informs Users about the technologies that help this
            Application to achieve the purposes described below. Such
            technologies allow the Owner to access and store information (for
            example by using a Cookie) or use resources (for example by running
            a script) on a User’s device as they interact with this Application.
          </Text>
          <Text fontSize={"sm"}>
            For simplicity, all such technologies are defined as "Trackers"
            within this document – unless there is a reason to differentiate.
            For example, while Cookies can be used on both web and mobile
            browsers, it would be inaccurate to talk about Cookies in the
            context of mobile apps as they are a browser-based Tracker. For this
            reason, within this document, the term Cookies is only used where it
            is specifically meant to indicate that particular type of Tracker.
          </Text>
          <Text fontSize={"sm"}>
            Some of the purposes for which Trackers are used may also require
            the User's consent. Whenever consent is given, it can be freely
            withdrawn at any time following the instructions provided in this
            document.
          </Text>
          <Text fontSize={"sm"}>
            This Application uses Trackers managed directly by the Owner
            (so-called “first-party” Trackers) and Trackers that enable services
            provided by a third-party (so-called “third-party” Trackers). Unless
            otherwise specified within this document, third-party providers may
            access the Trackers managed by them.
          </Text>
          <Text fontSize={"sm"}>
            The validity and expiration periods of Cookies and other similar
            Trackers may vary depending on the lifetime set by the Owner or the
            relevant provider. Some of them expire upon termination of the
            User’s browsing session.
          </Text>
          <Text fontSize={"sm"}>
            In addition to what’s specified in the descriptions within each of
            the categories below, Users may find more precise and updated
            information regarding lifetime specification as well as any other
            relevant information – such as the presence of other Trackers - in
            the linked privacy policies of the respective third-party providers
            or by contacting the Owner.
          </Text>
        </Flex>

        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Activities strictly necessary for the operation of this Application
            and delivery of the Service
          </Text>
          <Text fontSize={"sm"}>
            This Application uses so-called “technical” Cookies and other
            similar Trackers to carry out activities that are strictly necessary
            for the operation or delivery of the Service.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Third-party Trackers
          </Text>
          <Text fontSize={"sm"} pl={4}>
            This Application uses Trackers to enable basic interactions and
            functionalities, allowing Users to access selected features of the
            Service and facilitating the User's communication with the Owner.
          </Text>

          <Text fontSize={"md"} fontWeight={"bold"} pl={8}>
            - Contacting the User
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={16}>
            Mailing list or newsletter (this Application)
          </Text>
          <Text fontSize={"sm"} pl={16}>
            By registering on the mailing list or for the newsletter, the User’s
            email address will be added to the contact list of those who may
            receive email messages containing information of commercial or
            promotional nature concerning this Application. Your email address
            might also be added to this list as a result of signing up to this
            Application or after making a purchase.
          </Text>
          <Text fontSize={"sm"} pl={16}>
            Personal Data processed: email address, first name, last name, phone
            number and Trackers.
          </Text>

          <Text fontSize={"md"} fontWeight={"bold"} pl={8}>
            - Experience
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={16}>
            Mailing list or newsletter (this Application)
          </Text>
          <Text fontSize={"sm"} pl={16}>
            This Application uses Trackers to improve the quality of the user
            experience and enable interactions with external content, networks
            and platforms.
          </Text>

          <Text fontSize={"md"} fontWeight={"bold"} pl={8}>
            - Google Analytics
          </Text>
          <Text fontSize={"sm"} pl={16}>
            This application employs Google Analytics, a web analysis service
            provided by Google Inc. Google Analytics uses cookies to help
            analyze how users interact with the site. The information generated
            by the cookies about your use of the website (including your IP
            address) will be transmitted to and stored by Google on servers in
            the United States. Google will use this information for the purpose
            of evaluating your use of the website, compiling reports on website
            activity for website operators, and providing other services
            relating to website activity and internet usage. Google may also
            transfer this information to third parties where required to do so
            by law, or where such third parties process the information on
            Google's behalf. By using this website, you consent to the
            processing of data about you by Google in the manner and for the
            purposes set out above.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            How to manage preferences and provide or withdraw consent
          </Text>
          <Text fontSize={"sm"}>
            There are various ways to manage Tracker related preferences and to
            provide and withdraw consent, where relevant:
          </Text>
          <Text fontSize={"sm"}>
            Users can manage preferences related to Trackers from directly
            within their own device settings, for example, by preventing the use
            or storage of Trackers.
          </Text>
          <Text fontSize={"sm"}>
            Additionally, whenever the use of Trackers is based on consent,
            Users can provide or withdraw such consent by setting their
            preferences within the cookie notice or by updating such preferences
            accordingly via the relevant consent-preferences privacy widget, if
            available.
          </Text>
          <Text fontSize={"sm"}>
            It is also possible, via relevant browser or device features, to
            delete previously stored Trackers, including those used to remember
            the User’s initial consent preferences.
          </Text>
          <Text fontSize={"sm"}>
            Other Trackers in the browser’s local memory may be cleared by
            deleting the browsing history.
          </Text>
          <Text fontSize={"sm"}>
            With regard to any third-party Trackers, Users can manage their
            preferences via the related opt-out link (where provided), by using
            the means indicated in the third party's privacy policy, or by
            contacting the third party.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Locating Tracker Settings
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Users can, for example, find information about how to manage Cookies
            in the most commonly used browsers at the following addresses:
          </Text>
          <Text fontSize={"sm"} pl={8}>
            -{" "}
            <Link
              to={
                "https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies"
              }
            >
              <u>Google Chrome</u>
            </Link>
          </Text>
          <Text fontSize={"sm"} pl={8}>
            -{" "}
            <Link
              to={
                "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
              }
            >
              <u>Mozilla Firefox</u>
            </Link>
          </Text>
          <Text fontSize={"sm"} pl={8}>
            -{" "}
            <Link
              to={
                "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              }
            >
              <u>Apple Safari</u>
            </Link>
          </Text>
          <Text fontSize={"sm"} pl={8}>
            -{" "}
            <Link
              to={
                "https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              }
            >
              <u>Microsoft Internet Explorer</u>
            </Link>
          </Text>
          <Text fontSize={"sm"} pl={8}>
            -{" "}
            <Link
              to={
                "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              }
            >
              <u>Microsoft Edge</u>
            </Link>
          </Text>
          <Text fontSize={"sm"} pl={8}>
            -{" "}
            <Link
              to={
                "https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing"
              }
            >
              <u>Brave</u>
            </Link>
          </Text>
          <Text fontSize={"sm"} pl={8}>
            -{" "}
            <Link to={"https://help.opera.com/en/latest/web-preferences/"}>
              <u>Opera</u>
            </Link>
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Users may also manage certain categories of Trackers used on mobile
            apps by opting out through relevant device settings such as the
            device advertising settings for mobile devices, or tracking settings
            in general (Users may open the device settings and look for the
            relevant setting).
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            How to opt out of interest-based advertising
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Notwithstanding the above, Users may follow the instructions
            provided by{" "}
            <Link to={"https://www.youronlinechoices.com/"}>
              <u>YourOnlineChoices</u>
            </Link>{" "}
            (EU and UK), the{" "}
            <Link to={"https://thenai.org/about-online-advertising/"}>
              <u>Network Advertising Initiative</u>
            </Link>{" "}
            (US) and the{" "}
            <Link to={"https://youradchoices.com/control"}>
              <u>Digital Advertising Alliance</u>
            </Link>{" "}
            (US),{" "}
            <Link to={"https://youradchoices.ca/en/learn"}>
              <u>DAAC</u>
            </Link>{" "}
            (Canada),{" "}
            <Link to={"https://www.ddai.info/optout"}>
              <u>DDAI</u>
            </Link>{" "}
            (Japan) or other similar services. Such initiatives allow Users to
            select their tracking preferences for most of the advertising tools.
            The Owner thus recommends that Users make use of these resources in
            addition to the information provided in this document.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            The Digital Advertising Alliance offers an application called{" "}
            <Link to={"https://youradchoices.com/appchoices"}>
              <u>AppChoices</u>
            </Link>{" "}
            that helps Users to control interest-based advertising on mobile
            apps.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Consequences of denying the use of Trackers
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Users are free to decide whether or not to allow the use of
            Trackers. However, please note that Trackers help this Application
            to provide a better experience and advanced functionalities to Users
            (in line with the purposes outlined in this document). Therefore, if
            the User chooses to block the use of Trackers, the Owner may be
            unable to provide related features.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Owner and Data Controller
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Mad Media Productions LTD, 128 City Road, London, EC1V 2NX, United
            Kingdom
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Owner contact email: info@madproductions.uk
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Since the use of third-party Trackers through this Application
            cannot be fully controlled by the Owner, any specific references to
            third-party Trackers are to be considered indicative. In order to
            obtain complete information, Users are kindly requested to consult
            the privacy policies of the respective third-party services listed
            in this document.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Given the objective complexity surrounding tracking technologies,
            Users are encouraged to contact the Owner should they wish to
            receive any further information on the use of such technologies by
            this Application.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Definitions and legal references
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Personal Data (or Data)
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Any information that directly, indirectly, or in connection with
            other information — including a personal identification number —
            allows for the identification or identifiability of a natural
            person.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Usage Data
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Information collected automatically through this Application (or
            third-party services employed in this Application), which can
            include: the IP addresses or domain names of the computers utilised
            by the Users who use this Application, the URI addresses (Uniform
            Resource Identifier), the time of the request, the method utilised
            to submit the request to the server, the size of the file received
            in response, the numerical code indicating the status of the
            server's answer (successful outcome, error, etc.), the country of
            origin, the features of the browser and the operating system
            utilised by the User, the various time details per visit (e.g., the
            time spent on each page within the Application) and the details
            about the path followed within the Application with special
            reference to the sequence of pages visited, and other parameters
            about the device operating system and/or the User's IT environment.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            User
          </Text>
          <Text fontSize={"sm"} pl={4}>
            The individual using this Application who, unless otherwise
            specified, coincides with the Data Subject.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Data Subject
          </Text>
          <Text fontSize={"sm"} pl={4}>
            The natural person to whom the Personal Data refers.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Data Processor (or Processor)
          </Text>
          <Text fontSize={"sm"} pl={4}>
            The natural or legal person, public authority, agency or other body
            which processes Personal Data on behalf of the Controller, as
            described in this privacy policy.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Data Controller (or Owner)
          </Text>
          <Text fontSize={"sm"} pl={4}>
            The natural or legal person, public authority, agency or other body
            which, alone or jointly with others, determines the purposes and
            means of the processing of Personal Data, including the security
            measures concerning the operation and use of this Application. The
            Data Controller, unless otherwise specified, is the Owner of this
            Application.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            This Application
          </Text>
          <Text fontSize={"sm"} pl={4}>
            The means by which the Personal Data of the User is collected and
            processed.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Service
          </Text>
          <Text fontSize={"sm"} pl={4}>
            The service provided by this Application as described in the
            relative terms (if available) and on this site/application.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            European Union (or EU)
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Unless otherwise specified, all references made within this document
            to the European Union include all current member states to the
            European Union and the European Economic Area.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Cookies
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Cookies are Trackers consisting of small sets of data stored in the
            User's browser.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Tracker
          </Text>
          <Text fontSize={"sm"} pl={4}>
            Tracker indicates any technology - e.g Cookies, unique identifiers,
            web beacons, embedded scripts, e-tags and fingerprinting - that
            enables the tracking of Users, for example by accessing or storing
            information on the User’s device.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={4}>
            Legal information
          </Text>
          <Text fontSize={"sm"} pl={4}>
            This privacy policy relates solely to this Application, if not
            stated otherwise within this document.
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </Page>
  );
};
