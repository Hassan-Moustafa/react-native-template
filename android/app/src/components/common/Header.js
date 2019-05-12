import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Button,
  Body,
  Badge,
  Left,
  Container,
  Header,
  Content,
  Icon,
  Right,
  Title
} from "native-base";
import {
  responsiveWidth,
  responsiveHeight,responsiveFontSize
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../globalStyles/globalStyles";

class HeaderApp extends Component {
  state = {};

  render() {
    const {
      heading,
      componentName,
      iconTypeLeft,
      iconNameLeft,
      history,
      iconTypeRight,
      iconNameRight
    } = this.props;
    return (
      <Header style={{ backgroundColor: GlobalStyles.mainColor }}>
        {iconNameLeft ? (
          <Left style={{ flex: 1 }}>
            <Button onPress={() => this.props.history.goBack()} transparent>
              <Icon
                style={{ fontSize: 25 }}
                type={iconTypeLeft}
                name={iconNameLeft}
              />
            </Button>
          </Left>
        ) : (
          <View />
        )}

        <Body style={{ flex: 1, justifyContent: "center" }}>
          <Title style={{ alignSelf: "center",
         fontSize: responsiveFontSize(1.8) }}>{heading}</Title>
        </Body>

        {iconNameRight ? (
          <Right style={{ flex: 1 }}>
            <Button transparent>
              <Icon
                style={{ fontSize: 25 }}
                type={iconTypeRight}
                name={iconNameRight}
              />
            </Button>
          </Right>
        ) : (
          <View />
        )}
      </Header>
    );
  }
}

export default HeaderApp;