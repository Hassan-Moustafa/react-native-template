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
} from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


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
        this.state = {
            secureTextEntry: this.props.elementConfig.secureTextEntry ? this.props.elementConfig.secureTextEntry : false
        }


    }
    render() {

        let $styles = [
            this.props.touched && !this.props.valid ? styles.notValid : null,
            this.props.elementConfig.wrapperStyle,
            {
                marginTop: responsiveHeight(0.5),
                fontSize: responsiveFontSize(1.8)
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
                            secureTextEntry={this.state.secureTextEntry}
                            style={{ width: '100%', fontSize: responsiveFontSize(1.8) }}
                            onChangeText={(text) => this.props.onChangeHandler(text)} />
                        {this.props.elementConfig.secureTextEntry ?
                            
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: 7
                            }}>
                                <Icon style={{
                                    fontSize: 20
                                }} type="EvilIcons" name="eye" />
                                <Text
                                    style={{
                                        fontSize: 15,
                                    }}
                                    onPress={() => this.setState((prevState) => {
                                        return {
                                            secureTextEntry: !prevState.secureTextEntry
                                        }
                                    })}> show</Text></View> : null}

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
            <View style={[this.props.elementConfig.rootWrapperStyle, { height: this.props.validationMsg ? responsiveHeight(10) : responsiveHeight(6) }]}>
                {this.$InputComponent}
                {this.props.validationMsg !== null ? <Text style={{ marginLeft: 10, color: 'red', fontSize: 15 }}>{this.props.validationMsg}</Text> : null}
            </View>
        );
    }
}

export default InputComponent;