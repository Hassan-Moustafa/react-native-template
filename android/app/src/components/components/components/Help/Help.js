import React, { Component } from "react";
import { View, Button, Card, Textarea } from "native-base";
import { Text, ScrollView } from "react-native";
import HeaderApp from "../common/Header";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../globalStyles/globalStyles";

class Help extends Component {
  state = {};

  render() {
    return (
      <View>
        <HeaderApp
          heading="Help"
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
            <ScrollView
              contentContainerStyle={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={{
                    color: "balck",
                    fontWeight: "bold"
                  }}
                >
                  Ask your question
                </Text>
                <View>
                  <Textarea
                    style={{
                      backgroundColor: "#dedede",
                      width: responsiveWidth(70),
                      borderRadius: 20,
                      marginTop: responsiveHeight(2),

                      color: "#5c5c5c",
                      fontFamily: "Nunito",
                      fontWeight: "400"
                    }}
                    rowSpan={5}
                    bordered
                    placeholder="Type your question"
                  />
                  <Button
                    block
                    rounded
                    style={{
                      backgroundColor: GlobalStyles.secondColor,
                      width: responsiveWidth(30),
                      marginTop: responsiveHeight(2),
                      alignSelf: "center"
                    }}
                  >
                    <Text>Send</Text>
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

export default Help;
