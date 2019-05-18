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

class OrdersHeader extends Component {
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
      <Header style={{
        backgroundColor: GlobalStyles.mainColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        height: responsiveHeight(10)
      }}>

        <Button onPress={this.props.leftButtonClicked} transparent>
          <Icon
            style={{ fontSize: 35, color: 'black' }}
            type={iconTypeLeft}
            name={iconNameLeft}
          />
        </Button>

        <Item
          style={{ width: responsiveWidth(61), borderRadius: 15, height: '60%', marginTop: 12, backgroundColor: "white" }}>
          <Input placeholder="search"/>
          <Icon name="magnifier" type="SimpleLineIcons" />
        </Item>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Button transparent style={{margin: 0}}>
            <Icon
              style={{ fontSize: responsiveFontSize(3.5), color: 'black' ,margin: 0}}
              type={iconTypeRight}
              name={iconNameRight}
            />
          </Button>
          {!this.props.hideRightText ? <Text style={{margin: 0}}>
            Filter
          </Text> : null}
        </View>

        <View />
      </Header>
    );
  }
}

export default OrdersHeader;
