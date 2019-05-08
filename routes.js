import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link ,Switch } from "react-router-native";
import Home from './android/app/src/components/Home/Home';
import Map from './android/app/src/components/Map/Map';
import NewTask from './android/app/src/components/OrderDetails/NewTask'
import { GlobalStyles } from "./android/app/src/globalStyles/globalStyles";
import { responsiveHeight } from "react-native-responsive-dimensions";
class Routes extends Component {

  render() {
  
    return (
      <View
      style={{backgroundColor:GlobalStyles.mainColor,height:responsiveHeight(100)}}
      >
       
      <NativeRouter
    
      >
            <Route exact path="/" component={NewTask} />
              <Route exact path="/Map" component={Map} />
      </NativeRouter>
      </View>

    );
  }
}

export default Routes;
