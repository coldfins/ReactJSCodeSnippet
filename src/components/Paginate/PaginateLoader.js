import React from 'react';
import PropTypes from 'prop-types';
import InlineLoader from '../InlineLoader';

const PaginateLoader = ({ fetching, rows }) => {
  if (fetching) {
    return <InlineLoader message="Fetching Records..." loading={fetching} />;
  }

  if (rows.length <= 0) {
    return (
      <h4>
        No Records Found
      </h4>
    );
  }
  return null;
};

PaginateLoader.propTypes = {
  fetching: PropTypes.bool.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PaginateLoader;
