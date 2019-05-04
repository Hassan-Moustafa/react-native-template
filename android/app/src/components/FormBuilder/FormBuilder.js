import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native'
import {
    View,
    Button
} from 'native-base';
import InputComponent from '../Input/Input';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formSchema: props.form,
            formValidity: false
        }
    }

    fieldOnChangeHandler = (value, field) => {
        let schema = { ... this.state.formSchema }
        let fieldObj = { ...schema[field] }
        
        fieldObj.elementConfig[fieldObj.elementConfig.fieldValueName] = value;
        fieldObj.valid = this.checkFieldValidity(value, fieldObj.validationRules);
        fieldObj.touched = true;

        schema[field] = { ...fieldObj }
        let formValidity = this.setFormValidity(schema);
        if (formValidity) {
            let formValues = this.collectFormValues()
            this.props.saveFormValues(formValues);
        }
        this.props.formValidityChanged(formValidity);
        this.setState({
            formSchema: schema,
            formValidity
        })
    }

    checkFieldValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return isValid;
        }
        if (rules.isRequired) {
            isValid = (value.trim() !== '') && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.minLength && isValid;
        }
        if (rules.isNumber) {
            isValid = /^[0-9]*$/.test(value) && isValid;
        }

        return isValid
    }

    setFormValidity(schema) {
        let fields = Object.keys(schema);
        for (let i = 0; i < fields.length; i++) {
            if (!schema[fields[i]].valid) {
                return false;
            }
        }
        return true;
    }

    collectFormValues = () => {

        let FormValues = {};
        let fields = Object.keys(this.state.formSchema);
        for (let i = 0; i < fields.length; i++) {
            FormValues[fields[i]] = this.state.formSchema[fields[i]].elementConfig[this.state.formSchema[fields[i]].elementConfig.fieldValueName];
        }
        return FormValues;
    }

    render() {

        let formFields = Object.keys(this.state.formSchema);
        let formComponents = formFields.map((field) => {
            return (
                <InputComponent
                    InputType={this.state.formSchema[field].elementType}
                    elementConfig={this.state.formSchema[field].elementConfig}
                    onChangeHandler={(value) => this.fieldOnChangeHandler(value, field)}
                    valid={this.state.formSchema[field].valid}
                    touched={this.state.formSchema[field].touched}>
                </InputComponent>
            )
        })
        return (
            <View>
                {formComponents}
            </View>
        );
    }
}

export default Home;