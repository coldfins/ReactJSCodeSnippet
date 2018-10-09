import React from 'react';
import PropTypes from 'prop-types';
import { Card, FontIcon, FlatButton } from 'material-ui';
import StarRatings from 'react-star-ratings';
import { orangeA100 } from 'material-ui/styles/colors';
import DefaultAvatar from '../../assets/images/default_male_avatar.svg';

const Rating = ({
  ratings: { total },
}) => {
  const rate = total ? total.value : 0;
  const reviews = total ? total.count : 0;
  return (
    <div className="rating">
      {`${rate.toFixed(2)} `}
      <StarRatings
        rating={rate}
        starRatedColor={orangeA100}
        numberOfStars={5}
        name="rating"
        starDimension="15px"
        starSpacing="0px"
      />
      <span className="grey-text">
        {` from ${reviews} reviews`}
      </span>
    </div>
  );
};

const AreaProviders = ({ providers: { list }, onOpen }) => {
  const addDefaultSrc = ({ target }) => {
    target.src = DefaultAvatar; // eslint-disable-line
  };

  const handleScheduleClick = (provider) => {
    window.analytics.track('Area Provider Clicked', {
      provider: provider._id,
    });
    onOpen(provider);
  };

  return (
    <div className="component-area-providers-mobile">
      {
        list && list.map(({
          avatar, firstName, lastName, credentials, ratings, insurances,
        }, index) => (
          <div className="scaffold">
            <Card className="provider-card flex-column">
              <div className="provider-card-row flex-horizontal">
                <div className="avatar">
                  <img
                    className="provider-image"
                    src={avatar || DefaultAvatar}
                    onError={addDefaultSrc}
                    alt={`${firstName} ${lastName}, ${credentials.join(', ')}`}
                  />
                </div>

                <div className="provider-name">
                  <h3 className="b">
                    {`${firstName} ${lastName}, ${credentials.join(', ')}`}
                  </h3>

                  <Rating ratings={ratings} />
                </div>
              </div>

              <div className="provider-card-row provider-info">
                <div className="text-with-icon">
                  <FontIcon className="material-icons">
                    credit_card
                  </FontIcon>

                  <p>
                    {` ${insurances.length} insurances accepted`}
                  </p>
                </div>
              </div>

              <FlatButton
                className="schedule-btn"
                onClick={() => handleScheduleClick(list[index])}
              >
                Schedule a Time
              </FlatButton>
            </Card>
          </div>
        ))
      }
    </div>);
};

Rating.propTypes = {
  ratings: PropTypes.shape({
    healthgrades: PropTypes.object,
    rateMD: PropTypes.object,
    vitals: PropTypes.object,
  }).isRequired,
};

AreaProviders.propTypes = {
  onOpen: PropTypes.func.isRequired,
  providers: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.number,
  }).isRequired,
};

export default AreaProviders;
