import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native'
import {
    View,
    Button,
    Textarea
} from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../common/common/Header';
import Drawer from '../common/common/Drawer';
import Tab from '../common/common/Tab';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        flex: 1
    },
    header: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    message: {
        width: '90%',
        backgroundColor: 'white',
        position: 'relative',
        left: '5%',
        padding: 30,
        color: 'black',
        borderRadius: 10,
        marginTop: 15,
        height: responsiveHeight(70),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    Button: {
        backgroundColor: '#ffcf11',
        width: '40%',
        marginTop: 20,
        height: responsiveHeight(5),
        alignSelf: 'center',
        borderRadius: 15
    },
    ButtonText: {
        position: 'relative',
        fontWeight: 'bold',
        fontSize: responsiveHeight(2.2),
        color: 'black',
        width: '100%',
        textAlign: 'center'
    }
})

class Help extends Component {

    state = {
        question: ''
    }

    inputChanged = (value) => {
        this.setState({
            question: value
        })
    }
    render() {
        return (
            <Drawer ref={(ref) => this.drawer = ref}>
                <Header
                    heading="Help"
                    iconTypeLeft="Entypo"
                    iconNameLeft="menu"
                    iconTypeRight="AntDesign"
                    iconNameRight="back"
                    rightButtonClicked={() => this.props.history.goBack()}
                    leftButtonClicked={() => this.drawer.openDrawer()}
                >
                </Header>
                <View style={styles.container}>
                    <View>
                        <ScrollView>
                            <View style={styles.message}>
                                <Text style={styles.header}>Ask your question</Text>
                                <Textarea style={{
                                    backgroundColor: '#cecece',
                                    borderRadius: 10,
                                    height: responsiveHeight(30),
                                    marginTop: 20
                                }}
                                    placeholder="Type your question"
                                    onChangeText={this.inputChanged}></Textarea>
                                <Button style={styles.Button} disabled={this.state.question.trim() === ''}>
                                    <Text style={styles.ButtonText}>
                                        Save
                                </Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </View>
                    <Tab />
                </View>
            </Drawer>
        );
    }
}

export default Help;