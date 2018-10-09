import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UltimatePagination from 'react-ultimate-pagination-material-ui';
import { CircularProgress } from 'material-ui';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import { orangeA200 } from 'material-ui/styles/colors';
import { changePage } from '../store/actions/pagination';
import styles from './List.css';

class List extends PureComponent {
  configs = {
    deselectOnClickaway: true,
    enableSelectAll: false,
    fixedFooter: false,
    fixedHeader: true,
    height: '1000px',
    multiSelectable: false,
    selectable: true,
    showCheckboxes: false,
    showRowHover: true,
    stripedRows: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      boundaryPagesRange: 2,
      siblingPagesRange: 2,
    };
  }

  render() {
    const {
      children,
      dispatch,
      fetch,
      filters,
      headers,
      isFetching,
      items,
      limit,
      page,
      select,
      total,
    } = this.props;

    const {
      boundaryPagesRange,
      siblingPagesRange,
    } = this.state;

    const pages = total > 0 ? Math.ceil(total / limit) : 1;

    return (
      <div style={styles.container}>
        {filters}

        <div style={(isFetching ? {} : { display: 'none' })}>
          <CircularProgress
            color={orangeA200}
            size={100}
            style={styles.progress}
            thickness={10}
          />
        </div>

        <div style={(isFetching ? { display: 'none' } : {})}>
          <Table
            backgroundColor="red"
            height={this.configs.height}
            fixedHeader={this.configs.fixedHeader}
            fixedFooter={this.configs.fixedFooter}
            selectable={this.configs.selectable}
            multiSelectable={this.configs.multiSelectable}
            onRowSelection={selectedRows => select(items[selectedRows[0]])}
          >
            <TableHeader
              displaySelectAll={this.configs.showCheckboxes}
              adjustForCheckbox={this.configs.showCheckboxes}
              enableSelectAll={this.configs.enableSelectAll}
            >
              <TableRow>
                {headers.map(header => (
                  <TableHeaderColumn key={header}>
                    {header}
                  </TableHeaderColumn>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.configs.showCheckboxes}
              deselectOnClickaway={this.configs.deselectOnClickaway}
              showRowHover={this.configs.showRowHover}
              stripedRows={this.configs.stripedRows}
            >
              {children}
            </TableBody>
          </Table>
        </div>

        <div style={styles.paginator}>
          <UltimatePagination
            currentPage={page}
            totalPages={pages}
            boundaryPagesRange={boundaryPagesRange}
            siblingPagesRange={siblingPagesRange}
            hidePreviousAndNextPageLinks={false}
            hideFirstAndLastPageLinks={false}
            hideEllipsis={false}
            onChange={newPage => dispatch(changePage(limit, newPage, fetch))}
          />
        </div>
      </div>
    );
  }
}

List.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  fetch: PropTypes.func,
  filters: PropTypes.node,
  headers: PropTypes.array,
  isFetching: PropTypes.bool,
  items: PropTypes.array,
  limit: PropTypes.number,
  page: PropTypes.number,
  select: PropTypes.func,
  total: PropTypes.number,
};

List.defaultProps = {
  children: null,
  dispatch: () => {},
  fetch: () => {},
  filters: null,
  headers: [],
  isFetching: false,
  items: [],
  limit: 20,
  page: 1,
  select: () => {},
  total: 1,
};

export default connect()(List);
