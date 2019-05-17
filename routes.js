import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from './android/app/src/components/Home/Home2';
import Map from './android/app/src/components/Map/Map'
import Signup from "./android/app/src/components/Signup/Signup";
import Signin from "./android/app/src/components/Signin/Signin";
import Notification from './android/app/src/components/Notification/Notification';
import NewClientForm from "./android/app/src/components/NewClientForm/NewClientForm";
import DeliveryRequestConfirmation from "./android/app/src/components/DeliveryRequestConfirmation/DeliveryRequestConfirmation";
import NewDeliveryRequest from "./android/app/src/components/NewDeliverRequest/NewDeliverRequest";
import Splash from "./android/app/src/components/common/common/Splash";
import SuccessScreen from "./android/app/src/components/SuccessScreen/SuccessScreen";

import { Drawer } from 'native-base';
import SideBar from './android/app/src/components/common/common/SideBar';

import Help from "./android/app/src/components/Help/Help";
import Profile from "./android/app/src/components/Profile/Profile";
import Settings from "./android/app/src/components/Settings/Settings";
import SearchResult from "./android/app/src/components/SearchResult/SearchResult";


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




  render() {
    return (
      <NativeRouter>
          <Route exact path="/" component={this.state.currentComponent} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Map" component={Map} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Help" component={Help} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/SearchResult" component={SearchResult} />
          <Route exact path="/Notification" component={Notification} />
          <Route exact path="/SuccessScreen" component={SuccessScreen} />
          <Route exact path="/NewClient" component={NewClientForm} />
          <Route exact path="/DeliveryRequest" component={DeliveryRequestConfirmation} />
          <Route exact path="/NewDeliveryRequest" component={NewDeliveryRequest} />
        
      </NativeRouter>

    );
  }
}

export default Routes;
