import React, { Component } from "react";
import { ScrollView, Text, Image } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
class OrderInfo extends Component {
  state = {};
  render() {
    const { orderType}=this.props
    return (
      <Card
        style={{
          borderRadius: responsiveWidth(5),
          backgroundColor: "#F9F9F9",
          opacity:0.5,
          height: responsiveHeight(18),
          width: responsiveWidth(85),
          alignSelf: "center",
          marginTop:responsiveHeight(2)
         
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-around" }}>
          <View>
            <Text
            style={{color:'black'}}
            >Order No:</Text>
            <Text
            style={{color:'black'}}
            >Mobile No:</Text>
            <Text
            style={{color:'black'}}
            >Name:</Text>
            <Text
            style={{color:'black'}}
            >Address</Text>
          </View>
          <View>
            <Text
            style={{color:'black'}}
            >263</Text>
            <Text
            style={{color:'black'}}
            >01025463215</Text>
            <Text
            style={{color:'black'}}
            >Adam Ahmed</Text>
            <Text
            style={{color:'black'}}
            >Nasr st. flat5</Text>
          </View>
          <View>
          {
            orderType=="Processing"&&(

            <Image
              style={{ width: 65, height: 55 }}
              source={require("../../main/Images/proccessingOrder.png")}
            />
            )
          }
          {
            orderType=="Success" &&(
              <Image
              style={{ width: 65, height: 55 }}
              source={require("../../main/Images/SuccessOrder.png")}
            />
            )
          }
          {
            orderType=="Failed" &&(
              <Image
              style={{ width: 65, height: 55 }}
              source={require("../../main/Images/FailedOrder.png")}
            />
            )
          }
          </View>
        </View>
      </Card>
    );
  }
}

export default OrderInfo;
