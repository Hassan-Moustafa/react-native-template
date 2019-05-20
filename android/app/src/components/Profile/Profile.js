import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image, BackHandler } from 'react-native';
import addressIcon from '../../main/Images/address.png';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import {
    View,
    Button,
    Icon
} from 'native-base';
import FormBuilder from '../FormBuilder/FormBuilder';
import Header from '../common/common/Header';
import Drawer from '../common/common/Drawer';
import Tab from '../common/common/Tab';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
        position: 'relative',

    },
    formContainer: {
        display: 'flex',
        backgroundColor: 'white',
        width: '90%',
        position: 'relative',
        left: '5%',
        padding: 20,
        borderRadius: 5,
    },
    header: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'black'
    },
    Button: {
        backgroundColor: '#ffcf11',
        width: '50%',
        marginTop: 30,
        alignSelf: 'center',
        height: responsiveHeight(5.2),
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

class Profile extends Component {
    state = {
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
                        height: responsiveHeight(5.2)
                    },
                    rootWrapperStyle: {
                        width: '100%',
                        marginBottom: 5,
                        height: responsiveHeight(5.2)
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
                        height: responsiveHeight(5.2)
                    },
                    rootWrapperStyle: {
                        width: '100%',
                        marginBottom: 5,
                        height: responsiveHeight(5.2)
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
            email: {
                elementType: 'input',
                elementConfig: {
                    icon: 'email',
                    iconType: 'Zocial',
                    rounded: true,
                    placeholder: 'Email',
                    value: '',
                    fieldValueName: 'value',
                    style: {
                    },
                    wrapperStyle: {
                        backgroundColor: '#cecece',
                        height: responsiveHeight(5.2)

                    },
                    rootWrapperStyle: {
                        width: '100%',
                        marginBottom: 5,
                        height: responsiveHeight(5.2)

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
        form2: {
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
                        height: responsiveHeight(5.2)

                    },
                    rootWrapperStyle: {
                        width: '50%',
                        height: responsiveHeight(5.2),
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
                        height: responsiveHeight(5.2)

                    },
                    rootWrapperStyle: {
                        width: '50%',
                        height: responsiveHeight(5.2),
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
                        height: responsiveHeight(5.2)

                    },
                    rootWrapperStyle: {
                        width: '50%',
                        height: responsiveHeight(5.2),
                        marginBottom: 5


                    }
                },
                validationRules: {
                    isRequired: false,
                },
                valid: true,
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
                        height: responsiveHeight(5.2)

                    },
                    rootWrapperStyle: {
                        width: '50%',
                        height: responsiveHeight(5.2),
                        marginBottom: 5


                    }
                },
                validationRules: {
                    isRequired: false,
                },
                valid: true,
                touched: false
            },
            house: {
                elementType: 'input',
                elementConfig: {
                    icon: 'ios-navigate',
                    rounded: true,
                    placeholder: 'House',
                    value: '',
                    fieldValueName: 'value',
                    style: {
                    },
                    wrapperStyle: {
                        backgroundColor: '#cecece',
                        height: responsiveHeight(5.2)

                    },
                    rootWrapperStyle: {
                        width: '100%',
                        height: responsiveHeight(5.2),
                        marginBottom: 5
                    }
                },
                validationRules: {
                    isRequired: false,
                },
                valid: true,
                touched: false
            }
        },
        form2Validity: false,
        form2Values: {},
    };

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

    formValidityChanged = (value, formNumber) => {
        if (formNumber === 1) {
            this.setState({
                formValidity: value
            })
        } else if (formNumber === 2) {
            this.setState({
                form2Validity: value
            })
        }
    }

    setFormValues = (values, formNumber) => {
        if (formNumber === 1) {
            this.setState({
                formValues: values
            })
        } else if (formNumber === 2) {
            this.setState({
                form2Values: values
            })
        }
    }

    onSubmit = () => {
        console.log('submitted data ', {
            ... this.state.formValues,
            ... this.state.form2Values
        });
    }

    render() {
        return (
            <Drawer ref={(ref) => this.drawer = ref}>
                <Header
                    heading="Profile"
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
                            <View style={styles.formContainer}>
                                <Icon style={{
                                    textAlign: 'center',
                                    fontSize: responsiveFontSize(5)
                                }} type="FontAwesome5" name="user-edit" />
                                <FormBuilder
                                    form={this.state.form}
                                    formValidityChanged={(e) => this.formValidityChanged(e, 1)}
                                    saveFormValues={(e) => this.setFormValues(e, 1)}></FormBuilder>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: responsiveHeight(5),
                                    marginBottom: 5
                                }}>
                                    <Image source={addressIcon} style={{
                                        width: '20%',
                                        height: '100%'
                                    }} resizeMode='contain' />
                                    <Text style={[styles.header, { width: '50%' }]}>Address</Text>
                                </View>
                                <FormBuilder
                                    form={this.state.form2}
                                    formValidityChanged={(e) => this.formValidityChanged(e, 2)}
                                    saveFormValues={(e) => this.setFormValues(e, 2)}></FormBuilder>
                                <Button style={styles.Button} disabled={!this.state.formValidity || !this.state.form2Validity} onPress={this.onSubmit}>
                                    <Text style={styles.ButtonText}>
                                        Save
                        </Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <Tab />
            </Drawer>
        );
    }
}

export default Profile;