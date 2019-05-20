import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback, BackHandler } from "react-native";
import { Text, Icon, Button } from "native-base";
import {
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";
import Drawer from '../common/common/Drawer';
import Header from '../common/common/Header';
import Tab from '../common/common/Tab';

export default class Notification extends Component {

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
                <Header
                    heading="Notification"
                    iconTypeLeft="Entypo"
                    iconNameLeft="menu"
                    iconTypeRight="AntDesign"
                    iconNameRight="back"
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
                <Tab />
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
    },
    wrapper: {
        display: 'flex',
        backgroundColor: 'white',
        width: '90%',
        height: responsiveHeight(70),
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