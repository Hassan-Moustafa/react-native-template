import React, { Component } from 'react';
import OrderStatus from './OrderStatus'

class FiredOrder extends Component {
    state = {  };

    render() {
        return (
            <OrderStatus
            type="Fired"
                />  
        );
    }
}

export default FiredOrder ;