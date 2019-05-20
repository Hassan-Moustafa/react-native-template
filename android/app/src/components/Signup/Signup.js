import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image, BackHandler } from 'react-native'
import {
    View,
    Button
} from 'native-base';
import FormBuilder from '../FormBuilder/FormBuilder';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { withRouter } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1
    },
    formContainer: {
        display: 'flex',
        backgroundColor: 'white',
        width: '90%',
        position: 'relative',
        left: '5%',
        padding: 20,
        borderRadius: 5,
        marginBottom: 30,
        // top: -20
    },
    header: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'black'
    },
    Button: {
        backgroundColor: '#ffcf11',
        width: '40%',
        marginTop: 30,
        height: responsiveHeight(5),
        alignSelf: 'center',
        borderRadius: 15
    },
    ButtonText: {
        position: 'relative',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2),
        color: 'black',
        width: '100%',
        textAlign: 'center'
    }
})

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            form: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        icon: 'person',
                        rounded: true,
                        placeholder: 'Name',
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
                mobile: {
                    elementType: 'input',
                    elementConfig: {
                        icon: 'ios-call',
                        rounded: true,
                        placeholder: 'Mobile',
                        value: '',
                        fieldValueName: 'value',
                        style: {
                        },
                        wrapperStyle: {
                            backgroundColor: '#cecece',
                            borderRadius: 30,
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
                        minLength: 11,
                        maxLength: 11,
                        isNumber: true
                    },
                    valid: false,
                    touched: false
                },
                region: {
                    elementType: 'menu',
                    elementConfig: {
                        icon: 'location-pin',
                        iconType: 'Entypo',
                        rounded: true,
                        placeholder: 'Region',
                        value: '',
                        selectedValue: 'cairo',
                        fieldValueName: 'selectedValue',
                        options: [
                            { displayValue: 'cairo', value: 'cairo' },
                            { displayValue: 'giza', value: 'giza' },
                        ],
                        style: {
                        },
                        wrapperStyle: {
                            backgroundColor: '#cecece',
                            borderRadius: 30,
                            paddingLeft: 10,
                            height: responsiveHeight(6)
                        },
                        rootWrapperStyle: {
                            width: '55%',
                            height: responsiveHeight(6),
                            marginBottom: 5
                        }
                    },
                    validationRules: {
                        isRequired: true,
                    },
                    valid: true,
                    touched: true
                },
                district: {
                    elementType: 'input',
                    elementConfig: {
                        icon: 'ios-navigate',
                        rounded: true,
                        placeholder: 'القطعة',
                        value: '',
                        fieldValueName: 'value',
                        style: {
                        },
                        wrapperStyle: {
                            backgroundColor: '#cecece',
                            height: responsiveHeight(6)
    
                        },
                        rootWrapperStyle: {
                            width: '45%',
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
                street: {
                    elementType: 'input',
                    elementConfig: {
                        icon: 'ios-navigate',
                        rounded: true,
                        placeholder: 'street',
                        value: '',
                        fieldValueName: 'value',
                        style: {
                        },
                        wrapperStyle: {
                            backgroundColor: '#cecece',
                            height: responsiveHeight(6)
    
                        },
                        rootWrapperStyle: {
                            width: '55%',
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
                jada: {
                    elementType: 'input',
                    elementConfig: {
                        icon: 'ios-navigate',
                        rounded: true,
                        placeholder: 'الجادة',
                        value: '',
                        fieldValueName: 'value',
                        style: {
                        },
                        wrapperStyle: {
                            backgroundColor: '#cecece',
                            height: responsiveHeight(6)
                        },
                        rootWrapperStyle: {
                            width: '45%',
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
                password: {
                    elementType: 'input',
                    elementConfig: {
                        icon: 'ios-lock',
                        rounded: true,
                        placeholder: 'Password',
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
            formValues: {}
        };
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
        this.props.history.push('/SuccessScreen')
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress',this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.history.goBack();
        return true;
    }


    render() {
        console.log('signup')
        return (
            <View style={styles.container}>
                <View>
                    <ScrollView>
                        <View>
                            <Image
                                style={{ width: '50%', height: 150, position: 'relative', left: '25%' }}
                                source={require('../../../../../assets/Logo.png')}
                                resizeMode="contain" />
                            <Text style={[styles.header,
                            {
                                textAlign: 'center',
                                position: 'relative',
                                bottom: 10
                            }]}>Welcome</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={styles.header}>Sign up</Text>
                                    <Text>to get started</Text>
                                </View>
                                <View style={{
                                    marginTop: 7
                                }}>
                                    <Text>Have an account</Text>
                                    <Text onPress={() => this.props.history.push('/Signin')}>Sign in</Text>
                                </View>
                            </View>
                            <FormBuilder
                                form={this.state.form}
                                formValidityChanged={this.formValidityChanged}
                                saveFormValues={this.setFormValues}></FormBuilder>
                            <Button style={styles.Button} disabled={!this.state.formValidity} onPress={this.onSubmit}>
                                <Text style={styles.ButtonText}>Sign Up</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default withRouter(Signup);