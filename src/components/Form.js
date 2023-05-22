import React from "react";
import { DateForm } from "../styles/Form.styles";
import { StyledInput } from "../styles/Input.style";
import { StyledLabel } from "../styles/Label.style";
import { InputContainer } from "../styles/InputContainer.style";
import { ErrorText } from "../styles/Error.span.style";

export const Form = ({handleInputs, errors, inputFields, lastMonthDay, currentDate}) => {
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
                {errors.dayError === true && inputFields.day > lastMonthDay.getDate()
                ? <ErrorText>Must be a valid date</ErrorText> 
                : null}
                {errors.yearError === true && inputFields.day < 0 ? <ErrorText>Not valid</ErrorText> : null}
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
                {errors.monthError === true && inputFields.month > 12 ? <ErrorText>Must be a valid month</ErrorText> : null}
                {errors.yearError === true && inputFields.month < 0 ? <ErrorText>Not valid</ErrorText> : null}
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
                {errors.yearError === true && inputFields.year > currentDate.getFullYear() 
                ? <ErrorText>Must be in the past</ErrorText> : null}
                {errors.yearError === true && inputFields.year < 0 ? <ErrorText>Not valid</ErrorText> : null}
            </InputContainer>
        </DateForm>
    )
}