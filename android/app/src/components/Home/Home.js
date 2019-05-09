import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native'
import {
    View,
    Button
} from 'native-base';
import InputComponent from '../Input/Input';

class Home extends Component {
    state = {};

    render() {
        return (
            <View>
                <Text>
                    Hello From Home 2
                </Text>
                <Button
                    onPress={() => this.props.history.push('/Signup')}
                >
                    <Text>
                        Go to Signup ......
                </Text>
                </Button>
                <Button
                    onPress={() => this.props.history.push('/Signin')}
                >
                    <Text>
                        Go to Signin ......
                </Text>
                </Button>
                <Button
                    onPress={() => this.props.history.push('/NewClient')}
                >
                    <Text>
                        Go to New client ......
                </Text>
                </Button>
                <Button
                    onPress={() => this.props.history.push('/DeliveryRequest')}
                >
                    <Text>
                        Go to Delivery request ......
                </Text>
                </Button>
                <Button
                    onPress={() => this.props.history.push('/NewDeliveryRequest')}
                >
                    <Text>
                        Go to New Delivery request ......
                </Text>
                </Button>
            </View>
        );
    }
}

export default Home;