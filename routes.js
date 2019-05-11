import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from './android/app/src/components/Home/Home2';
import Map from './android/app/src/components/Map/Map'
import Signup from "./android/app/src/components/Signup/Signup";
import Signin from "./android/app/src/components/Signin/Signin";
import NewClientForm from "./android/app/src/components/NewClientForm/NewClientForm";
import DeliveryRequestConfirmation from "./android/app/src/components/DeliveryRequestConfirmation/DeliveryRequestConfirmation";
import NewDeliveryRequest from "./android/app/src/components/NewDeliverRequest/NewDeliverRequest";
import Splash from "./android/app/src/components/common/common/Splash";
import SuccessScreen from "./android/app/src/components/SuccessScreen/SuccessScreen";

import { Drawer } from 'native-base';
import SideBar from './android/app/src/components/common/common/SideBar';

class Routes extends Component {

  state = {
    currentComponent: Splash
  };

  switch = () => {
    setTimeout(() => {
      this.setState({ currentComponent: Signin });
    }, 2000);
  };

  setScreen = () => {
    this.closeDrawer();
  }
  componentDidMount() {
    this.switch();
    console.log('did mount', this.drawer);
  }

  componentDidUpdate() {
    console.log('did update', this.drawer);
  }

  componentWillUnmount() {
    console.log('unmonut')
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };



  render() {
    return (
      <NativeRouter>
        <Drawer
          ref={(ref) => this.drawer = ref}
          content={<SideBar openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} setScreen={this.setScreen} />}
          onClose={() => this.closeDrawer()}
          tweenDuration={250}
          tweenEasing="easeInQuart"
          styles={{
            drawer: {
              shadowColor: 'white',
              backgroundColor: 'black',
              shadowOpacity: 0.8,
              shadowRadius: 3,
              opacity: 0.9

            },
            main: {},
          }}>
          <Text onPress={this.openDrawer}>open</Text>
          <Route exact path="/" component={this.state.currentComponent} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Map" component={Map} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/SuccessScreen" component={SuccessScreen} />
          <Route exact path="/NewClient" component={NewClientForm} />
          <Route exact path="/DeliveryRequest" component={DeliveryRequestConfirmation} />
          <Route exact path="/NewDeliveryRequest" component={NewDeliveryRequest} />
        </Drawer>
      </NativeRouter>

    );
  }
}

export default Routes;
