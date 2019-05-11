import React, { Component } from 'react';
import OrderStatus from './OrderStatus'

class SucceedOrder extends Component {
    state = {  };

    render() {
        return (
            <OrderStatus
            type="Succeed"
                />  
        );
    }
}

export default SucceedOrder ;