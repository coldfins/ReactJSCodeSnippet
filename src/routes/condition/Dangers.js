import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Info from 'material-ui/svg-icons/action/info-outline';
import {
  Table, TableBody, TableRow, TableRowColumn,
} from 'material-ui/Table';
import { Card } from 'material-ui';
import { grey500 } from 'material-ui/styles/colors';
import ToolTipModal from '../../components/ToolTipModal';
import Danger from '../../assets/images/pain/danger.png';
import styles from './Condition.css';

class Dangers extends PureComponent {
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
    const { dangers } = this.props;
    const {
      open, currentDanger,
    } = this.state;
    return (
      <div>
        <div style={styles.aboutTitle}>
          Risk Factors
        </div>

        <Card style={styles.card}>
          <Table>
            <TableBody displayRowCheckbox={false}>
              {dangers.map(danger => (
                <TableRow key={danger.name} selectable={false} style={styles.tableRow}>
                  <TableRowColumn style={styles.tableImageColumn}>
                    <img
                      src={Danger}
                      alt="Danger"
                      style={styles.danger}
                    />
                  </TableRowColumn>

                  <TableRowColumn style={styles.tableNameColumn} scope="row">
                    <div style={styles.textReason}>
                      {danger.name}
                    </div>
                  </TableRowColumn>

                  <TableRowColumn style={styles.tableNameInfoColumn}>
                    <div style={styles.infoImage}>
                      <Info color={grey500} onClick={() => this.handleOpen(danger)} />
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

Dangers.propTypes = {
  dangers: PropTypes.array.isRequired,
};

export default Dangers;
