import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import { Text, Button } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
export default class SplashSign extends Component {

  render() {
    return (
      <ImageBackground

        style={{ width: responsiveWidth(100), height: responsiveHeight(100) }}
        source={require('../../../main/Images/splash.png')}
      />


    );
  }
}
