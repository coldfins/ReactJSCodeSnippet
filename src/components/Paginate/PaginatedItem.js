import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  DataTable,
  TableBody,
  TablePagination,
} from 'react-md';
import PaginateLoader from './PaginateLoader';

class PaginatedItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      rows: [],
      rowsPerPage: props.rowsPerPage || 10,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if (!nextProps.tableData) {
      return {
        fetching: true,
        page: Number(nextProps.page),
      };
    }

    return {
      fetching: false,
      page: Number(nextProps.page),
      rows: nextProps.tableData,
    };
  }

  handlePagination = (skip, rowsPerPage, page) => {
    const { handlePagination } = this.props;
    this.setState({ page, rowsPerPage }, () => {
      handlePagination(skip, rowsPerPage, page);
    });
  }

  render() {
    const {
      baseId,
      component: PaginatedComponent,
      componentProps,
      plain,
      rowCount,
      rowsPerPageItems,
    } = this.props;

    const {
      fetching,
      page,
      rows,
      rowsPerPage,
    } = this.state;

    return (
      <div id={baseId} className="component-paginated-item">
        {fetching || rows.length <= 0
          ? <PaginateLoader fetching={fetching} rows={rows} />
          : (
            <DataTable
              className="paginate-table"
              plain={plain}
              baseId={baseId}
              fixedHeader
              fixedFooter
            >
              <TableBody>
                {rows.map((row, i) => (
                  <tr>
                    <td key={`base-tablebody-column-${i}` /* eslint-disable-line */}>
                      <PaginatedComponent data={row} {...componentProps} />
                    </td>
                  </tr>
                ))}
              </TableBody>

              <TablePagination
                className="paginate-table-paginator"
                rows={rowCount}
                page={page}
                rowsPerPageItems={rowsPerPageItems || [10, 50, 100, 150, 250, 500]}
                rowsPerPage={Number(rowsPerPage)}
                onPagination={this.handlePagination}
              />
            </DataTable>
          )}
      </div>
    );
  }
}

PaginatedItem.propTypes = {
  baseId: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  componentProps: PropTypes.object.isRequired,
  handlePagination: PropTypes.func.isRequired,
  plain: PropTypes.bool.isRequired,
  rowCount: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  rowsPerPageItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  tableHeight: PropTypes.number.isRequired,
};

export default PaginatedItem;
