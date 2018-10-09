import React from 'react';
import { ExpansionList, ExpansionPanel } from 'react-md';
import FaqIcon from '../../../assets/images/faq.svg';

const Faq = () => (
  <div className="component-faq animated fadeIn">
    <div>
      <div className="faq-header">
        <div>
          <img src={FaqIcon} alt="FAQ" className="faq-logo" />
        </div>

        <div className="faq-header-texts">
          <h2 className="faq-title">
            Frequently Asked Questions
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
        label="WHAT IF I AM IN EXTREME PAIN"
        footer={null}
      >
        <p className="panel-text">
          If you are in extreme pain, call 911 or seek immediate treatment
          from a trained medical professional.
        </p>
      </ExpansionPanel>

      <ExpansionPanel
        className="expansion-panel"
        headerClassName="panel-title"
        label="WHAT IF I DON'T KNOW WHAT TYPE OF PROVIDERS TO CHOOSE"
        footer={null}
      >
        <p className="panel-text">
          That&apos;s okay! In the next couple months, we will be rolling out a technology
          that collects your information and directs you towards the correct provider given
          the potential condition you have, how you have tried to treat that condition in the
          past, and your preferences. If you are experiencing acute or debilitating pain,
          or if you have concerns about the severity of your pain, contact a medical
          professional as soon as possible. A trained medical professional can help direct
          you towards the correct doctor.
        </p>
      </ExpansionPanel>

      <ExpansionPanel
        className="expansion-panel"
        headerClassName="panel-title"
        label="IS SWAY AFFILIATED WITH THE PROVIDERS ON YOUR SITE?"
        footer={null}
      >
        <p className="panel-text">
          At this time, no. Sway is a third-party entity that aggregates provider information
          in specific geographic locations.
        </p>
      </ExpansionPanel>

      <ExpansionPanel
        className="expansion-panel"
        headerClassName="panel-title"
        label="ARE YOU GOING TO ADD MORE DOCTORS?"
        footer={null}
      >
        <p className="panel-text">
          Yes! We are actively working on adding more providers across more specialties across many
           cities!
        </p>
      </ExpansionPanel>
    </ExpansionList>
  </div>
);

export default Faq;
