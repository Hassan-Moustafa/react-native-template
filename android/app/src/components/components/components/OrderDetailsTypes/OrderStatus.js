import React, { Component } from "react";
import HeaderApp from "../common/Header";
import { ScrollView } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import OrderDetails from "./OrderDetails";

class OrderStatus extends Component {
  state = {};

  render() {
      console.log(this.props)
    const { type } = this.props;

    return (
      <View>
        <HeaderApp
          heading={`${type}Order`}
          history={this.props.history}
          iconTypeLeft="Ionicons"
          iconNameLeft="ios-menu"
          iconTypeRight="AntDesign"
          iconNameRight="back"
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
            <OrderDetails type={type} />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default OrderStatus;
