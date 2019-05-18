import React, { Component } from "react";
import { ScrollView, Text, Image, TouchableHighlight } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import { withRouter } from 'react-router-native';

class OrderInfo extends Component {
  state = {};
  render() {
    const { orderType,history } = this.props
    let route = 'Home';
    if(orderType === 'Success'){
      route = 'SucceedOrder'
    }else if(orderType === 'Failed'){
      route = 'FailedOrder'
    }else if(orderType === 'Processing'){
      route = 'FiredOrder'
    }
    return (
      <TouchableHighlight onPress={() => history.push(`/${route}`)}>
        <Card
          style={{
            borderRadius: responsiveWidth(5),
            backgroundColor: "#cecece",
            height: responsiveHeight(18),
            width: responsiveWidth(85),
            alignSelf: "center",
            marginTop: responsiveHeight(2),
            paddingTop: 10

          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
            <View>
              <Text
                style={{ color: 'black' }}
              >Order No:</Text>
              <Text
                style={{ color: 'black' }}
              >Mobile No:</Text>
              <Text
                style={{ color: 'black' }}
              >Name:</Text>
              <Text
                style={{ color: 'black' }}
              >Address</Text>
            </View>
            <View>
              <Text
                style={{ color: 'black' }}
              >263</Text>
              <Text
                style={{ color: 'black' }}
              >01025463215</Text>
              <Text
                style={{ color: 'black' }}
              >Adam Ahmed</Text>
              <Text
                style={{ color: 'black' }}
              >Nasr st. flat5</Text>
            </View>
            <View>
              {
                orderType == "Processing" ? (

                  <Image
                    style={{ width: 65, height: 55 }}
                    source={require("../../../main/Images/proccessingOrder.png")}
                  />
                ) : null
              }
              {
                orderType == "Success" ? (
                  <Image
                    style={{ width: 65, height: 55 }}
                    source={require("../../../main/Images/SuccessOrder.png")}
                  />
                ) : null
              }
              {
                orderType == "Failed" ? (
                  <Image
                    style={{ width: 65, height: 55 }}
                    source={require("../../../main/Images/FailedOrder.png")}
                  />
                ) : null
              }
            </View>
          </View>
        </Card>
      </TouchableHighlight>
    );
  }
}

export default withRouter(OrderInfo);
