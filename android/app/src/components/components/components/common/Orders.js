import React, { Component } from "react";
import { ScrollView } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import OrdersHeader from "../common/OrdersHeader";

class Orders extends Component {
  state = {};

  render() {
      console.log(this.props)
    const { type } = this.props;

    return (
      <View>
       <OrdersHeader
          history={this.props.history}
          iconTypeLeft="Ionicons"
          iconNameLeft="ios-menu"
          iconTypeRight="FontAwesome"
          iconNameRight="filter"

       />
        <ScrollView>
          <Card
            style={{
              borderRadius: responsiveWidth(5),
              backgroundColor: "white",
              height: responsiveHeight(75),
              width: responsiveWidth(90),
              alignSelf: "center"
            }}
          >
          <ScrollView>
{
  this.props.children
}
          </ScrollView>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default Orders;
