import { Flex, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";
import { Link } from "react-router-dom";
import { MetaTags } from "../components/ui/meta-tags";
import { PagesURL } from "./consts";

export const TOUPage = () => {
  return (
    <Page>
      <MetaTags
        title="Terms of Use"
        primary_description="Terms of Use for Mad Competitions."
        secondary_description="Mad Competitions Terms of Use."
        url={PagesURL.TOU}
      />
      <Header title="Terms of Use" />

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
            Terms of Use
          </Text>
          <Text fontSize={"sm"}>
            These terms tell you the rules for using our website{" "}
            <Link to={"/"}>
              <u>https://mcomps.co.uk</u>
            </Link>{" "}
            (our site).
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Who are we and how to contact us
          </Text>
          <Text fontSize={"sm"}>
            Our site is a site operated by Mad Competitions (“We”). We are
            registered in England and Wales under Company Number 15349657 and
            have our registered office at Mad Media Productions LTD . Our main
            trading address is Mad Media Productions LTD, 128 City Road, London,
            EC1V 2NX.
          </Text>
          <Text fontSize={"sm"}>We are a limited company.</Text>
          <Text fontSize={"sm"}>
            To contact us, please email info@madproductions.uk  or contact us
            directly via our website.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            By using our site you accept these terms
          </Text>
          <Text fontSize={"sm"}>
            By using our site, you confirm that you accept these terms of use
            and that you agree to comply with them.
          </Text>
          <Text fontSize={"sm"}>
            If you do not agree to these terms, you must not use our site.
          </Text>
          <Text fontSize={"sm"}>
            We recommend that you print a copy of these terms for future
            reference.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            There are other terms that may apply to you
          </Text>
          <Text fontSize={"sm"}>
            These terms of use refer to the following additional terms, which
            also apply to your use of our site:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Our Privacy Policy, which sets out the terms on which we process
            any personal data we collect from you, or that you provide to us. By
            using our site, you consent to such processing and you warrant that
            all data provided by you is accurate.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Our Acceptable Use Policy, which sets out the permitted uses and
            prohibited uses of our site. When using our site, you must comply
            with this Acceptable Use Policy.
          </Text>
          <Text fontSize={"sm"}>
            If you purchase goods or services from our site, participate in any
            promotions or enter any of our competitions, other terms and
            conditions will apply and which you must accept and abide by.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            We may make changes to these terms
          </Text>
          <Text fontSize={"sm"}>
            We may amend these terms from time to time. Every time you wish to
            use our site, please check these terms to ensure you understand the
            terms that apply at that time.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            We may make changes to our site
          </Text>
          <Text fontSize={"sm"}>
            We may update and change our site from time to time to reflect
            changes to our products, services, our users’ needs and our business
            priorities.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            We may suspend or withdraw our site
          </Text>
          <Text fontSize={"sm"}>
            Our site is made available free of charge but you may have to pay to
            enter our competitions.
          </Text>
          <Text fontSize={"sm"}>
            We do not guarantee that our site, or any content on it, will always
            be available or be uninterrupted. We may suspend or withdraw or
            restrict the availability of all or any part of our site for
            business and operational reasons. We will try to give you reasonable
            notice of any suspension or withdrawal.
          </Text>
          <Text fontSize={"sm"}>
            You are also responsible for ensuring that all persons who access
            our site through your internet connection are aware of these terms
            of use and other applicable terms and conditions, and that they
            comply with them.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Who can use our site?
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Our site is only for users in the UK
          </Text>
          <Text fontSize={"sm"}>
            Our site is directed to people residing in the United Kingdom. We do
            not represent that the content available on or through our site is
            appropriate for use or available in other locations.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            How you may use material on our site
          </Text>
          <Text fontSize={"sm"}>
            We are the owner or the licensee of all intellectual property rights
            in our site, and in the material published on it. Those works are
            protected by copyright laws and treaties around the world. All such
            rights are reserved.
          </Text>
          <Text fontSize={"sm"}>
            You may print off one copy, and may download extracts, of any
            page(s) from our site for your personal use and you may draw the
            attention of others within your organisation to content posted on
            our site.
          </Text>
          <Text fontSize={"sm"}>
            You must not modify the paper or digital copies of any materials you
            have printed off or downloaded in any way, and you must not use any
            illustrations, photographs, video or audio sequences or any graphics
            separately from any accompanying text.
          </Text>
          <Text fontSize={"sm"}>
            Our status (and that of any identified contributors) as the authors
            of content on our site must always be acknowledged.
          </Text>
          <Text fontSize={"sm"}>
            You must not use any part of the content on our site for commercial
            purposes without obtaining a licence to do so from us or our
            licensors.
          </Text>
          <Text fontSize={"sm"}>
            If you print off, copy or download any part of our site in breach of
            these terms of use, your right to use our site will cease
            immediately and you must, at our option, return or destroy any
            copies of the materials you have made.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Do not rely on information on this site
          </Text>
          <Text fontSize={"sm"}>
            The content on our site is provided for general information only. It
            is not intended to amount to advice on which you should rely. You
            must obtain professional or specialist advice before taking, or
            refraining from, any action on the basis of the content on our site.
          </Text>
          <Text fontSize={"sm"}>
            Although we make reasonable efforts to update the information on our
            site, we make no representations, warranties or guarantees, whether
            express or implied, that the content on our site is accurate,
            complete or up to date.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            We are not responsible for websites we link to
          </Text>
          <Text fontSize={"sm"}>
            Where our site contains links to other sites and resources provided
            by third parties, these links are provided for your information
            only. Such links should not be interpreted as approval by us of
            those linked websites or information you may obtain from them.
          </Text>
          <Text fontSize={"sm"}>
            We have no control over the contents of those sites or resources.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            User-generated content is not approved by us
          </Text>
          <Text fontSize={"sm"}>
            This website may include information and materials uploaded by other
            users of the site, including posts made to our social media
            accounts. This information and these materials have not been
            verified or approved by us. The views expressed by other users on
            our site do not represent our views or values.
          </Text>
          <Text fontSize={"sm"}>
            If you wish to complain about information and materials uploaded by
            other users please contact us at info@madproductions.uk.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Information about our use of cookies
          </Text>
          <Text fontSize={"sm"}>
            Our website uses cookies to distinguish you from other users of our
            website. This helps us to provide you with a good experience when
            you browse our website and also allows us to improve our site.
          </Text>
          <Text fontSize={"sm"}>
            By continuing to browse the site, you are agreeing to our use of
            cookies.
          </Text>
          <Text fontSize={"sm"}>
            A cookie is a small file of letters and numbers that we store on
            your browser or the hard drive of your computer if you agree.
            Cookies contain information that is transferred to your computer’s
            hard drive.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            We use the following cookies:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - <b>Strictly necessary cookies.</b>These are cookies that are
            required for the operation of our website. They include, for
            example, cookies that enable you to log into secure areas of our
            website, use a shopping cart or make use of e-billing services.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - <b>Analytical/performance cookies.</b>They allow us to recognise
            and count the number of visitors and to see how visitors move around
            our website when they are using it. This helps us to improve the way
            our website works, for example, by ensuring that users are finding
            what they are looking for easily.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - <b>Functionality cookies.</b>These are used to recognise you when
            you return to our website. This enables us to personalise our
            content for you, greet you by name and remember your preferences
            (for example, your choice of language or region).
          </Text>
          <Text fontSize={"sm"}>
            Please note that third parties (including, for example, advertising
            networks and providers of external services like web traffic
            analysis services) may also use cookies, over which we have no
            control. These cookies are likely to be analytical/performance
            cookies or targeting cookies.
          </Text>
          <Text fontSize={"sm"}>
            You can block cookies by activating the setting on your browser that
            allows you to refuse the setting of all or some cookies. However, if
            you use your browser settings to block all cookies (including
            essential cookies) you may not be able to access all or parts of our
            site.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Our responsibility for loss or damage suffered by you
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - We do not exclude or limit in any way our liability to you where
            it would be unlawful to do so. This includes liability for death or
            personal injury caused by our negligence or the negligence of our
            employees, agents or subcontractors and for fraud or fraudulent
            misrepresentation.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Different limitations and exclusions of liability will apply to
            liability arising as a result of the supply of any products or
            services to you or if you enter our competitions, which will be set
            out in our Terms and Conditions.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Please note that we only provide our site for domestic and private
            use. You agree not to use our site for any commercial or business
            purposes, and we have no liability to you for any loss of profit,
            loss of business, business interruption, or loss of business
            opportunity.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            We are not responsible for viruses and you must not introduce them
          </Text>
          <Text fontSize={"sm"}>
            We do not guarantee that our site will be secure or free from bugs
            or viruses.
          </Text>
          <Text fontSize={"sm"}>
            You are responsible for configuring your information technology,
            computer programmes and platform to access our site. You should use
            your own virus protection software.
          </Text>
          <Text fontSize={"sm"}>
            You must not misuse our site by knowingly introducing viruses,
            trojans, worms, logic bombs or other material that is malicious or
            technologically harmful. You must not attempt to gain unauthorised
            access to our site, the server on which our site is stored or any
            server, computer or database connected to our site. You must not
            attack our site via a denial-of-service attack or a distributed
            denial-of service attack. By breaching this provision, you would
            commit a criminal offence under the Computer Misuse Act 1990. We
            will report any such breach to the relevant law enforcement
            authorities and we will cooperate with those authorities by
            disclosing your identity to them. In the event of such a breach,
            your right to use our site will cease immediately.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Rules about linking to our site
          </Text>
          <Text fontSize={"sm"}>
            You may link to our home page, provided you do so in a way that is
            fair and legal and does not damage our reputation or take advantage
            of it.
          </Text>
          <Text fontSize={"sm"}>
            You must not establish a link in such a way as to suggest any form
            of association, approval or endorsement on our part where none
            exists.
          </Text>
          <Text fontSize={"sm"}>
            You must not establish a link to our site in any website that is not
            owned by you.
          </Text>
          <Text fontSize={"sm"}>
            Our site must not be framed on any other site, nor may you create a
            link to any part of our site other than the home page. of it.
          </Text>
          <Text fontSize={"sm"}>
            We reserve the right to withdraw linking permission without notice.
          </Text>
          <Text fontSize={"sm"}>
            The website in which you are linking must comply in all respects
            with the content standards set out in our Acceptable Use Policy.
          </Text>
          <Text fontSize={"sm"}>
            If you wish to link to or make any use of content on our site other
            than that set out above, please contact info@madproductions.uk.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Which country’s laws apply to any disputes?
          </Text>
          <Text fontSize={"sm"}>
            These terms of use, their subject matter and their formation, are
            governed by English law. You and we both agree that the courts of
            England and Wales will have exclusive jurisdiction to deal with any
            disputes between us.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Acceptable Use Policy
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            About us
          </Text>
          <Text fontSize={"sm"}>
            This acceptable use policy sets out the terms between you and us
            under which you may access our website info@madproductions.uk (“our
            site”). This acceptable use policy applies to all users of, and
            visitors to, our site.
          </Text>
          <Text fontSize={"sm"}>
            Your use of our site means that you accept, and agree to abide by,
            all the policies in this acceptable use policy, which supplement our
            terms of website use.
          </Text>
          <Text fontSize={"sm"}>
            Our site is a site operated by Mad Competitions (“We”). We are
            registered in England and Wales under Company Number 15349657 and
            have our registered office at Mad Media Productions LTD.
          </Text>
          <Text fontSize={"sm"}>
            To contact us, please email info@madproductions.uk.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Prohibited uses
          </Text>
          <Text fontSize={"sm"}>
            You may use our site only for lawful purposes. You may not use our
            site:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - In any way that breaches any applicable local, national or
            international law or regulation.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - In any way that is unlawful or fraudulent, or has any unlawful or
            fraudulent purpose or effect.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - For the purpose of harming or attempting to harm minors in any
            way.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - To send, knowingly receive, upload, download, use or re-use any
            material which does not comply with our content standards as set out
            below. 
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - To transmit, or procure the sending of, any unsolicited or
            unauthorised advertising or promotional material or any other form
            of similar solicitation (spam).
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - To knowingly transmit any data, send or upload any material that
            contains viruses, Trojan horses, worms, time-bombs, keystroke
            loggers, spyware, adware or any other harmful programs or similar
            computer code designed to adversely affect the operation of any
            computer software or hardware.
          </Text>
          <Text fontSize={"sm"}>You also agree:</Text>
          <Text fontSize={"sm"} pl={2}>
            - Not to reproduce, duplicate, copy or re-sell any part of our site
            in contravention of the provisions of our terms of website use.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Not to access without authority, interfere with, damage or
            disrupt:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - any part of our site;
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - any equipment or network on which our site is stored; 
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - any software used in the provision of our site; or 
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - any equipment or network or software owned or used by any third
            party.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Interactive services
          </Text>
          <Text fontSize={"sm"}>
            We may from time to time provide interactive services on our site,
            for example, the ability to participate in games, competitions,
            comment on blog posts or post to our social media accounts
            <b>(interactive services)</b>.
          </Text>
          <Text fontSize={"sm"}>
            Where we do provide any interactive service, we will provide clear
            information to you about the kind of service offered, if it is
            moderated and what form of moderation is used (including whether it
            is human or technical).
          </Text>
          <Text fontSize={"sm"}>
            We will do our best to assess any possible risks for users (and in
            particular, for children) from third parties when they use any
            interactive service provided on our site, and we will decide in each
            case whether it is appropriate to use moderation of the relevant
            service (including what kind of moderation to use) in the light of
            those risks. However, we are under no obligation to oversee, monitor
            or moderate any interactive service we provide on our site, and we
            expressly exclude our liability for any loss or damage arising from
            the use of any interactive service by a user in contravention of our
            content standards, whether the service is moderated or not. 
          </Text>
          <Text fontSize={"sm"}>
            The use of any of our interactive services by a minor is subject to
            the consent of their parent or guardian. We advise parents who
            permit their children to use an interactive service that it is
            important that they communicate with their children about their
            safety online, as moderation is not foolproof. Minors who are using
            any interactive service should be made aware of the potential risks
            to them. 
          </Text>
          <Text fontSize={"sm"}>
            Where we do moderate an interactive service, we will normally
            provide you with a means of contacting the moderator, should a
            concern or difficulty arise.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Content standards
          </Text>
          <Text fontSize={"sm"}>
            These content standards apply to any and all material which you
            contribute to our site (contributions), and to any interactive
            services associated with it.
          </Text>
          <Text fontSize={"sm"}>
            You must comply with the spirit and the letter of the following
            standards. The standards apply to each part of any contribution as
            well as to its whole.
          </Text>
          <Text fontSize={"sm"}>Contributions must:</Text>
          <Text fontSize={"sm"} pl={2}>
            - Be accurate (where they state facts).
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Be genuinely held (where they state opinions).
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Comply with applicable law in the UK and in any country from which
            they are posted.
          </Text>
          <Text fontSize={"sm"}>Contributions must not:</Text>
          <Text fontSize={"sm"} pl={2}>
            - Contain any material which is defamatory of any person.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Contain any material which is obscene, offensive, hateful or
            inflammatory.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Promote sexually explicit material.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Promote violence.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Promote discrimination based on race, sex, religion, nationality,
            disability, sexual orientation or age.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Infringe any copyright, database right or trademark of any other
            person.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Be likely to deceive any person.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Be made in breach of any legal duty owed to a third party, such as
            a contractual duty or a duty of confidence.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Promote any illegal activity.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Be threatening, abuse or invade another’s privacy, or cause
            annoyance, inconvenience or needless anxiety.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Be likely to harass, upset, embarrass, alarm or annoy any other
            person.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Be used to impersonate any person, or to misrepresent your
            identity or affiliation with any person.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Give the impression that they emanate from us, if this is not the
            case.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Advocate, promote or assist any unlawful act such as (by way of
            example only) copyright infringement or computer misuse.
          </Text>
          <Text fontSize={"md"}>Suspension and termination</Text>
          <Text fontSize={"sm"}>
            We will determine, in our discretion, whether there has been a
            breach of this acceptable use policy through your use of our site.
            When a breach of this policy has occurred, we may take such action
            as we deem appropriate.
          </Text>
          <Text fontSize={"sm"}>
            Failure to comply with this acceptable use policy constitutes a
            material breach of the terms of use upon which you are permitted to
            use our site, and may result in our taking all or any of the
            following actions:
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Immediate, temporary or permanent withdrawal of your right to use
            our site.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Immediate, temporary or permanent removal of any posting or
            material uploaded by you to our site.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Issue of a warning to you.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Legal proceedings against you for reimbursement of all costs on an
            indemnity basis (including, but not limited to, reasonable
            administrative and legal costs) resulting from the breach.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Further legal action against you.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            - Disclosure of such information to law enforcement authorities as
            we reasonably feel is necessary.
          </Text>
          <Text fontSize={"sm"}>
            We exclude liability for actions taken in response to breaches of
            this acceptable use policy. The responses described in this policy
            are not limited, and we may take any other action we reasonably deem
            appropriate.
          </Text>
          <Text fontSize={"md"}>Changes to the acceptable use policy</Text>
          <Text fontSize={"sm"}>
            We may revise this acceptable use policy at any time by amending
            this page. You are expected to check this page from time to time to
            take notice of any changes we make, as they are legally binding on
            you. Some of the provisions contained in this acceptable use policy
            may also be superseded by provisions or notices published elsewhere
            on our site.
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </Page>
  );
};
