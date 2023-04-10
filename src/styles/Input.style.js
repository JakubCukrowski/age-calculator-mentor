import styled from "styled-components";

export const StyledInput = styled.input`
    border: 0.25px solid hsl(0, 0%, 86%);
    border-radius: 0.3em;
    width: 90%;
    height: 46px;
    margin-top: 0.4em;
    padding-left: 0.8em;
    font-size: 18px;
    font-weight: 800;

    &.error {
        border: 0.25px solid tomato;
    }

    &:focus {
        border: 0.25px solid hsl(259, 100%, 65%);
    }
`