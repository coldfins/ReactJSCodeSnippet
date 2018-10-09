import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { orangeA100 } from 'material-ui/styles/colors';
import QualityBadge from '../../assets/images/quality-badge.svg';
import DefaultAvatar from '../../assets/images/default_male_avatar.svg';

const Rating = ({ ratings: { total } }) => {
  const rate = total ? total.value : 0;
  return (
    <div className="rating">
      <span className="rate">
        {rate.toFixed(2)}
      </span>

      <StarRatings
        rating={rate}
        starRatedColor={orangeA100}
        numberOfStars={5}
        name="rating"
        starDimension="15px"
        starSpacing="0px"
      />
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
    <div className="component-area-providers-desktop">
      {
        list && list.map(({
          address: { neighborhood },
          avatar,
          firstName,
          lastName,
          credentials,
          specialties,
          ratings,
        }, index) => (
          <div className="scaffold">
            <div
              className="provider-card"
              onClick={() => handleScheduleClick(list[index])}
              onKeyPress={() => handleScheduleClick(list[index])}
              role="button"
              tabIndex={-1}
            >
              <div className="avatar">
                <img
                  className="provider-image"
                  src={avatar || DefaultAvatar}
                  onError={addDefaultSrc}
                  alt={`${firstName} ${lastName}, ${credentials.join(', ')}`}
                />
              </div>

              <div className="provider-info">
                <h3 className="provider-name provider-info-row">
                  {`${firstName} ${lastName}, ${credentials.join(', ')}`}
                </h3>

                <h3 className="provider-specialty provider-info-row">
                  {specialties[0]}
                </h3>

                <h3 className="provider-location provider-info-row">
                  {neighborhood}
                </h3>

                <Rating ratings={ratings} />

                <div className="sway-score">
                  <h4>
                    <img
                      src={QualityBadge}
                      alt="quality-badge"
                      className="quality-badge"
                    />
                    {' Sway Score'}
                  </h4>
                </div>
              </div>
            </div>
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
