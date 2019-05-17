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
//import { GlobalStyles } from "../../globalStyles/globalStyles";

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
      iconNameRight,
      leftButtonClicked,
      rightButtonClicked
    } = this.props;
    return (
      <Header style={{ backgroundColor: '#ffcf11' , position: 'relative'}}>
        {iconNameLeft ? (
          <Left style={{ flex: 1 }}>
            <Button onPress={leftButtonClicked} transparent>
              <Icon
                style={{ fontSize: 25 ,color: 'black'}}
                type={iconTypeLeft}
                name={iconNameLeft}
              />
            </Button>
          </Left>
        ) : (
          <View />
        )}

        <Body style={{ flex: 1, justifyContent: "center", width: 160 }}>
          <Title style={{ alignSelf: "center",
         fontSize: responsiveFontSize(2.5) ,color: 'black'}}>{heading}</Title>
        </Body>

        {iconNameRight ? (
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={rightButtonClicked}>
              <Icon
                style={{ fontSize: 25 ,color: 'black'}}
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