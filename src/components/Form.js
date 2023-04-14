import React from "react";
import { DateForm } from "../styles/Form.styles";
import { StyledInput } from "../styles/Input.style";
import { StyledLabel } from "../styles/Label.style";
import { InputContainer } from "../styles/InputContainer.style";
import { ErrorText } from "../styles/Error.span.style";

export const Form = ({handleInputs, errors, inputFields, lastMonthDay}) => {

    return (
        <DateForm>
            <InputContainer>
                <StyledLabel htmlFor="day">DAY</StyledLabel>
                <StyledInput 
                className={errors.dayError ? "error" : null} 
                onChange={handleInputs} 
                type="number" 
                id="day" 
                name="day" 
                placeholder="DD"/>
                {errors.dayError === true && inputFields.day.length === 0 ? <ErrorText>This field is required</ErrorText> : null}
                {errors.dayError === true && inputFields.day.length === 0 ? <ErrorText>This field is required</ErrorText> : null}
            </InputContainer>
            <InputContainer>
                <StyledLabel htmlFor="month">MONTH</StyledLabel>
                <StyledInput 
                className={errors.monthError ? "error" : null} 
                onChange={handleInputs} 
                type="number" 
                id="month" 
                name="month" 
                placeholder="MM"/>
                {errors.monthError === true && inputFields.month.length === 0 ? <ErrorText>This field is required</ErrorText> : null}
            </InputContainer>
            <InputContainer>
                <StyledLabel htmlFor="year">YEAR</StyledLabel>
                <StyledInput 
                className={errors.yearError ? "error" : null} 
                onChange={handleInputs} 
                type="number" 
                id="year" 
                name="year" 
                placeholder="YYYY"/>
                {errors.yearError === true && inputFields.year.length === 0 ? <ErrorText>This field is required</ErrorText> : null}
            </InputContainer>
        </DateForm>
    )
}