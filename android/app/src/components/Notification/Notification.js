import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { Text, Icon, Button } from "native-base";
import {
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";
import Drawer from '../common/common/Drawer';
import Header from '../common/common/Header';

export default class Notification extends Component {



    render() {
        return (
            <Drawer ref={(ref) => this.drawer = ref}>
                <Header
                    heading="Notification"
                    iconTypeLeft="Entypo"
                    iconNameLeft="menu"
                    iconTypeRight="MaterialIcons"
                    iconNameRight="arrow-back"
                    rightButtonClicked={() => this.props.history.goBack()}
                    leftButtonClicked={() => this.drawer.openDrawer()}
                >
                </Header>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.notification}>
                            <Icon style={{
                                fontSize: 26,
                                marginRight: 15
                            }} type="Ionicons" name="ios-notifications-outline" />
                            <Text style={styles.choiceText}>Notification 1</Text>
                        </View>
                        <View style={styles.notification}>
                            <Icon style={{
                                fontSize: 26,
                                marginRight: 15
                            }} type="Ionicons" name="ios-notifications-outline" />
                            <Text style={styles.choiceText}>Notification 2</Text>
                        </View>
                        <View style={styles.notification}>
                            <Icon style={{
                                fontSize: 26,
                                marginRight: 15
                            }} type="Ionicons" name="ios-notifications-outline" />
                            <Text style={styles.choiceText}>Notification 3</Text>
                        </View>
                        <View style={styles.notification}>
                            <Icon style={{
                                fontSize: 26,
                                marginRight: 15
                            }} type="Ionicons" name="ios-notifications-outline" />
                            <Text style={styles.choiceText}>Notification 4</Text>
                        </View>
                    </View>
                </View>

            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffcf11',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        flex: 1
    },
    wrapper: {
        display: 'flex',
        backgroundColor: 'white',
        width: '90%',
        height: '80%',
        position: 'relative',
        left: '5%',
        padding: 20,
        borderRadius: 5,
        marginBottom: 30,
    },
    notification: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#cecece',
        padding: 10,
        margin: 5,
        borderRadius: 30
    },
    choiceText: {
        fontSize: 18
    }

})