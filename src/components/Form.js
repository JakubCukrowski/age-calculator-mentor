import React from "react";
import { DateForm } from "../styles/Form.styles";
import { StyledInput } from "../styles/Input.style";
import { StyledLabel } from "../styles/Label.style";
import { InputContainer } from "../styles/InputContainer.style";

export const Form = ({handleInputs, errors}) => {

    return (
        <DateForm>
            <InputContainer>
                <StyledLabel htmlFor="day">DAY</StyledLabel>
                <StyledInput onChange={handleInputs} type="number" id="day" name="day"/>
            </InputContainer>
            <InputContainer>
                <StyledLabel htmlFor="month">MONTH</StyledLabel>
                <StyledInput onChange={handleInputs} type="number" id="month" name="month"/>
            </InputContainer>
            <InputContainer>
                <StyledLabel htmlFor="year">YEAR</StyledLabel>
                <StyledInput onChange={handleInputs} type="number" id="year" name="year"/>
            </InputContainer>
        </DateForm>
    )
}