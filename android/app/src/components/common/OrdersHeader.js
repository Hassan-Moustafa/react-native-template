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
import { GlobalStyles } from "../../globalStyles/globalStyles";

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
      <Header style={{ backgroundColor: GlobalStyles.mainColor }}>
        <Left>
          <Button onPress={() => this.props.history.goBack()} transparent>
            <Icon
              style={{ fontSize: 35 }}
              type={iconTypeLeft}
              name={iconNameLeft}
            />
          </Button>
        </Left>
        <Item
        style={{width:responsiveWidth(61),height:responsiveHeight(7),marginTop:responsiveHeight(2),backgroundColor:"white"}}
         rounded>
          <Input placeholder="search" />
          <Icon name="magnifier" type="SimpleLineIcons" />
        </Item>
        <Right>
        <View
        style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}
        >
          <Button transparent>
            <Icon
              style={{ fontSize: 20 ,color:'black'}}
              type={iconTypeRight}
              name={iconNameRight}
            />
          </Button>
          <Text>
            Filter
          </Text>
          </View>
        </Right>
        <View />
      </Header>
    );
  }
}

export default OrdersHeader;
