import React, { Component } from "react";
import HeaderApp from "../common/common/Header";
import { ScrollView } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import OrderDetails from "./OrderDetails";
import Drawer from '../common/common/Drawer';
import { withRouter } from 'react-router-native';
import Tab from '../common/common/Tab';

class OrderStatus extends Component {
  state = {};

  render() {
    console.log(this.props)
    const { type, history } = this.props;

    return (
      <Drawer ref={(ref) => this.drawer = ref}>
        <HeaderApp
          heading={`${type}Order`}
          history={history}
          iconTypeLeft="Ionicons"
          iconNameLeft="ios-menu"
          iconTypeRight="AntDesign"
          iconNameRight="back"
          rightButtonClicked={() => history.goBack()}
          leftButtonClicked={() => this.drawer.openDrawer()}
        />
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          position: 'relative'
        }}>
          <ScrollView>
            <Card
              style={{
                borderRadius: responsiveWidth(5),
                backgroundColor: "white",
                height: responsiveHeight(75),
                width: responsiveWidth(90),
                alignSelf: "center"
              }}
            >
              <OrderDetails type={type} />
            </Card>
          </ScrollView>
          <Tab />
        </View>
      </Drawer>
    );
  }
}

export default withRouter(OrderStatus);
