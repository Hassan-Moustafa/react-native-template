import React, { Component } from "react";
import { ScrollView } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import OrderInfo  from '../common/OrderInfo'
import Orders from "../common/Orders";
class FailedOrders extends Component {
  state = {};

  render() {
      console.log(this.props)
    const { type } = this.props;

    return (

      <Orders>
<OrderInfo
orderType="Failed"
/>
<OrderInfo
orderType="Failed"
/><OrderInfo
orderType="Failed"
/><OrderInfo
orderType="Failed"
/><OrderInfo
orderType="Processing"
/>
</Orders>
    );
  }
}

export default FailedOrders;
