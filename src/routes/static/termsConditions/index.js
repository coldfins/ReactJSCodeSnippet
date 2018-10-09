import React, { PureComponent } from 'react';
import {} from '../../../services/analytics';
import privacy from '../../../assets/images/pain/privacy.svg';

class TermsConditions extends PureComponent {
  componentWillMount() {
    if (window.analytics) window.analytics.page('Terms & Conditions');
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="component-terms">
        <div className="top-container">
          <div className="top-inner-container">
            <img alt="Terms" src={privacy} className="terms-image" />

            <h2 className="header">
              PainTheory Terms of Service
            </h2>
          </div>
        </div>

        <div className="terms-container">
          <h2 className="title">
            PainTheory Terms of Service
          </h2>

          <p className="sub-text">
            PainTheory (a brand owned by Sway Health, Inc.) has separate Terms
            of Service for our Patient Members and for our participating Care
            Providers. See below:
          </p>

          <hr />

          <h2 className="terms-header-text">
          PainTheory Care Provider Terms of Service
          </h2>

          <p className="sub-text">
            Please read these Terms of Service (&quot;Terms&quot;)
            carefully. These Terms are
            between you (&quot;you&quot; or &quot;your&quot;)
            and Sway Health, Inc.
            (&quot;PainTheory,&quot; &quot;we&quot; or &quot;our&quot;).
            The use of &quot;you&quot; or &quot;your&quot; in these Terms
            may refer to Patients, general website visitors, a healthcare provider
            accessing the Site (as defined below) as a consumer, or anyone accessing
            the Site (as defined below) (collectively, &quot;Patient Members&quot;).
            These Terms govern your use of the website,  &nbsp;
            <a href="https://www.realself.com/">
              www.paintheory.com
            </a>
            , and the
            services and information available on the
            website (collectively, &quot;Site&quot;)
            whether you access the Site through your computer, mobile device,
            tablet or any PainTheory app.
          </p>

          <p className="sub-text">
            You accept and agree to be bound by these Terms, the PainTheory Privacy
            Policy, &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp; and any other policies in place when you access
            or use the Site or by clicking the &quot;Submit&quot;
            button when you register for
            an account with PainTheory. If you do not agree to abide by or be bound
            by these Terms or any of the other policies of PainTheory, then do not
            register for an account, access or use the Site.
          </p>

          <h3 className="terms-title-text">
            1. Modification
          </h3>

          <p className="sub-text">
            PainTheory reserves the right to make changes to the Site, these Terms
            and other policies. If PainTheory makes material changes to these Terms
            or other policies, then PainTheory will either notify you by email or
            by posting a notice on the Site prior to the effective date of the
            changes. PainTheory will also indicate at the bottom of this page the
            date these Terms were last updated. These Terms are effective upon
            acceptance by new users. For current users, these Terms are effective
            as of August 7, 2018 and supersede all previous versions of the
            PainTheory Terms of Service. If any section or portion of these Terms
            shall be deemed invalid, void or for any reason unenforceable, then
            that section of the Terms shall be deemed severable and shall not
            affect the validity of the remaining condition. Your continued use
            of the Site after any such changes are posted constitutes your acceptance
            of the new Terms. If you do not agree to abide by these or any future
            terms, you may not use or access the Site.
          </p>

          <h3 className="terms-title-text">
            2. No Medical Advice
          </h3>

          <p className="sub-text">
            The content (which includes any text, graphics, images or other material
            contained, accessed or entered on the Site by you or a healthcare provider
            (&quot;Content&quot;) is for educational/informational purposes only and is not a
            substitute for medical advice, diagnosis or treatment provided by a
            qualified healthcare provider. Any communication between you and Care
            Providers on the Site (including any responses by Care Providers to
            questions posted on the Site or through any feature available on the Site)
            is for general informational purposes only and does not create nor is it
            intended to create a physician-patient relationship as defined by federal
            and state law. Your reliance on any information (including any links to
            third party websites containing any information about Care Providers) or
            Content provided on the Site, whether or not it is provided by a
            healthcare provider, is solely at your own risk. You should always seek
            the advice of your healthcare provider for any questions you may have
            about your own medical condition.
          </p>

          <h3 className="terms-title-text">
            3. How and When You May Use the Site
          </h3>

          <p className="sub-text">
            You may use the Site only to post reviews based on your own personal
            experience, to communicate with other Patient Members about questions
            on spine, joint, bone, pain, or other musculoskeletal issues/treatments
            and to post questions on the Site. You may only use the Site for personal,
            non-commercial uses, and you may not use the Site to advertise or
            promote a product, service, procedure, business, healthcare provider
            or another person.
          </p>

          <p className="sub-text">
            <strong>
              You may not use the Site:
            </strong>
          </p>

          <ul className="sub-text">
            <li>
              If you are under 18.
            </li>

            <li>
              In any way or for any purpose that is against any local,
              state, federal or any other applicable laws.
            </li>

            <li>
              In any way or for any purpose that harms or endangers us
              or our affiliates, resellers, distributors, service providers
              and/or suppliers (collectively, the &quot;PainTheory Partners&quot;),
              or any customer of a PainTheory Partner;
            </li>

            <li>
              To exploit, solicit or harm minors;
            </li>

            <li>
              To copy any Content from the Site, including, but not
              limited to, photographs, and post those photographs or
              other Content on another third-party website.
            </li>

            <li>
              To post or submit any Content that is racist, sexist,
              inflammatory, defamatory, hateful, harassing, threatening,
              abusive, profane, obscene, vulgar or sexually explicit,
              false, misleading, fraudulent, invasive of another&#39;s privacy
              or publicity rights, infringing of another&#39;s intellectual
              property rights, contains any trade secrets or other confidential
              information, or otherwise offensive or objectionable;
            </li>

            <li>
              To promote, encourage or glorify violence, self-harm,
              suicide, anorexia, bulimia, or any other practice that is
              unhealthy or harmful;
            </li>

            <li>
            To post your name, email address(es) or telephone number(s),
            URL(s) or any other confidential or personally identifiable
            information about you or any other person on the Site;
            </li>

            <li>
            To provide or purport to provide medical advice, prescription,
            diagnosis, or treatment recommendations;
            </li>

            <li>
              To register for multiple accounts or use the account of
              another person without their authorization;
            </li>

            <li>
              To impersonate or pretend to be any person other than yourself,
              including to impersonate or pretend to be a healthcare provider;
            </li>

            <li>
              To attempt to solicit business or direct website visitors to a
              non-PainTheory site for commercial purposes or spamming any
              PainTheory Care Providers, Patient Members or other users;
            </li>

            <li>
              You agree not to use any data mining, robots, or similar data
              gathering and extraction methods in connection with the Site;
            </li>

            <li>
              To post links to sites or files that contain or are viruses,
              spyware, malware, or other harmful content;
            </li>

            <li>
              To attempt to interfere with or disrupt the Site or any
              person’s ability to use the Site;
            </li>

            <li>
              To create and upload reviews or comments in exchange for
              monetary compensation or other incentive; or
            </li>

            <li>
              For any purpose for which the Site is not intended.
            </li>
          </ul>

          <p className="sub-text">
            We may tell you about certain specific harmful or additional
            prohibited uses in our  &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp;  or other notice available
            through the Site. We have, however, no duty to do so.
            You agree to abide by any  &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp;  or other notices
            we provide, which may be changed from time to time. Without
            limiting the foregoing, you agree to abide by these Terms,
            the  &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp;  and any other policies PainTheory has in place.
            Any use of the Site other than as specifically authorized herein,
            without the prior written permission of PainTheory,
            is strictly prohibited.
          </p>

          <p className="sub-text">
            In addition, PainTheory is not obligated to enforce these
            Terms against another user, healthcare provider or other
            third-party on your behalf. If you believe another user,
            healthcare provider or other third-party has violated these
            Terms, then please contact PainTheory by emailing &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            &nbsp; PainTheory reserves the right to investigate the matter
            and take whatever action PainTheory deems appropriate
            in its sole discretion.
          </p>

          <h3 className="terms-title-text">
            4. Authorization and Acknowledgement of Care Provider
            Relationships and Care Provider Lists
          </h3>

          <p className="sub-text">
            In connection with using the Site and the Services to
            locate and schedule appointments with Care Providers,
            you understand that:
          </p>

          <p className="sub-text">
            YOU ARE RESPONSIBLE FOR CHOOSING YOUR OWN HEALTHCARE PROVIDER,
            INCLUDING WITHOUT LIMITATION, DETERMINING WHETHER THE APPLICABLE
            HEALTHCARE PROVIDER IS SUITABLE FOR YOUR HEALTHCARE NEEDS
            BASED ON SPECIALTY, EXPERIENCE, QUALIFICATION, LICENSES AND
            OTHER IMPORTANT FACTS AND CIRCUMSTANCES THAT COULD
            IMPACT YOUR CARE.
          </p>

          <p className="sub-text">
            PainTheory does not currently take steps to (a) verify
            that Care Providers participating in the Services hold
            certain active licenses, certifications or registrations
            required by law to practice the specialties of the services
            offered by them through the Services, or (b) verify that
            Care Providers are not listed in the U.S. Department of
            Health and Human Services Office of the Inspector General
            Exclusion database. PainTheory may exclude Care Providers
            from our Services who, in PainTheory’s discretion,
            have engaged in inappropriate or unprofessional conduct.
          </p>

          <p className="sub-text">
            Some Care Providers listed through the Services enter
            into contracts with us, and may pay us a fee in order
            to be marketed through or to use the Services. To help
            you find Care Providers who may be suitable for your
            needs, and enable the maximum choice and diversity of
            Care Providers participating in the Services, we will
            provide you with lists and/or profiles of Care Providers.
            These results are based on information you provide to
            us, such as insurance information, geographical location,
            healthcare specialty, condition, treatment option, etc..
            They may also be based on other criteria
            (including, for example, Healthcare Provider availability,
            past selections by and/or ratings of Care Providers by
            you or by other PainTheory users, and past experience
            of PainTheory users with Care Providers).
            Note that PainTheory (a) does not recommend or endorse
            any Care Providers, and (b) does not make any
            representations or warranties with respect to these
            Care Providers or the quality of the healthcare
            services they may provide. We may show you advertisements
            or sponsored results (“Sponsored Results”) as a part of
            the PainTheory Verified Provider Program
            (“Verified Provider Program”). These results may show up
            in numerous areas on the site and may also appear above
            search results labeled “PainTheory Verified Provider.”
            PainTheory receives additional fees from Care Providers
            for providing Sponsored Results via the Verified
            Provider Program. Sponsored Results shown through the
            Verified Provider Program are not, and should not be
            considered, an endorsement or recommendation by
            PainTheory of the Healthcare Provider.
          </p>

          <h3 className="terms-title-text">
            5. Your User Account; Email Consent
          </h3>

          <p className="sub-text">
            In order to use some of the features on the Site,
            you are required to register and provide information
            about yourself to us and create a User Account
            (&quot;User Account&quot;).
            It is your responsibility to maintain
            the confidentiality of your User Account information,
            including your User Account password. In addition,
            you are responsible for all activities that occur in
            connection with your User Account. You must tell us
            right away about anyone using your User Account without
            your consent, or any security breach that relates
            to the Site or your User Account. You agree to provide
            PainTheory with accurate, current and complete
            information about yourself as may be prompted in any
            registration forms on the Site and promptly update
            any such information to keep it accurate,
            current and complete. PainTheory reserves the right to
            refuse to provide services to anyone, including
            terminating your User Account and/or preventing you
            from accessing the Site or your User Account,
            with or without cause, at any time and in its
            sole discretion.
          </p>

          <p className="sub-text">
            By using the Site, you consent to receive emails
            from PainTheory, which may include commercial emails
            provided such emails are in accordance with the
            preferences you select in the email and notifications
            page of the My Profile section of the Site or by emailing &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            . You may change such preferences by changing your
            account settings on the email and notifications page
            of the My Profile section of the Site or via the
            unsubscribe link in all commercial emails.
            Please note that as long as you maintain a
            User Account, you may not &quot;opt out&quot; of receiving
            service or account-related emails from PainTheory and
            all agreements, notices, disclosures, and other communications
            that we provide to you electronically satisfy any
            legal requirement that such communications be in writing.
          </p>

          <h3 className="terms-title-text">
            6. Materials You Post or Provide; Communications Monitoring
          </h3>

          <p className="sub-text">
            You may be able to post or submit reviews, comments, questions,
            direct messages, photographs, videos (including videos created
            through a third-party tool) and other materials on or through
            the Site (collectively,
            &quot;Submission&quot; or &quot;Submissions&quot;).
            Your Submissions, (including to the extent applicable personally
            identifiable information), are made voluntarily and are subject
            to the PainTheory  &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp;  and the &nbsp;
            <a href="https://www.paintheory.com/privacy">
              PainTheory Privacy Policy
            </a>
            .
            You understand PainTheory is not required to treat any of your
            Submissions as confidential. In addition, you understand and
            agree that your Submissions (including your username associated
            with your Submissions) are not confidential and are publicly
            available for anyone to view on the Site.
          </p>

          <p className="sub-text">
            PainTheory does not claim ownership of the Submission(s) you
            post or submit on the Site. With the exception of any information
            you directly submit through a healthcare provider’s profile or
            inquiry form, by posting or otherwise providing your Submission
            on the Site, you are hereby expressly granting PainTheory a
            nonexclusive, irrevocable, worldwide, perpetual, royalty free
            license (including sublicense) to use, copy, distribute, publicly
            display, publicly perform, modify (including create
            derivative works) or transmit (including digital transmission of
            a sound recording) your Submission, in connection with the Site
            and the PainTheory business, including without limitation
            promoting and redistributing part or all of the Site or the
            PainTheory business, in any media formats and through any media
            channels now known or hereafter developed. You also grant
            PainTheory permission to publish and use your name, likeness
            and voice in connection with your Submission. In addition, by
            uploading a Submission to the Site, you hereby waive any rights
            of privacy or publicity. You also grant PainTheory the right to
            grant any of the above rights to other persons or entities,
            including for the purpose of promoting the Site or the PainTheory
            business, without any compensation or obligation to you.
            You also grant PainTheory the right and authority to send
            takedown notices (on your behalf) related to your Submission
            to any individual or entity under the Digital Millennium Copyright Act.
          </p>

          <p className="sub-text">
            PainTheory will not pay you for your Submission. You also
            understand and agree that PainTheory may, in its sole
            discretion, refuse, or remove part or all of your Submission
            from the Site at any time if PainTheory considers the
            Submission to be illegal, offensive, harassing, infringing,
            inappropriate or otherwise violates these Terms or the PainTheory
            &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp;  or other policies. For each Submission,
            you represent and warrant that you have all rights necessary
            for you to post or submit the Submission and to grant the licenses
            and permissions in this section and that you are solely responsible
            for the content of your Submission. Further, you represent and
            warrant that your Submission does not violate any law.
          </p>

          <p className="sub-text">
            PainTheory reserves the right to review and monitor Submissions
            but is under no obligation to do so. In addition, PainTheory is
            not responsible for screening, monitoring or editing Submissions.
            However, we may monitor your Submissions and may disclose information
            about you, including the contents of such Submission, if we
            deem it necessary to: (1) conform to legal requirements or respond
            to legal process; (2) ensure your compliance with these Terms or
            other PainTheory guidelines or policies; or (3) protect the rights,
            property, or interests of PainTheory, its employees,
            its users, or the public.
          </p>

          <p className="sub-text">
            You may also request information directly from a specific healthcare
            provider by submitting an inquiry through their profile or inquiry form.
            You understand these requests, including personally identifiable
            information, are made voluntarily and are subject to the &nbsp;
            <a href="https://www.paintheory.com/privacy">
            PainTheory Privacy Policy
            </a>
            . There is no guarantee that a healthcare provider will
            respond to any request submitted through their profile or inquiry form.
            In addition, by submitting a request to a healthcare provider through
            the Site, you understand that PainTheory may contact you by phone,
            email or text message about your request. All standard message and
            data charges will apply to any text messages.
          </p>

          <h3 className="terms-title-text">
            7. Reviews or Content Posted by Others
          </h3>

          <p className="sub-text">
            PainTheory does not have any responsibility, including editorial
            control, of any content posted by other PainTheory Patient Members,
            Care Providers or other third party content providers on the Site.
            The statements or content posted by PainTheory Patient Members,
            Care Providers or other third party content providers on the Site
            are those of the Patient Members, Care Providers or other third
            party content providers and are not the opinion of PainTheory.
            PainTheory does not make any representations or warranties about
            the accuracy or reliability of the content, including the opinions,
            statements or information posted by the PainTheory Patient Members,
            Care Providers or other third party content providers on the Site.
            The PainTheory Patient Members, Care Providers and other third
            party content providers are solely responsible for the
            content posted by them respectively.
          </p>

          <p className="sub-text">
            PainTheory does not endorse or recommend any specific content,
            procedures, products, opinions, Care Providers or any other
            material or information available on the Site. In addition,
            the Care Providers featured on the Site are not employees or
            independent contractors of PainTheory and PainTheory does not
            make any warranties about the qualifications of the Care Providers
            or the costs of the procedures or products featured on the Site.
          </p>

          <h3 className="terms-title-text">
            8.Copyright Policy
          </h3>

          <p className="sub-text">
            If you believe that your Submission or any other work has
            been used in a way that constitutes copyright infringement,
            or your intellectual property rights have been otherwise violated,
            please notify Sway Health, Inc. at &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            .
            Provide all of the following in writing: (1) identify the
            copyrighted work you claim has been infringed or if multiple
            copyrighted works, then a representative list of such works on
            the website; (2) identify the material on the website that you
            claim is infringing and with enough detail so that we may locate
            the material; (3) provide a statement that you have a good faith
            belief that the use of the material on the website is not
            authorized by the copyright owner, its agent, or the law; (4)
            provide a statement declaring that the notification is accurate,
            and, under penalty of perjury, that you are the owner of the
            copyright interest involved or that you are authorized to
            act on behalf of the exclusive owner; (5) provide information
            reasonably sufficient to permit PainTheory to contact you,
            such as an address, telephone number, and email address;
            and (6) your physical or electronic signature.
          </p>

          <p className="sub-text">
            Upon receipt of notice as described above, PainTheory will
            take whatever action, in its sole discretion, it deems
            appropriate, including removal of the alleged infringing
            material from the website.
          </p>

          <h3 className="terms-title-text">
            9. Photograph/Video Policy
          </h3>

          <p className="sub-text">
            Care Providers must have consent from individuals and
            comply with all applicable laws (as well as the CP Terms,
              PainTheory,  &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp;  and the healthcare
            Provider  &nbsp;
            <a href="https://www.paintheory.com/sharing">
              Photo &amp; Video Guidelines
            </a>
            ) before uploading,
            submitting or posting any photographs or videos of
            individuals on the Site. If a healthcare provider or other
            third-party has submitted, uploaded or posted a photograph
            or video of you on the Site and you want that photograph
            or video removed from the Site, please contact PainTheory at &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            . Please provide the following information about the
            photograph or video in order for PainTheory to be able to
            identify the photograph: (1) identify the photograph and
            provide PainTheory with enough detail about the photograph
            so PainTheory can locate it on the Site; (2) provide a
            statement that you have a good faith belief that the
            photograph is of you and was either not authorized to be
            uploaded, posted or submitted to PainTheory or your healthcare
            provider had permission to upload, post or submit the photograph
            but you no longer want the photograph displayed on the
            PainTheory Site; (3) provide a statement declaring that the
            notification is accurate, and, under penalty of perjury,
            that you are the person in the photograph or that you are
            authorized to act on behalf of the person in the photograph;
            (4) provide information reasonably sufficient to permit
            PainTheory to contact you, such as an address, telephone
            number, and email address and (5) your physical
            or electronic signature.
          </p>

          <h3 className="terms-title-text">
            10. Links to Other Websites; Third Party Promotions
          </h3>

          <p className="sub-text">
            The Site may contain links to other websites maintained by
            third parties (&quot;Third Party Website&quot;) or you may be able
            to log into the Site through a Third Party Website.
            Third Party Websites are not under the control of
            PainTheory and PainTheory does not endorse or assume
            any responsibility for the content, information or
            functionality of any Third Party Website. As a result,
            your access or use of any Third Party Website is at your
            own risk and these Terms, &nbsp;
            <a href="https://www.paintheory.com/privacy">
              Privacy Policy
            </a>
            ,  &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp; and any other policies do not apply or govern any Third
            Party Website. You expressly relieve PainTheory of any
            and all liability related to the functionality, content
            or information contained on any Third Party Website.
            In addition, your dealings with or participation in
            promotions of third parties (including Care Providers)
            found on the Site, including payment and delivery of goods
            or services or any other terms (such as warranties) are
            solely between you and the third parties. You agree that
            PainTheory shall not be responsible to you for any loss or
            damage of any kind relating to your dealings with such third parties.
          </p>

          <h3 className="terms-title-text">
            11. PainTheory Intellectual Property Rights
          </h3>

          <p className="sub-text">
            PainTheory grants you a limited, personal, revocable,
            non-assignable and non-exclusive license to use the Site.
            PainTheory owns the text, photographs, videos, visual
            interfaces, interactive features, graphics, design,
            compilation, computer code, products, software,
            decision algorithms, and all other elements and components
            of the Site (&quot;PainTheory Content&quot;), excluding your Submissions.
            PainTheory owns the copyrights, trademarks, service marks,
            trade names and other intellectual property and proprietary
            rights throughout the world associated with the PainTheory
            Content and the Site which are protected by copyright,
            trade dress, patent, trademark laws and all other applicable
            intellectual and proprietary rights and laws. You may not
            modify, reproduce, republish, frame, download, transmit,
            distribute, rent, lease, loan, sell, assign, license,
            sublicense, reverse engineer, disassemble, publicly display
            or create derivative works based on any of the PainTheory
            Content in whole or in part, or the Site except as
            expressly authorized in writing by PainTheory.
            In addition, PainTheory does not grant any express or
            implied rights in and to the Site or PainTheory Content,
            and all rights in and to the Site and the PainTheory
            Content, are retained by PainTheory.
          </p>

          <h3 className="terms-title-text">
            12. PainTheory DISCLAIMS ALL WARRANTIES
          </h3>

          <p className="sub-text">
            PAINTHEORY PROVIDES THE SITE, THE PAINTHEORY CONTENT
            AND ALL INFORMATION, MATERIALS AND OTHER CONTENT AVAILABLE
            ON THE SITE ON AN &quote;AS IS&quote; AND
            &quote;AS AVAILABLE&quote; BASIS
            &quote;WITH ALL FAULTS.&quote;
            PAINTHEORY DISCLAIMS ALL WARRANTIES OF
            ANY KIND (WHETHER EXPRESS OR IMPLIED) AS WELL AS ANY
            GUARANTEES OR CONDITIONS RELATED TO THE SITE. WITHOUT
            LIMITING THE FOREGOING, TO THE FULLEST EXTENT PERMITTED BY LAW,
            PAINTHEORY DISCLAIMS ALL EXPRESS AND IMPLIED WARRANTIES,
            INCLUDING THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, WORKMANLIKE EFFORT AND NON-INFRINGEMENT.
            PAINTHEORY DOES NOT REPRESENT OR WARRANT THAT THE SITE OR
            ANY ELECTRONIC COMMUNICATION FROM PAINTHEORY WILL BE
            UNINTERRUPTED, ERROR-FREE OR FREE OF VIRUSES OR OTHER
            HARMFUL COMPONENTS OR DEFECTS. IN ADDITION, PAINTHEORY
            EXPRESSLY DISCLAIMS ANY AND ALL RESPONSIBILITY AND LIABILITY
            WITH RESPECT TO SEPARATE AGREEMENTS YOU MAY MAKE WITH CARE
            PROVIDERS OR OTHER THIRD PARTIES AND YOU WILL LOOK SOLELY TO
            SUCH PERSONS AND/OR ENTITIES WITH RESPECT TO ANY AND
            ALL CLAIMS ARISING OUT OF SUCH AGREEMENTS. FURTHER,
            PAINTHEORY DOES NOT REPRESENT OR WARRANT THAT THE SITE
            OR THE CONTENT AVAILABLE ON THE SITE WILL ASSIST YOU IN
            FINDING A SUITABLE HEALTHCARE PROVIDER OR FOR ANY OTHER PURPOSE.
            YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE SITE IS
            ENTIRELY AT YOUR OWN RISK. WHILE PAINTHEORY TAKES
            REASONABLE PHYSICAL, TECHNICAL AND ADMINISTRATIVE MEASURES
            TO SECURE THE PAINTHEORY SITE, PAINTHEORY DOES NOT GUARANTEE
            THAT THE PAINTHEORY SITE CANNOT BE COMPROMISED.
          </p>

          <h3 className="terms-title-text">
            13. LIABILITY LIMITATION; YOUR EXCLUSIVE REMEDY
          </h3>

          <p className="sub-text">
            TO THE EXTENT PERMITTED BY LAW, IN NO EVENT WILL PAINTHEORY
            OR THE PAINTHEORY PARTNERS BE LIABLE TO YOU OR TO ANY THIRD
            PARTY FOR ANY INDIRECT, CONSEQUENTIAL, SPECIAL, INCIDENTAL,
            EXEMPLARY, OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED,
            TO LOSS PROFITS AND DAMAGES THAT RESULT FROM INCONVENIENCE,
            DELAY OR LOSS OF USE) ARISING OUT OF OR RELATING TO THE
            USE OF THE SITE EVEN IF PAINTHEORY OR ANY OF THE PAINTHEORY
            PARTNERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            IN ADDITION, IN NO EVENT SHALL PAINTHEORY BE LIABLE TO YOU OR
            TO ANYONE FOR ANY DECISION MADE OR ACTION TAKEN BY A PARTY
            (INCLUDING, WITHOUT LIMITATION, BY ANY USER OR PATIENT MEMBER)
            IN RELIANCE ON ANY CONTENT OR OTHER INFORMATION ABOUT CARE
            PROVIDERS OR PROCEDURES POSTED ON THE SITE. PAINTHEORY SHALL
            NOT BE LIABLE FOR ANY DAMAGES, DELAYS, OR NON-PERFORMANCE
            CAUSED BY FACTORS OR ACTIVITIES BEYOND ITS REASONABLE CONTROL,
            INCLUDING DELAYS AND NONPERFORMANCE CAUSED BY VIRUSES, DENIAL
            OF SERVICE ATTACKS, OTHER ACTS OR OMISSION OF THIRD PARTIES,
            INTERNET SERVICE PROVIDER FAILURES, STRIKES, LOCKOUTS, WORK
            SLOWDOWNS OR STOPPAGES, ACCIDENTS, FIRES, TERRORISM, ACTS OF GOD,
            GOVERNMENT RESTRICTIONS, MECHANICAL, ELECTRONIC OR
            COMMUNICATIONS FAILURES, WAR OR INSURRECTION.
          </p>

          <p className="sub-text">
            NOTWITHSTANDING ANYTHING IN THESE TERMS, THE AGGREGATE
            LIABILITY OF THE PAINTHEORY PARTNERS TO YOU IN CONNECTION
            WITH THE SITE (INCLUDING ANY THIRD PARTY CONTENT ON THE SITE)
            AND THESE TERMS WILL BE LIMITED TO THE AMOUNT, IF ANY, PAID BY
            YOU TO PAINTHEORY FOR USE OF THE SITE IN THE SIX (6) MONTHS
            PRIOR TO THE ACT THAT GAVE RISE TO THE LIABILITY, EVEN IF
            PAINTHEORY HAS BEEN ADVISED OF THE POSSIBILITY OF ANY OF THE
            FOREGOING TYPES OF LOSSES OR DAMAGES.
          </p>

          <p className="sub-text">
            Some jurisdictions do not allow the exclusion or limitation of
            incidental or consequential damages, so the above limitations
            or exclusions may not apply to you.
          </p>

          <h3 className="terms-title-text">
          14. Changes to the Site; Updates; Suspension of Your
          Use of the Site; User Account Closure
          </h3>

          <p className="sub-text">
            We may change the Site or delete features of the Site at
            any time and for any reason without notice in our
            sole discretion. We are not obligated to provide maintenance,
            technical support or updates to you for the Site, but we
            may provide these in our discretion. We may terminate or
            suspend your use of the Site at any time in our discretion.
            Our termination or suspension may be without cause and/or
            without notice. You may terminate your use of the Site and
            close your User Account at any time, with or without cause,
            by emailing us at &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            . Upon termination, your right to use the Site ceases immediately.
            Once your use of the Site is terminated or suspended,
            any data you have stored on the Site may not be retrieved later.
            In addition, even if you stop using the Site or your account is
            suspended by PainTheory, PainTheory may continue to show
            some or all of your Submissions.
          </p>

          <h3 className="terms-title-text">
            15. Jurisdiction
          </h3>

          <p className="sub-text">
            PainTheory controls and operates the Site from its offices
            in Denver, Colorado in the United States and PainTheory does
            not represent that the Site, the Content, the PainTheory Content
            or the Submissions by either Care Providers or Patient Members,
            are appropriate, available or may be downloaded for use outside
            the United States. If you are located outside the United States
            and you use the Site and the Service, then you are responsible
            for complying with all of your local laws if and to the extent
            your local laws are applicable. These Terms and the Site are
            governed by United States federal law and the laws of the
            State of Colorado, excluding any conflicts of law provisions.
            Registering for a User Account, accessing, browsing or otherwise
            using the Site means you hereby consent to the exclusive jurisdiction
            of the state and federal courts in Denver County, Colorado
            and you waive all defenses of lack of personal jurisdiction and
            forum non conveniens with respect to venue and jurisdiction in
            the state and federal courts of Denver County, Colorado.
          </p>

          <h3 className="terms-title-text">
            16. Indemnification
          </h3>

          <p className="sub-text">
            You agree to indemnify and hold harmless PainTheory and the
            PainTheory Partners from and against any loss, liability,
            claim, demand, damages, costs and expenses, including
            reasonable attorneys’ fees, arising out of or in connection
            with: (a) your Submissions or any other Content you post or
            submit to or through the Site; (b) your use of the Site;
            (c) your conduct in connection with the Site or with other
            users of the Site, and; (d) any violation of these Terms,
            any other PainTheory policy or of any law or the
            rights of any third party.
          </p>

          <h3 className="terms-title-text">
          17. Claim Must Be Filed Within One Year; Arbitration
          </h3>

          <p className="sub-text">
            Any dispute, claim or controversy arising out of or
            relating to these Terms, PainTheory or the Site or the
            breach, termination, enforcement, interpretation or
            validity thereof, including the determination of the scope
            or applicability of these Terms to arbitrate, shall be
            determined by final and binding arbitration as the sole and
            exclusive remedy for such controversy or dispute.
            Any claim shall be made by filing a demand for arbitration
            within one (1) year following the event first giving rise
            to the claim. The arbitration shall be held in Denver
            County, Colorado before one arbitrator. The arbitration
            shall be governed by the Federal Arbitration Act and the
            arbitration shall take place according to the rules of the
            American Arbitration Association. Judgment on the Award may
            be entered in any court having jurisdiction. Each party
            shall bear all of its own costs of arbitration except the
            fee for the arbitrator shall be equally split between the
            parties. The arbitrator shall not have the authority to
            modify these Terms or award punitive or exemplary damages
            to either party. This clause shall not preclude parties
            from seeking provisional remedies in aid of arbitration
            from a court of appropriate jurisdiction. Seeking any such
            remedies shall not constitute a waiver of either
            party’s right to compel arbitration.
          </p>

          <h3 className="terms-title-text">
            18. Your Notices to Us
          </h3>

          <p className="sub-text">
            You may contact us by e-mail at &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            .
          </p>

          <h3 className="terms-title-text">
            19. Our Notices to You; Consent Regarding
            Electronic Information
          </h3>

          <p className="sub-text">
            This contract is in electronic form. There may be
            other information regarding the Site that the law
            requires us to send you. You agree that we may send
            you this information in electronic form. You have
            the right to withdraw this consent, but if you do,
            we may terminate your ability to use the Site.
            We may provide required information to you
            (1) via e-mail at the e-mail address you specified
            when you signed up for the Site (or subsequently
            provided when updating your account information),
            (2) by access to a PainTheory website that will be
            designated in an e-mail notice sent to you at the
            time the information is available, or
            (3) by access to a PainTheory website that will be
            generally designated in advance for this purpose.
            Notices provided to you via e-mail will be deemed
            given and received on the transmission date
            of the e-mail. As long as you access and use the
            Site, you will have the necessary software and
            hardware to receive these notices. If you do not
            consent to receive any notices electronically,
            you must stop using the Site immediately.
          </p>

          <h3 className="terms-title-text">
            20. Miscellaneous
          </h3>

          <p className="sub-text">
            These Terms constitute the entire agreement between
            you and PainTheory regarding the use of the Site,
            and supersedes any prior agreements between you and
            PainTheory relating to your use of the Site.
            The failure of PainTheory to exercise or enforce
            any right or provision of these Terms or any prior
            version of these Terms shall not constitute a waiver
            of such right or provision in that or any other instance.
            If any provision of these Terms is held invalid, the
            remainder of these Terms shall continue in full force
            and effect. If any provision of these Terms shall be
            deemed unlawful, void or for any reason unenforceable,
            then that provision shall be deemed severable from these
            Terms and shall not affect the validity and enforceability
            of any remaining provisions. If you are a California resident,
            in accordance with Cal. Civ. Code §1789.3, you may report
            complaints to the Complaint Assistance Unit of the
            Division of Consumer Services of the California
            Department of Consumer Affairs by contacting them in
            writing at 400 R Street, Sacramento, CA 95814 or by
            telephone at (800) 952-5210. Sections 5, 12-20 shall
            survive the termination of these Terms.
          </p>

          <p className="sub-text">
            Last updated: August 7, 2018
          </p>

          <br />

          <hr />

          <br />

          <h2 className="title">
            PainTheory Terms of Service
          </h2>

          <p className="sub-text">
            These Care Provider Terms of Service
            (&quot;CP Terms&quot;) are between
            you (a healthcare provider, healthcare provider’s clinic staff,
            co-worker, business associates, or affiliates of a healthcare
            provider’s practice)
            (&quot;you,&quot; &quot;your,&quot; &quot;Healthcare Provider&quot;,
            &quot;Care Provider,&quot; or &quot;Provider&quot;)
            and Sway Health, Inc., a Delaware corporation
            (&quot;PainTheory,&quot; &quot;we&quot; or &quot;our&quot;).
            These CP Terms govern:
            (i) your access and use of the website, &nbsp;
            <a href="https://www.realself.com/">
              www.paintheory.com
            </a>
            , and
            the services and information available on the website
            (collectively, &quot;Site&quot;)
            whether or not you access the Site through
            your computer, mobile device or any PainTheory application
            (&quot;PainTheory App&quot;); and
            (ii) your submission of any and all content
            to PainTheory by any means now known or hereafter developed at any
            time. These CP Terms constitute a binding agreement between you and
            PainTheory and the term of these CP Terms will take effect at the
            time you click &quot;I accept&quot; or use the Site.
          </p>

          <p className="sub-text">
            Please read these cp terms carefully. By clicking on &quot;I agree,&quot; or by
            browsing, accessing and/or using the paintheory site, you acknowledge
            that you have read, understood, and agree to be legally bound by these
            cp terms, care provider  &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            , &nbsp;
            <a href="https://www.paintheory.com/criteria">
            Care Provider Listing Criteria
            </a>
            , the Care Provider  &nbsp;
            <a href="https://www.paintheory.com/sharing">
              Photo &amp; Video Guidelines
            </a>
            &nbsp; and the PainTheory Privacy
            Policy (all of which are incorporated herein by reference).
            If you do not agree to abide by or be bound by these cp terms or any
            of the paintheory guidelines or policies identified above, then
            do not register for an account or access and use the site.
            If you are accepting these cp terms on behalf of a care provider or
            care provider entity, you represent and warrant that you have the
            authority to bind such individual or entity to these cp terms.
            If you do not have such authority, or if you do not agree to any of
            these cp terms, then you are not permitted to use the site.
          </p>

          <h3 className="terms-title-text">
            1. Modification
          </h3>

          <p className="sub-text">
            PainTheory reserves the right to make changes to the Site,
            these CP Terms and other policies at any time, including but
            not limited to charging fees at any time for the Site.
            If PainTheory makes material changes to these CP Terms or
            other policies, then PainTheory will either notify you by
            email or by posting a notice on the Site prior to the effective
            date of the changes. PainTheory will also indicate at the bottom
            of this page the date these CP Terms were last updated.
            These CP Terms are effective upon acceptance by new users.
            For current users, these CP Terms are effective as of
            August 7, 2018 and supersede all previous versions of the
            PainTheory CP Terms or any other PainTheory terms of service
            that you accepted when you registered for an account with PainTheory.
            If any section of these CP Terms shall be deemed invalid, void
            or for any reason unenforceable, then that section shall be
            deemed severable and shall not affect the validity of the
            remaining sections of these CP Terms. Your continued use of
            the Site after any such changes are posted constitutes your
            acceptance of the new CP Terms. If you do not agree to abide
            by these or any future CP Terms, you may not use
            or access the Site.
          </p>

          <h3 className="terms-title-text">
            2. Your Care Provider Account; Email Consent
          </h3>

          <p className="sub-text">
            In order to use some of the features on the Site, including
            updating and adding content to a healthcare provider profile
            or a practice profile, you are required to register and
            provide information about yourself to PainTheory and create
            a verified healthcare provider account (&quot;CP Account&quot;).
            It is your responsibility to maintain the confidentiality
            of your account information, including your CP Account
            password and you are responsible for all activities that
            occur in connection with your CP Account. In addition,
            Care Providers may claim and create a healthcare provider
            profile page on the Site. The healthcare provider profile
            pages are subject to the  &nbsp;
            <a href="https://www.paintheory.com/criteria">
            Care Provider Listing Criteria
            </a>
            . In creating your care provider profile page, you agree
            that any information submitted by you and posted to your
            healthcare provider profile page is accurate, true and
            correct. In addition, you agree to keep the information on
            your healthcare provider profile page updated. You are
            responsible for all activities that occur in connection
            with your healthcare provider profile page. You must tell
            us right away about anyone using your CP Account or
            healthcare provider profile page without your consent,
            or any security breach that relates to your CP Account
            or healthcare provider profile page.
          </p>

          <p className="sub-text">
            By using the Site, you consent to receive emails from
            PainTheory, which may include commercial emails provided
            such emails are in accordance with the preferences you
            select in the email and notifications page of your CP
            Account. You may change such preferences by changing your
            account settings on the notifications
            page of the &quot;My Profile&quot;
            section in your CP Account or via the unsubscribe link in
            all commercial emails. You may also change email and
            notification preferences by emailing your request to &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            . Please note that as long as you
            maintain an account, you may not
            &quot;opt out&quot; of receiving
            service or account related emails from PainTheory.
          </p>

          <p className="sub-text">
            PainTheory reserves the right to refuse providing services
            or the Site to anyone, including terminating your CP Account
            and/or preventing you from accessing the Site or your CP
            Account, with or without cause, at any time and in its
            sole discretion.
          </p>

          <h3 className="terms-title-text">
            3. How and When You May Use the Site
          </h3>

          <p className="sub-text">
            As a healthcare provider, you may use the Site to respond
            to Patient Members’ questions and to create a healthcare
            provider profile or practice profile, (including, uploading
            photos, videos and articles to your profile). You or an
            authorized representative from your office may claim your
            healthcare provider profile or practice profile on the Site
            but you may not post false or misleading
            information on your profile.
          </p>

          <p className="sub-text">
            <strong>
              Except to the extent you are otherwise directly authorized
              by PainTheory, you may not use the Site to:
            </strong>
          </p>

          <ul className="sub-text">
            <li>
              Promote a product, service or procedure that you,
              your employer or practice sells, markets, distributes
              or performs or is otherwise affiliated with;
            </li>

            <li>
              Praise, recommend, describe any experiences with,
              or otherwise promote a healthcare provider or other
              person that is yourself or someone to whom you are
              related or with whom you work or have previously
              worked with;
            </li>

            <li>
              Trade reviews with other Care Providers or businesses,
              compensate someone or be compensated for writing a review;
            </li>

            <li>
              Praise, recommend, describe positive experiences
              with, or otherwise promote a business you own or
              by whom you are employed; or
            </li>

            <li>
              Either post or allow a member of your staff to post a
              false or misleading review, (including reviews that
              are fabricated or exaggerate results) or any reviews
              about you on the Site.
            </li>
          </ul>

          <p className="sub-text">
            However, nothing contained herein will be construed as
            prohibiting you from posting content in a response to
            content posted by another Patient Member about your
            business; provided, that (a) you have provided true and
            accurate registration information to PainTheory about
            yourself, (b) you have clearly explained in your response
            that you are making a statement on behalf of the business
            (including your affiliation with the business), (c) your
            response is limited solely to providing factual information
            and explanations to refute any statements or allegations
            in the posted content about your business and your response
            does not violate any applicable privacy laws (including,
            but not limited to HIPAA), and (d) your response does not
            otherwise attempt to promote your business or serve any
            commercial purposes, as determined in the sole discretion
            of PainTheory.
          </p>

          <p className="sub-text">
            <strong>
              Additionally, you may not use the Site:
            </strong>
          </p>

          <ul className="sub-text">
            <li>
              If you are under 18.
            </li>
            <li>
              In any way or for any purpose that is against any
              local, state, federal or any other applicable laws.
            </li>

            <li>
              In any way or for any purpose that harms or endangers
              us or our affiliates, resellers, distributors, service
              providers and/or suppliers
              (collectively, the &quot;PainTheory Partners&quot;),
              or any customer of a PainTheory Partner;
            </li>

            <li>
            To exploit, solicit or harm minors;
            </li>

            <li>
              To copy any content from the Site, including photographs,
              and post those photographs or other content on any
              third-party website, including your own website.
            </li>

            <li>
              To post or submit any content that is racist, sexist,
              inflammatory, defamatory, derogatory, hateful, harassing,
              threatening, abusive, profane, obscene, vulgar or
              sexually explicit, false, misleading, fraudulent,
              invasive of another’s privacy or publicity rights,
              infringing of another’s intellectual property rights,
              contains any trade secrets or other confidential information,
              or otherwise offensive or objectionable or
              violates any applicable laws;
            </li>

            <li>
              To provide or purport to provide medical advice,
              prescription, diagnosis, or treatment recommendations
              to individual Patient Members;
            </li>

            <li>
              To register for multiple accounts or use the account
              of another person without their authorization;
            </li>

            <li>
              To spam any Patient Members or other users of the
              Site or to attempt to solicit business or direct
              Patient Members or other users of the Site to a
              non-PainTheory site for commercial purposes unless
              authorized to do so by PainTheory;
            </li>

            <li>
              You agree not to use any data mining, robots,
              or similar data gathering and extraction methods
              in connection with the Site;
            </li>

            <li>
              To post links to sites or files that contain or are
              viruses, spyware, malware, or other harmful content;
            </li>

            <li>
              To attempt to interfere with or disrupt the Site,
              any security features of the Site or any person’s
              ability to use the Site; or
            </li>

            <li>
              For any purposes for which the Site are not intended.
            </li>
          </ul>

          <p className="sub-text">
            In addition, PainTheory is not obligated to enforce these
            CP Terms or any other policies or guidelines against other
            Patient Members, users, Care Providers or other third-parties
            on your behalf. If you believe a Patient Member, healthcare
            provider or other third-party has violated these CP Terms or
            any other guidelines or policies of PainTheory, then please
            contact PainTheory by emailing &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            .
            PainTheory reserves the right to investigate the matter and
            take whatever action PainTheory deems appropriate
            in its sole discretion.
          </p>

          <h3 className="terms-title-text">
            4. Materials You Post or Provide;
            Communications Monitoring; Confidentiality
          </h3>

          <p className="sub-text">
            As a healthcare provider, you may be able to post or
            submit comments, answers to Patient Members’ questions,
            direct messages, photographs, videos (including videos
            created through a third-party tool) and other materials
            on or through the Site (&quot;CP Content&quot;).
            You understand your
            CP Content is not confidential and is publicly available
            for anyone to view and the CP Content posted by you must
            be in compliance with all applicable privacy laws (including,
            but not limited to, the Health Insurance Portability and
            Accountability Act (&quot;HIPAA&quot;)).
            Further, PainTheory is not
            responsible for the security of any information transmitted
            through the internet or the Site. You also understand that
            any CP Content posted by you may not violate these CP Terms
            (including section 3 of these CP Terms) or any other guidelines
            and policies of PainTheory as well as any applicable federal,
            state or local laws (including, but not limited to the rules
            and laws of state medical boards) and the information you
            provide must not be false, inaccurate or misleading.
          </p>

          <p className="sub-text">
            PainTheory does not claim any ownership rights in your CP Content.
            However, by submitting CP Content on the Site you are hereby
            expressly granting PainTheory a nonexclusive, irrevocable,
            worldwide, perpetual, royalty-free license (including sublicense)
            to use, copy, distribute, publicly display, publicly perform,
            modify (including create derivative works) or transmit
            (including digital transmission of a sound recording, if applicable)
            your CP Content, in connection with the the Site, any PainTheory App
            and the PainTheory business, including without limitation promoting
            and redistributing part or all of the Site, any PainTheory App or the
            PainTheory business, in any media formats and through any media
            channels now known or hereafter developed without any compensation
            or obligation to you. You also grant PainTheory permission to use
            your name, likeness and voice in connection with your CP Content.
            In addition, by posting or uploading CP Content to the Site,
            you hereby waive any rights of privacy or publicity. You also grant
            PainTheory the permission to grant any of the above rights to other
            persons or entities, including, but not limited, for the purpose
            of promoting the Site, any PainTheory App or the PainTheory business
            without any compensation or obligation to you. You also grant
            PainTheory the right and authority to send takedown notices
            (on your behalf) related to your CP Content to any individual
            or entity under the Digital Millennium Copyright Act.
            In addition, for each CP Content you post or submit, you represent
            and warrant that you have all rights and permission necessary
            for you to post or submit the CP Content and to grant the licenses
            and permissions in this section. Further, you represent
            and warrant that the CP Content does not violate any law.
          </p>

          <p className="sub-text">
            You also understand and agree that PainTheory may, in its
            sole discretion, refuse, or remove part or all of your CP Content
            from the Site at any time. PainTheory reserves the right to
            review and monitor CP Content but is under no obligation to do so.
            In addition, PainTheory is not responsible for screening,
            monitoring or editing the CP Content. PainTheory may disclose
            information about you, including the contents of such CP Content,
            if we deem it necessary to: (1) conform to legal requirements
            or respond to legal process; (2) ensure your compliance with
            these CP Terms or other PainTheory guidelines or policies; or
            (3) protect the rights, property, or interests of PainTheory,
            its employees, its Patient Members, its partners or the public.
          </p>

          <h3 className="terms-title-text">
            5. Reviews or Content Posted by Others.
          </h3>

          <p className="sub-text">
            PainTheory does not have any responsibility, including
            editorial control, of any content posted by other PainTheory
            Patient Members, Care Providers or other third party content
            providers on the Site. The statements or content posted by
            PainTheory Patient Members, Care Providers or other third
            party content providers on the Site are those of the Patient
            Members, Care Providers or other third party content providers
            and are not the opinion of PainTheory. PainTheory does not make
            any representations or warranties about the accuracy or
            reliability of the content, including the opinions, statements
            or information posted by the PainTheory Patient Members,
            Care Providers or other third party content providers on the Site.
            The PainTheory Patient Members, Care Providers and other
            third party content providers are solely responsible for
            the content posted by them respectively.
          </p>

          <p className="sub-text">
            PainTheory does not endorse or recommend any specific content,
            procedures, products, opinions, Care Providers or any other
            material or information available on the Site. In addition,
            the Care Providers featured on the Site are not employees
            or independent contractors of PainTheory.
          </p>

          <p className="sub-text">
            There may be medical-related or health-related materials
            posted by PainTheory Patient Members, Care Providers or other
            third parties that may contain nudity. If you find these
            materials to be offensive, then you may want to use the Site
            in such a way as to limit your viewing of this material.
          </p>

          <h3 className="terms-title-text">
            6. Copyright Policy.
          </h3>

          <p className="sub-text">
            If you believe that your CP Content or any other content
            has been used in a way that constitutes copyright infringement,
            or your intellectual property rights have been otherwise
            violated, please notify Sway Health, Inc. at &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            . Provide all of the following in writing:
            (1) identify the copyrighted work you claim has been
            infringed or if multiple copyrighted works, then a
            representative list of such works on the Site;
            (2) identify the material on the Site that you claim
            is infringing and with enough detail so that we may
            locate the material;
            (3) provide a statement that you have a good faith
            belief that the use of the material on the Site is not
            authorized by the copyright owner, its agent, or the law;
            (4) provide a statement declaring that the notification
            is accurate, and, under penalty of perjury, that you are the
            owner of the copyright interest involved or that you are
            authorized to act on behalf of the exclusive owner;
            (5) provide information reasonably sufficient to permit
            PainTheory to contact you, such as an address,
            telephone number, and email address; and
            (6) your physical or electronic signature.
          </p>

          <p className="sub-text">
            Upon receipt of notice as described above, PainTheory
            will take whatever action, in its sole discretion,
            it deems appropriate, including removal of the
            alleged infringing material from the Site.
          </p>

          <h3 className="terms-title-text">
            7. Photograph/Video Policy.
          </h3>

          <p className="sub-text">
            Care Providers must have consent from individuals
            and follow all HIPAA requirements (as well as
            these CP Terms, Care Provider  &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp; and Care Provider &nbsp;
            <a href="https://www.paintheory.com/sharing">
              Photo &amp; Video Guidelines
            </a>
            ) before uploading, submitting or posting any
            photographs or videos (including the use of any
            third-party video tool whether or not provided
            by PainTheory) of individuals on the Site.
            When you upload or submit any photo or video of
            an individual, you represent and warrant that you
            have the appropriate consent and license to do
            so and the uploading or submission of the videos
            or photographs to the Site will not violate these
            CP Terms, the Care Provider &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            , the Care Provider  &nbsp;
            <a href="https://www.paintheory.com/sharing">
              Photo &amp; Video Guidelines
            </a>
            , or any other applicable laws, including any
            applicable privacy laws (such as HIPAA). You
            also agree to indemnify PainTheory and the
            PainTheory Partners against any third-party claims
            related to the uploading or submitting of any
            videos or photographs by you or anyone affiliated
            with you (including an agent, employee of your
            practice or other third party acting on your behalf).
          </p>

          <h3 className="terms-title-text">
            8. PainTheory Advertising
          </h3>

          <p className="sub-text">
            If you purchase advertising from PainTheory or
            purchase any PainTheory Special Programs through
            the Site (including the
            PainTheory Verified Provider Program
             or PainTheory Pay Per Click Program), the applicable
             Terms of Service and Provider User Agreement will
             apply to you in addition to these CP Terms.
          </p>

          <h3 className="terms-title-text">
            9. Links to Other Websites
          </h3>

          <p className="sub-text">
            The Site and the PainTheory App may contain links
            to other websites maintained by third parties
            (&quot;Third Party Website&quot;) or you may be able
            to log into the Site or the PainTheory App through a
            Third Party Website. Third Party Websites are not under
            the control of PainTheory and PainTheory does not endorse
            or assume any responsibility for the content, information
            or functionality of any Third Party Website. As a result,
            your access or use of any Third Party Website is at your
            own risk and these CP Terms, the  &nbsp;
            <a href="https://www.paintheory.com/privacy">
              PainTheory Privacy Policy
            </a>
            , Care Provider &nbsp;
            <a href="https://www.paintheory.com/conduct">
              Code of Conduct
            </a>
            &nbsp; and any other PainTheory
            policies do not apply or govern any Third Party Website
            or your use of any Third Party Website. You expressly
            relieve PainTheory of any and all liability related to
            the functionality, content or information contained on
            any Third Party Website. In addition, your dealings with
            or participation in promotions of third parties found on
            the Site, including payment and delivery of goods or
            services any other terms (such as warranties) are solely
            between you and the third parties. You agree that
            PainTheory shall not be responsible for any loss or
            damage of any kind relating to your dealings with
            such third parties.
          </p>

          <h3 className="terms-title-text">
            10. PainTheory Intellectual Property Rights
          </h3>

          <p className="sub-text">
            PainTheory grants you a limited, personal, revocable,
            nonassignable and nonexclusive license to use the Site.
            PainTheory owns the text, photographs, videos, visual
            interfaces, interactive features, graphics, design,
            compilation, computer code, products, software, decision
            algorithms and all other elements and components of the Site
            (&quot;PainTheory Content&quot;), excluding your CP Content
            and Patient Members’ submissions. PainTheory owns the copyrights,
            trademarks, service marks, trade names and other intellectual
            property and proprietary rights throughout the world associated
            with the PainTheory Content and the Site, which are protected
            by copyright, trade dress, patent, trademark laws and all other
            applicable intellectual and proprietary rights and laws.
            You may not modify, reproduce, republish, frame, download,
            transmit, distribute, rent, lease, loan, sell, assign, license,
            sublicense, reverse engineer, publicly display or create derivative
            works based on any of the PainTheory Content in whole or in part,
            or the Site except as expressly authorized in writing by PainTheory.
            In addition, PainTheory does not grant any express or implied rights
            in and to the Site and the PainTheory Content, and all rights in
            and to the Site and the PainTheory Content, are retained by PainTheory.
          </p>

          <h3 className="terms-title-text">
            11. PainTheory DISCLAIMS ALL WARRANTIES
          </h3>

          <p className="sub-text">
            PAINTHEORY PROVIDES THE SITE
            &quot;AS IS&quot; &quot;WITH ALL FAULTS&quot;
            AND &quot; AS AVAILABLE.&quot; YOUR USE OF THE
            SITE IS AT YOUR OWN RISK.
            PAINTHEORY DISCLAIMS ALL WARRANTIES (WHETHER EXPRESS OR IMPLIED),
            GUARANTEES OR CONDITIONS RELATED TO THE SITE. WITHOUT LIMITING
            THE FOREGOING, TO THE FULLEST EXTENT PERMITTED BY LAW,
            PAINTHEORY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING THOSE OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE
            EFFORT AND NON-INFRINGEMENT AS WELL AS ANY WARRANTIES CONCERNING
            THE AVAILABILITY, ACCURACY, QUALITY, PERFORMANCE AND SUITABILITY
            OF THE SITE. PAINTHEORY DOES NOT REPRESENT OR WARRANT THAT THE
            SITE WILL BE UNINTERRUPTED, ERROR-FREE OR FREE OF VIRUSES OR
            OTHER HARMFUL COMPONENTS OR DEFECTS. YOU UNDERSTAND AND AGREE
            THAT YOUR USE OF THE SITE IS ENTIRELY AT YOUR OWN RISK.
            IN ADDITION, PAINTHEORY EXPRESSLY DISCLAIMS ANY AND ALL
            RESPONSIBILITY AND LIABILITY WITH RESPECT TO SEPARATE
            AGREEMENTS YOU MAY MAKE WITH PATIENTS, CONSUMERS, PATIENT
            MEMBERS OR OTHER THIRD PARTIES, AND YOU WILL LOOK SOLELY
            TO SUCH PERSONS AND/OR ENTITIES WITH RESPECT TO ANY AND
            ALL CLAIMS ARISING OUT OF SUCH AGREEMENTS. WHILE PAINTHEORY
            TAKES REASONABLE PHYSICAL, TECHNICAL AND ADMINISTRATIVE
            MEASURES TO SECURE THE SITE, PAINTHEORY DOES NOT
            GUARANTEE THAT THE SITE CANNOT BE COMPROMISED.
          </p>

          <h3 className="terms-title-text">
            12. LIMITATION OF LIABILITY; YOUR EXCLUSIVE REMEDY
          </h3>

          <p className="sub-text">
            TO THE EXTENT PERMITTED BY LAW, IN NO EVENT WILL EITHER
            PAINTHEORY OR THE PAINTHEORY PARTNERS BE LIABLE TO YOU
            OR TO ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL,
            SPECIAL, INCIDENTAL, EXEMPLARY, OR PUNITIVE DAMAGES
            (INCLUDING, BUT NOT LIMITED, TO LOSS PROFITS AND DAMAGES
            THAT RESULT FROM INCONVENIENCE, DELAY OR LOSS OF USE)
            ARISING OUT OF OR RELATING TO YOUR USE OF THE SITE EVEN
            IF PAINTHEORY OR ANY OF THE PAINTHEORY PARTNERS HAVE BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ADDITION,
            IN NO EVENT SHALL EITHER PAINTHEORY OR THE PAINTHEORY
            PARTNERS BE LIABLE TO YOU OR TO ANYONE FOR ANY DECISION
            MADE OR ACTION TAKEN BY A PARTY (INCLUDING, WITHOUT
            LIMITATION, BY ANY USER OR PATIENT MEMBER) IN RELIANCE
            ON ANY CONTENT OR OTHER INFORMATION ABOUT CARE PROVIDERS
            OR PROCEDURES POSTED ON THE SITE. PAINTHEORY AND THE
            PAINTHEORY PARTNERS SHALL NOT BE LIABLE FOR ANY DAMAGES,
            DELAYS, OR NONPERFORMANCE CAUSED BY FACTORS OR ACTIVITIES
            BEYOND THEIR REASONABLE CONTROL, INCLUDING DELAYS AND
            NONPERFORMANCE CAUSED BY VIRUSES, DENIAL OF SERVICE ATTACKS,
            OTHER ACTS OR OMISSION OF THIRD PARTIES, INTERNET SERVICE
            PROVIDER FAILURES, STRIKES, LOCKOUTS, WORK SLOWDOWNS OR
            STOPPAGES, ACCIDENTS, FIRES, TERRORISM, ACTS OF GOD,
            GOVERNMENT RESTRICTIONS, MECHANICAL, ELECTRONIC
            OR COMMUNICATIONS FAILURES, WAR OR INSURRECTION.
          </p>

          <p className="sub-text">
            NOTWITHSTANDING ANYTHING HEREIN, THE AGGREGATE LIABILITY
            OF PainTheory TO YOU IN CONNECTION WITH THE SITE
            (INCLUDING ANY THIRD PARTY CONTENT ON THE SITE) AND THESE
            CP TERMS WILL BE LIMITED TO THE AMOUNT, IF ANY, PAID BY
            YOU TO PAINTHEORY IN THE SIX (6) MONTHS PRIOR TO THE ACT
            THAT GAVE RISE TO THE LIABILITY, EVEN IF PAINTHEORY HAS
            BEEN ADVISED OF THE POSSIBILITY OF ANY OF THE FOREGOING
            TYPES OF LOSSES OR DAMAGES.
          </p>

          <p className="sub-text">
            Some jurisdictions do not allow the exclusion or
            limitation of incidental or consequential damages,
            so the above limitations or exclusions
            may not apply to you.
          </p>

          <h3 className="terms-title-text">
            13. Changes to the Site; Updates; Termination
          </h3>

          <p className="sub-text">
            We may change the Site or delete features available on
            the Site at any time and for any reason. We are not
            obligated to provide maintenance, technical support
            or updates to you for the Site, but we may provide
            these in our discretion. We may terminate or suspend
            your CP Account and your use of the Site or any
            services we may provide you that are associated with
            your use of the Site at any time in our discretion.
            Our termination or suspension may be without cause
            and/or without notice. You may terminate your use
            of the Site at any time, with or without cause by
            emailing us at
            &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            . Upon termination, you may no longer use or access
            the Site. Once your use of the Site is terminated,
            any data you have stored on the Site may not be
            retrieved later. In addition, even if you terminate
            your use of the Site, PainTheory may continue to
            show some or all of your CP Content.
          </p>

          <h3 className="terms-title-text">
            14. Jurisdiction
          </h3>

          <p className="sub-text">
            PainTheory controls and operates the Site from its
            offices in Denver, Colorado in the United States
            of America and PainTheory makes no representation
            that the CP Content, content submitted by Patient
            Members or any other content available on the Site
            or the Site are appropriate, available or may be
            downloaded for use outside the United States.
            You are responsible for complying with all of your
            local laws, if and to the extent your local laws
            are applicable. These CP Terms and the Site are
            governed by the federal laws of the United States
            and the laws of the State of Colorado, excluding
            any conflicts of law provisions. When you register
            for an account and click &quot;I accept&quot;, submit content
            to the Site, access, browse or otherwise use the
            Site, this means you hereby consent to the exclusive
            jurisdiction of the state and federal courts in
            Denver County, Colorado and you waive all defenses of
            lack of personal jurisdiction and forum non conveniens
            with respect to venue and jurisdiction in the state
            and federal courts of Denver County, Colorado.
          </p>

          <h3 className="terms-title-text">
            15. Indemnification
          </h3>

          <p className="sub-text">
            You agree to indemnify and hold harmless PainTheory
            and the PainTheory Partners from and against any and
            all losses, liability, claims, demand, damages, costs
            and expenses, including reasonable attorney&#39;s fees,
            arising out of or in connection with:
            (i) any CP Content you post or submit to or through the Site;
            (ii) your use of the Site;
            (iii) your conduct in connection with the Site or with
            other Care Providers and Patient Members of the Site;
            (iv) any breach of these CP Terms, other PainTheory
            policies and guidelines; or
            (v) any violation of any law or the rights of any third
            party (including, but not limited to any violation of
            HIPAA or the rules, laws, guidelines or policies of
            any state medical board).
          </p>

          <h3 className="terms-title-text">
            16. Claim Must Be Filed Within One Year; Arbitration
          </h3>

          <p className="sub-text">
            Any dispute, claim or controversy arising out of or
            relating to these CP Terms, PainTheory, the Site or
            the breach, termination, enforcement, interpretation
            or validity thereof, including the determination of
            the scope or applicability of this agreement to arbitrate,
            shall be determined by final and binding arbitration
            as the sole and exclusive remedy for such controversy
            or dispute. Any claim shall be made by filing a demand
            for arbitration within one (1) year following the
            event first giving rise to the claim. The arbitration
            shall be held in Denver County, Colorado before one
            arbitrator. The arbitration shall be governed by the
            Federal Arbitration Act and the arbitration shall take
            place according to the rules of the American Arbitration
            Association. Judgment on the Award may be entered in
            any court having jurisdiction. Each of the parties
            shall bear all of its own costs of arbitration except
            the fee for the arbitrator shall be equally split
            between the parties. The arbitrator shall not have the
            authority to modify these CP Terms or award punitive
            or exemplary damages to either party. This clause
            shall not preclude parties from seeking provisional
            remedies in aid of arbitration from a court of
            appropriate jurisdiction. Seeking any such remedies
            shall not constitute a waiver of either party’s
            right to compel arbitration.
          </p>

          <h3 className="terms-title-text">
            Your Notices to Us
          </h3>

          <p className="sub-text">
            You may notify us by e-mail at &nbsp;
            <a href="mailto:support@sway.md?subject=Inquiry">
              support@sway.md
            </a>
            .
          </p>

          <h3 className="terms-title-text">
            18. Our Notices to You;
            Consent Regarding Electronic Communication
          </h3>

          <p className="sub-text">
            This contract is in electronic form.
            There may be other information regarding the
            Site that the law requires us to send you.
            You agree that we may send you this information
            in electronic form. You have the right to
            withdraw this consent, but if you do, we may
            cancel your ability to use the Site.
            We may provide required information to you
            (1) via e-mail at the e-mail address you specified
            when you registered for a CP Account
            (or subsequently provided when updating your
            account information),
            (2) by access to a PainTheory website that will
            be designated in an e-mail notice sent to you at
            the time the information is available, or
            (3) by access to a PainTheory website that will be
            generally designated in advance for this purpose.
            Notices provided to you via e-mail will be deemed
            given and received on the transmission date of
            the e-mail. As long as you access and use the
            Site, you will have the necessary software and hardware
            to receive these notices. If you do not consent to
            receive any notices electronically, you must stop
            using the Site. If you want these CP Terms provided
            to you in nonelectronic form, then please send a
            request to PainTheory at support@paintheory.com.
            In that request, please provide your full name and
            address where PainTheory can send these CP Terms
            in nonelectronic form.
          </p>

          <h3 className="terms-title-text">
            19. Miscellaneous
          </h3>

          <p className="sub-text">
            These CP Terms constitute the entire agreement between
            you and PainTheory regarding your use of the Site,
            and supersedes any prior agreements between you and
            PainTheory relating to your use of the Site.
            The failure of PainTheory to exercise or enforce any
            right or provision of these CP Terms shall not constitute
            a waiver of such right or provision in that or any
            other instance. If any provision of these CP Terms is
            held invalid, the remainder of these CP Terms shall
            continue in full force and effect. If any provision
            of these CP Terms shall be deemed unlawful, void or
            for any reason unenforceable, then that provision shall
            be deemed severable from these CP Terms and shall not
            affect the validity and enforceability of any remaining
            provisions. If you are a California resident, in
            accordance with Cal. Civ. Code §1789.3, you may report
            complaints to the Complaint Assistance Unit of the
            Division of Consumer Services of the California
            Department of Consumer Affairs by contacting them in
            writing at 400 R Street, Sacramento, CA 95814 or by
            telephone at (800) 952-5210. Sections 4, 7, 12-19
            survive the termination of these CP Terms.
          </p>

          <p className="sub-text">
            <em>
              Last updated: August 7, 2018
            </em>
          </p>

        </div>
      </div>
    );
  }
}

export default TermsConditions;
