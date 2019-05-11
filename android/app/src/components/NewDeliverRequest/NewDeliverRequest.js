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
    Button: {
        backgroundColor: '#ffcf11',
        width: '48%',
        marginTop: 10,
        // alignSelf: 'center'
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

class NewDeliveryRequest extends Component {
    state = {
        form: {
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
        console.log('submitted data ', this.state.formValues);
    }

    render() {
        console.log('new client')
        return (
            <View style={styles.container}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    color: 'black'
                }}>New delivery request</Text>
                <View style={styles.formContainer}>
                    <FormBuilder
                        form={this.state.form}
                        formValidityChanged={this.formValidityChanged}
                        saveFormValues={this.setFormValues}></FormBuilder>
                    <View style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Button rounded style={styles.Button}>
                            <Text style={styles.ButtonText}>
                                Edit
                            </Text>
                        </Button>
                        <Button rounded style={styles.Button} disabled={!this.state.formValidity} onPress={this.onSubmit}>
                            <Text style={styles.ButtonText}>
                                Confirm
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

export default NewDeliveryRequest;