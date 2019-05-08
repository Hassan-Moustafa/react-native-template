import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card, View, List, ListItem, Button } from "native-base";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../globalStyles/globalStyles";
class OrderDetails extends Component {
  state = {};

  render() {
    return (
      <View style={{ zIndex: 0 }}>
        <Card
          style={{
            borderRadius: responsiveWidth(5),
            backgroundColor: "white",
            height: responsiveHeight(75),
            width: responsiveWidth(90),
            alignSelf: "center"
          }}
        >
          <ScrollView style={{ height: responsiveHeight(50) }}>
            <List>
              <ListItem style={{ alignItems: "baseline" }}>
                <View style={{ width: "30%" }}>
                  <Text style={{ color: "black", fontSize: 11 }}>Time:</Text>
                  <Text style={{ color: "black", fontSize: 11 }}>Number:</Text>
                  <Text style={{ color: "black", fontSize: 11 }}>Name:</Text>
                  <Text style={{ color: "black", fontSize: 11 }}>Mobile:</Text>
                  <Text style={{ color: "black", fontSize: 11 }}>Address:</Text>
                </View>
                <View style={{ width: "70%" }}>
                  <Text style={{ color: "black", fontSize: 11 }}>10:10</Text>
                  <Text style={{ color: "black" }}>9</Text>
                  <Text style={{ color: "black", fontSize: 11 }}>
                    Adam Ahmed
                  </Text>
                  <Text style={{ color: "black", fontSize: 11 }}>
                    01062548932
                  </Text>
                  <Text style={{ color: "black", fontSize: 11 }}>
                    Nullam faucibus Nullam faucibus Nullam faucibus Nullam
                    faucibus
                  </Text>
                </View>
              </ListItem>
              <ListItem>
                <View>
                  <View
                    style={{
                      paddingBottom: "5%",
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
                        width: "100%"
                      }}
                    >
                      {` \u00A0Pickup Detalis`}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: "40%"
                      }}
                    >
                      <Text style={{ color: "black", fontSize: 11 }}>
                        Name:
                      </Text>
                      <Text style={{ color: "black", fontSize: 11 }}>
                        Mobile:
                      </Text>
                      <Text style={{ color: "black", fontSize: 11 }}>
                        Address:
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "60%"
                      }}
                    >
                      <Text style={{ color: "black", fontSize: 11 }}>
                        Adam Ahmed
                      </Text>
                      <Text style={{ color: "black", fontSize: 11 }}>
                        01062548932
                      </Text>
                      <Text style={{ color: "black", fontSize: 11 }}>
                        Nullam faucibus Nullam faucibus Nullam faucibus Nullam
                        faucibus
                      </Text>
                    </View>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View>
                  <View
                    style={{
                      paddingBottom: "5%",
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
                        width: "100%"
                      }}
                    >
                      {` \u00A0Task Details`}
                    </Text>
                  </View>

                  <Text style={{ color: "black", fontSize: 11 }}>
                    Nullam faucibus Nullam faucibus Nullam faucibus
                  </Text>
                  <View
                    style={{
                      paddingBottom: "5%",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: "100%"
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
                        width: "100%"
                      }}
                    >
                      {` \u00A0History`}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <View style={{ width: "50%" }}>
                      <Text style={{ color: "black", fontSize: 11 }}>
                        Delivery Schedule
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "30%" }}>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                        </View>
                        <View style={{ width: "70%" }}>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                        </View>
                      </View>
                      <Button success rounded block style={{ margin: "4%" }}>
                        <Text
                          style={{
                            color: "white",
                            textAlign: "center",
                            alignSelf: "center"
                          }}
                        >
                          Accept
                        </Text>
                      </Button>
                    </View>
                    <View style={{ width: "50%" }}>
                      <Text style={{ color: "black", fontSize: 10 }}>
                        Takeaway Schedule
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "30%" }}>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            sun
                          </Text>
                        </View>
                        <View style={{ width: "70%" }}>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                          <Text style={{ color: "black", fontSize: 10 }}>
                            16:00 to 21:00
                          </Text>
                        </View>
                      </View>
                      <Button danger rounded block style={{ margin: "4%" }}>
                        <Text
                          style={{
                            color: "white",
                            textAlign: "center",
                            alignSelf: "center"
                          }}
                        >
                          Decline
                        </Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </ListItem>
            </List>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

export default OrderDetails;
