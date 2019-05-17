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
        // let schema = JSON.parse(JSON.stringify(this.state.formSchema))
        // console.log('first ' + field + " " + value  ,schema)


        // let fieldObj = JSON.parse(JSON.stringify(schema[field]))

        let fieldObj = { ...schema[field] }

        fieldObj.elementConfig[fieldObj.elementConfig.fieldValueName] = value;
        // console.log(value , fieldObj.validationRules)
        let validation = this.checkFieldValidity(value, fieldObj.validationRules,field);
        fieldObj.valid = validation.isValid;
        fieldObj.validationMsg = validation.validationMsg;
        // console.log(fieldObj.valid)
        fieldObj.touched = true;
        
        
        schema[field] = { ... fieldObj}
        if (fieldObj.validationRules.relatedTo) {
            let validation = this.checkFieldValidity(
                schema[fieldObj.validationRules.relatedTo].elementConfig.value ,
                schema[fieldObj.validationRules.relatedTo].validationRules,
                fieldObj.validationRules.relatedTo
            );
            schema[fieldObj.validationRules.relatedTo].valid = validation.isValid;
            schema[fieldObj.validationRules.relatedTo].validationMsg = validation.validationMsg;
            schema[fieldObj.validationRules.relatedTo].touched = true;
                
        }
        let formValidity = this.setFormValidity(schema);
        
        if (formValidity) {
            let formValues = this.collectFormValues()
            this.props.saveFormValues(formValues);
        }
        this.props.formValidityChanged(formValidity);
        this.setState({
            formSchema: schema,
            formValidity
        });
        // newPassword relatedTO confirmPassword
        // if (fieldObj.validationRules.relatedTo) {
        //     // this.fieldOnChangeHandler(new String(schema[fieldObj.validationRules.relatedTo].elementConfig.value) , fieldObj.validationRules.relatedTo)
        // }
    }

    checkFieldValidity(value, rules, fieldName) {
        let isValid = true;
        let validationMsg = null;
        if (!rules) {
            return isValid;
        }
        if (rules.isRequired) {
            isValid = (value.trim() !== '') && isValid;
            validationMsg = !isValid ?  `${fieldName} is required` : null;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
            validationMsg = !isValid ?  `${fieldName} min length is ${rules.minLength}` : null;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
            validationMsg = !isValid ?  `${fieldName} max length is ${rules.maxLength}` : null;
        }
        if (rules.isNumber) {
            isValid = /^[0-9]*$/.test(value) && isValid;
            validationMsg = !isValid ?  `${fieldName} must be a valid number` : null;
        }
        if (rules.isMoney) {
            isValid = /^([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,6})?)$/.test(value) && isValid;
            validationMsg = !isValid ?  `${fieldName} must be a valid price` : null;
        }
        if (rules.isEqualToField) {
            isValid = this.state.formSchema[rules.isEqualToField].elementConfig.value === value && isValid;
            validationMsg = !isValid ?  `${fieldName} must be equal to ${rules.isEqualToField}` : null;
        }

        return {isValid,validationMsg}
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
                    touched={this.state.formSchema[field].touched}
                    validationMsg={this.state.formSchema[field].validationMsg}
                    >
                </InputComponent>
            )
        })
        return (
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {formComponents}
            </View>
        );
    }
}

export default Home;