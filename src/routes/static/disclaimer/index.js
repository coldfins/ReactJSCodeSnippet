import React from 'react';
import DisclaimerIcon from '../../../assets/images/disclaimer_icon.svg';

const Disclaimer = () => (
  <div className="component-disclaimer animated fadeIn">
    <div className="disclaimer-header">
      <img src={DisclaimerIcon} alt="FAQ" className="disclaimer-icon" />

      <div className="disclaimer-header-texts">
        <h1 className="disclaimer-title">
          Advice Disclaimer
        </h1>
      </div>
    </div>

    <div className="texts-container">
      <h2 className="texts">
        Always seek the advice of your physician or other qualified health provider
        with any questions about your medical condition. Do not disregard professional
        medical advice or delay seeking advice or treatment because of something you have read here.
      </h2>

      <div className="red-box">
        <h2 className="texts">
          This information is not intended to be a substitute for professional medical advice,
          diagnosis or treatment.
        </h2>
      </div>
    </div>
  </div>
);

export default Disclaimer;
