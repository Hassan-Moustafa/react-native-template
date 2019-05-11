import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from "./android/app/src/components/Home/Home";
import Map from "./android/app/src/components/Map/Map";
import Signup from "./android/app/src/components/Signup/Signup";
import Signin from "./android/app/src/components/Signin/Signin";
import FailedOrder from './android/app/src/components/OrderDetailsTypes/FailedOrder'
import NewClientForm from "./android/app/src/components/NewClientForm/NewClientForm";
import NewDeliveryRequest from "./android/app/src/components/NewDeliverRequest/NewDeliverRequest";
import SuccessScreen from "./android/app/src/components/SuccessScreen/SuccessScreen";
import NewOrder from "./android/app/src/components/OrderDetailsTypes/NewOrder";
import FiredOrder from './android/app/src/components/OrderDetailsTypes/FiredOrder'
import { GlobalStyles } from "./android/app/src/globalStyles/globalStyles";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import SucceedOrder from "./android/app/src/components/OrderDetailsTypes/SucceedOrder";
class Routes extends Component {
  // state = {
  //   currentComponent: Splash
  // };

  // switch = () => {
  //   setTimeout(() => {
  //     this.setState({ currentComponent: Signin });
  //   }, 2000);
  // };
  // componentDidMount() {
  //   this.switch();
  // }
  render() {
    return (
      <NativeRouter>
        <View
          style={{
            backgroundColor: GlobalStyles.mainColor,
            height: responsiveHeight(100),
            width: responsiveWidth(100)
          }}
        >
        
        <Route exact path="/SucceedOrderDetails" component={SucceedOrder}/>
          <Route exact path="/NewOrderDetails" component={NewOrder} />
          <Route exact path="/FiredOrderDetails" component={FiredOrder} />
          <Route exact path="/FailedOrderDetails" component={FailedOrder} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/SuccessScreen" component={SuccessScreen} />
          <Route exact path="/NewClient" component={NewClientForm} />
          <Route
            exact
            path="/NewDeliveryRequest"
            component={NewDeliveryRequest}
          />
        </View>
      </NativeRouter>
    );
  }
}

export default Routes;
