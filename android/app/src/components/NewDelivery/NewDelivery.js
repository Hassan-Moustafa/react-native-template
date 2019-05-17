import React, { Component } from "react";
import { View, Button, Card } from "native-base";
import { Text, ScrollView, StyleSheet } from "react-native";
import HeaderApp from "../common/Header";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { GlobalStyles } from "../../globalStyles/globalStyles";
import TrackingMap from "../OrderDetailsTypes/TrackingMap";

class NewDelivery extends Component {
  state = {};

  render() {
    return (
      <View>
        <HeaderApp
          heading="New Task"
          history={this.props.history}
          iconTypeLeft="Ionicons"
          iconNameLeft="ios-menu"
          iconTypeRight="AntDesign"
          iconNameRight="back"
        />
        <ScrollView>
          <Card
            style={{
              borderRadius: responsiveWidth(5),
              backgroundColor: "white",
              height: responsiveHeight(75),
              width: responsiveWidth(90),
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ScrollView>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  padding: "4%"
                }}
              >
                <View style={{ width: "30%" }}>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    Time{" "}
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    Number:
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    Name:
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    Mobile:
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    Address:
                  </Text>
                </View>
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    10:10
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    9
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    Adam Ahmed
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    01062548932
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
                    Nullam faucibus Nullam faucibus Nullam faucibus Nullam
                    faucibus
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "baseline",
                  flexDirection: "row",
                  padding: "4%"
                }}
              >
                <View style={{ width: "50%" }}>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
Order value :                 </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
Delivery value :
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
Subtotal                  </Text>
                 
                  
                </View>
                <View style={{ width: "50%" }}>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
100
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
100
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(1.3)
                    }}
                  >
100
                  </Text>
                </View>
              </View>
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  height: responsiveHeight(30),
                  width: responsiveWidth(82),
                  position: "relative",
                  marginLeft: "5%"
                }}
              >
                <MapView
                  style={{
                    ...StyleSheet.absoluteFillObject,
                    alignSelf: "center"
                  }}
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                  }}
                />
              </View>
            </ScrollView>
            <Button block rounded
            
            style={{backgroundColor:GlobalStyles.secondColor,marginTop:"5%",
            marginBottom:"5%",
            marginLeft:"20%",
            marginRight:"20%",
            alignItems:'flex-start'}}
            >
              <Text>New Delivery Request</Text>
            </Button>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default NewDelivery;
