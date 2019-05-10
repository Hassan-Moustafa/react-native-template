import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from './android/app/src/components/Home/Home';
import Map from './android/app/src/components/Map/Map'
import Signup from "./android/app/src/components/Signup/Signup";
import Signin from "./android/app/src/components/Signin/Signin";
import NewClientForm from "./android/app/src/components/NewClientForm/NewClientForm";
import DeliveryRequestConfirmation from "./android/app/src/components/DeliveryRequestConfirmation/DeliveryRequestConfirmation";
import NewDeliveryRequest from "./android/app/src/components/NewDeliverRequest/NewDeliverRequest";
import Splash from "./android/app/src/components/common/common/Splash";
import SuccessScreen from "./android/app/src/components/SuccessScreen/SuccessScreen";

class Routes extends Component {

  state = {
    currentComponent: Splash
  };

  switch = () => {
    setTimeout(() => {
      this.setState({ currentComponent: Signin });
    }, 2000);
  };
  componentDidMount() {
    this.switch();
  }
  render() {

    return (

      <NativeRouter>
        <Route exact path="/" component={this.state.currentComponent} />
        {/*<Route exact path="/" component={Home} />*/}
        <Route exact path="/Map" component={Map} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/SuccessScreen" component={SuccessScreen} />
        {/*<Route exact path="/Signin" component={Signin} />*/}
        <Route exact path="/NewClient" component={NewClientForm} />
        <Route exact path="/DeliveryRequest" component={DeliveryRequestConfirmation} />
        <Route exact path="/NewDeliveryRequest" component={NewDeliveryRequest} />
      </NativeRouter>
    );
  }
}

export default Routes;
