import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native';
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffcf11',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative'
    },
    formContainer: {
        display: 'flex',
        backgroundColor: 'white',
        width: '90%',
        position: 'relative',
        left: '5%',
        padding: 20,
        borderRadius: 5
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    Button: {
        backgroundColor: '#ffcf11',
        width: '50%',
        marginTop: 10,
        alignSelf: 'center',
        height: responsiveHeight(5),
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

class NewClientForm extends Component {
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
                        height: responsiveHeight(6)
                    },
                    rootWrapperStyle: {
                        width: '100%',
                        marginBottom: 5,
                        height: responsiveHeight(6)
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
                        height: responsiveHeight(6)
                    },
                    rootWrapperStyle: {
                        width: '100%',
                        marginBottom: 5,
                        height: responsiveHeight(6)
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
            whatsapp: {
                elementType: 'input',
                elementConfig: {
                    icon: 'whatsapp',
                    iconType: 'FontAwesome',
                    rounded: true,
                    placeholder: 'Whatsapp',
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
                        marginBottom: 5,
                        height: responsiveHeight(6)

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
                        height: responsiveHeight(6)

                    },
                    rootWrapperStyle: {
                        width: '50%',
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
                        width: '50%',
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
                        width: '50%',
                        height: responsiveHeight(6),
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
                        height: responsiveHeight(6)

                    },
                    rootWrapperStyle: {
                        width: '50%',
                        height: responsiveHeight(6),
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
                        height: responsiveHeight(6)

                    },
                    rootWrapperStyle: {
                        width: '100%',
                        height: responsiveHeight(6),
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
                heading="Add New Client"
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
                            <View style={styles.formContainer}>
                                <Icon style={{
                                    textAlign: 'center',
                                    fontSize: 40
                                }} type="FontAwesome5" name="user-edit" />
                                <FormBuilder
                                    form={this.state.form}
                                    formValidityChanged={(e) => this.formValidityChanged(e, 1)}
                                    saveFormValues={(e) => this.setFormValues(e, 1)}></FormBuilder>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 50,
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
                                <Button rounded style={styles.Button} disabled={!this.state.formValidity || !this.state.form2Validity} onPress={this.onSubmit}>
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

export default NewClientForm;