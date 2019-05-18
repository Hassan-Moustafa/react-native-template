import React, { Component } from "react";
import { View, Button, Card } from "native-base";
import { Text, ScrollView } from "react-native";
import HeaderApp from "../common/Header";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../globalStyles/globalStyles";

class Logout extends Component {
  state = {};

  render() {
    return (
      <View>
        <HeaderApp
          heading="Log out"
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
              alignItems:'center',
                justifyContent:"center"
   
            }}
          >
            <ScrollView
      contentContainerStyle={{flex:1, alignItems:'center',
                justifyContent:"center"}}
            >
              <View
    
              >
                <Text
                style={{
                  color:'balck',
                  fontWeight:'bold'
                }}
                >Are you sure ?</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop:'15%'
                  }}
                >
                  <Button
                    block
                    rounded
                    style={{ backgroundColor: GlobalStyles.secondColor,width:responsiveWidth(15)}}
                  >
                    <Text>Yes</Text>
                  </Button>
                  <Button
                  block
                  rounded
                    style={{ backgroundColor: GlobalStyles.secondColor ,width:responsiveWidth(15)}}
                  >
                    <Text>NO</Text>
                  </Button>
                </View>
              </View>
            </ScrollView>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default Logout;
