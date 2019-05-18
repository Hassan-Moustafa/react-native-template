import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import {
    View,
    Button,
    Item,
    Input,
    Textarea,
    Icon,
    Picker,
    CheckBox,
    Text,
    Body,
    Radio,
    DatePicker
} from 'native-base'

const styles = StyleSheet.create({
    notValid: {
        borderColor: 'red',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    }
})

class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.InputType = this.props.InputType;
        this.$InputComponent = null;


    }
    render() {

        let $styles = [
            this.props.touched && !this.props.valid ? styles.notValid : null,
            this.props.elementConfig.wrapperStyle,
            {
                marginTop: 10
            }
        ]
        switch (this.InputType) {
            case 'input':
                this.$InputComponent = (
                    <Item
                        rounded={this.props.elementConfig.rounded ? this.props.elementConfig.rounded : false}
                        style={$styles}>
                        {
                            this.props.elementConfig.icon
                                ? <Icon active name={this.props.elementConfig.icon} type={this.props.elementConfig.iconType} />
                                : null
                        }
                        <Input
                            {... this.props.elementConfig}
                            onChangeText={(text) => this.props.onChangeHandler(text)} />
                    </Item>
                )
                break;
            case 'textarea':
                this.$InputComponent = (
                    <Textarea
                        {...this.props.elementConfig}
                        onChangeText={(text) => this.props.onChangeHandler(text)} />
                )
                break;
            case 'menu':
                this.$InputComponent = (
                    <Item picker style={$styles}>
                        {
                            this.props.elementConfig.icon
                                ? <Icon active name={this.props.elementConfig.icon} type={this.props.elementConfig.iconType} />
                                : null
                        }
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            {...this.props.elementConfig}
                            onValueChange={(value) => this.props.onChangeHandler(value)}
                        >
                            {
                                this.props.elementConfig.options ?
                                    this.props.elementConfig.options.map((option) => {
                                        return (
                                            <Picker.Item
                                                label={option.displayValue}
                                                value={option.value} />
                                        )
                                    }) : null
                            }

                        </Picker>
                    </Item>
                )
                break;
            case 'checkbox':
                this.$InputComponent = (
                    <View>
                        <CheckBox
                            {...this.props.elementConfig}
                            onPress={() => this.props.onChangeHandler(!this.props.elementConfig.value)} />
                        <Text>{this.props.elementConfig.displayValue}</Text>
                    </View>
                )
                break;
            case 'radio':
                this.$InputComponent = (
                    <View>
                        <Text>{this.props.elementConfig.displayValue}</Text>
                        <Radio {...this.props.elementConfig} />
                    </View>
                )
                break;
            case 'date':
                this.$InputComponent = (
                    <View>
                        <DatePicker
                            {...this.props.elementConfig}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={(date) => this.props.onChangeHandler(date)}
                            disabled={false}
                        />
                    </View>
                )
                break;
            default:
                break;
        }
        return (
            <View style={this.props.elementConfig.rootWrapperStyle}>
                {this.$InputComponent}
            </View>
        );
    }
}

export default InputComponent;