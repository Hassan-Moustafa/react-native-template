import React, { Component } from "react";
import { ScrollView } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import OrderInfo from '../common/common/OrderInfo'
import Orders from "../common/common/Orders";
class ProcessingOrders extends Component {
  state = {
    orderTypes: [
      'Processing',
      'Processing',
      'Processing',
      'Processing',
      'Processing'
    ]
  };

  render() {
    console.log(this.props)
    const { type } = this.props;

    return (

      <Orders ordersData={this.state.orderTypes}>
      </Orders>
    );
  }
}

export default ProcessingOrders;
