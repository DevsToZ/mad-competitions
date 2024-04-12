import { Flex, Image, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";
import { MetaTags } from "../components/ui/meta-tags";
import { PagesURL } from "./consts";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import logo from "./../assets/logo-dark.png";

export const TOSPage = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <Page>
      <MetaTags
        title="Terms & Conditions"
        primary_description="Learn more about our terms and conditions."
        secondary_description="Terms & Conditions for Mad Competitions."
        url={PagesURL.TOS}
      />
      <Header title="Terms & Conditions" />

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
            Terms & Conditions
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            1. The Promoter
          </Text>
          <Text fontSize={"sm"}>
            The Promoter is: Mad Competitions Company Number 15349657 and whose
            registered office is at Mad Media Productions LTD.
          </Text>
          <Text fontSize={"sm"}>
            Our correspondence address is Mad Media Productions LTD, 128 City
            Road, London, EC1V 2NX.
          </Text>
          <Text fontSize={"sm"}>
            If you wish to contact us for any reason, please email
            info@madproductions.uk.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            2. The competition
          </Text>
          <Text fontSize={"sm"}>
            2.1. These terms and conditions apply to all competitions listed on
            the Promoter’s website at https://mcomps.co.uk (the “Website”)
          </Text>
          <Text fontSize={"sm"}>
            2.2. All competitions are skill-based competitions. Entry fees for
            online entries are payable each time you enter. Where the Promoter
            offers an easy or multiple choice question, a free entry route is
            available.
          </Text>
          <Text fontSize={"sm"}>
            2.3. To be in with a chance of winning, everyone who enters the
            competition (an “Entrant”) will be required to correctly answer a
            question or solve a problem set by the Promoter (the “Competition
            Question”).
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            3. How to enter
          </Text>
          <Text fontSize={"sm"}>
            3.1. The competition will run from and including the opening and
            closing dates specified on the Website. These dates shall be
            referred to as the “Opening Date” and “Closing Date” respectively.
            All times and dates referred to are the times and dates in London,
            England.
          </Text>
          <Text fontSize={"sm"}>
            3.2. If it is absolutely necessary to do so, the Promoter reserves
            the right to change the Opening and Closing Dates. If the Promoter
            does change the Opening Date and/or the Closing Date of a
            competition, the new details will be displayed on the Website. The
            Promoter will not extend the Closing Date simply to sell more
            entries.
          </Text>
          <Text fontSize={"sm"}>
            3.3. All competition entries must be received by the Promoter by no
            later than the specified time on the Closing Date. All competition
            entries received after the specified time on the Closing Date may be
            disqualified without a refund.
          </Text>
          <Text fontSize={"sm"}>
            3.4. The maximum number of entries to the competition will be stated
            on the Website. The number of entries you are able to make may be
            limited if the maximum number of entries is reached.
          </Text>
          <Text fontSize={"sm"}>
            3.5. Entrants can enter each competition as many times as they wish
            until the maximum number of entries per user have been submitted and
            until the maximum number of entries for the competition have been
            received. Entrants submitting free entries must submit each entry
            separately. Bulk entries, if received, will not be accepted and will
            only be counted as one single entry. Entries may be limited if the
            maximum number of entries for the competition is reached.
          </Text>
          <Text fontSize={"sm"}>3.6. To enter the competition online:</Text>
          <Text fontSize={"sm"} pl={2}>
            (a) go to the Website and view the Competition Question;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (b) select your answer to the competition question and required
            number of entries; then
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (c) complete the checkout process and submit the online registration
            form; then
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (d) complete the payment to receive your order confirmation.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (e) you may repeat this process as many times as you wish up to the
            maximum number of tickets allowed per Entrant, or until the total
            quantity of tickets have been allocated.
          </Text>
          <Text fontSize={"sm"}>
            3.7. All entries must be submitted in the English language. Entries
            in languages other than English will automatically be disqualified
            and no refund will be given.
          </Text>
          <Text fontSize={"sm"}>
            3.8. Unless you are using the free entry method, the Promoter will
            send confirmation that your entry has been received, and your
            allocated ticket number(s).
          </Text>
          <Text fontSize={"sm"}>
            3.9. The Promoter will not accept responsibility for competition
            entries that are not successfully completed, are lost or are delayed
            regardless of cause, including, for example, as a result of any
            equipment failure, technical malfunction, systems, satellite,
            network, server, computer hardware or software failure of any kind.
          </Text>
          <Text fontSize={"sm"}>
            3.10. By purchasing entries and submitting a competition entry, you
            are entering into a contract with the Promoter and are agreeing to
            be bound by these terms and conditions.
          </Text>
          <Text fontSize={"sm"}>
            3.11. You may enter the competition for free by post by complying
            with the following conditions:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (a) send your entry on an unenclosed postcard by first or second
            class post to the Promoter at the following address: Mad Media
            Productions LTD, 128 City Road, London, EC1V 2NX.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (b) hand delivered entries will not be accepted and will not be
            entered into the random draw;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (c) include with your entry the following information:
          </Text>
          <Text fontSize={"sm"} pl={4}>
            (i) your full name;
          </Text>
          <Text fontSize={"sm"} pl={4}>
            (ii) your address;
          </Text>
          <Text fontSize={"sm"} pl={4}>
            (iii) a contact telephone number and email address; and
          </Text>
          <Text fontSize={"sm"} pl={4}>
            (iv) the Competition you are entering and your answer to the
            Competition Question.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (d) incomplete or illegible entries will be disqualified;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (e) you may make multiple free entries for any competition (up to
            any limit placed on entries by the Promoter) but each free entry
            must be submitted and posted to the Promoter separately. Bulk
            entries in one envelope will not be accepted as multiple entries and
            if a bulk entry is received, it will be counted as one single entry;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (f) by entering the competition, you are confirming that you are
            eligible to enter and accept these terms and conditions;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (g) your entry must be received by the Promoter prior to the Closing
            Date. Entries received after the Closing Date will not be entered
            into the random draw. Proof of posting does not guarantee you will
            be entered into the random draw;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (h) the Promoter will not acknowledge receipt of your entry nor
            confirm if your answer to the Competition Question is correct;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (i) if the number of entries reaches any cap or limit before your
            free entry is received, you will not be entered into the random
            draw.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (j) Entrants must have created an account on the Website for the
            free entry to be processed. All details MUST correspond to the
            details on the account. Postal entries received without a registered
            account cannot be processed.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            4. Choosing a winner
          </Text>
          <Text fontSize={"sm"}>
            4.1. All Entrants who correctly answer the Competition Question will
            be placed into a draw and the winner will be chosen by random draw.
            The random draw will take place as soon as reasonably possible and,
            in any event, within 7 days of the Closing Date (“Draw Date”).
          </Text>
          <Text fontSize={"sm"}>
            4.2. All Entrants will have their names and entry numbers included
            in a spreadsheet which may be published on the Website and may be
            visible during the live draw. If you do not wish to have your name
            included in this spreadsheet you must contact the Promoter via email
            at info@madproductions.uk as soon as possible after you have
            completed your entry and in any event, at least 48 hours before the
            live draw takes place.
          </Text>
          <Text fontSize={"sm"}>
            For help with entries, please email us at info@madproductions.uk
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            5. Eligibility
          </Text>
          <Text fontSize={"sm"}>
            5.1. The competition is only open to all residents in the United
            Kingdom aged 18 years or over, except:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (a) employees of the Promoter;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (b) employees of agents or suppliers of the Promoter, who are
            professionally connected with the competition or its administration;
            or
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (c) members of the immediate families or households of (a) and (b)
            above.
          </Text>
          <Text fontSize={"sm"}>
            5.2. By entering the competition, you confirm that you are eligible
            to do so and eligible to claim any prize you may win. The Promoter
            may require you to provide proof that you are eligible to enter the
            competition and claim the prize. If you fail to provide the Promoter
            with any such proof or other information that they may require
            within a reasonable time, you may be disqualified from the
            competition.
          </Text>
          <Text fontSize={"sm"}>
            5.3. The Promoter will not accept competition entries that are:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (a) automatically generated by computer; or
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (b) incomplete.
          </Text>
          <Text fontSize={"sm"}>
            5.4. The Promoter reserves all rights to disqualify you if your
            conduct is contrary to the spirit or intention of the prize
            competition. This includes if you are rude or abusive to the
            Promoter of anyone associated with them.
          </Text>
          <Text fontSize={"sm"}>
            5.5. Subject to clause 11.3 below, no refunds of the entry fee will
            be given in any event, including;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (a) if, following your entry into the competition, you subsequently
            find out that you are not eligible to enter the competition or claim
            the Prize;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (b) if, following your entry into the competition the eligibility
            criteria for entering the competition or claiming the Prize changes
            and you are no longer eligible; or
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (c) if you are disqualified from the competition by the Promoter for
            any reason.
          </Text>
          <Text fontSize={"sm"}>5.6. If the Entrant engages in:</Text>
          <Text fontSize={"sm"} pl={2}>
            (a) any form of fraud (actual or apparent);
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (b) fraudulent misrepresentation;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (c) fraudulent concealment;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (d) hacking or interference with the proper functioning of the
            website; or
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (e) amending, or unauthorised use of, any of the code that
            constitutes the website.
          </Text>
          <Text fontSize={"sm"}>
            All of their entries will be declared void, no refunds will be given
            and they may be prevented from participating in any future
            competitions.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            6. The prize
          </Text>
          <Text fontSize={"sm"}>
            6.1. The prize for each competition is described on the Website (the
            “Prize”). Details of the Prize are, to the best of the Promoter’s
            knowledge, information and belief, correct as at the Opening Date. 
          </Text>
          <Text fontSize={"sm"}>
            6.2. Prizes are subject to availability. The Promoter reserves the
            right to substitute any prize with a prize of equal or greater
            value. If any details of the Prize change, the Promoter will
            endeavour to update the Website as soon as reasonably possible.
          </Text>
          <Text fontSize={"sm"}>
            6.3. The Promoter makes no representations and gives no warranties
            about the Prize, its value, its condition or any other information
            provided on the Website. The Promoter makes no representations and
            gives no warranties that the information provided on the Website is
            accurate, complete or up to date. If the Prize is a vehicle:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (a) the Promoter will, unless otherwise stated, ensure it comes with
            a valid MOT (if required);
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (b) no insurance is included with the Prize and it is the Winner’s
            responsibility to ensure the vehicle is adequately insured prior to
            taking it on the public roads (if it is legal to do so); 
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (c) the Promoter has no responsibility for the Prize(s) once it has
            been delivered. The Winner is solely responsible for complying with
            all relevant laws and regulations relating to the Vehicle, its
            operation and ensuring they operate it in a safe and responsible
            manner;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (d) no vehicle/road tax is included;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (e) the Winner is solely responsible for ensuring they have all
            necessary safety equipment and clothing (for example, helmets, boots
            and gloves) and for wearing them whilst operating the vehicle.
          </Text>
          <Text fontSize={"sm"}>
            6.4. The Prize may be supplied by a third-party supplier (the
            “Supplier”). Details of the Supplier (if any) will be provided on
            the Website.
          </Text>
          <Text fontSize={"sm"}>
            6.5. The Promoter reserves the right to substitute the Prize for an
            alternative cash prize (“Cash Prize”) in the following
            circumstances:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (a) the Prize becomes unavailable;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            (b) other circumstances beyond the reasonable control of the
            Promoter make it necessary to do so;
          </Text>
          <Text fontSize={"sm"}>
            6.6. The prize is not negotiable or transferable.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            7. Winners
          </Text>
          <Text fontSize={"sm"}>
            7.1. The decision of the Promoter is final and no correspondence or
            discussion will be entered into.
          </Text>
          <Text fontSize={"sm"}>
            7.2. The Winner’s full name will be announced during the live draw.
            If you wish for your name to be censored during the live draw please
            contact info@madproductions.uk with reasonable time left before the
            prize draw takes place.
          </Text>
          <Text fontSize={"sm"}>
            7.3. The Promoter will contact the winner personally as soon as
            practicable after the Draw Date using the telephone number or email
            address provided with the competition entry. If the winner cannot be
            contacted, is not available, or has not claimed the Prize, within 21
            days of the Draw Date the Promoter reserves the right to offer the
            Prize to another Entrant (“The Alternate Winner“) selected at random
            in the same method as before from the remaining correct entries
            received before the Closing Date. The Alternate Winner shall have 21
            days from notification of their status by the Promoters to
            communicate their acceptance of the Prize. This process shall
            continue until a winner accepts the Prize.
          </Text>
          <Text fontSize={"sm"}>
            7.4. The Promoter must either publish or make available information
            that indicates that a valid award took place. To comply with this
            obligation the Promoter will publish the full name and county/town
            of residence of major prize winners on the Website.
          </Text>
          <Text fontSize={"sm"}>
            7.5. If you object to any or all of your surname, county/town of
            residence and winning entry being published or made available,
            please contact the Promoter at info@madproductions.uk  prior to the
            Closing Date. In such circumstances, the Promoter must still provide
            the information to the Advertising Standards Authority on request. 
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            8. Claiming the prize
          </Text>
          <Text fontSize={"sm"}>
            8.1. You must claim the Prize personally. The Prize may not be
            claimed by a third party on your behalf. Details of how the Prize
            will be delivered to you (or made available for collection) are
            published on the Website, or available on request.
          </Text>
          <Text fontSize={"sm"}>
            8.2. If your personal details, including contact information,
            changes at any time you should notify the Promoter as soon as
            reasonably possible. Notifications should be sent to the Promoter
            via email to info@madproductions.uk . Notifications must include
            details of the competition you have entered, your old details and
            your new details. If your details change within 10 days of the
            Closing Date, the Promoter will use your old details if it needs to
            try to contact you.
          </Text>
          <Text fontSize={"sm"}>
            8.3. Any Cash Prize will be transferred directly to the winners
            nominated bank account. The winner must provide evidence that it is
            the sole or joint beneficiary of the bank account. Failure to do so
            within 14 days will result in disqualification from the competition
            and the winner forfeiting the prize. In such circumstances, the
            Promoter reserves the right to offer the prize to the next eligible
            Entrant selected from the correct entries that were received before
            the Closing Date.
          </Text>
          <Text fontSize={"sm"}>
            8.4. The Promoter does not accept any responsibility and is not
            liable to pay any compensation if you are unable to or do not take
            up the prize.
          </Text>
          <Text fontSize={"sm"}>
            8.5. If the Prize is a vehicle and the winner has completed all
            eligibility checks, the prize will be transferred to the winner by
            the Promoter using the V5 for each vehicle. This must be completed
            before the vehicle is handed over.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            9. Limitation of liability
          </Text>
          <Text fontSize={"sm"}>
            Insofar as is permitted by law, the Promoter, its agents or
            distributors will not in any circumstances be responsible or liable
            to compensate the winner or accept any liability for any loss,
            damage, personal injury or death occurring as a result of taking up
            the prize except where it is caused by the negligence of the
            Promoter, its agents or distributors or that of their employees.
            Your statutory rights are not affected.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            10. Data protection and publicity
          </Text>
          <Text fontSize={"sm"}>
            10.1. By entering the competition, you agree that any personal
            information provided by you with the competition entry may be held
            and used only by the Promoter or its agents and suppliers to
            administer the competition or as otherwise set out in the Promoter’s
            Privacy Policy, a copy of which is available on the Website.
          </Text>
          <Text fontSize={"sm"}>
            10.2. If you are the winner of the competition, you agree that the
            Promoter may use your name, image and town or county of residence to
            announce the winner of this competition. You further agree to
            participate in any reasonable publicity required by the Promoter.
          </Text>
          <Text fontSize={"sm"}>
            10.3. If you do not wish to participate in any publicity, you must
            notify the Promoter prior to the Closing Date. This will not affect
            your chances of winning the Prize. If you do not agree to
            participate in any publicity about the competition we may still
            provide your details to the Advertising Standards Authority. This is
            a legal requirement that we must comply with to prove that the
            competition has been properly administered and the Prize awarded.
          </Text>
          <Text fontSize={"sm"}>
            10.4. If you are the winner of the competition, you may be required
            to provide further personal information and proof of your identity
            in order to confirm your eligibility to claim the Prize and transfer
            ownership of the Prize to you. You consent to the use of your
            information in this way. You are entitled to request further details
            about how your personal information is being used. You may also
            withdraw your consent to your personal information being used in
            such way but by doing so you may prevent the Prize being transferred
            to you. In such circumstances, you will be deemed to have withdrawn
            from the competition and forfeit the Prize. You will not be entitled
            to any refund of your entry fee. The Promoter reserves the right to
            offer the Prize to the next eligible Entrant selected from the
            correct entries that were received before the Closing Date.
          </Text>
          <Text fontSize={"sm"}>
            10.5. Please note that under data protection laws you are entitled
            to request that the Promoter does not contact you and removes your
            details from its database. If you make such a request you will be
            withdrawing from the competition as it will not be possible to
            contact you in the event that you are the winner. You will not be
            entitled to any refund of any entry fee if you withdraw from the
            competition. If you do not wish any of your personal details to be
            used by the Promoter for promotional purposes, please email the
            Promoter at info@madproductions.uk prior to the Closing Date.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            11. General
          </Text>
          <Text fontSize={"sm"}>
            11.1. The Promoter reserves the right to amend these terms and
            conditions from time to time. The latest version of these terms and
            conditions will be available on the Website.
          </Text>
          <Text fontSize={"sm"}>
            11.2. If there is any reason to believe that there has been a breach
            of these terms and conditions, the Promoter may, at its sole
            discretion, reserve the right to exclude you from participating in
            the competition and any future competitions.
          </Text>
          <Text fontSize={"sm"}>
            11.3. The Promoter reserves the right to hold void, suspend, cancel,
            or amend the prize competition where it becomes necessary to do so
            for circumstances out of its control. In such circumstances, the
            Promoter will refund any entry fees you have paid. 
          </Text>
          <Text fontSize={"sm"}>
            11.4. There is no minimum number of entries and the Promoter will
            not hold void, suspend, cancel, extend the Closing Date or amend the
            prize competition due to a lack of entries. The draw will take place
            and the Prize will be awarded regardless of the number of entries
            received.
          </Text>
          <Text fontSize={"sm"}>
            11.5. The competitions on the Website are in no way sponsored,
            endorsed, administered by or associated with Facebook. By entering
            the competitions, Entrants agree that Facebook has no liability and
            is not responsible for the administration or promotion of the
            competitions.
          </Text>
          <Text fontSize={"sm"}>
            11.6. These terms and conditions shall be governed by English law,
            and the parties submit to the exclusive jurisdiction of the courts
            of England and Wales.
          </Text>
          <Text fontSize={"sm"}>
            11.7. You should print a copy of these terms and conditions and keep
            them for your records.
          </Text>
        </Flex>
        <Image src={logo} m={"0 auto"} />
      </Flex>
      <Footer />
    </Page>
  );
};
