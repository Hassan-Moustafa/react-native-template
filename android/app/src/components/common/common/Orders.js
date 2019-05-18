import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Card } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import OrdersHeader from "./OrdersHeader";
import Drawer from './Drawer';

import OrderInfo from './OrderInfo';

import Tab from './Tab';


class Orders extends Component {
  state = {};

  render() {
    console.log(this.props)
    const { type } = this.props;

    return (
      <Drawer ref={(ref) => this.drawer = ref}>
        <OrdersHeader
          history={this.props.history}
          iconTypeLeft="Ionicons"
          iconNameLeft="ios-menu"
          iconTypeRight="FontAwesome"
          iconNameRight="filter"
          leftButtonClicked={() => this.drawer.openDrawer()}
        />
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          position: 'relative',
          height: responsiveHeight(80)
        }}>
          <ScrollView>
            <Card
              style={styles.card}
            >
              <ScrollView>
                {
                  this.props.ordersData ? this.props.ordersData.map((item) => {
                    return (
                      <OrderInfo
                        orderType={item}
                      />
                    )
                  }) : null
                }
              </ScrollView>
            </Card>
          </ScrollView>
          <Tab />
        </View>

      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: responsiveWidth(5),
    backgroundColor: "white",
    height: responsiveHeight(75),
    width: responsiveWidth(90),
    alignSelf: "center",
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
  }
})
export default Orders;
