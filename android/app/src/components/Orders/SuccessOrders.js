import React, { Component } from "react";
import { ScrollView } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import OrderInfo from '../common/common/OrderInfo'
import Orders from "../common/common/Orders";
class SuccessOrders extends Component {
  state = {
    orderTypes: [
      'Success',
      'Success',
      'Success',
      'Success',
      'Success',
      'Success',
      'Success',
      'Success'
    ]
  };

  render() {
    console.log(this.props)
    const { type } = this.props;

    return (

      <Orders ordersData = {this.state.orderTypes}>
      </Orders>
    );
  }
}

export default SuccessOrders;
