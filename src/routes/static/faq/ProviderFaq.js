import React from 'react';
import { ExpansionList, ExpansionPanel } from 'react-md';
import ProviderFaqIcon from '../../../assets/images/provider_faq.svg';

const ProviderFaq = () => (
  <div className="component-provider-faq animated fadeIn">
    <div>
      <div className="faq-header">
        <div>
          <img src={ProviderFaqIcon} alt="FAQ" className="faq-logo" />
        </div>

        <div className="faq-header-texts">
          <h2 className="faq-title">
            Providers
          </h2>

          <p className="faq-subtitle">
            We hope to help answer any questions you have about our service.
          </p>
        </div>
      </div>
    </div>
    <ExpansionList>
      <ExpansionPanel
        className="expansion-panel"
        headerClassName="panel-title"
        label="I would like to be featured on your site. Is this possible?"
        footer={null}
      >
        <p className="panel-text">
          Yes. In addition to helping patients understand their pain and find providers,
          we also aim to create value for providers by offering a means to maintain
          healthy practice volume. If you would like to be featured on our site,
          please contact about@sway.md. After reviewing you against or objective
          inclusion criteria, we can normally add you to our site in 1-2 business days.
        </p>
      </ExpansionPanel>

      <ExpansionPanel
        className="expansion-panel"
        headerClassName="panel-title"
        label="Is it possible to have my entire clinic featured on your site?"
        footer={null}
      >
        <p className="panel-text">
          Yes. We allow multiple providers from a single clinic to be listed on
          our site. Contact about@sway.md for help.
        </p>
      </ExpansionPanel>

      <ExpansionPanel
        className="expansion-panel"
        headerClassName="panel-title"
        label="How much does Sway cost?"
        footer={null}
      >
        <p className="panel-text">
          At this time, Sway is a free service offered to providers in select geographies.
        </p>
      </ExpansionPanel>

      <ExpansionPanel
        className="expansion-panel"
        headerClassName="panel-title"
        label="What if I'd like to be removed from Sway?"
        footer={null}
      >
        <p className="panel-text">
          We are happy to remove your profile from our site. Please contact help@sway.md
          for support and we can remove your profile immediately.
        </p>
      </ExpansionPanel>
    </ExpansionList>
  </div>
);

export default ProviderFaq;
