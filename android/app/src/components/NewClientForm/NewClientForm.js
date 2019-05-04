import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native'
import {
    View,
    Button
} from 'native-base';
import FormBuilder from '../FormBuilder/FormBuilder';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffcf11',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
    },
    formContainer: {
        display: 'flex',
        backgroundColor: 'white',
        width: '80%',
        position: 'relative',
        left: '10%',
        padding: 20,
        borderRadius: 5
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    Button:{
        backgroundColor: '#ffcf11',
        width: '70%',
        marginTop: 10,
        alignSelf: 'center'
    },
    ButtonText:{
        position: 'relative',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        width:'100%',
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
                        borderRadius: 30
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
                        borderRadius: 30
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
            address: {
                elementType: 'input',
                elementConfig: {
                    icon: 'ios-navigate',
                    rounded: true,
                    placeholder: 'Address',
                    value: '',
                    fieldValueName: 'value',
                    style: {
                    },
                    wrapperStyle: {
                        backgroundColor: '#cecece',
                    }
                },
                validationRules: {
                    isRequired: true,
                },
                valid: false,
                touched: false
            },
            address2: {
                elementType: 'input',
                elementConfig: {
                    icon: 'ios-navigate',
                    rounded: true,
                    placeholder: 'Address 2',
                    value: '',
                    fieldValueName: 'value',
                    style: {
                    },
                    wrapperStyle: {
                        backgroundColor: '#cecece',
                    }
                },
                validationRules: {
                    isRequired: false,
                },
                valid: true,
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
                        paddingLeft:10
                    }
                },
                validationRules: {
                    isRequired: true,
                },
                valid: true,
                touched: true
            },
        },
        formValidity: false,
        formValues: {}
    };

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
        console.log('submitted data ' , this.state.formValues);
    }

    render() {
        console.log('new client')
        return (
            <View style={styles.container}>
            <ScrollView>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    color: 'black'
                }}>Add new client</Text>
                <View style={styles.formContainer}>
                    <FormBuilder 
                        form={this.state.form}
                        formValidityChanged = {this.formValidityChanged}
                        saveFormValues={this.setFormValues}></FormBuilder>
                    <Button rounded style={styles.Button} disabled={!this.state.formValidity} onPress={this.onSubmit}>
                        <Text style={styles.ButtonText}>
                            Save
                        </Text>
                    </Button>
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default NewClientForm;