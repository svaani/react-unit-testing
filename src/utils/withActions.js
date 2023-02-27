/* eslint implicit-arrow-linebreak: 0 */
import React, { Component } from 'react';

// Lodash
import _isFunction from 'lodash/isFunction';

const EMPTY_OBJECT = Object.freeze({});

const DEFAULT_OPTIONS = {
  shouldForwardAction: false,
};

const withActions = (initialState = EMPTY_OBJECT, actionHandlers = EMPTY_OBJECT, options = DEFAULT_OPTIONS) =>
  function wrapComponent(WrappedComponent) {
    class WithActions extends Component {
      state = _isFunction(initialState) ? initialState(this.props) : initialState;

      getState = () => {
        const { forwardedRef, ...rest } = this.props;
        return {
          ...rest,
          ...this.state,
        };
      };

      handleAction = (action = EMPTY_OBJECT) => {
        const handler = actionHandlers[action.type];
        const { onAction, shouldForwardAction } = this.props;

        let result;

        if (handler) {
          result = handler({
            params: action.payload,
            getState: this.getState,
            setState: this.setState.bind(this),
          });
        }

        if (options.shouldForwardAction || shouldForwardAction) {
          result = onAction(action, result);
        }

        return result;
      };

      render() {
        const { forwardedRef, ...rest } = this.props;
        return <WrappedComponent ref={forwardedRef} {...rest} {...this.state} onAction={this.handleAction} />;
      }
    }

    return React.forwardRef((props, ref) => <WithActions {...props} forwardedRef={ref} />);
  };

export default withActions;