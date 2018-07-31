/**
 *
 * Toaster
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

class Toaster extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = { visible: true };
  componentDidMount() {
    if (this.props.timeout) {
      this.timer = setTimeout(() => {
        this.setState({ visible: false });
      }, this.props.timeout);
    }
  }
  componentWillUnmount() {
    if (this.props.timeout) clearTimeout(this.timer);
  }
  handleDismiss = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    const { message, success, error, warning } = this.props;
    if (visible) {
      return (
        <Message
          floating
          onDismiss={this.handleDismiss}
          header="Message from server!"
          content={message}
          positive={success}
          negative={error}
          warning={warning}
        />
      );
    }
    return null;
  }
}

Toaster.propTypes = {
  timeout: PropTypes.number,
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Toaster;
