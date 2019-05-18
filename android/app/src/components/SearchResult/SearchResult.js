import React, { Component } from "react";
import { View, ScrollView, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { Text, Icon, Button } from "native-base";
import {
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";
import Drawer from '../common/common/Drawer';
import Header from '../common/common/Header';
import FormBuilder from '../FormBuilder/FormBuilder';
import Tab from '../common/common/Tab';

export default class SearchResult extends Component {


    state = {
        form: {
            orderValue: {
                elementType: 'input',
                elementConfig: {
                    icon: 'coins',
                    iconType: 'FontAwesome5',
                    rounded: true,
                    placeholder: 'Order value',
                    value: '',
                    fieldValueName: 'value',
                    style: {
                    },
                    wrapperStyle: {
                        backgroundColor: '#cecece',
                        height: responsiveHeight(6)
                    },
                    rootWrapperStyle: {
                        width: '100%',
                        height: responsiveHeight(6),
                        marginBottom: 5
                    }
                },
                validationRules: {
                    isRequired: true,
                },
                valid: false,
                touched: false
            },
            deliveryValue: {
                elementType: 'input',
                elementConfig: {
                    icon: 'coins',
                    iconType: 'FontAwesome5',
                    rounded: true,
                    placeholder: 'Delivery value',
                    value: '',
                    fieldValueName: 'value',
                    secureTextEntry: true,
                    style: {
                    },
                    wrapperStyle: {
                        backgroundColor: '#cecece',
                        height: responsiveHeight(6)
                    },
                    rootWrapperStyle: {
                        width: '100%',
                        height: responsiveHeight(6),
                        marginBottom: 5
                    }
                },
                validationRules: {
                    isRequired: true,
                },
                valid: false,
                touched: false
            },
            subTotal: {
                elementType: 'input',
                elementConfig: {
                    icon: 'coins',
                    iconType: 'FontAwesome5',
                    rounded: true,
                    placeholder: 'Subtotal',
                    value: '',
                    fieldValueName: 'value',
                    secureTextEntry: true,
                    style: {
                    },
                    wrapperStyle: {
                        backgroundColor: '#cecece',
                        height: responsiveHeight(6)
                    },
                    rootWrapperStyle: {
                        width: '100%',
                        height: responsiveHeight(6),
                        marginBottom: 5
                    }
                },
                validationRules: {
                    isRequired: true,
                },
                valid: false,
                touched: false
            },
        },
        formValidity: false,
        formValues: {},
        opened: false
    }


    formValidityChanged = (value) => {
        this.setState({
            formValidity: value
        })
    }

    setFormValues = (values) => {
        this.setState({
            formValues: values
        })
    }

    onSubmit = () => {
        console.log('submitted data ', this.state.formValues);
        this.props.history.push('/Home')
    }


    render() {
        return (
            <Drawer ref={(ref) => this.drawer = ref}>
                <Header
                    heading="Search Result"
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
                        <ScrollView>
                            <View>
                                <Text>Ahmed Mohamed</Text>
                                <Text>01062548932</Text>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                <Button rounded style={styles.Button}>
                                    <Text style={styles.ButtonText}>Edit</Text>
                                </Button>
                                <Text style={styles.header}>Order Details</Text>
                                <FormBuilder
                                    form={this.state.form}
                                    formValidityChanged={this.formValidityChanged}
                                    saveFormValues={this.setFormValues}></FormBuilder>
                                <Button rounded style={[styles.Button, { width: '60%' }]} >
                                    <Text style={styles.ButtonText}>Add new task</Text>
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

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    },
    Button: {
        backgroundColor: '#ffcf11',
        width: '40%',
        marginTop: 10,
        alignSelf: 'center',
        height: responsiveHeight(5),
    },
    ButtonText: {
        position: 'relative',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        width: '100%',
        textAlign: 'center'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 15
    },

})