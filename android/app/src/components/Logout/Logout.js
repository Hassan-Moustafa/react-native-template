import React, { Component } from "react";
import { View, Button, Card } from "native-base";
import { Text, ScrollView, BackHandler } from "react-native";
import HeaderApp from "../common/common/Header";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../globalStyles/globalStyles";
import Drawer from '../common/common/Drawer';
import Tab from '../common/common/Tab';



class Logout extends Component {
  state = {};

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.history.goBack();
    return true;
}

  render() {
    return (
      <Drawer ref={(ref) => this.drawer = ref}>
        <HeaderApp
          heading="Log out"
          history={this.props.history}
          iconTypeLeft="Ionicons"
          iconNameLeft="ios-menu"
          iconTypeRight="AntDesign"
          iconNameRight="back"
          rightButtonClicked={() => this.props.history.goBack()}
          leftButtonClicked={() => this.drawer.openDrawer()}
        />
        <View style={
          {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '90%',
            position: 'relative'
          }
        }>
          <ScrollView>
            <Card
              style={{
                borderRadius: responsiveWidth(5),
                backgroundColor: "white",
                height: responsiveHeight(75),
                width: responsiveWidth(90),
                alignSelf: "center",
                alignItems: 'center',
                justifyContent: "center"

              }}
            >
              <ScrollView
                contentContainerStyle={{
                  flex: 1, alignItems: 'center',
                  justifyContent: "center"
                }}
              >
                <View

                >
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: responsiveFontSize(3)
                    }}
                  >Are you sure ?</Text>
                  <View
                    style={{
                      width: responsiveWidth(80),
                      display: 'flex',
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: '15%'
                    }}
                  >
                    <Button
                      block

                      style={{ backgroundColor: GlobalStyles.secondColor, width: responsiveWidth(15), borderRadius: 15 }}
                      onPress={() => this.props.history.push('/Signin')}
                    >
                      <Text>Yes</Text>
                    </Button>
                    <Button
                      block

                      style={{ backgroundColor: GlobalStyles.secondColor, width: responsiveWidth(15), borderRadius: 15 }}
                    >
                      <Text>No</Text>
                    </Button>
                  </View>
                </View>
              </ScrollView>
            </Card>
          </ScrollView>
          <Tab />
        </View>
      </Drawer>
    );
  }
}

export default Logout;
