import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { Text, Icon, Button } from "native-base";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export default class RadioButtons extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedValue: this.props.default ? this.props.default : ''
        }

    }

    setCurrentValue = (value) => {
        this.setState({
            selectedValue: value
        });

    }


    render() {
        let radioButtons = this.props.choices.map((item) => {
            return (
                <TouchableWithoutFeedback onPress={() => this.setCurrentValue(item.value)}>
                    <View style={styles.radioButton}>
                        <Text style={styles.choiceText}>{item.displayText}</Text>
                        {this.state.selectedValue === item.value ?
                            <Icon style={{
                                fontSize: 20
                            }} type="Entypo" name="check" />
                            : null}
                    </View>
                </TouchableWithoutFeedback>
            )
        })

        return (
            <View>
                {radioButtons}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    radioButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#cecece',
        padding: 10,
        margin: 5,
        borderRadius: 30
    },
    choiceText: {
        fontSize: responsiveFontSize(2)
    }

})