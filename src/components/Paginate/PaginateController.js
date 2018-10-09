import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PaginatedItem from './PaginatedItem';

class PaginateController extends PureComponent {
  handlePagination = (skip, rowsPerPage, page) => {
    const { gridDataRefresh, gridProperties } = this.props;
    const limit = Number(skip) + Number(rowsPerPage);
    gridDataRefresh({
      ...gridProperties, limit, page, rowsPerPage, skip,
    });
  };

  render() {
    const {
      component,
      componentProps,
      gridData,
      gridProperties,
      gridRowCount,
      gridTitle,
      rowsPerPage,
      rowsPerPageItems,
    } = this.props;

    const { page } = gridProperties;

    return (
      <div className="controlled-table">
        <PaginatedItem
          component={component}
          componentProps={componentProps}
          plain
          rowsPerPage={rowsPerPage}
          rowsPerPageItems={rowsPerPageItems}
          baseId={gridTitle}
          tableData={gridData}
          rowCount={gridRowCount}
          handlePagination={this.handlePagination}
          gridProperties={gridProperties}
          page={page}
        />
      </div>
    );
  }
}

PaginateController.propTypes = {
  component: PropTypes.element.isRequired,
  componentProps: PropTypes.object.isRequired,
  gridData: PropTypes.object.isRequired,
  gridDataRefresh: PropTypes.func.isRequired,
  gridProperties: PropTypes.object.isRequired,
  gridRowCount: PropTypes.number.isRequired,
  gridTitle: PropTypes.string.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  rowsPerPageItems: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PaginateController;
