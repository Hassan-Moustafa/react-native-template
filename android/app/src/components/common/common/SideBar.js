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
                route: 'Notification'
            },
            {
                text: 'Help',
                icon: helpIcon,
                route: 'Help'
            },
            {
                text: 'Setting',
                icon: settingsIcon,
                route: 'Settings'
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
                    <Link to={`${item.route}`} onPress={() => this.itemClicked()} underlayColor="#f0f4f7" style={{ marginLeft: 15 }}>
                        <Text style={{
                            color: 'white',
                            textAlignVertical: 'center',
                            marginTop: 16,
                        }}>{item.text}</Text>
                    </Link>
                </View>
            )
        });
        return (
            <View>
                <Text style={styles.cancelButton} onPress={this.props.setScreen}>X</Text>

                <View style={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }
                }>
                    <Link to={'/Profile'}>
                        <View style={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignContent: 'center',
                                marginLeft: 15,
                                width: '80%'
                            }
                        }>
                            <Image source={userIcon} style={{
                                width: '30%'
                            }} resizeMode='contain' />
                            <Text style={{
                                color: 'white',
                                textAlignVertical: 'center',
                                marginLeft: 15
                            }}>Ahmed</Text>
                        </View>
                    </Link>
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