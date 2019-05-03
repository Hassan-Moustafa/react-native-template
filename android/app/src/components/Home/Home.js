import React, { Component } from 'react';
import {Text,ScrollView} from 'react-native'
import {View ,
Button
} from 'native-base'
class Home extends Component {
    state = {  };

    render() {
        return (
            <View>
                <Text>
                    Hello From Home
                </Text>
                <Button
                onPress={()=>this.props.history.push('/Map')}
                >
                <Text>
                Go to map
                </Text>
                </Button>
            </View>
        );
    }
}

export default Home;