import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native'
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
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    message:{
        width: '90%',
        backgroundColor: 'white',
        position: 'relative',
        left: '5%',
        padding: 30,
        color: 'black',
        borderRadius: 10,
        marginTop: 15
    }
})

class SuccessScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.header}>Pending Review</Text>
                <View style={styles.message}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 17
                    }}>Your account has been created successfully and now in review</Text>
                </View>

            </View>
        );
    }
}

export default SuccessScreen;