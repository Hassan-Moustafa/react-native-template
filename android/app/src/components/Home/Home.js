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
                    Hello From Home
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
            </View>
        );
    }
}

export default Home;