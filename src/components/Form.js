import React from "react";
import { DateForm } from "../styles/Form.styles";
import { StyledInput } from "../styles/Input.style";
import { StyledLabel } from "../styles/Label.style";
import { InputContainer } from "../styles/InputContainer.style";

export const Form = () => {
    return (
        <DateForm>
            <InputContainer>
                <StyledLabel htmlFor="">DAY</StyledLabel>
                <StyledInput type="number" />
            </InputContainer>
            <InputContainer>
                <StyledLabel htmlFor="">MONTH</StyledLabel>
                <StyledInput type="number" />
            </InputContainer>
            <InputContainer>
                <StyledLabel htmlFor="">YEAR</StyledLabel>
                <StyledInput type="number" />
            </InputContainer>
        </DateForm>
    )
}