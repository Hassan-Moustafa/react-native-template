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
  Title,
  Item,
  Input
} from "native-base";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../../globalStyles/globalStyles";

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
            <Button onPress={this.props.leftButtonClicked} transparent>
              <Icon
                style={{ fontSize: 30 , color: 'black'}}
                type={iconTypeLeft}
                name={iconNameLeft}
              />
            </Button>
          </Left>
        ) : (
          <View />
        )}

       
          {/* {componentName == "orders" ? (
            <View
                 style={{width:responsiveWidth(55),alignSelf:'center'

}}
            >
            <Item rounded
       
            >
              <Input placeholder="search" />
              <Icon name="magnifier" type="SimpleLineIcons" />
            </Item>
            </View>
           */}
            <Body style={{ flex: 1, justifyContent: "center" }}>
            <Title
              style={{ alignSelf: "center", fontSize: responsiveFontSize(2.2), color: 'black' }}
            >
              {heading}
            </Title>
            </Body>


        {iconNameRight ? (
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={this.props.rightButtonClicked}>
              <Icon
                style={{ fontSize: 30 , color: 'black' }}
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
