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

import { GlobalStyles } from './android/app/src/globalStyles/globalStyles';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import Help from "./android/app/src/components/Help/Help";
import Profile from "./android/app/src/components/Profile/Profile";
import Settings from "./android/app/src/components/Settings/Settings";
import SearchResult from "./android/app/src/components/SearchResult/SearchResult";
import Logout from './android/app/src/components/Logout/Logout';
import FailedOrders from './android/app/src/components/Orders/FailedOrders';
import AllOrders from './android/app/src/components/Orders/AllOrders';
import ProcessingOrders from './android/app/src/components/Orders/ProccesingOrders';
import SuccessOrders from './android/app/src/components/Orders/SuccessOrders';
import SucceedOrder from "./android/app/src/components/OrderDetailsTypes/SucceedOrder";
import FailedOrder from "./android/app/src/components/OrderDetailsTypes/FailedOrder";
import FiredOrder from "./android/app/src/components/OrderDetailsTypes/FiredOrder";

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
        <View
          style={{
            backgroundColor: GlobalStyles.mainColor,
            height: '100%',
            // height: responsiveHeight(100),
            width: responsiveWidth(100)
          }}
        >
          <Route exact path="/" component={this.state.currentComponent} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Map" component={Map} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/Help" component={Help} />
          <Route exact path="/FailedOrders" component={FailedOrders} />
          <Route exact path="/AllOrders" component={AllOrders} />
          <Route exact path="/SuccessOrders" component={SuccessOrders} />
          <Route exact path="/ProcessingOrders" component={ProcessingOrders} />
          
          <Route exact path="/SucceedOrder" component={SucceedOrder} />
          <Route exact path="/FailedOrder" component={FailedOrder} />
          <Route exact path="/FiredOrder" component={FiredOrder} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/SearchResult" component={SearchResult} />
          <Route exact path="/Notification" component={Notification} />
          <Route exact path="/SuccessScreen" component={SuccessScreen} />
          <Route exact path="/NewClient" component={NewClientForm} />
          <Route exact path="/DeliveryRequest" component={DeliveryRequestConfirmation} />
          <Route exact path="/NewDeliveryRequest" component={NewDeliveryRequest} />
        </View>
      </NativeRouter>

    );
  }
}

export default Routes;
