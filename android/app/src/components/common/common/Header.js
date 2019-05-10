import React, { Component } from 'react';
import {Text,View} from 'react-native'
import {Button,
    Title,Body,
    Badge,
    Left,Container, Header, Content, Icon, Right } from "native-base";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { GlobalStyles } from '../../globalStyles/globalStyles';

class HeaderApp extends Component {
    state = {  };

    render() {
        const{heading,componentName,iconType,iconName,bGColor}=this.props
        return (
            <Header
                 style={{backgroundColor:heading=="Breakfast"?GlobalStyles.mainColor:bGColor}}

            >
            <Left
            style={{ marginRight:responsiveWidth(5)}}
            >
            <Button
            onPress={()=>this.props.history.goBack()}
             transparent>
            
              <Icon
              style={{color:heading=="Breakfast"?'white':'black',fontSize:25}}
              type={iconType}
               name={iconName} 
               />
            </Button>
          </Left> 
           <Body>
            <Text
            style={{color:heading=="Breakfast"?'white':'black',fontWeight:'bold'}}
            
            >{heading}</Text>
          </Body>
{componentName=="Calender"?(
    <Right>

<Button 
transparent
active badge vertical>
              <Badge
              style={{ 
                zIndex:100 ,
                  left:responsiveWidth(9)
                  ,position:'absolute',top:responsiveHeight(1), width:20,height:20}}
               ><Text
               style={{
                position:'absolute',
                left:responsiveWidth(2),
                   fontSize:10,top:responsiveHeight(.25)}}
               >4</Text>
               </Badge>
              <Icon 
              type="AntDesign"
              style={{color:GlobalStyles.mainColor,fontSize:40}}
              active name="shoppingcart" />
            </Button>
            </Right>

            
            ):<View></View>
}

            </Header>
    
        );
    }
}

export default HeaderApp;