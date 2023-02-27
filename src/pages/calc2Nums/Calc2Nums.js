// Not sorting imports
import React from 'react';
import PropTypes from 'prop-types';
import ACTION_HANDLERS from './helpers/calc.actionHandlers';
import withActions from '../../utils/withActions';

//Not focusing on the code structure/quality as we are not writing test case for component files
class Calc2Nums extends React.Component {

    onNumChange = (ev, setNum) => {
        const { onAction } = this.props;
        onAction({
            type: setNum,
            payload: {
                value: ev.target.value
            }
        });
    }

    render() {
        const { num1, num2, result } = this.props;
        return <div>
            <input type="number" onChange={ev => this.onNumChange(ev, 'setNum1')} value={num1}></input>
            {`   +   `}
            <input type="number" onChange={ev => this.onNumChange(ev, 'setNum2')} value={num2}></input>
            {`   =   `}
            <span>{result}</span>
        </div>;
    }
}

Calc2Nums.propTypes = {
    num1: PropTypes.number,
    num2: PropTypes.number,
    result: PropTypes.number,
};

Calc2Nums.defaultProps = {
    num1: 0,
    num2: 0,
    result: 0,
};

// Not extracting inital state constant
export default withActions({ num1: 0, num2: 0 }, ACTION_HANDLERS)(Calc2Nums);