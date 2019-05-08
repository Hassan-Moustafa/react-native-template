import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from './android/app/src/components/common/Splash'
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from "./android/app/src/components/Home/Home";
import MapApp from "./android/app/src/components/Map/Map";
import NewTask from "./android/app/src/components/OrderDetails/NewTask";
import { GlobalStyles } from "./android/app/src/globalStyles/globalStyles";
import { responsiveHeight } from "react-native-responsive-dimensions";
class Routes extends Component {

  state = {
    currentComponent:Splash,
  };

  switch=()=>{ setTimeout(
    () => {
    this.setState({currentComponent:NewTask})
  }, 2000)
}
componentDidMount(){
  this.switch()
}
  render() {
    return (
      <View
        style={{
          backgroundColor: GlobalStyles.mainColor,
          height: responsiveHeight(100)
        }}
      >
        <NativeRouter>
          <Route exact path="/" component={this.state.currentComponent} />
          <Route exact path="/NewTask" component={NewTask} />
          <Route exact path="/Map" component={MapApp} />
        </NativeRouter>
      </View>
    );
  }
}

export default Routes;
