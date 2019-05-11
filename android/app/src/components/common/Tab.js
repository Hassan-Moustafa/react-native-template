import React, { Component } from "react";
import { Text, View, TouchableHighlight,Dimensions,Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
const { width, height } = Dimensions.get("window");
import { responsiveHeight ,responsiveWidth} from "react-native-responsive-dimensions";

class Tab extends Component {
   tabs = [
    {
      key: 'Home',
      icon: 'Home',
      label: 'Home',
      barColor: '#FFFAFA',
      pressColor: 'rgba(250,235,215, 0.16)'
    },
    {
      key: 'Offer',
      icon: 'Offers',
      label: 'Offers',
      barColor: '#FFFAFA',
      pressColor: 'rgba(250,235,215,0.16)'
    },
    {
      key: 'Profile',
      icon: 'user',
      label: 'Profile',
      barColor: '#FFFAFA',
       pressColor: 'rgba(250,235,215, 0.16)'
    },
     {
      key: 'Settings',
      icon: 'settings',
      label: 'Settings',
      barColor: '#FFFAFA',
      pressColor: 'rgba(250,235,215, 0.16)'
    }
  ]
  state = {
    currentPressed: "Offers",
    profilePressed: false,
    homePressed: false,
    settingsPressed: false,
    offerPressed: false,
    CurrentActive:"Home"
  };

  renderIcon = (icon)=>({isActive})=>{
    // this.forceUpdate()

    console.log("icon",icon,isActive)
    let Image1=require('../../main/assets/Images/HomePressed.png')
    let Image2 = require('../../main/assets/Images/OfferImage.png')
    let Image3=require('../../main/assets/Images/userPhoto.png')
    let Image4=require('../../main/assets/Images/settings.png')
    let Image1Normal=require('../../main/assets/Images/Squares.png')
    let Image2Pressed = require('../../main/assets/Images/OffersPressed.png')
 let Image3Pressed = require('../../main/assets/Images/userProfilePressed.png')
 let Images4Pressed=require('../../main/assets/Images/settingsPressed.png')
    if(icon=="Offers"){
      return(
        <Image
          source={this.props.history.location.pathname=="/Offers"?Image2Pressed:Image2} />
        )
    }
    if(icon=="Home")
    {
    return(
    <Image
    source={this.props.history.location.pathname=="/Homewithsection"|| this.props.history.location.pathname=="/HomeWithMap" ?Image1:Image1Normal} />
  )}
  if(icon=="user")
  {
    return(
      <Image
      source={this.props.history.location.pathname=="/UserProfile"?Image3Pressed:Image3} />
    )}
  
    if(icon=="settings"){
      return (
        <Image
          source={this.props.history.location.pathname=="/MyBookings"?Images4Pressed:Image4} />
        )
    }
   
}
 
  renderTab = ({ tab, isActive }) =>{
    console.log("tab",tab,isActive)
   return (
    <FullTab
       isActive={isActive}
      key={tab.key}
      labelStyle={{color:'black'}}
      // label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}

    />
  )
}
 Navigation=(newTab)=>{
   console.log("newTab history",this.props.history.location.pathname)
   if(newTab.key=="Profile")
   {
this.setState({currentPressed:'Profile'})
     this.props.history.push('/UserProfile')
   }
   if(newTab.key=="Offer")
   {
    this.setState({currentPressed:'Offers'})

     this.props.history.push('/Offers')
   }
   if(newTab.key=="Home")
   {
    this.setState({currentPressed:'Home'})

     //1st time
     this.props.history.push('/Homewithsection')
    //  this.props.history.push('/FavoriteDay')
   }
   if(newTab.key=="Settings")
   {
    this.setState({currentPressed:'settings'})

     this.props.history.push('/MyBookings')
   }
  this.setState({ activeTab: newTab.key })
 }
  render() {
    const { profilePressed } = this.state;
    const {history,position}=this.props
    console.log("position",position)
   return (
        <BottomNavigation
      backgroundColor="#FFFAFA"
labelColor="white"
        rippleColor="white"
        style={{ width:width
        ,height: "10%", elevation: 1, position: `${this.props.history.location.pathname=='/HomeWithMap' ||this.props.history.location.pathname=='/' ? "relative":"absolute"}`, left: 0, bottom: 0, right: 0 }}
          onTabPress={(newTab) =>this.Navigation(newTab)}
          renderTab={this.renderTab}
          tabs={this.tabs}
          shifting={true}
        />
    )  
  }
}

export default Tab;
