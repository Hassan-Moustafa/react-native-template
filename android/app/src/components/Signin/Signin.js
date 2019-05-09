import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet ,Image} from 'react-native'
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
        width: '100%',
        marginTop: 10
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

class Signin extends Component {
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
                    },
                    rootWrapperStyle:{
                        width: '100%'
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
                    style: {
                    },
                    wrapperStyle: {
                        backgroundColor: '#cecece',
                    },
                    rootWrapperStyle:{
                        width: '100%'
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
        console.log('signin')
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={{ width: '50%', height: 200, position: 'relative', left: '25%' }}
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
                    <View>
                        <Text style={styles.header}>Sign in</Text>
                        <Text>to get started</Text>
                    </View>
                    <FormBuilder
                        form={this.state.form}
                        formValidityChanged={this.formValidityChanged}
                        saveFormValues={this.setFormValues}></FormBuilder>
                    <Button rounded style={styles.Button} disabled={!this.state.formValidity} onPress={this.onSubmit}>
                        <Text style={styles.ButtonText}>Sign In</Text>
                    </Button>
                    <Text style={{
                        textAlign: 'center',
                        color: 'black',
                        marginTop: 5
                    }}>Forget your password?</Text>
                </View>
                <Text style={{
                    textAlign: 'center',
                    color: 'black',
                    marginTop: 5
                }}>Don't have an account? <Text style={{
                    fontWeight: 'bold'
                }}>Sign Up</Text></Text>
            </View>
        );
    }
}

export default Signin;