import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import ImageOverlay from "react-native-image-overlay";
import { Text, Button } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import {GlobalStyles} from '../globalStyles/globalStyles'
export default class SplashSign extends Component {
  state = {};
Login=()=>{
  this.props.history.push('/Login')
}

SignUp=()=>{
  this.props.history.push('/SignUp')
}

  render() {
    return (
      <ImageOverlay
        source={require("../../main/assets/Images/BG.png")}
        containerStyle={{ height: responsiveHeight(100) }}
        resizeMode="cover"
      >
        <Image
          style={{
            width: "40%",
            height: "25%",
            top: responsiveHeight(15),
            position: "absolute"
          }}
          source={require("../../main/assets/Images/logo.png")}
        />
        <Text
          style={{
            color: "white",
            marginTop: responsiveHeight(40),
            fontSize: 12
          }}
        >
          Don't have account
        </Text>

        <Button
                onPress={()=>{this.SignUp()}}

         rounded block style={{ backgroundColor:GlobalStyles.mainColor, margin: responsiveHeight(1) }}>
          <Text uppercase={false}>Sign up</Text>
        </Button>

        <Button 
        onPress={()=>{this.Login()}}
        rounded block style={{ backgroundColor:GlobalStyles.mainColor, margin: responsiveHeight(1) }}>
          <Text uppercase={false}>Login</Text>
        </Button>
      </ImageOverlay>
    );
  }
}
