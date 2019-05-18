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
      <Header style={{ backgroundColor: GlobalStyles.mainColor, display: 'flex', flexDirection: 'row', height: responsiveHeight(10) }}>
        <Left>
          <Button onPress={this.props.leftButtonClicked} transparent>
            <Icon
              style={{ fontSize: 35, color: 'black' }}
              type={iconTypeLeft}
              name={iconNameLeft}
            />
          </Button>
        </Left>
        <Item
          style={{ width: responsiveWidth(61), height: '60%', marginTop: 12, backgroundColor: "white" }}
          rounded>
          <Input placeholder="search" />
          <Icon name="magnifier" type="SimpleLineIcons" />
        </Item>
        <Right>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Button transparent>
              <Icon
                style={{ fontSize: 30, color: 'black'}}
                type={iconTypeRight}
                name={iconNameRight}
              />
            </Button>
             { !this.props.hideRightText ? <Text>
              Filter
          </Text> : null }
          </View>
        </Right>
        <View />
      </Header>
    );
  }
}

export default OrdersHeader;
