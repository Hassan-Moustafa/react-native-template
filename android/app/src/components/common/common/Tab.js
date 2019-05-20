import React, { Component } from "react";
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
const { width, height } = Dimensions.get("window");
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { withRouter } from 'react-router-native';

import allOrdersImage from '../../../main/Images/allOrders.png';
import processingImage from '../../../main/Images/proccessing.png';
import homeImage from '../../../main/Images/home.png';
import successImage from '../../../main/Images/success.png';
import failedImage from '../../../main/Images/failed.png';

class Tab extends Component {
  state = {
    tabs: [
      {
        route: 'AllOrders',
        icon: allOrdersImage,
      },
      {
        route: 'ProcessingOrders',
        icon: processingImage,
      },
      {
        route: 'Home',
        icon: homeImage,
      },
      {
        route: 'SuccessOrders',
        icon: successImage,
      },
      {
        route: 'FailedOrders',
        icon: failedImage,
      }
    ]
  };



  render() {

    let tabs = this.state.tabs.map((tab) => {
      return (
        <View>
          <TouchableOpacity onPress={() => this.props.history.push(`/${tab.route}`)}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'baseline',
            }}>
              {
                this.props.history.location.pathname === `/${tab.route}` ?

                  <View style={{
                    height: '80%',
                    position: 'relative',
                    width: 5,
                    borderRadius: 15,
                    backgroundColor: 'yellow'
                  }}>
                  </View> : null
              }
              <Image source={tab.icon} style={styles.iconImage} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        </View>
      )
    })

    return (
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        width: responsiveWidth(90),
        // height: responsiveHeight(12),
        position: 'absolute',
        bottom: '0%',
        // top: '90%',
        left: responsiveWidth(5),
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingBottom: 15
      }}>
        {tabs}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconImage: {
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    marginTop: 7

  }
})

export default withRouter(Tab);
