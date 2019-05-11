import React, { Component } from 'react';
import OrderStatus from './OrderStatus'

class FailedOrder extends Component {
    state = {  };

    render() {
        return (
            <OrderStatus
            type="Failed"
                />  
        );
    }
}

export default FailedOrder ;