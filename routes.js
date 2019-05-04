import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link ,Switch } from "react-router-native";
import Home from './android/app/src/components/Home/Home';
import Map from './android/app/src/components/Map/Map'
import Signup from "./android/app/src/components/Signup/Signup";
class Routes extends Component {

  render() {
  
    return (
     
      <NativeRouter>
              <Route exact path="/" component={Home} />
              <Route exact path="/Map" component={Map} />
              <Route exact path="/Signup" component={Signup} />
      </NativeRouter>
    );
  }
}

export default Routes;
