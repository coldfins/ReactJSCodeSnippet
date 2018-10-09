import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Info from 'material-ui/svg-icons/action/info-outline';
import { grey500 } from 'material-ui/styles/colors';
import {
  Table, TableBody, TableRow, TableRowColumn,
} from 'material-ui/Table';
import { Card } from 'material-ui';
import ToolTipModal from '../../components/ToolTipModal';
import GreenCheck from '../../assets/images/pain/green_check.png';
import styles from './Condition.css';

class Reasons extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentDanger: {},
      open: false,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = (pro) => {
    this.setState({
      currentDanger: pro,
      open: true,
    });
  };

  render() {
    const { reasons } = this.props;
    const { open, currentDanger } = this.state;
    return (
      <div>
        <div style={styles.aboutTitle}>
          Symptoms
        </div>

        <Card style={styles.card}>
          <Table>
            <TableBody displayRowCheckbox={false}>
              {reasons.map(reason => (
                <TableRow key={reason.name} selectable={false} style={styles.tableRow}>
                  <TableRowColumn style={styles.tableImageColumn}>
                    <img
                      src={GreenCheck}
                      alt="GreenCheck"
                      style={styles.greenCheck}
                    />
                  </TableRowColumn>

                  <TableRowColumn style={styles.tableNameColumn} scope="row">
                    <div style={styles.textReason}>
                      {reason.name}
                    </div>
                  </TableRowColumn>

                  <TableRowColumn style={styles.tableNameInfoColumn}>
                    <div style={styles.infoImage}>
                      <Info color={grey500} onClick={() => this.handleOpen(reason)} />
                    </div>
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <ToolTipModal
          open={open}
          handleClose={this.handleClose}
          title={currentDanger.name}
          description={currentDanger.explanation}
        />
      </div>
    );
  }
}

Reasons.propTypes = {
  reasons: PropTypes.array.isRequired,
};

export default Reasons;
