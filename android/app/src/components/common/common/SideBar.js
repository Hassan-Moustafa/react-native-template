import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { View, Text } from 'native-base';

import userIcon from '../../../main/Images/user.png';
import homeIcon from '../../../main/Images/home.png';
import notficationIcon from '../../../main/Images/notification.png';
import helpIcon from '../../../main/Images/help.png';
import settingsIcon from '../../../main/Images/settings.png';
import logoutIcon from '../../../main/Images/logout.png';

import { NativeRouter, Route, Link } from "react-router-native";

export default class SideBar extends Component {

    state = {
        NavItems: [
            {
                text: 'Home',
                icon: homeIcon,
                route: 'Home'
            },
            {
                text: 'Notifications',
                icon: notficationIcon,
                route: 'NewClient'
            },
            {
                text: 'Help',
                icon: helpIcon,
                route: 'Home'
            },
            {
                text: 'Setting',
                icon: settingsIcon,
                route: 'Home'
            },
            {
                text: 'Log out',
                icon: logoutIcon,
                route: 'Home'
            }
        ]
    }

    itemClicked = () => {
        this.props.setScreen();
    }
    render() {

        console.log(this.props)
        let navItems = this.state.NavItems.map((item, index) => {
            return (

                <View key={index} style={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignContent: 'center',
                        marginLeft: 15,
                        borderBottomWidth: 1,
                        borderColor: 'white',
                        width: '80%'
                    }
                }>
                    <Image source={item.icon} style={{
                        width: '8%'
                    }} resizeMode='contain' />
                    <Link to={`${item.route}`} onPress={this.itemClicked} underlayColor="#f0f4f7" replace={true} style={{marginLeft: 15}}>
                        <Text style={{
                            color: 'white',
                            textAlignVertical: 'center',
                            marginTop:16,
                        }}>{item.text}</Text>
                    </Link>
                </View>
            )
        });
        return (
            <View>
                <Text style={styles.cancelButton} onPress={this.props.closeDrawer}>X</Text>

                <View style={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }
                }>
                    <Image source={userIcon} style={{
                        width: '13%'
                    }} resizeMode='contain' />
                    <Text style={{
                        color: 'white',
                        textAlignVertical: 'center',
                        marginLeft: 15
                    }}>Ahmed</Text>
                </View>



                <View style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {navItems}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    cancelButton: {
        color: '#ffcf11',
        fontSize: 30,
        paddingLeft: 15
    }
})