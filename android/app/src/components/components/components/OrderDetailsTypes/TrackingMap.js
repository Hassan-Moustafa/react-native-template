import React, { Component } from "react";
import { Text, ScrollView ,StyleSheet } from "react-native";
import { Card, View, List, ListItem, Button, Row } from "native-base";
import MapApp from '../Map/Map'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../globalStyles/globalStyles";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class TrackingMap  extends Component {
    state = {  };

    render() {
        const { type } = this.props;

        return (
            <View>
            <View
            style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                margin:"5%",

              }}
            >
              <View
                style={{
                  width: responsiveWidth(1.2),
                  height: responsiveHeight(2.2),
                  backgroundColor: GlobalStyles.mainColor,
                
                }}
              />
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  width: "100%",
                 
                  fontSize: responsiveFontSize(1.5)
                }}
              >
                {` \u00A0Tracking`}
              </Text>
            </View>
            <View>
      <View
      style={{
        ...StyleSheet.absoluteFillObject,
    height: responsiveHeight(25),
    width: responsiveWidth(82),
    position:'relative',
marginLeft:"5%"    

      }}
      
      >
<MapView
style={{...StyleSheet.absoluteFillObject,alignSelf:'center',
}}
provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
/>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-evenly",margin:"5%"}}>
       {
           
          type=="New"&&(  <Button
        block
        success
        rounded
        style={{width:"40%"}}
        >
          <Text>
            Accept
          </Text>
        </Button>
          )
       }
        <Button
        block
        danger
        rounded
        style={{width:"40%"}}
        >
          <Text>
            Decline
          </Text>
        </Button>
      </View>
      </View>
      </View>
        );
    }
}

export default TrackingMap ;