import React, { Component } from "react";
import { Text } from "react-native";
import {
  View,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Right
} from "native-base";
import OrderDetails from "./OrderDetails";

import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../globalStyles/globalStyles";
import HeaderApp from "../common/Header";
class NewTask extends Component {
  render() {
    return (
      <View
       
      >
        <HeaderApp

            heading="New Task"
            iconType="AntDesign"
            iconName="leftcircleo"
            bGColor={GlobalStyles.mainColor}
            history={this.props.history}
        />
        <Button
        info
        style={{width:responsiveWidth(20),backgroundColor:GlobalStyles.secondColor,height:responsiveHeight(10),zIndex:2,position:'absolute',left:responsiveWidth(70),top:responsiveHeight(8),justifyContent:'center'}}
        >
        <View
        >
            <Text
                    style={{textAlign:'center'}}
>
                New 
            </Text>
            <Text
                    style={{textAlign:'center'}}

            >
            Delivery
            </Text>
            </View>
        </Button>
<OrderDetails/>
      </View>
    );
  }
}

export default NewTask;
