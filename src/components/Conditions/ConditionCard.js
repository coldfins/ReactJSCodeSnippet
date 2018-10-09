import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
} from 'material-ui';

const ConditionCard = ({
  item: {
    rarity, img, name, description,
  },
  item,
  onSelectCard,
}) => (
  <div
    className="component-card-container"
    onClick={() => onSelectCard(true, item)}
    role="presentation"
  >
    <div className="card-effect">
      <Card className="outer-card">
        <div className="inner-card">
          <p className="card-risk-text">
            {rarity}
          </p>

          <img src={img} alt={name} className="card-image" />

          <h3 className="card-title">
            {name}
          </h3>

          <h5 className="card-sub-text">
            SYMPTOMS
          </h5>

          <p className="card-description-text">
            {description}
          </p>
        </div>
      </Card>
    </div>
  </div>
);

ConditionCard.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    rarity: PropTypes.string,
  }).isRequired,
  onSelectCard: PropTypes.func.isRequired,
};

export default ConditionCard;
