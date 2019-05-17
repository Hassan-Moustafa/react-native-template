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
import RadioButtons from '../common/common/RadioButton';
import FormBuilder from '../FormBuilder/FormBuilder';

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
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left'
    },
    message: {
        width: '90%',
        backgroundColor: 'white',
        position: 'relative',
        left: '5%',
        padding: 15,
        color: 'black',
        borderRadius: 10,
        marginTop: 15,
        height: responsiveHeight(80),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
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

class Settings extends Component {

    state = {
        form: {
            oldPassword: {
                elementType: 'input',
                elementConfig: {
                    icon: 'ios-lock',
                    rounded: true,
                    placeholder: 'Old Password',
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
            newPassword: {
                elementType: 'input',
                elementConfig: {
                    icon: 'ios-lock',
                    rounded: true,
                    placeholder: 'New Password',
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
                    relatedTo: 'confirmPassword'
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    icon: 'ios-lock',
                    rounded: true,
                    placeholder: 'Confirm Password',
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
                    isEqualToField: 'newPassword'
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
        alert(this.state.formValidity)
        return (
            <Drawer ref={(ref) => this.drawer = ref}>
                <Header
                    heading="Settings"
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
                                <Text style={styles.header}>Language</Text>
                                <RadioButtons choices={
                                    [{
                                        displayText: 'English',
                                        value: 'english'
                                    }, {
                                        displayText: 'Arabic',
                                        value: 'Arabic'
                                    }]
                                } default={'english'} />

                                <Text style={styles.header}>Notification</Text>
                                <RadioButtons choices={
                                    [{
                                        displayText: 'ON',
                                        value: '1'
                                    }, {
                                        displayText: 'OFF',
                                        value: '0'
                                    }]
                                } default={'1'} />

                                <Text style={styles.header}>Change Password</Text>
                                <FormBuilder
                                    form={this.state.form}
                                    formValidityChanged={this.formValidityChanged}
                                    saveFormValues={this.setFormValues}></FormBuilder>
                                <Button rounded style={styles.Button} disabled={!this.state.formValidity} onPress={this.onSubmit}>
                                    <Text style={styles.ButtonText}>Save</Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Drawer>
        );
    }
}

export default Settings;