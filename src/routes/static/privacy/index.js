import React, { PureComponent } from 'react';
import {} from '../../../services/analytics';
import privacy from '../../../assets/images/pain/privacy.svg';

class Privacy extends PureComponent {
  componentWillMount() {
    if (window.analytics) window.analytics.page('Privacy');
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="component-privacy">
        <div className="top-container">
          <div className="top-inner-container">
            <img alt="Privacy" src={privacy} className="privacy-image" />
            <h2 className="header">
              PainTheory Privacy Policy
            </h2>
          </div>
        </div>

        <div className="privacy-container">

          <h2 className="title">
            PainTheory Privacy Policy
          </h2>

          <p className="sub-text">
            <em>
              Last Modified on August 7, 2018.
            </em>
          </p>

          <p className="sub-text">
            <strong>
              This Privacy Policy is effective on August 7, 2018 for all users.
            </strong>
          </p>

          <p className="sub-text">
            PainTheory values your privacy. This Privacy Policy details
            important information about the collection, use, disclosure,
            retention and protection of your personal information.
            PainTheory provides this notice about our
            practices to help you make an informed decision about whether
            to use or continue using the Site (as defined below).
            References to “we”, “us” and “PainTheory” are to Sway Health, Inc.,
            a Delaware corporation, operating in Denver, Colorado,
            with its principal offices at 3207 Madison Avenue,
            Greensboro, North Carolina, 27403.
          </p>

          <p className="sub-text">
            By registering for an account on the Site or accessing the Site,
            you are accepting the terms of this Privacy Policy and you are
            consenting to the collection, use, disclosure and retention
            of your personal information in accordance with the practices described
            in this policy. This policy may change from time to time
            (see Changes to this privacy policy).
            Your continued use of the Site after we make changes is deemed
            to be acceptance of those changes, so please check the policy
            periodically for updates.
          </p>

          <p className="sub-text">
            Please note that any content posted by you onto the Site, including but
            not limited to reviews, photos, videos, questions, or profile updates,
            becomes published content and is publicly available for anyone in the
            world to view. PainTheory will display this content on the Site and may
            distribute it through other third-party sites and services in its
            sole discretion.
          </p>

          <h2 className="privacy-header-text">
            Scope
          </h2>

          <p className="sub-text">
            This privacy policy applies to PainTheory.com, our PainTheory mobile
            applications (whether accessed by a tablet, mobile phone or other
            similar device) and our other websites (collectively, &quot;Site&quot;)
            whether you browse our Site (without registering for an account)
            or register for an account to use the Site as either a user or health
            care provider. This privacy policy also applies to information we
            collect in email, text and other electronic messages
            between you and us. This privacy policy does not apply to any third
            party websites, mobile applications or services, or the offline
            collection of personal information by PainTheory.
          </p>

          <p className="sub-text">
            We have created a separate &nbsp;
            <a href="https://www.paintheory.com/cookie">
              Cookie Policy
            </a>
            &nbsp; to detail our use of cookies and tracking technologies.
            The Cookie Policy forms part of this privacy policy and the
            Cookie Policy may be updated from time-to-time as specified
            in this privacy policy.
          </p>

          <h2 className="privacy-header-text">
            Information PainTheory Collects
          </h2>

          <p className="sub-text">
            PainTheory acts as a data controller when it collects personal
            information from you when you visit our Site or when you register
            to use the Site or access your account through the Site.
            For purposes of this privacy policy, “personal information”
            means any data and information relating to an identified or
            identifiable natural person. PainTheory collects several types
            of information from you, including:
          </p>

          <h3 className="privacy-title-text">
            Information PainTheory receives from you:
          </h3>

          <ul className="sub-text">
            <li>
              You provide us with personal information when you register
              on the Site. This information may include: first and last name,
              geographic location, email address username and password.
            </li>

            <li>
              You may also provide us with your personal information when
              you voluntarily fill in forms on our Site. For example,
              you may provide us with your first and last name, telephone number,
              email address and desired treatment when you fill out a form to
              be connected to a health care provider.
            </li>

            <li>
              When you purchase a Special Program or other paid products or
              services within the Site, you may provide us with your first
              and last name, email address and telephone number in order to
              process your payment. As explained below, we use a third party
              payment processor to process the payments on our behalf
              and we never have access to, store or collect your payment card details.
            </li>

            <li>
              You may also provide us with personal information when you update
              your account or through your participation in asking health care
              providers questions on the Site.
            </li>

            <li>
              You may also provide PainTheory with personal information in
              order to participate in various activities on the Site such as entering
              giveaways or sweepstakes, taking advantage of promotions,
              responding to surveys, subscribing to newsletters or other mailing
              lists or completing a form related to one of our products or services.
            </li>

            <li>
              You may provide personal information through communications or chats
              with other users on the Site. You understand that other users may contact
              you through direct messages and comments on the Site. Any messages
              that you send to other users through the Site may not be private or
              confidential if either you or the recipient of the message discloses
              it to another person or chooses to publicly post it. In addition,
              PainTheory may monitor these messages and not deliver the message
              if PainTheory, in its sole discretion, believes the messages are spam,
              fraudulent or otherwise violate the PainTheory Terms of Service
              or Code of Conduct.
            </li>

            <li>
              You may also provide us with your personal information when you
              report a problem with our Site.
            </li>

            <li>
              You also provide PainTheory with your information when you use
              certain features on the Site, such as submitting reviews,
              comments, questions and other postings on the Site
              (“User Contributions”). You understand that your User
              Contributions are published or displayed on public areas
              of the Site, or transmitted to other users of the Site or
              third parties. Your username (not your email address)
              is displayed to other users when you post User
              Contributions to the Site.
              If you use your first or last name as part of your
              username or your username is discoverable on the internet,
              then you are making this personal information publicly
              available and understand that other users may view
              this personal information and may be able to identify
              you from this personal information. PainTheory cannot
              control the actions of other users of the Site
              with respect to your User Contributions.
            </li>
          </ul>

          <h3 className="privacy-title-text">
            Information PainTheory collects automatically:
          </h3>

          <ul className="sub-text">
            <li>
              Cookies Information. When you visit the Site, we
              (and third parties with whom we partner) may send
              one or more cookies - a small text file containing
              a string of alphanumeric characters - to your
              computer that uniquely identifies your browser.
              The cookies may transmit information about you
              and your use of the Site such as your
              browser type, IP address, advertisement data
              and the date and time of your use of the Site.
              For more information about how PainTheory
               uses cookies and other tracking technologies,
              see our &nbsp;
              <a href="https://www.paintheory.com/cookie">
                Cookie Policy
              </a>
              .
            </li>

            <li>
              Log File Information. When you use the Site,
              our servers automatically record certain
              information that your web browser sends
              whenever you visit any website. These server
              logs may include information such as your
              web request, Internet Protocol (&quot;IP&quot;) address,
              browser type, browser language, referring/exit
              pages and URLs, platform type,
              number of clicks, domain names, landing pages, pages viewed
              and the order of those pages, the amount of time
              spent on particular pages and the date and
              time of your requests. PainTheory collects
              this information in order to improve the Site.
            </li>

            <li>
              Web Beacons. When you use the Site, we may employ
              third party web beacons or &quot;clear gifs&quot;
              which are used to track the online usage patterns
              of our users anonymously
              (i.e., in a non-personally-identifiable manner).
              In addition, we may also use web beacons in HTML-based emails
              sent to our users to track which emails are opened by recipients.
              PainTheory uses web
              beacons in order to measure the effectiveness of our offerings
              and content. For more information about how PainTheory
              uses web beacons, see our &nbsp;
              <a href="https://www.paintheory.com/cookie">
                Cookie Policy
              </a>
            </li>

            <li>
              Location Information and Device Information.
              When you access the Site from a mobile device or tablet,
              PainTheory may be able to collect your
              location information if this feature is enabled on
              your mobile device or tablet. In addition,
              if you are accessing the Site from your computer,
              then PainTheory may be able to collect your general
              location information from your IP address.
              PainTheory may use this information to provide you
              with a personalized user experience by showing you
              content relevant for your geographic location.
              If you are accessing the Site through a mobile
              device or tablet and you do not want to share your
              precise geolocation information with PainTheory,
              then you may be able to turn off this feature
              on your mobile device or tablet. PainTheory may also
              collect information it receives from your devices
              when you access the Site including: Device ID
               or unique identifier, device type, ID for advertising,
               and unique device token.
            </li>

            <li>
              Third-Party Use of Cookies and Other Tracking Technologies.
              Some content or applications, including advertisements,
              on the Site are served by third-parties,
              including advertisers, ad networks and servers, content
              providers, and application providers.
              These third parties may use cookies alone or in conjunction
              with web beacons and other tracking technologies to collect
              information about you when you use our Site.
              The information they collect may be associated
              with your personal information or they may collect information,
              including personal information, about your online activities
              over time and across different websites and other online services.
              They may use this information to provide you with interest-based
              (behavioral) advertising or other targeted content.
              PainTheory does not control these third parties’ tracking
              technologies or how they may be used.
              If you have any questions about an advertisement or other
              targeted content, you should contact the responsible provider directly.
            </li>
          </ul>

          <h3 className="privacy-title-text">
            Information PainTheory receives from other sources:
          </h3>

          <ul className="sub-text">
            <li>
              If you connect your Facebook or other third party
              social media account to your PainTheory account,
              you understand that PainTheory
              may receive information about you (including information
              about friends, connections, contact information
              and demographic information)
              from those third party sites and that information
              may be transmitted into your PainTheory account.
              If you connect to PainTheory with your
              third-party social media account, then you agree
              that PainTheory may collect, use and retain the
              information provided by the third-party
              social media sites. The information collected by
              PainTheory from the third party social media
              sites may depend on your privacy settings
              with those third party sites. As a result, you should
              consult the privacy notices or policies of
              those third party social media sites.
              PainTheory may also use plug-ins or other technologies
              from various social media sites.
              If you click on a link provided by a social media plug-in,
              you are voluntarily establishing a connection with
              the social media site and you should consult
              the privacy policy of the social media site
              to learn more about their privacy practices. This
              privacy policy does not apply to the third party
              social media websites.
            </li>

            <li>
              PainTheory may also receive personal information
              about you from third parties, for example, our business partners.
            </li>
          </ul>

          <h2 className="privacy-header-text">
            How PainTheory Uses Information
          </h2>

          <p className="sub-text">
            PainTheory uses the information, including personal
            information, that we collect about you or that you provide to us for a range of
            different business purposes. We use your personal
            information to track usage of the Site, to market the Site, to improve the
            Site features and functionality, to backup our systems
            and to provide customer support. Our legal basis for processing your
            personal information is to carry out our legal obligations,
            to fulfill a contract with you, to protect your vital interests,
            for our legitimate business interests, to provide
            you with notices, and for other purposes with your consent.
          </p>

          <h3 className="privacy-title-text">
            We use your personal information:
          </h3>

          <ul className="sub-text">
            <li>
              To provide our Site and its contents to you
            </li>

            <li>
              To provide customer support, including responding
              to your requests and contacting you about the requests
            </li>

            <li>
              To provide you notices about your account (such as
              updates to this privacy policy, the Terms of Service,
              Code of Conduct or for other customer service purposes)
            </li>

            <li>
              To provide other services requested by you such as
              to connect you to other users or health care providers on the Site.
              If you send direct messages or electronic messages
              through PainTheory to other users, please note that
              PainTheory may store these messages
              in order to deliver them and allow you or the recipient
              of the message to manage them. When contacting you to
              connect you to health care providers on the Site,
              PainTheory may contact you via email, SMS/text messages
              or by telephone. Message and data rates may apply
            </li>

            <li>
              To monitor the usage of our Site, improve the quality
              and design of the Site, and create new features, functionality, and services
            </li>

            <li>
              To investigate illegal  activities on the Site or
              activities that violate our &nbsp;
              <a href="https://www.paintheory.com/terms">
                Terms of Service
              </a>
            </li>

            <li>
              To detect, prevent and address technical issues, and
              improve the security of our Site
            </li>

            <li>
              To validate the authenticity of  and display the reviews
              and other content provided by you to other users
            </li>

            <li>
              To gather analysis or valuable information so that we
              can improve our Site
            </li>

            <li>
              To customize advertising you may see on our Site
            </li>

            <li>
              To contact you by email in order to offer you special
              promotions or poll your opinions through surveys or questionnaires
            </li>

            <li>
              To contact you by email or through your account to notify
              you of major Site changes
            </li>

            <li>
              To measure the performance of email marketing campaigns
            </li>

            <li>
              To allow you to participate in interactive features on our Site
            </li>

            <li>
            To fulfill any other purposes for which you provide it
            </li>
          </ul>

          <h3 className="privacy-title-text">
            With your consent, which you may withdraw at any time,
            PainTheory also uses your personal information:
          </h3>

          <ul className="sub-text">
            <li>
              To send commercial or marketing messages
            </li>

            <li>
              To provide you with a personalized user experience by showing
              you content relevant for your geographic location
            </li>

            <li>
              To customize advertising you may see on third party websites
            </li>

            <li>
              To provide you with marketing from third parties
            </li>

            <li>
              For any other purpose, with your consent
            </li>
          </ul>

          <h2 className="privacy-header-text">
            When PainTheory Discloses Information
          </h2>

          <h3 className="privacy-title-text">
            Third Party Service Providers
          </h3>

          <ul className="sub-text">
            <li>
              We provide personal information and non-personally-identifiable
              information to our subsidiaries, affiliated companies,
              or other businesses or persons for the purpose of processing such
              information on our behalf, including, but not limited to,
              providing analytics, monitoring our Site, A/B testing, marketing,
              distribution of surveys or giveaway programs.
              We require that these parties agree to process such personal
              information in compliance with this privacy policy and any other
              appropriate confidentiality and security measures as well as
              for the sole purpose of providing the specific service to PainTheory.
              The third party service providers are not permitted to share
              the personal information or use it for any other purpose.
            </li>

            <li>
              We do share anonymous aggregated user data (such as usage data,
              referring/exit pages and URLs, platform types, number of clicks, etc.)
              with interested third parties to assist them in understanding
              the usage patterns for certain content, services, advertisements, promotions,
              and/or functionality on the Site.
            </li>

            <li>
              We do allow the display of User Contributions available through
              the Site by our third party partners.
            </li>
          </ul>

          <h3 className="privacy-title-text">
            Fulfill Your Requests
          </h3>

          <p className="sub-text">
            We will use your personal information to fulfill the purpose for
            which you provide it. For example, if you submit your first and last name,
            email address, telephone number, treatment desired and questions
            or comments through a form on a specific health care provider’s profile page,
            then PainTheory will disclose this information to the health care
            provider identified on the form. In addition, if you submit your
            mobile phone number through this form, then you understand and consent
            to PainTheory and/or the health care provider sending you text messages.
            You understand that standard text messaging fees and data rates may apply.
            The information you provide through this form is not used by
            PainTheory for any other purpose.
          </p>

          <p className="sub-text">
            If you purchase a Special Program or other paid products and services
            through the Site, the payment information is transmitted directly via an
            encrypted connection to our third-party payment processors. PainTheory uses
            Stripe to process payments, and Stripe stores your personal and
            payment information in accordance with their respective privacy policies.
          </p>

          <p className="sub-text">
            PainTheory does not collect or store your payment information. You can learn
            more about Stripe’s privacy practices by reviewing Stripe’s privacy policy
            at &nbsp;
            <a href="https://stripe.com/us/privacy" _target="blank">
              stripe.com/us/privacy
            </a>
            . PainTheory does collect your name, email address and telephone number in order
            to process your payment and this information
            is stored by PainTheory in accordance with this privacy policy.
          </p>

          <h3 className="privacy-title-text">
            Third-party Advertisers
          </h3>

          <p className="sub-text">
            We do not share your personal information (such as name or email address)
            with other  third-party companies for their commercial or marketing
            use without your consent or except as part of a specific program or
            feature for which you will have the ability to opt-in or opt-out.
          </p>

          <p className="sub-text">
            PainTheory may allow other companies, called third-party ad servers
            or ad networks, to serve advertisements within the Site. These
            third-party ad servers or ad networks use cookies, web beacons and other
            tracking technologies to send, directly to your browser,
            the advertisements and links that appear on the Site. They automatically
            receive your  IP address when this happens. In addition, the third-party
            ad servers or ad networks may  use information about your visits to our
            Site and other websites to provide advertisements about goods and services
            of interest to you. You should consult the respective privacy policies of
            these third-party ad servers or ad networks. This privacy policy does not
            apply to, and we cannot control the activities of, such other advertisers
            or web sites. Please see our Cookie Policy to learn more about the cookies
            and web beacons used by the third-party ad servers and networks.
          </p>

          <h3 className="privacy-title-text">
            Legal Requests and to Comply with State and Federal Laws
          </h3>

          <p className="sub-text">
            We may disclose personal information if such action is necessary to comply
            with a legal obligation, to comply with state and federal laws or to respond
            to a court order, subpoena, or search warrant. PainTheory may disclose any of
            your messages or other content as part of investigations into the
            use and operation of the Site.
          </p>

          <p className="sub-text">
            PainTheory also reserves the right to disclose personal information that
            PainTheory believes, in good faith, is appropriate or necessary to enforce our
            Terms of Service, take precautions against liability, to investigate and
            defend itself against any third-party claims or allegations, to protect
            the security or integrity of the Site, and to protect the vital interests,
            property, or personal safety of PainTheory, our users or others.
          </p>

          <h3 className="privacy-title-text">
            In the Event of Merger, Sale, or Bankruptcy
          </h3>

          <p className="sub-text">
            In the event that PainTheory is acquired by or merged with a third party entity,
            we reserve the right, in any of these circumstances, to transfer or assign
            the information we have collected from you as part of such merger, acquisition,
            sale, or other change of control. In the unlikely event of our bankruptcy,
            insolvency, reorganization, receivership, or assignment for the benefit of
            creditors, or the application of laws or equitable principles affecting creditors
            rights generally, we may not be able to control how your information is treated,
            transferred, or used.
          </p>

          <h2 className="privacy-header-text">
            Your Choices
          </h2>

          <p className="sub-text">
            PainTheory strives to provide you with choices regarding the personal information
            you provide to us, and we understand that you have rights in your personal information
            such as: the right to access, correct, delete, object to and restrict the use of your
            personal information. We also understand that you have the right to obtain a copy of
            your personal information from us and to withdraw your consent of the processing of
            your personal information by us. We have created mechanisms to provide you with the
            following control over your personal information:
          </p>

          <ul className="sub-text">
            <li>
              You can choose not to provide personal information through our Site, in which case
              PainTheory may not be able to provide certain services to you or
              respond to your requests.
            </li>

            <li>
              You can access, review and change your personal information by logging into your
              account on the Site and visiting your account profile page. You may also send us an
              email at &nbsp;
              <a href="mailto:support@sway.md?subject=Inquiry">
                support@sway.md
              </a>
              &nbsp; to request access to, correct or delete any personal
              information that you have provided to us. In some cases, we may not be able to delete
              your personal information except by also deleting your user account.
            </li>

            <li>
              If you do not wish to have your email address or other contact information used by us
              to promote our Site or other products or services, you can opt-out at any time by
              logging into the Site and adjusting your user preferences in your account profile or
              by sending us an email stating your request to &nbsp;
              <a href="mailto:support@sway.md?subject=Inquiry">
                support@sway.md
              </a>
              . If we have sent  you a promotional email, you may unsubscribe to receive
              future emails via the unsubscribe link in that email.
            </li>

            <li>
              You may also request a copy of your personal information that you have provided to us
              directly by sending an email to &nbsp;
              <a href="mailto:support@sway.md?subject=Inquiry">
                support@sway.md
              </a>
              . We will provide you a copy of
              your personal information in a commonly used electronic form.
            </li>

            <li>
              You may also close your account by emailing Community Support at &nbsp;
              <a href="mailto:support@sway.md?subject=Inquiry">
                support@sway.md
              </a>
              . PainTheory will disassociate your User Contributions from your account.
              However, copies of your User Contributions may remain viewable in cached and
              archived pages, or might have been copied or stored by other Site users.
              In addition, PainTheory will continue to retain certain information about you in
              accordance with the privacy practices in this policy or if required to do so as a
              result of a legal obligation.
            </li>

            <li>
              If you wish to know what personal information we hold about you, and if you want it
              to be removed from our systems, please contact us at &nbsp;
              <a href="mailto:support@sway.md?subject=Inquiry">
                support@sway.md
              </a>
              .
            </li>
          </ul>

          <p className="sub-text">
            In order to fulfill the above requests, PainTheory may ask you to verify your identity
            before responding to such requests. Further, your right to access
            your personal information may not apply in some cases, including where
            providing access is unreasonably burdensome or
            expensive under the circumstances or where it would violate the
            rights of someone other than the individual requesting access.
          </p>

          <p className="sub-text">
            If you do not want us to use information that we collect or that you provide
            to us to deliver advertisements, for analytics or remarketing services,
            then you may opt-out as described below.
          </p>

          <ul className="sub-text">
            <li>
              For analytics, we use Google Analytics and Mixpanel, which are web analytics
              services that tracks and reports website traffic.
              Google and Mixpanel use the data
              collected to track and monitor the use of our Site. This data may be shared with
              other Google services or advertisers. Google and other advertisers may use the
              collected data to contextualize and personalize the ads of its own
              advertising network.
              You can opt-out of having your activity on the Site available to Google Analytics by
              installing the Google Analytics opt-out browser add-on. The add-on prevents Google
              Analytics JavaScript from sharing information with Google Analytics
              about visits activity.
              For more information on the privacy practices of Google, please visit Google Privacy
              &amp; Terms web page at: https://policies.google.com/privacy. Follow the instructions
              in this guide to prevent your browser from sending data to Mixpanel.
            </li>

            <li>
              PainTheory uses Google AdSense &amp; DoubleClick Cookie on the Site.
              Google, as a service
              provider, uses cookies to serve ads on our Site.
              Google’s use of the DoubleClick cookie
              enables it and its partners to serve ads to our users based on their visit to our Site
              or other websites on the internet.
              You may opt out of the use of the DoubleClick Cookie
              for interest-based advertising by visiting the Google Ads settings web page
              at: http://www.google.com/ads/preferences/. You can also opt out of receiving targeted
              ads from members of the Network Advertising Initiative (“NAI”) on the NAI’s website.
            </li>

            <li>
              PainTheory currently uses Google AdWords, which is a remarketing
              service provided by Google.
              You can opt-out of Google Analytics for Display Advertising and customize the Google
              Display Network ads by visiting the Google Ads settings page
              at: http://www.google.com/settings/ads. In addition, Google also recommends
              installing the Google Analytics opt-out browser add-on for your web browser,
              which is available at: https://tools.google.com/dlpage/gaoptout.
              This tool provides
              visitors with the ability to prevent their data from being collected
              and used by Google Analytics.
            </li>
          </ul>

          <h2 className="privacy-header-text">
            Our Commitment to Data Security
          </h2>

          <p className="sub-text">
            PainTheory uses commercially reasonable physical, managerial, and technical
            safeguards to preserve the integrity and security of your personal information.
            For example, to protect your privacy and security, we take reasonable steps
            (such as requesting a unique password) to verify your identity before granting
            you profile access or making corrections. You are responsible for maintaining
            the secrecy of your unique password and account information at all times.
            We cannot, however, ensure or warrant the security of any information you
            transmit to the Site and you do so at your own risk. Once we receive your
            information, PainTheory makes commercially reasonable efforts to ensure the
            security of your information. However, please note that this is not a
            guarantee that such information may not be accessed, disclosed, altered,
            or destroyed by breach of any of our physical, technical, or managerial safeguards.
          </p>

          <p className="sub-text">
            If PainTheory learns of a security systems breach, then we may attempt
            to notify you electronically so that you can take appropriate protective steps.
            PainTheory may post a notice on the Site if a security breach occurs.
            Depending on where you live, you may have a legal right to receive notice
            of a security breach in writing. To receive a written notice of a security
            breach (or to withdraw your consent from receiving electronic notice)
            you should notify us by email &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            .
          </p>

          <h2 className="privacy-header-text">
            Children’s Privacy
          </h2>

          <p className="sub-text">
            Protecting the privacy of children is important to PainTheory. For that reason,
            PainTheory does not knowingly collect or maintain personal information
            from persons under 18 years of age, and no part of the Site is directed
            to persons under 18. If you are under 18 years of age, then please do not use
            or access the Site at any time or in any manner. If PainTheory learns that
            personal information of persons under 18 years of age has been collected
            without verified parental consent, then PainTheory will take the
            appropriate steps to delete this information.
          </p>

          <h2 className="privacy-header-text">
            Visiting PainTheory.com from outside the United States
          </h2>

          <p className="sub-text">
            The Site is hosted in the United States. If you are accessing the Site
            from outside the United States, please be advised that the information you
            provide PainTheory may be transferred to, processed and stored in the
            United States where the PainTheory servers are located and our central
            database is operated. You acknowledge and understand that the data protection
            and other laws of the United States might not be as comprehensive as those
            in your country. Through your continued use of the Site
            (which is governed by U.S. law, this privacy policy, and our Terms of Service),
            you consent to the transfer of your personal information to the United States.
          </p>

          <h2 className="privacy-header-text">
            Retention of Personal Information
          </h2>

          <p className="sub-text">
            PainTheory will retain your personal information only for as long as is
            necessary for the purposes set forth in the privacy policy. PainTheory will
            retain and use your personal information to the extent necessary to comply
            with our legal obligations (for example, if we are required to retain your
            personal information to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>

          <h2 className="privacy-header-text">
            Important Information
          </h2>

          <h3 className="privacy-title-text">
            California Privacy Rights for California Residents.
          </h3>

          <p className="sub-text">
            California residents may request certain information regarding the disclosure
            of your personal information by PainTheory to third parties for direct
            marketing purposes. As noted above, PainTheory does not disclose your personal
            information to third parties for direct marketing purposes unless you have
            first agreed to such disclosure. However, if you would like to make such a request,
            then please contact PainTheory by emailing &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            .
          </p>

          <h3 className="privacy-title-text">
            Call Monitoring and Recording
          </h3>

          <p className="sub-text">
            Telephone calls to or from PainTheory may be recorded and monitored by us.
            PainTheory records and monitors telephone calls for user support services and for
            staff training purposes. PainTheory retains the recordings for a reasonable period
            of time in order to fulfill the purpose for which the telephone calls were recorded
            and then the recordings are deleted.
          </p>

          <h3 className="privacy-title-text">
            How We Respond to Do Not Track Signals
          </h3>

          <p className="sub-text">
            PainTheory currently does not respond to &quot;Do Not Track&quot; signals because there
            is not an industry or legal standard for such signals.
          </p>

          <h3 className="privacy-title-text">
            How We Respond to Do Not Track Signals
          </h3>

          <p className="sub-text">
            PainTheory currently does not respond to &quot;Do Not Track&quot; signals because there
            is not an industry or legal standard for such signals.
          </p>

          <h3 className="privacy-title-text">
            Links to Other Sites
          </h3>

          <p className="sub-text">
            Our Site may contain links to other websites that are not operated by PainTheory.
            If you click on a third-party link, you will be directed to that third-party’s website.
            This privacy policy does not apply to the third-party websites and PainTheory
            encourages you to review the privacy policy of the third-party websites you visit.
          </p>

          <h2 className="privacy-header-text">
            Changes to this Privacy Policy
          </h2>

          <p className="sub-text">
            This Privacy Policy may be revised periodically and this will be reflected by
            the &quot;effective date&quot; above.
            If we make any material changes in the way in which
            your personal information is collected, used or disclosed, then we will notify
            you through the Site or by email. You are advised to review this privacy policy
            periodically for any changes. Changes to this privacy policy are effective when
            they are posted on this page. If you object to any of the changes to the
            privacy policy, then you can close your account by contacting us as provided below.
          </p>

          <h2 className="privacy-header-text">
            How You Can Contact Us
          </h2>

          <p className="sub-text">
            If you have any questions or complaints about the use or disclosure of your
            personal information, this privacy policy, or our privacy practices, please contact
            PainTheory by sending an email to our data protection office at &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default Privacy;
