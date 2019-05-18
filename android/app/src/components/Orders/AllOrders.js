import React, { Component } from "react";
import { ScrollView } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import OrderInfo from '../common/common/OrderInfo'
import Orders from "../common/common/Orders";
class AllOrders extends Component {
  state = {
    orderTypes: [
      'Failed',
      'Processing',
      'Success',
      'Success',
      'Processing',
      'Failed',
      'Processing',
      'Failed'
    ]
  };

  render() {
    console.log(this.props)
    const { type, history } = this.props;

    return (

      <Orders ordersData={this.state.orderTypes}>

      </Orders>
    );
  }
}

export default AllOrders;
