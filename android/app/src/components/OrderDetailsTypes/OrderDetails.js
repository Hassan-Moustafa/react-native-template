import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, View, List, ListItem, Button, Row, Icon } from "native-base";
import MapApp from "../Map/Map";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../globalStyles/globalStyles";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import TrackingMap from "./TrackingMap";
class OrderDetails extends Component {
  state = {};

  render() {
    const { type } = this.props;

    return (
      <ScrollView>
        <List>
          <ListItem style={{ alignItems: "baseline" }}>
            <View style={{ width: "30%" }}>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                Time:
              </Text>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                Number:
              </Text>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                Name:
              </Text>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                Mobile:
              </Text>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                Address:
              </Text>
            </View>
            <View style={{ width: "70%" }}>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                10:10
              </Text>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                9
              </Text>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                Adam Ahmed
              </Text>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                01062548932
              </Text>
              <Text
                style={{ color: "black", fontSize: responsiveFontSize(1.3) }}
              >
                Nullam faucibus Nullam faucibus Nullam faucibus Nullam faucibus
              </Text>
            </View>
          </ListItem>
          <ListItem>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: responsiveWidth(1.5),
                    height: responsiveHeight(2),
                    backgroundColor: GlobalStyles.mainColor
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
                  {` \u00A0Pickup Detalis`}
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", marginTop: responsiveHeight(2) }}
              >
                <View
                  style={{
                    width: "40%"
                  }}
                >
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
                </View>
                <View
                  style={{
                    width: "60%"
                  }}
                >
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
                </View>
              </View>
            </View>
          </ListItem>

          <ListItem>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: responsiveWidth(1.5),
                    height: responsiveHeight(2),
                    backgroundColor: GlobalStyles.mainColor
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
                  {` \u00A0Task Description`}
                </Text>
              </View>

              <View
                style={{ flexDirection: "row", marginTop: responsiveHeight(2) }}
              >
                <View
                  style={{
                    width: "50%"
                  }}
                >
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.3),
                      color: "black"
                    }}
                  >
                    Pickup time:
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.3),
                      color: "black"
                    }}
                  >
                    Delivery time:
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.3),
                      color: "black"
                    }}
                  >
                    Es time:
                  </Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.3),
                      color: "black"
                    }}
                  >
                    10:35
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.3),
                      color: "black"
                    }}
                  >
                    10:35
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.3),
                      color: "black"
                    }}
                  >
                    10:35
                  </Text>
                </View>
              </View>
            </View>
          </ListItem>
        </List>
        {(type == "New" || type == "Fired") && <TrackingMap type={type} />}
        {(type == "Failed" || type == "Succeed") && (
          <View
          style={{margin:"5%"}}
          >
            <Icon
            style={{color:type=="Succeed"?"green":"red", alignSelf:'center',
              textAlign:'center'}}
            type={type=="Succeed"?"AntDesign":"Entypo"}
             name={type == "Succeed" ? "checkcircleo" : "cross"} />
            <Text
            style={{
              color:"black",
              alignSelf:'center',
              textAlign:'center'
            }}
            >{`${type}\u00A0Order`}</Text>
          </View>
        )}
      </ScrollView>
    );
  }
}

export default OrderDetails;
