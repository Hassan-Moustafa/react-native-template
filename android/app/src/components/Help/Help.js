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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffcf11',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        flex: 1
    },
    header: {
        fontSize: 25,
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
        height: responsiveHeight(80),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    Button: {
        backgroundColor: '#ffcf11',
        width: '40%',
        marginTop: 10,
        height: responsiveHeight(5),
        alignSelf: 'center',
    },
    ButtonText: {
        position: 'relative',
        fontWeight: 'bold',
        fontSize: 20,
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
                    iconTypeRight="MaterialIcons"
                    iconNameRight="arrow-back"
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
                                <Button rounded style={styles.Button} disabled={this.state.question.trim() === ''}>
                                    <Text style={styles.ButtonText}>
                                        Save
                                </Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Drawer>
        );
    }
}

export default Help;