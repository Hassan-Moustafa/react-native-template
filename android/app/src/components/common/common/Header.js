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
      <Header style={{ backgroundColor: GlobalStyles.mainColor, height: responsiveHeight(10) , display: 'flex' , flexDirection: 'row' , justifyContent: 'space-between', width: responsiveWidth(100) }}>
        {iconNameLeft ? (
          
            <Button onPress={this.props.leftButtonClicked} transparent>
              <Icon
                style={{ fontSize: 30 , color: 'black'}}
                type={iconTypeLeft}
                name={iconNameLeft}
              />
            </Button>
          
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
            
            <Title
              style={{ alignSelf: "center", fontSize: responsiveFontSize(2), color: 'black' }}
            >
              {heading}
            </Title>
  


        {iconNameRight ? (
          
            <Button transparent onPress={this.props.rightButtonClicked}>
              <Icon
                style={{ fontSize: 30 , color: 'black' }}
                type={iconTypeRight}
                name={iconNameRight}
              />
            </Button>
          
        ) : (
          <View />
        )}
      </Header>
    );
  }
}

export default HeaderApp;
